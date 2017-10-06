import { Injectable } from '@angular/core';
import { WeatherLocation } from '../../interfaces/weather-location';
import { WeatherPage } from '../../pages/weather/weather';

@Injectable()
export class LocationsService {
    locations: Array<WeatherLocation>;

    constructor() {
        this.locations = [
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

    getLocations(){
        return Promise.resolve(this.locations);
    }

    removeLocation(loc:WeatherLocation){
        let index= this.locations.indexOf(loc);
        if(index!=-1){
            this.locations.splice(index,1);
        }
    }

    addLocation(loc: WeatherLocation){
        this.locations.push(loc);
    }
}
