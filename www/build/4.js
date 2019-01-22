webpackJsonp([4],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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



var RegisterPage = (function () {
    function RegisterPage(api, navCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.error = '';
        this.showSpinner = false;
    }
    RegisterPage.prototype.cannotRegister = function () {
        return (!this.firstName
            || !this.lastName
            || !this.email
            || this.showSpinner);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.showSpinner = true;
        this.error = '';
        this.api.postRegister({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
        }).subscribe(function (response) {
            _this.showSpinner = false;
            if (response.error) {
                _this.error = response.error;
            }
            else {
                _this.api.utils.alertCtrl.create({
                    subTitle: 'An email has been sent to you with your login password.',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.pop();
                            }
                        },
                    ],
                }).present();
            }
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/register/register.html"*/'<ion-content padding>\n    <ion-title text-center padding>\n        <img src="assets/imgs/Learning-UI-graphics/logo-white.png"/>\n    </ion-title>\n<content-grid>\n\n <ion-segment [(ngModel)]="pet">\n    <ion-segment-button class="dactive" value="kittens">\n      Login\n    </ion-segment-button>\n    <ion-segment-button value="puppies">\n      Signup\n    </ion-segment-button>\n  </ion-segment>\n\n\n    <ion-card>\n    <ion-card-content padding>\n    <ion-list no-lines class=\'input-fields\'>\n    <ion-icon class="usre-icon" role="img">\n    <img src="assets/imgs/icons-png/username.png">\n    </ion-icon>\n    <ion-item>\n        <!-- <ion-label stacked></ion-label> -->\n        \n        <ion-input placeholder=\'First Name\' [(ngModel)]=\'firstName\'></ion-input>\n    </ion-item>\n<ion-icon class="usre-icon" role="img">\n    <img src="assets/imgs/icons-png/username.png">\n    </ion-icon>\n    <ion-item>\n        <!-- <ion-label stacked>Last Name</ion-label> -->\n\n        <ion-input placeholder=\'Last Name\' [(ngModel)]=\'lastName\'></ion-input>\n    </ion-item>\n<ion-icon class="usre-icon" role="img">\n    <img src="assets/imgs/icons-png/messaging.png">\n    </ion-icon>\n    <ion-item margin-bottom>\n        <!-- <ion-label stacked>Email</ion-label> -->\n        <ion-input placeholder=\'Email\' [(ngModel)]=\'email\' type=\'email\'></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\'error\'>\n        <div text-center class=\'error\'>{{ error }}</div>\n    </ion-item>\n\n    </ion-list>\n\n   \n\n    </ion-card-content>\n    </ion-card>\n\n    <div  margin>\n        <button ion-button block round color=\'primary\'\n            (click)=\'register()\'\n            [disabled]=\'cannotRegister()\'>   \n            <img style="width:22px; padding-right:7px" src="assets/imgs/icons-png/new-user.png">\n            <ion-spinner *ngIf=\'showSpinner\'></ion-spinner>\n            Register\n        </button>\n    </div>\n    \n</content-grid>\n</ion-content>'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=4.js.map