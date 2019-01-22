webpackJsonp([17],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTestPageModule", function() { return ApiTestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_test__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApiTestPageModule = (function () {
    function ApiTestPageModule() {
    }
    return ApiTestPageModule;
}());
ApiTestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__api_test__["a" /* ApiTestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__api_test__["a" /* ApiTestPage */]),
        ],
    })
], ApiTestPageModule);

//# sourceMappingURL=api-test.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTestPage; });
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



var ApiTestPage = (function () {
    function ApiTestPage(api, navCtrl, navParams) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.names = ['apiName', 'method', 'rid', 'srid', 'payload'];
    }
    ApiTestPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.names.map(function (item) {
            _this[item] = window.sessionStorage.getItem(item);
        });
    };
    ApiTestPage.prototype.submit = function () {
        var _this = this;
        this.names.map(function (item) {
            window.sessionStorage.setItem(item, _this[item] || '');
        });
        this.response = '';
        var resource = this.apiName;
        if (this.rid) {
            resource = resource + "/" + this.rid + "/";
            if (this.srid) {
                resource = "" + resource + this.srid + "/";
            }
        }
        var url = this.api.getUrl(resource);
        switch (this.method) {
            case 'get':
                this.api.get(url).subscribe(function (response) {
                    _this.response = response;
                    console.log(_this.response);
                });
                break;
            case 'post':
                var payload = JSON.parse(this.payload);
                this.api.post(url, payload, null, false).subscribe(function (response) {
                    _this.response = response;
                    console.log(_this.response);
                });
                break;
        }
    };
    return ApiTestPage;
}());
ApiTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-api-test',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/api-test/api-test.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>api-test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label fixed item-left>Method:</ion-label>\n        <ion-select item-left interface=\'popover\' [(ngModel)]=\'method\'>\n            <ion-option value=\'get\' >GET</ion-option>\n            <ion-option value=\'post\'>POST</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>API:  </ion-label>\n        <ion-input placeholder=\'...\' [(ngModel)]=\'apiName\'></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Resource ID:  </ion-label>\n        <ion-input placeholder=\'...\' [(ngModel)]=\'rid\'    ></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Sub-resource ID:</ion-label>\n        <ion-input placeholder=\'...\' [(ngModel)]=\'srid\'   ></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Payload: </ion-label>\n        <ion-textarea placeholder=\'...\' [(ngModel)]=\'payload\'   ></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n        <button ion-button outline (click)=\'submit()\'>Submit</button>\n    </ion-item>\n\n<pre>\n{{ response | json:4 }}\n</pre>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/api-test/api-test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ApiTestPage);

//# sourceMappingURL=api-test.js.map

/***/ })

});
//# sourceMappingURL=17.js.map