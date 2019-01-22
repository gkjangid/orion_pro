webpackJsonp([13],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var declarations = [
    __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
];
var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: declarations.slice(),
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
        entryComponents: declarations.slice(),
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TabList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_activities_activities__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_learning_journal_learning_journal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_my_activities_my_activities__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabList = [
    { title: 'My Activities', icon: 'ios-home', component: __WEBPACK_IMPORTED_MODULE_6__tabs_my_activities_my_activities__["a" /* MyActivitiesComponent */] },
    { title: 'Activities', icon: 'ios-apps', component: __WEBPACK_IMPORTED_MODULE_4__tabs_activities_activities__["a" /* ActivitiesComponent */] },
    { title: 'Journals', icon: 'ios-book', component: __WEBPACK_IMPORTED_MODULE_5__tabs_learning_journal_learning_journal__["a" /* LearningJournalComponent */] },
];
var HomePage = (function () {
    function HomePage(api, navCtrl, settings) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.showLogo = true;
        this.showTabs = false;
        this.tabs = TabList;
        this.api;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!this.settings.user.userId) {
            setTimeout(function () {
                _this.navCtrl.push('LoginPage');
                return;
            }, 1500);
        }
        if (this.navCtrl.parent !== null) {
            this.showTabs = false;
            window.location.reload();
            return;
        }
        this.content.resize();
        this.showTabs = true;
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/home/home.html"*/'<ion-content>\n\n    <div text-center class=\'vertical-middle\' *ngIf=\'!settings.user.userId\'>\n        <div class=\'spinner-div\'><ion-spinner></ion-spinner></div>\n        <img class=\'logo\' src=\'assets/imgs/logo.png\'>\n    </div>\n\n\n    <ion-tabs tabsHighlight=\'true\' *ngIf=\'settings.user.userId && showTabs\'>\n        <ion-tab\n            *ngFor=\'let tab of tabs\'\n            [tabIcon]=\'tab.icon\'\n            [tabTitle]=\'tab.title\'\n            [root]=\'tab.component\'\n            [tabsHideOnSubPages]=\'true\'\n        ></ion-tab>\n    </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=13.js.map