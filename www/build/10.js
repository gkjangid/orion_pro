webpackJsonp([10],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(events, http, navCtrl, navParams, settings) {
        this.events = events;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.groups = [];
        this.eventDelay = 1000;
        this.homePage = 'HomePage';
        this.httpOptions = { withCredentials: true };
        this.loginExpiry = 1000 * 60 * 60 * 24; // 1 day
        this.showLogin = false;
        this.showRegister = true;
    }
    LoginPage.prototype.chkAccess = function (user) {
        if (user.groups) {
            if (this.groups.length == 0) {
                return true;
            }
            for (var _i = 0, _a = user.groups; _i < _a.length; _i++) {
                var group = _a[_i];
                if (this.groups.indexOf(group) != -1) {
                    return true;
                }
            }
        }
        return false;
    };
    LoginPage.prototype.gotoNextPage = function () {
        var _this = this;
        var next = this.navParams.get('next');
        if (next) {
            var params = this.navParams.get('params') || {};
            this.navCtrl.setRoot(next, params);
            return;
        }
        if (this.navCtrl.canGoBack() && this.settings.user.userId) {
            this.navCtrl.pop().catch(function (err) {
                console.error(_this.navCtrl.getViews());
                _this.navCtrl.setRoot(_this.homePage);
            });
            return;
        }
        this.navCtrl.setRoot(this.homePage);
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var user = this.settings.getSession('user') || {};
        var now = new Date().valueOf();
        if (user && !this.chkAccess(user)) {
            this.settings.clearUser();
            this.showLogin = true;
            return;
        }
        if (user.userId && now - user.lastLogin < this.loginExpiry) {
            Object.assign(this.settings.user, user);
            this.publishEvent(this.settings.user);
            this.gotoNextPage();
            return;
        }
        this.settings.clearUser();
        this.showLogin = true;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginApi(this.username, this.password)
            .subscribe(function (data) {
            _this.errorMsg = '';
            if (data.change_password) {
                _this.navCtrl.push('ChangePasswordPage', { hideBackButton: true });
                return;
            }
            _this.gotoNextPage();
        }, function (error) {
            _this.errorMsg = "" + (error.message || "Login Error!");
            console.log(error);
        });
    };
    LoginPage.prototype.loginApi = function (username, password) {
        var _this = this;
        var url = '/api/login/';
        var data = {
            username: username,
            password: password,
        };
        return this.post(url, data, {})
            .map(function (data) {
            if (!_this.chkAccess(data)) {
                throw new Error('Access Denied');
            }
            if (!data.email) {
                throw new Error('Access Denied.  Invalid email.');
            }
            if (data.change_password) {
                _this.settings.clearUser();
                return data;
            }
            Object.assign(_this.settings.user, data);
            _this.settings.user.lastLogin = new Date().valueOf();
            _this.settings.saveSession('user', _this.settings.user);
            _this.publishEvent(_this.settings.user);
            return data;
        });
    };
    LoginPage.prototype.post = function (url, data, options) {
        var postData = new FormData();
        for (var key in data) {
            postData.append(key, data[key]);
        }
        return this.http.post(url, postData, options || this.httpOptions)
            .map(function (response) {
            return response.json();
        });
    };
    LoginPage.prototype.publishEvent = function (user) {
        var _this = this;
        setTimeout(function () {
            _this.events.publish('login', user);
        }, this.eventDelay);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/login/login.html"*/'<!-- <ion-header>\n    <ion-navbar color=\'primary\' hideBackButton=\'true\'>\n        <ion-title text-center><img src="assets/imgs/Learning-UI-graphics/logo-white.png"/></ion-title>\n    </ion-navbar>\n</ion-header>  -->\n\n\n<ion-content padding>\n	<ion-title text-center padding>\n		<img src="assets/imgs/Learning-UI-graphics/logo-white.png"/>\n	</ion-title>\n<content-grid>\n\n  <ion-segment [(ngModel)]="pet" padding-top>\n    <ion-segment-button value="Login">\n      Login\n    </ion-segment-button>\n    <ion-segment-button class="dactive" \n    value="Signup" [navPush]=\'"RegisterPage"\'*ngIf=\'showRegister\'>\n      Signup\n    </ion-segment-button>\n  </ion-segment>\n\n    <ion-card  *ngIf=\'showLogin\'>\n        <ion-card-content>\n            <div no-margin>\n                <ion-list>\n                <!-- <ion-icon class="usre-icon" role="img">\n                 <img src="assets/imgs/icons-png/username.png">\n                 </ion-icon> -->\n                  <ion-item>\n                    <ion-label><ion-icon name="person"></ion-icon></ion-label>\n                      <ion-input\n                        id=\'loginUsername\'\n                        placeholder=\'Username\'\n                        [(ngModel)]=\'username\'\n                        padding-vertical \n                        no-margin\n                      ></ion-input>\n                  </ion-item>\n\n                  <!-- <ion-icon class="usre-icon" role="img">\n                 <img src="assets/imgs/icons-png/password.png">\n                 </ion-icon> -->\n                  <ion-item>\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                      <ion-input\n                        id=\'loginPassword\'\n                        type=\'password\'\n                        placeholder=\'Password\'\n                        [(ngModel)]=\'password\'\n                        (keyup.enter)=\'login()\'\n                        padding-vertical \n                        no-margin\n                      ></ion-input>\n                  </ion-item>\n\n                 <div style="text-align: right;margin-top: 10px;color: #12c3f4;margin-bottom: 20px;"> Forgot Password?</div>\n\n                   <ion-label class=\'error\' text-center padding>{{ errorMsg }}</ion-label>\n\n                  <!-- <button\n                    ion-button outline\n                    margin\n                    [navPush]=\'"RegisterPage"\'\n                    *ngIf=\'showRegister\'\n                  >Register\n                  </button> -->\n\n              </ion-list>\n               \n            </div>\n        </ion-card-content>\n    </ion-card>\n			<div margin>\n			<button id=\'loginLogin\' ion-button block round  (click)=\'login()\'>\n			<ion-icon name="md-arrow-dropright" class="ion-md-arrow-dropright" ></ion-icon> \n			LOGIN\n			</button>\n			</div>\n\n</content-grid>\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map