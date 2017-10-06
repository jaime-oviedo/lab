import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';
import { Geolocation } from '@ionic-native/geolocation';
import { CurrentLoc } from '../../interfaces/current-loc';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-weather',
    templateUrl: 'weather.html',
})
export class WeatherPage {
    theWeather: any = {};
    currentData: any = {};
    daily: any = {};
    loader: LoadingController;
    refresher: Refresher;
    currentLoc: CurrentLoc = { lat: 0, lon: 0 };
    pageTitle:String ='CurrentLocation';

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public weatherService: WeatherServiceProvider,
        public loadingCtrl: LoadingController,
        public geolocation: Geolocation) {
        let loader = this.loadingCtrl.create({
            content: "Loading weather data ...",
        });
        loader.present();
        let loc = this.navParams.get('geoloc');
        
        if (loc==null) {
            this.geolocation.getCurrentPosition().then(pos => {
                console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
                this.currentLoc.lat = pos.coords.latitude;
                this.currentLoc.lon = pos.coords.longitude;
                this.currentLoc.timestamp = pos.timestamp;
                return this.currentLoc;
            }).then(currentLoc => {
                this.weatherService.getWeather(currentLoc).then(theResult => {
                    this.theWeather = theResult;
                    this.currentData = this.theWeather.currently;
                    this.daily = this.theWeather.daily;
                    loader.dismiss();
                });
            });
        } else {
            this.currentLoc = loc;
            this.pageTitle= this.navParams.get('title');
            weatherService.getWeather(this.currentLoc).then(theResult => {
                this.theWeather = theResult;
                this.currentData = this.theWeather.currently;
                this.daily = this.theWeather.daily;
                loader.dismiss();
            });
        };
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad WeatherPage');
    }

    doRefresh(refresher) {
        this.weatherService.getWeather(this.currentLoc).then(theResult => {
            this.theWeather = theResult;
            this.currentData = this.theWeather.currently;
            this.daily= this.theWeather.daily;
            refresher.complete();
        });

    }
}
