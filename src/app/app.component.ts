import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WeatherPage } from '../pages/weather/weather';
import { LocationsPage } from '../pages/locations/locations';

import { WeatherServiceProvider } from '../providers/weather-service/weather-service';
import { CurrentLoc } from '../interfaces/current-loc'

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WeatherPage;

    pages: Array<{ title: string, component: any, icon: string, loc?: CurrentLoc }>;

    constructor(public platform: Platform, public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public weatherService: WeatherServiceProvider) {

        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Edit Locations', component: LocationsPage, icon: 'create' },
            { title: 'Current Location', component: WeatherPage, icon: 'pin' },
            {
                title: 'San Francisco, CA', component: WeatherPage, icon: 'pin',
                loc: { lat: 37.7749, lon: -80.6077 }
            },
            {
                title: 'Concepción, CL', component: WeatherPage, icon: 'pin',
                loc: { lat: -36.4622, lon: -73.0347 }
            }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our pl  ugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.hasOwnProperty('loc')) {
            this.nav.setRoot(page.component, { geoloc: page.loc, title: page.title });
        } else {
            this.nav.setRoot(page.component);
        }
    }
}
