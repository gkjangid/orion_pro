webpackJsonp([14],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeedbackPageModule = (function () {
    function FeedbackPageModule() {
    }
    return FeedbackPageModule;
}());
FeedbackPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], FeedbackPageModule);

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackPage = (function () {
    function FeedbackPage(api, navCtrl, navParams, settings) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
    }
    FeedbackPage.prototype.ionViewDidEnter = function () {
        if (!this.settings.user.userId) {
            this.navCtrl.push('LoginPage');
            return;
        }
    };
    FeedbackPage.prototype.submit = function () {
        var _this = this;
        if (!this.feedback) {
            return;
        }
        this.showSpinner = true;
        this.api.postFeedback({ feedback: this.feedback }).subscribe(function (response) {
            _this.showSpinner = false;
            _this.api.toastCtrl.create({
                message: 'Thank you for your feedback',
                duration: 3000,
                position: 'middle',
            }).present();
            _this.navCtrl.pop();
        });
    };
    return FeedbackPage;
}());
FeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feedback',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/feedback/feedback.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Feedback</ion-title>\n\n        <ion-buttons right>\n            <button ion-button (click)=\'submit()\' *ngIf=\'feedback?.trim()\' [disabled]=\'showSpinner\'>\n                <ion-spinner *ngIf=\'showSpinner\'></ion-spinner>\n                Done\n            </button>\n        </ion-buttons>\n        \n    </ion-navbar>\n\n    <ion-item-divider color=\'dark\'>\n        Help KurioCities improve\n    </ion-item-divider>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-item>\n        <ion-textarea [(ngModel)]=\'feedback\'\n            placeholder=\'KurioCities is currently in development, help us by entering your feedback here...\'\n        ></ion-textarea>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/feedback/feedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ })

});
//# sourceMappingURL=14.js.map