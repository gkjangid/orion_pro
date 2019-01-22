webpackJsonp([18],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityJournalPageModule", function() { return ActivityJournalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_journal__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivityJournalPageModule = (function () {
    function ActivityJournalPageModule() {
    }
    return ActivityJournalPageModule;
}());
ActivityJournalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activity_journal__["a" /* ActivityJournalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_journal__["a" /* ActivityJournalPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], ActivityJournalPageModule);

//# sourceMappingURL=activity-journal.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityJournalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityJournalPage = (function () {
    function ActivityJournalPage(api, navCtrl, navParams, toastCtrl, loadingCtrl, utils) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.utils = utils;
        this.activity = {};
        this.userActivity = {};
        this.userActivityJournal = {};
        this.error = '';
    }
    ActivityJournalPage.prototype.getData = function (userActivityId) {
        var _this = this;
        this.api.getUserActivityJournal(userActivityId).subscribe(function (data) {
            _this.userActivityJournal = data;
        });
    };
    ActivityJournalPage.prototype.ionViewDidEnter = function () {
        this.activity = this.navParams.get('activity');
        this.userActivity = this.navParams.get('userActivity');
        this.getData(this.userActivity.id);
    };
    ActivityJournalPage.prototype.saveJournal = function () {
        var loader = this.utils.loading('Saving journal...');
        var data = this.userActivityJournal.text;
        this.api.postUserActivityJournal(this.userActivity.id, { data: data })
            .subscribe(function (response) {
            loader.dismiss();
        });
    };
    return ActivityJournalPage;
}());
ActivityJournalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-activity-journal',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-journal/activity-journal.html"*/'<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">\n\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Activity Journal</ion-title>\n\n        <ion-buttons right>\n            <button ion-button\n            [disabled]=\'userActivityJournal.text && !userActivityJournal.text.trim()\'\n            (click)=\'saveJournal()\'\n            >Save\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <h5>{{ userActivity?.activity?.title }}</h5>\n\n    <journal-editor\n        [(text)] = \'userActivityJournal.text\'\n    ></journal-editor>\n\n    <div class=\'error\' text-center>{{ error }}</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-journal/activity-journal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */]])
], ActivityJournalPage);

//# sourceMappingURL=activity-journal.js.map

/***/ })

});
//# sourceMappingURL=18.js.map