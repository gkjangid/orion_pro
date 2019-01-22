webpackJsonp([19],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityIntroPageModule", function() { return ActivityIntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_intro__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivityIntroPageModule = (function () {
    function ActivityIntroPageModule() {
    }
    return ActivityIntroPageModule;
}());
ActivityIntroPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activity_intro__["a" /* ActivityIntroPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_intro__["a" /* ActivityIntroPage */]),
        ],
    })
], ActivityIntroPageModule);

//# sourceMappingURL=activity-intro.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityIntroPage; });
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




var ActivityIntroPage = (function () {
    function ActivityIntroPage(alertCtrl, api, events, navCtrl, navParams, platform) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.activity = {};
        this.appFeatures = {};
        this.lastQuestion = -1;
        this.progress = 0;
        this.segment = 'info';
        this.userActivity = {};
        this.events.subscribe('lastQuestion', function (lastQuestion) {
            _this.lastQuestion = lastQuestion;
            _this.progress = _this.getProgress();
            if (lastQuestion == _this.activity.questions.length - 1) {
                _this.segment = 'info';
            }
        });
    }
    ActivityIntroPage.prototype.activityJournal = function () {
        this.navCtrl.push('ActivityJournalPage', {
            activity: this.activity,
            userActivity: this.userActivity,
        });
    };
    ActivityIntroPage.prototype.begin = function () {
        this.segment = 'questions';
        this.gotoQuestion(this.lastQuestion + 1, this.activity);
        this.api.setUserActivityStateStarted(this.activity);
    };
    ActivityIntroPage.prototype.canBegin = function () {
        if (!this.userActivity.start_date) {
            return true;
        }
        var startDate = new Date(this.userActivity.start_date);
        return new Date() >= startDate;
    };
    ActivityIntroPage.prototype.chat = function () {
        this.navCtrl.push('ChatPage', { userActivity: this.userActivity });
    };
    ActivityIntroPage.prototype.deleteActivity = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Confirm deletion',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.api.deleteUserActivity(_this.userActivity.id)
                            .subscribe(function (response) {
                            _this.removeUserActivity(_this.userActivity.activity_id);
                            _this.navCtrl.pop();
                        });
                    },
                },
            ],
        }).present();
    };
    ActivityIntroPage.prototype.editTeam = function () {
        var _this = this;
        this.alertCtrl.create({
            subTitle: this.userActivity.team ? 'Change team' : 'Join team',
            inputs: [
                {
                    name: 'team',
                    placeholder: 'Team name',
                    value: this.userActivity.team,
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cance;',
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        var team = data.team.trim();
                        _this.userActivity.team = team;
                        _this.api.setUserActivityTeam(_this.userActivity).subscribe(function (response) {
                            _this.userActivity.team = response.data;
                        });
                    },
                },
            ],
        }).present();
    };
    ActivityIntroPage.prototype.featureEnabled = function (name) {
        var feature = this.appFeatures[name];
        if (feature === undefined) {
            return true;
        }
        return feature;
    };
    ActivityIntroPage.prototype.getAppFeatures = function () {
        var _this = this;
        this.api.getAppFeature().subscribe(function (response) {
            response.data.map(function (item) {
                _this.appFeatures[item.name] = item.enabled;
            });
        });
    };
    ActivityIntroPage.prototype.getProgress = function () {
        if (this.lastQuestion < 0) {
            return 0;
        }
        return Math.round((this.lastQuestion + 1) / this.activity.questions.length * 100);
    };
    ActivityIntroPage.prototype.getUserActivity = function (activityId) {
        var _this = this;
        this.api.getUserActivities(activityId)
            .subscribe(function (data) {
            _this.userActivity = data;
            _this.activity = _this.userActivity.activity.data;
            _this.lastQuestion = _this.userActivity.completed_question;
            _this.progress = _this.getProgress();
        });
    };
    ActivityIntroPage.prototype.gotoQuestion = function (questionIdx, activity) {
        if (!this.canBegin()) {
            return;
        }
        if (questionIdx > this.lastQuestion + 1) {
            return;
        }
        this.navCtrl.push('ActivityAnswerPage', {
            questionIdx: questionIdx,
            activity: activity,
            lastQuestion: this.lastQuestion,
            userActivity: this.userActivity,
            appFeatures: this.appFeatures,
        });
    };
    ActivityIntroPage.prototype.ionViewDidEnter = function () {
        if (!this.api.user.userId) {
            this.navCtrl.push('LoginPage');
            return;
        }
        this.activityId = this.navParams.get('id');
        if (!this.activityId) {
            this.navCtrl.setRoot('HomePage');
            return;
        }
        this.getAppFeatures();
        this.getUserActivity(this.activityId);
    };
    ActivityIntroPage.prototype.ionViewDidLeave = function () {
        var videos = Array.from(document.querySelectorAll('video'));
        videos.map(function (item) { item.pause(); });
    };
    ActivityIntroPage.prototype.removeUserActivity = function (activityId) {
        this.api.userActivities = this.api.userActivities
            .filter(function (item) { return item.pk != activityId; });
    };
    return ActivityIntroPage;
}());
ActivityIntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-activity-intro',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-intro/activity-intro.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-segment [(ngModel)]=\'segment\' color=\'light\'>\n          <ion-segment-button value=\'info\'>\n              <ion-icon name=\'information-circle\'></ion-icon>\n          </ion-segment-button>\n\n          <ion-segment-button value=\'questions\'>\n              <ion-icon name=\'help-circle\'></ion-icon>\n          </ion-segment-button>\n      </ion-segment>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<content-grid>\n\n  <div *ngIf=\'!activity.briefDescription\' text-center>\n      <ion-spinner [style.margin-top]=\'"40%"\'></ion-spinner>\n  </div>\n\n  <div [ngSwitch]=\'segment\' *ngIf=\'activity.briefDescription\'>\n\n    <div *ngSwitchCase=\'"info"\'>\n\n        <h4>{{ activity.title }}</h4>\n        <p *ngIf=\'userActivity.start_date\'>Commencement date: {{ userActivity.start_date | date:"d-MMM-yyyy" }}</p>\n        <p *ngIf=\'userActivity.deadline\'>Deadline: {{ userActivity.deadline | date:"d-MMM-yyyy" }}</p>\n        <p *ngIf=\'userActivity.team\'>Team: {{ userActivity.team }}</p>\n\n        <button\n            ion-button block round margin-bottom\n            *ngIf=\'lastQuestion > -1 && lastQuestion < activity.questions.length - 1 && canBegin()\'\n            (click)=\'begin()\'\n        >\n            {{ lastQuestion < 0 ? "Begin" : "Continue" }}\n        </button>\n\n        <div *ngIf=\'\n            activity.introUrlType?.toLowerCase().indexOf( "video" ) != -1\n            && platform.is( "mobile" )\n            && platform.isPortrait();\n            then blkVideo; else blkImg\n        \'></div>\n\n        <!-- <img *ngIf=\'userActivity.completed\' class=\'completed-image\' src=\'assets/imgs/completed.png\'> -->\n\n        <div class=\'divider\'></div>\n\n        <p class=\'description\'>{{ activity.description }}</p>\n\n        <button ion-button block round (click)=\'begin()\' margin-bottom\n            *ngIf=\'lastQuestion < activity.questions.length - 1 && canBegin()\'\n        >\n            {{ lastQuestion < 0 ? "Begin" : "Continue" }}\n        </button>\n\n    </div><!-- ngSwitchCase = "info" -->\n\n\n    <div *ngSwitchCase=\'"questions"\'>\n        <h6>{{ activity.title | titlecase }}</h6>\n\n        <progress-bar [progress]=\'progress\' *ngIf=\'lastQuestion > -1\'></progress-bar>\n\n        <button\n            ion-button block round margin-bottom (click)=\'begin()\'\n            *ngIf=\'lastQuestion < activity.questions.length - 1 && canBegin()\'\n        >\n            {{ lastQuestion < 0 ? "Begin" : "Continue" }}\n        </button>\n\n        <h1 text-center *ngIf=\'!activity.questions.length\'>There are no questions available!</h1>\n\n        <ion-list>\n            <ion-item\n                *ngFor=\'let item of activity.questions; index as index\'\n                (click)=\'gotoQuestion( index, activity )\'\n            >\n                <div text-left class=\'question\' [ngClass]=\'{ "completed": index <= lastQuestion }\'>\n                    <p text-right text-nowrap class=\'inline-block vertical-top question-no\'>{{ index+1 }}.</p>\n                    <p text-left  text-wrap   class=\'inline-block question-text\'>{{ item.question }}</p>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div><!-- ngSwitchCase = "questions" -->\n\n\n    <button ion-button small outline float-left (click)=\'editTeam()\'\n        *ngIf=\'!userActivity.completed && userActivity.invitation_id && featureEnabled( "Team" )\'\n    >\n        <ion-icon name=\'ios-people\' margin-right></ion-icon>\n        <span *ngIf=\'!userActivity.team\'>Join Team</span>\n        <span *ngIf= \'userActivity.team\'>Change Team</span>\n    </button>\n\n    <button ion-button small outline float-left (click)=\'chat()\'\n        *ngIf=\'userActivity.invitation_id && featureEnabled( "Messaging" )\'\n    >\n        <ion-icon name=\'chatbubbles\' margin-right></ion-icon>\n        Messaging\n    </button>\n\n    <button ion-button small outline float-left (click)=\'activityJournal()\'\n        *ngIf=\'featureEnabled( "Activity-Journal" )\'\n    >\n        Journal\n    </button>\n\n    <button ion-button small color=\'danger\' float-left (click)=\'deleteActivity()\'\n        *ngIf=\'!userActivity.invitation_id && !userActivity.completed\'\n    >Delete</button>\n\n\n  </div><!-- ngSwitch -->\n\n</content-grid>\n</ion-content>\n\n\n<ng-template #blkVideo>\n    <p class=\'avatar-bullet\'>{{ activity.avatarBullet1 }}</p>\n\n    <app-media\n        *ngIf=\'activity.introUrl\'\n        [mediaType]   = \'activity.introUrlType\'\n        [mediaUrl]    = \'activity.introUrl\'\n        cssClassImage = \'image\'\n        cssClassVideo = \'video__portrait\'\n        defaultImage  = \'activity-intro.png\'\n    ></app-media>\n\n    <p class=\'avatar-bullet\'>{{ activity.avatarBullet2 }}</p>\n  </ng-template>\n\n\n  <ng-template #blkImg>\n    <img *ngIf=\'!activity.introUrl && activity.id\'  class=\'image\'  src =\'assets/imgs/activity-intro.png\'>\n\n    <app-media\n        *ngIf=\'activity.introUrl\'\n        [mediaType]   = \'activity.introUrlType\'\n        [mediaUrl]    = \'activity.introUrl\'\n        cssClassImage = \'image\'\n        cssClassVideo = \'image video__landscape\'\n        defaultImage  = \'activity-intro.png\'\n        ></app-media>\n\n    <p class=\'avatar-bullet\'>{{ activity.avatarBullet1 }}</p>\n    <p class=\'avatar-bullet\'>{{ activity.avatarBullet2 }}</p>\n  </ng-template>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-intro/activity-intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], ActivityIntroPage);

//# sourceMappingURL=activity-intro.js.map

/***/ })

});
//# sourceMappingURL=19.js.map