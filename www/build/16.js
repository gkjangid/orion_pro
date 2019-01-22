webpackJsonp([16],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangePasswordPageModule = (function () {
    function ChangePasswordPageModule() {
    }
    return ChangePasswordPageModule;
}());
ChangePasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
        ],
    })
], ChangePasswordPageModule);

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordPage = (function () {
    function ChangePasswordPage(api, navCtrl, navParams) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.error = '';
    }
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        if (this.newPassword1.length < 8) {
            this.error = 'Password length must be at least 8 characters';
            return;
        }
        if (this.newPassword1 != this.newPassword2) {
            this.error = 'Passwords do not match';
            return;
        }
        this.error = '';
        this.api.postChangePassword({
            currentPassword: this.currentPassword,
            newPassword: this.newPassword1,
        }).subscribe(function (response) {
            _this.error = response.error;
            if (!response.error) {
                _this.navCtrl.pop();
            }
        });
    };
    ChangePasswordPage.prototype.checkPassword = function () {
        if (this.newPassword1 != this.newPassword2) {
            this.error = 'Passwords do not match';
        }
        else {
            this.error = '';
        }
    };
    ChangePasswordPage.prototype.ionViewDidEnter = function () {
        this.hideBackButton = this.navParams.get('hideBackButton');
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-change-password',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/change-password/change-password.html"*/'<ion-header>\n    <ion-navbar color=\'primary\' [hideBackButton]=\'hideBackButton\'>\n        <ion-title>Change Password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<content-grid>\n\n    <ion-list>\n        <ion-item padding-vertical>\n            <ion-label stacked>Current Password</ion-label>\n            <ion-input type=\'password\' [(ngModel)]=\'currentPassword\' placeholder=\'...\'></ion-input>\n        </ion-item>\n\n        <ion-item padding-vertical>\n            <ion-label stacked>New Password</ion-label>\n            <ion-input type=\'password\' [(ngModel)]=\'newPassword1\' placeholder=\'...\'></ion-input>\n        </ion-item>\n\n        <ion-item padding-vertical>\n            <ion-label stacked>Confirm New Password</ion-label>\n            <ion-input type=\'password\'\n                [(ngModel)]=\'newPassword2\' (ngModelChange)=\'checkPassword()\' placeholder=\'...\'\n            ></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div class=\'error\' text-center>{{ error }}</div>\n\n    <button ion-button block color=\'primary\' (click)=\'changePassword()\'>Submit</button>\n\n</content-grid>\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/change-password/change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=16.js.map