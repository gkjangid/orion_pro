webpackJsonp([20],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityInfoPageModule", function() { return ActivityInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_info__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivityInfoPageModule = (function () {
    function ActivityInfoPageModule() {
    }
    return ActivityInfoPageModule;
}());
ActivityInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activity_info__["a" /* ActivityInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_info__["a" /* ActivityInfoPage */]),
        ],
    })
], ActivityInfoPageModule);

//# sourceMappingURL=activity-info.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityInfoPage; });
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



var ActivityInfoPage = (function () {
    function ActivityInfoPage(api, events, navCtrl, navParams) {
        this.api = api;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activity = {};
        this.enrollBtnDisabled = null;
    }
    ActivityInfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe('login', function (user) {
            if (!_this.activityId) {
                return;
            }
            _this.getActivity(_this.activityId);
        });
    };
    ActivityInfoPage.prototype.checkEnrollment = function (activity, enrolled) {
        return enrolled.indexOf(activity.id) != -1;
    };
    ActivityInfoPage.prototype.enroll = function () {
        var _this = this;
        if (!this.api.user.userId) {
            console.error('Unknown user');
            alert('Unknown user');
            return;
        }
        this.api.enrollActivity(this.activity)
            .subscribe(function (response) {
            var msg;
            if (response.data.enrolled) {
                _this.navCtrl.popToRoot();
                msg = "'" + _this.activity.title + "' added to your activity list";
            }
            else {
                msg = "'" + _this.activity.title + "' is already in your activity list";
            }
            var toast = _this.api.toast({
                message: msg,
                duration: 4000,
                position: 'middle',
            });
            toast.present();
        });
    };
    ActivityInfoPage.prototype.getActivity = function (activityId) {
        var _this = this;
        this.api.getActivity(activityId)
            .subscribe(function (data) {
            _this.activity = data.data;
            _this.enrollBtnDisabled = _this.checkEnrollment(_this.activity, _this.enrolled) || null;
        });
    };
    ActivityInfoPage.prototype.getMultiData = function (activity, field) {
        if (!activity || !activity.questions) {
            return '';
        }
        var values = [];
        activity.questions.map(function (question) {
            var value = question[field];
            if (!value) {
                return;
            }
            if (!(value instanceof Array)) {
                value = [value];
            }
            values.push.apply(values, value);
        });
        values = Array.from(new Set(values));
        return values.join(', ');
    };
    ActivityInfoPage.prototype.getlist = function (field) {
        if (!this.activity) {
            return '';
        }
        var data = this.activity[field];
        if (!data) {
            return '';
        }
        data = Array.from(new Set(data.filter(function (x) { return !!x; })));
        return data.join(', ');
    };
    ActivityInfoPage.prototype.getSkill = function () {
        return this.getMultiData(this.activity, 'skill');
    };
    ActivityInfoPage.prototype.getSubjects = function () {
        return this.getMultiData(this.activity, 'subjects');
    };
    ActivityInfoPage.prototype.invite = function () {
        this.navCtrl.push('InvitePage', { activity: this.activity });
    };
    ActivityInfoPage.prototype.ionViewDidEnter = function () {
        if (!this.api.user.userId) {
            this.navCtrl.push('LoginPage');
            return;
        }
        this.activityId = this.navParams.get('id');
        if (!this.activityId) {
            this.navCtrl.setRoot('HomePage');
            return;
        }
        this.enrolled = this.navParams.get('enrolled') || [];
        this.getActivity(this.activityId);
    };
    ActivityInfoPage.prototype.send = function () {
        if (!this.activity) {
            return '';
        }
        var url = window.location.href.split('#')[0];
        var activityId = window.location.href.split('/').pop();
        var title = this.activity.title;
        var subject = encodeURIComponent(title);
        var body = encodeURIComponent(url + "#/activity-info/" + activityId);
        return "mailto:?subject=" + subject + "&body=" + body;
    };
    ActivityInfoPage.prototype.showButtonIf = function (group) {
        return this.api.user.groups.indexOf(group) != -1;
    };
    ActivityInfoPage.prototype.showToolbar = function () {
        if (!this.activity) {
            return;
        }
        return (this.activity.status == "Published"
            || this.api.user.groups.indexOf('KCT-Previewer') != -1);
    };
    return ActivityInfoPage;
}());
ActivityInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-activity-info',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-info/activity-info.html"*/'<ion-header *ngIf=\'api.user.userId\'>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ activity?.title }}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-padding *ngIf=\'showToolbar()\'>\n    <ion-grid no-padding>\n      <ion-row no-padding>\n\n        <ion-col no-padding *ngIf=\'showButtonIf( "KCT-Activity-Send" )\'>\n          <a ion-button block outline round\n            no-margin\n            color=\'light\'\n            [href]=\'send()\'\n            target=\'_blank\'\n          >Send\n          </a>\n        </ion-col>\n\n        <ion-col no-padding *ngIf=\'showButtonIf( "KCT-Activity-Invite" )\'>\n          <a ion-button block outline round\n            no-margin\n            color=\'light\'\n            (click)=\'invite()\'\n          >Invite\n          </a>\n        </ion-col>\n\n        <ion-col no-padding *ngIf=\'showButtonIf( "KCT-Activity-Enroll" )\'>\n          <a ion-button block outline round\n            no-margin\n            color=\'light\'\n            [attr.disabled]=\'enrollBtnDisabled\'\n            (click)=\'enroll()\'\n          >Enroll\n          </a>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content *ngIf=\'api.user.userId\'>\n<content-grid>\n\n  <div text-center>\n    <app-media\n      [mediaType]   = \'activity.pictureUrlType\'\n      [mediaUrl]    = \'activity.pictureUrl\'\n      cssClassImage = \'activity-picture\'\n      cssClassVideo = \'activity-picture\'\n      defaultImage  = \'activity-info.png\'\n    ></app-media>\n\n    <div text-center *ngIf=\'!activity?.title\' padding margin>\n      <h1 padding margin><ion-spinner padding margin></ion-spinner></h1>\n    </div>\n  </div>\n\n  <h5 class="activity-title">\n    {{ activity?.title }}\n  </h5>\n\n  <div padding class=\'line-height\'>\n      <p class=\'info--brief-description\'>{{activity?.briefDescription}}</p>\n  </div>\n\n\n  <ion-list class=\'activity-info\'>\n\n    <ion-item *ngIf=\'activity.outcomes?.length && activity.outcomes [0].text\'>\n      <p class=\'info-label\'>Learning Outcomes</p>\n      <ul>\n        <ng-container *ngFor=\'let objective of activity?.outcomes\'>\n          <li *ngIf=\'objective.text\' padding-bottom class=\'info info--outcome\'>\n            {{ objective.verb }} {{ objective.text }}\n          </li>\n        </ng-container>\n      </ul>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'activity.ageGroups?.length\'>\n        <p class=\'info-label\'>Age</p>\n        <p class=\'info info--age\'\n            *ngFor=\'let ageGroup of activity.ageGroups\'\n        >\n          {{ ageGroup }}\n        </p>\n      </ion-item>\n\n<!--\n    <ion-item *ngIf=\'activity.cities?.length\'>\n      <p class=\'info-label\'>City</p>\n      <p class=\'info info--city\'\n          *ngFor=\'let city of activity.cities\'\n      >\n          {{ city }}\n      </p>\n    </ion-item>\n -->\n\n    <ion-item *ngIf=\'activity.locations?.length\'>\n      <p class=\'info-label\'>Location</p>\n      <p class=\'info info--location\'\n          *ngFor=\'let location of activity.locations\'\n      >\n          {{ location }}\n      </p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'activity.cost\'>\n      <p class=\'info-label\'>Cost</p>\n      <p class=\'info info--cost\'>{{ activity.cost }}</p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'activity.situation\'>\n      <p class=\'info-label\'>Indoor / Outdoor</p>\n      <p class=\'info info--situation\'>{{ activity.situation }}</p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'activity.duration\'>\n      <p class=\'info-label\'>Duration</p>\n      <p class=\'info info--duration\'>{{ activity.duration }}</p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'activity.permanentDates || activity.fromDate\'>\n      <p class=\'info-label\'>Date</p>\n      <p class=\'info info--date\' *ngIf=\'!activity?.permanentDates\'>\n          <span>{{ activity?.fromDate | date:\'d-MMM\' }}</span>\n          <span *ngIf=\'activity?.toDate\'>\n              <span class=\'no-bold\'> &nbsp; to &nbsp; </span>\n              <span>{{ activity?.toDate   | date:\'d-MMM\' }}</span>\n          </span>\n      </p>\n      <p class=\'info info--date\' *ngIf=\'activity?.permanentDates\'>Permanent</p>\n      <p class=\'info info--date\' *ngIf=\'activity?.datesComment\'>{{ datesComment }}</p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'activity.hours24 || activity.fromTime\'>\n      <p class=\'info-label\'>Time</p>\n      <p class=\'info info--time\' *ngIf=\'!activity?.hours24\'>\n          <span>{{ activity?.fromTime }}</span>\n          <span *ngIf=\'activity?.toTime\'>\n              <span class=\'no-bold\'> &nbsp; to &nbsp; </span>\n              <span>{{ activity?.toTime }}</span>\n          </span>\n      </p>\n      <p class=\'info info--time\' *ngIf=\'activity?.hours24\'>24 hours</p>\n      <p class=\'info info--time\' *ngIf=\'activity?.timesComment\'>{{ timesComment }}</p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'getSubjects()\'>\n      <p class=\'info-label\'>Subjects</p>\n      <p class=\'info info--subjects\'>{{ getSubjects() }}</p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'getSkill()\'>\n      <p class=\'info-label\'>Skill</p>\n      <p class=\'info info-skill\'>{{ getSkill() }}</p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'getlist( "jobs" )\'>\n      <p class=\'info-label\'>Jobs</p>\n      <p class=\'info info--jobs\'>{{ getlist( \'jobs\' ) }}</p>\n    </ion-item>\n\n\n    <ion-item *ngIf=\'getlist( "contexts" )\'>\n      <p class=\'info-label\'>Intelligences</p>\n      <p class=\'info info--contexts\'>{{ getlist( \'contexts\' ) }}</p>\n    </ion-item>\n\n  </ion-list>\n\n</content-grid>\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-info/activity-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ActivityInfoPage);

//# sourceMappingURL=activity-info.js.map

/***/ })

});
//# sourceMappingURL=20.js.map