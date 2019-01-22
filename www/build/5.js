webpackJsonp([5],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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



var ProfilePage = (function () {
    function ProfilePage(api, navCtrl, navParams, platform) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.chartOn = {
            gauge: false,
            barChart: true,
        };
        this.data = {};
        this.selectedSegment = 'skills';
        this.segmentList = ['skills', 'subjects'];
        this.showCharts = {};
        this.userProfile = {};
        this.chartOptions = {
            BarChart: {
                width: null,
                height: null,
                legend: 'none',
                isStacked: true,
                hAxis: {
                    maxValue: 100,
                },
            },
            Gauge: {
                redFrom: 0, redTo: 25,
                yellowFrom: 25, yellowTo: 50,
                greenFrom: 50, greenTo: 100,
                majorTicks: new Array(11).fill(null),
            },
        };
        this.chartOptions.BarChart.height = Math.round(this.platform.height() * 0.7);
        this.chartOptions.BarChart.width = Math.round(this.platform.width() * 1);
    }
    ProfilePage.prototype.chartReady = function (event, segment) {
        this.showCharts[segment] = true;
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    ProfilePage.prototype.get_scores = function (userProfile, type) {
        var scores = userProfile['scores'][type] || {};
        var keys = Object.keys(scores).sort();
        var data = keys.map(function (key) {
            var score = scores[key][0];
            var maxScore = scores[key][1];
            var value = 100 * score / maxScore;
            return [key, value];
        });
        if (data.length == 0) {
            data = [['N/A', '']];
        }
        else {
            data.sort(function (x, y) { return y[1] - x[1]; });
        }
        return [
            ['Name', 'Score']
        ].concat(data);
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!this.api.user.userId) {
            this.navCtrl.setRoot('LoginPage');
            return;
        }
        this.loading = this.api.loading('', 2000, { showBackdrop: false });
        this.api.getUserProfile()
            .subscribe(function (data) {
            _this.userProfile = data;
            _this.data['skills'] = _this.get_scores(data, 'skill');
            _this.data['subjects'] = _this.get_scores(data, 'subjects');
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/profile/profile.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Learner Profile</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-segment [(ngModel)]=\'selectedSegment\'>\n        <ion-segment-button\n            *ngFor=\'let segment of segmentList\'\n            [value]=\'segment\'\n        >{{ segment | titlecase }}\n        </ion-segment-button>\n    </ion-segment>\n\n    <div\n        *ngFor=\'let segment of segmentList; index as index\'\n        style=\'margin:auto\'\n        [ngStyle]=\'{\n            "visibility":  showCharts[ segment ]? "visible" : "hidden",\n            "display":    !showCharts[ segment ] || selectedSegment == segment ? "block" : "none"\n        }\'\n    >\n        <chart\n            *ngIf=\'chartOn.gauge\'\n            chartType=\'Gauge\'\n            [data]=\'data[ segment ]\'\n            [chartOptions]=\'chartOptions.Gauge\'\n            (chartReady)=\'chartReady( $event, segment )\'\n        ></chart>\n\n        <chart\n            *ngIf=\'chartOn.barChart\'\n            chartType=\'BarChart\'\n            [data]=\'data[ segment ]\'\n            [chartOptions]=\'chartOptions.BarChart\'\n            (chartReady)=\'chartReady( $event, segment )\'\n        ></chart>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=5.js.map