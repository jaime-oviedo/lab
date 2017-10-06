webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weather_service_weather_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WeatherPage = (function () {
    function WeatherPage(navCtrl, navParams, weatherService, loadingCtrl, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.weatherService = weatherService;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.theWeather = {};
        this.currentData = {};
        this.daily = {};
        this.currentLoc = { lat: 0, lon: 0 };
        this.pageTitle = 'CurrentLocation';
        var loader = this.loadingCtrl.create({
            content: "Loading weather data ...",
        });
        loader.present();
        var loc = this.navParams.get('geoloc');
        if (loc == null) {
            this.geolocation.getCurrentPosition().then(function (pos) {
                console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
                _this.currentLoc.lat = pos.coords.latitude;
                _this.currentLoc.lon = pos.coords.longitude;
                _this.currentLoc.timestamp = pos.timestamp;
                return _this.currentLoc;
            }).then(function (currentLoc) {
                _this.weatherService.getWeather(currentLoc).then(function (theResult) {
                    _this.theWeather = theResult;
                    _this.currentData = _this.theWeather.currently;
                    _this.daily = _this.theWeather.daily;
                    loader.dismiss();
                });
            });
        }
        else {
            this.currentLoc = loc;
            this.pageTitle = this.navParams.get('title');
            weatherService.getWeather(this.currentLoc).then(function (theResult) {
                _this.theWeather = theResult;
                _this.currentData = _this.theWeather.currently;
                _this.daily = _this.theWeather.daily;
                loader.dismiss();
            });
        }
        ;
    }
    WeatherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WeatherPage');
    };
    WeatherPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.weatherService.getWeather(this.currentLoc).then(function (theResult) {
            _this.theWeather = theResult;
            _this.currentData = _this.theWeather.currently;
            _this.daily = _this.theWeather.daily;
            refresher.complete();
        });
    };
    return WeatherPage;
}());
WeatherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-weather',template:/*ion-inline-start:"D:\home\joviedo\Workspaces\AngularIDE\Ionic2Weather\src\pages\weather\weather.html"*/'<!--\n  Generated template for the WeatherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header> <ion-navbar>\n<button\n    ion-button\n    menuToggle\n>\n    <ion-icon name="menu"></ion-icon>\n</button>\n<ion-title>{{pageTitle}}</ion-title> </ion-navbar> </ion-header>\n<ion-content padding> \n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n      </ion-refresher-content>\n  </ion-refresher>\n<ion-grid *ngIf="daily.data != undefined">\n<ion-row> <ion-col col-12>\n<h1>{{currentData.temperature | number:\'.0-0\'}}&deg;</h1>\n<p>{{currentData.summary}}</p>\n</ion-col> </ion-row> <ion-row> <ion-col col-4> {{daily.data[0].temperatureMax |\nnumber:\'.0-0\'}}&deg;<br>\n{{daily.data[0].temperatureMin | number:\'.0-0\'}}&deg;<br>\n</ion-col> <ion-col col-4> {{daily.data[1].temperatureMax | number:\'.0-0\'}}&deg;<br>\n{{daily.data[1].temperatureMin | number:\'.0-0\'}}&deg;<br>\n</ion-col> <ion-col col-4> {{daily.data[2].temperatureMax | number:\'.0-0\'}}&deg;<br>\n{{daily.data[2].temperatureMin | number:\'.0-0\'}}&deg;<br>\n</ion-col> </ion-row> </ion-grid> </ion-content>\n'/*ion-inline-end:"D:\home\joviedo\Workspaces\AngularIDE\Ionic2Weather\src\pages\weather\weather.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
], WeatherPage);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_locations_service_locations_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocode_service_geocode_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_weather__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationsPage = (function () {
    function LocationsPage(navCtrl, navParams, locationsService, geocodeService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locationsService = locationsService;
        this.geocodeService = geocodeService;
        this.alertCtrl = alertCtrl;
        locationsService.getLocations().then(function (res) {
            _this.locs = res;
        });
    }
    LocationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationsPage');
    };
    LocationsPage.prototype.deleteLocation = function (loc) {
        this.locationsService.removeLocation(loc);
    };
    LocationsPage.prototype.addLocation = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add a city',
            message: "Enter the city's name",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'City name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (data.title != '') {
                            _this.geocodeService.getLatLong(data.title).then(function (res) {
                                var newLoc = { title: '', component: __WEBPACK_IMPORTED_MODULE_4__weather_weather__["a" /* WeatherPage */], icon: 'pin', loc: { lat: 0, lon: 0 } };
                                newLoc.title = res.name;
                                newLoc.loc.lat = res.location.latitude;
                                newLoc.loc.lon = res.location.longitude;
                                _this.locationsService.addLocation(newLoc);
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    return LocationsPage;
}());
LocationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-locations',template:/*ion-inline-start:"D:\home\joviedo\Workspaces\AngularIDE\Ionic2Weather\src\pages\locations\locations.html"*/'<!--\n  Generated template for the LocationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Edit Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button icon-left clear color="dark" item-left (click)="addLocation()">\n    <ion-icon name="add"></ion-icon>\n    Add City\n  </button>\n  <ion-list>\n    <ion-list-header>\n      My Locations\n    </ion-list-header>\n    <ion-item *ngFor="let loc of locs">\n      <button ion-button icon-left clear color="dark" (click)="deleteLocation(loc)">\n        <ion-icon name="trash"></ion-icon>\n      </button>{{loc.title}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\home\joviedo\Workspaces\AngularIDE\Ionic2Weather\src\pages\locations\locations.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_locations_service_locations_service__["a" /* LocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_locations_service_locations_service__["a" /* LocationsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_geocode_service_geocode_service__["a" /* GeocodeServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_geocode_service_geocode_service__["a" /* GeocodeServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], LocationsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/locations/locations.module": [
		268,
		1
	],
	"../pages/weather/weather.module": [
		267,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_weather_weather__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_locations_locations__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_weather_service_weather_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_geocode_service_geocode_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_locations_service_locations_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_weather_weather__["a" /* WeatherPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_locations_locations__["a" /* LocationsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_weather_weather__["a" /* WeatherPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_locations_locations__["a" /* LocationsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_geocode_service_geocode_service__["a" /* GeocodeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_locations_service_locations_service__["a" /* LocationsService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_weather_weather__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_locations_locations__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_weather_service_weather_service__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, weatherService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.weatherService = weatherService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_weather_weather__["a" /* WeatherPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Edit Locations', component: __WEBPACK_IMPORTED_MODULE_5__pages_locations_locations__["a" /* LocationsPage */], icon: 'create' },
            { title: 'Current Location', component: __WEBPACK_IMPORTED_MODULE_4__pages_weather_weather__["a" /* WeatherPage */], icon: 'pin' },
            {
                title: 'San Francisco, CA', component: __WEBPACK_IMPORTED_MODULE_4__pages_weather_weather__["a" /* WeatherPage */], icon: 'pin',
                loc: { lat: 37.7749, lon: -80.6077 }
            },
            {
                title: 'Concepción, CL', component: __WEBPACK_IMPORTED_MODULE_4__pages_weather_weather__["a" /* WeatherPage */], icon: 'pin',
                loc: { lat: -36.4622, lon: -73.0347 }
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our pl  ugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.hasOwnProperty('loc')) {
            this.nav.setRoot(page.component, { geoloc: page.loc, title: page.title });
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\home\joviedo\Workspaces\AngularIDE\Ionic2Weather\src\app\app.html"*/'<ion-menu  [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Ionic Weather</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n    <p><a href="https://darksky.net/poweredby/"> Powered by Dark Sky</a></p>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\home\joviedo\Workspaces\AngularIDE\Ionic2Weather\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GeocodeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeocodeServiceProvider = (function () {
    function GeocodeServiceProvider(http) {
        this.http = http;
        this.apikey = 'AIzaSyA70ruE2ck7hPMyohXdj0ScmPbSJciO9IQ';
        this.data = null;
    }
    GeocodeServiceProvider.prototype.getLatLong = function (address) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('https://maps.googleapis.com/maps/apis/geocode/json?address='
                + encodeURIComponent(address) + '&key=' + _this.apikey)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.status === "OK") {
                    resolve({
                        name: data.results[0].formatted_address, location: {
                            latitude: data.results[0].geometry.location.lat,
                            longitude: data.results[0].geometry.location.lng
                        }
                    });
                }
                else {
                    console.log(data);
                }
            });
        });
    };
    return GeocodeServiceProvider;
}());
GeocodeServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GeocodeServiceProvider);

var _a;
//# sourceMappingURL=geocode-service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_weather_weather__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationsService = (function () {
    function LocationsService() {
        this.locations = [
            {
                title: 'San Francisco, CA', component: __WEBPACK_IMPORTED_MODULE_1__pages_weather_weather__["a" /* WeatherPage */], icon: 'pin',
                loc: { lat: 37.7749, lon: -80.6077 }
            },
            {
                title: 'Concepción, CL', component: __WEBPACK_IMPORTED_MODULE_1__pages_weather_weather__["a" /* WeatherPage */], icon: 'pin',
                loc: { lat: -36.4622, lon: -73.0347 }
            }
        ];
    }
    LocationsService.prototype.getLocations = function () {
        return Promise.resolve(this.locations);
    };
    LocationsService.prototype.removeLocation = function (loc) {
        var index = this.locations.indexOf(loc);
        if (index != -1) {
            this.locations.splice(index, 1);
        }
    };
    LocationsService.prototype.addLocation = function (loc) {
        this.locations.push(loc);
    };
    return LocationsService;
}());
LocationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocationsService);

//# sourceMappingURL=locations-service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WeatherServiceProvider = (function () {
    function WeatherServiceProvider(http) {
        this.http = http;
        this.data = null;
        console.log('Hello WeatherServiceProvider Provider');
    }
    WeatherServiceProvider.prototype.load = function (currentLoc) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('/api/forecast/' + currentLoc.lat + ',' + currentLoc.lon)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    WeatherServiceProvider.prototype.getWeather = function (currentLoc) {
        this.data = null;
        return this.load(currentLoc).then(function (data) {
            return data;
        });
    };
    return WeatherServiceProvider;
}());
WeatherServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], WeatherServiceProvider);

//# sourceMappingURL=weather-service.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map