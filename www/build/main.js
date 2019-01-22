webpackJsonp([21],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StoragePrefix */
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StoragePrefix = 'kuriocities';
var User = (function () {
    function User() {
    }
    return User;
}());

var SettingsProvider = (function () {
    function SettingsProvider() {
        this.user = new User();
    }
    SettingsProvider.prototype.clearUser = function () {
        this.user = new User();
        this.saveSession('user', this.user);
    };
    SettingsProvider.prototype.getName = function (name) {
        return StoragePrefix + "." + name;
    };
    SettingsProvider.prototype.getObject = function (storage, name) {
        return JSON.parse(storage.getItem(this.getName(name)));
    };
    SettingsProvider.prototype.getSession = function (name) {
        return this.getObject(sessionStorage, name);
    };
    SettingsProvider.prototype.getSetting = function (name) {
        return this.getObject(localStorage, name);
    };
    SettingsProvider.prototype.saveObject = function (storage, name, value) {
        storage.setItem(this.getName(name), JSON.stringify(value));
    };
    SettingsProvider.prototype.saveSession = function (name, value) {
        this.saveObject(sessionStorage, name, value);
    };
    SettingsProvider.prototype.saveSetting = function (name, value) {
        this.saveObject(localStorage, name, value);
    };
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer_validation_answer_validation__ = __webpack_require__(244);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__answer_validation_answer_validation__["a"]; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilsProvider = (function () {
    function UtilsProvider(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    UtilsProvider.prototype.alert = function (message, options, present) {
        if (options === void 0) { options = {}; }
        if (present === void 0) { present = true; }
        options = __assign({ message: message, buttons: [{ text: 'Close', role: 'cancel' }] }, options);
        var handle = this.alertCtrl.create(options);
        if (present) {
            handle.present();
        }
        return handle;
    };
    UtilsProvider.prototype.canAccessPage = function (groups, user) {
        if (groups == '*') {
            return true;
        }
        if (!user.userId || !user.groups || !groups) {
            return false;
        }
        if (groups.constructor !== Array) {
            groups = [groups];
        }
        for (var _i = 0, _a = user.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            if (groups.indexOf(group) != -1) {
                return true;
            }
        }
        return false;
    };
    UtilsProvider.prototype.loading = function (message, options, present) {
        if (options === void 0) { options = {}; }
        if (present === void 0) { present = true; }
        options = __assign({ content: message }, options);
        var handle = this.loadingCtrl.create(options);
        if (present) {
            handle.present();
        }
        return handle;
    };
    UtilsProvider.prototype.shuffleArray = function (arr) {
        var newArr = arr.slice();
        for (var i = newArr.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            _a = [newArr[rand], newArr[i]], newArr[i] = _a[0], newArr[rand] = _a[1];
        }
        return newArr;
        var _a;
    };
    UtilsProvider.prototype.toast = function (message, options, present) {
        if (options === void 0) { options = {}; }
        if (present === void 0) { present = true; }
        options = __assign({ message: message, duration: 3000, position: 'bottom' }, options);
        var handle = this.toastCtrl.create(options);
        if (present) {
            handle.present();
        }
        return handle;
    };
    return UtilsProvider;
}());
UtilsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], UtilsProvider);

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity-answer/activity-answer.module": [
		332,
		0
	],
	"../pages/activity-info/activity-info.module": [
		312,
		20
	],
	"../pages/activity-intro/activity-intro.module": [
		313,
		19
	],
	"../pages/activity-journal/activity-journal.module": [
		314,
		18
	],
	"../pages/api-test/api-test.module": [
		315,
		17
	],
	"../pages/change-password/change-password.module": [
		316,
		16
	],
	"../pages/chat/chat.module": [
		317,
		15
	],
	"../pages/feedback/feedback.module": [
		318,
		14
	],
	"../pages/home/home.module": [
		319,
		13
	],
	"../pages/invite/invite.module": [
		320,
		12
	],
	"../pages/leaderboard/leaderboard.module": [
		321,
		11
	],
	"../pages/learning-journal/learning-journal.module": [
		322,
		1
	],
	"../pages/login/login.module": [
		323,
		10
	],
	"../pages/messaging/messaging.module": [
		324,
		9
	],
	"../pages/network/network.module": [
		325,
		8
	],
	"../pages/notifications/notifications.module": [
		326,
		7
	],
	"../pages/preferences/preferences.module": [
		327,
		6
	],
	"../pages/profile/profile.module": [
		328,
		5
	],
	"../pages/register/register.module": [
		329,
		4
	],
	"../pages/todo-detail/todo-detail.module": [
		330,
		3
	],
	"../pages/todo-list/todo-list.module": [
		331,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_media_app_media__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_chart__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_grid_content_grid__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__journal_editor_journal_editor__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_bar_progress_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__under_construction_under_construction__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_activity_answer_answer_feedback_modal_answer_feedback_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_activity_list_activity_list__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_tabs_activities_activities__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_tabs_learning_journal_learning_journal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_tabs_my_activities_my_activities__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_quill__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var components = [
    __WEBPACK_IMPORTED_MODULE_8__pages_activity_answer_answer_feedback_modal_answer_feedback_modal__["a" /* AnswerFeedbackModalComponent */],
    __WEBPACK_IMPORTED_MODULE_9__pages_home_activity_list_activity_list__["a" /* ActivityListComponent */],
    __WEBPACK_IMPORTED_MODULE_10__pages_home_tabs_activities_activities__["a" /* ActivitiesComponent */],
    __WEBPACK_IMPORTED_MODULE_2__app_media_app_media__["a" /* AppMediaComponent */],
    __WEBPACK_IMPORTED_MODULE_3__chart_chart__["a" /* ChartComponent */],
    __WEBPACK_IMPORTED_MODULE_4__content_grid_content_grid__["a" /* ContentGridComponent */],
    __WEBPACK_IMPORTED_MODULE_5__journal_editor_journal_editor__["a" /* JournalEditorComponent */],
    __WEBPACK_IMPORTED_MODULE_11__pages_home_tabs_learning_journal_learning_journal__["a" /* LearningJournalComponent */],
    __WEBPACK_IMPORTED_MODULE_12__pages_home_tabs_my_activities_my_activities__["a" /* MyActivitiesComponent */],
    __WEBPACK_IMPORTED_MODULE_6__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
    __WEBPACK_IMPORTED_MODULE_7__under_construction_under_construction__["a" /* UnderConstructionComponent */],
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_quill__["a" /* QuillModule */],
        ],
        declarations: components.slice(),
        exports: components.slice(),
        entryComponents: components.slice(),
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerFeedbackModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerFeedbackModalComponent = (function () {
    function AnswerFeedbackModalComponent(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.status = null;
    }
    AnswerFeedbackModalComponent.prototype.ngOnInit = function () {
        this.activity = this.navParams.get('activity');
        this.answer = this.navParams.get('answer');
        this.question = this.navParams.get('question');
        this.status = this.navParams.get('status');
        this.userActivity = this.navParams.get('userActivity');
        if (this.status === null) {
            this.next();
        }
    };
    AnswerFeedbackModalComponent.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    AnswerFeedbackModalComponent.prototype.next = function () {
        this.dismiss('next');
    };
    AnswerFeedbackModalComponent.prototype.retry = function () {
        this.dismiss('retry');
    };
    return AnswerFeedbackModalComponent;
}());
AnswerFeedbackModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'answer-feedback-modal',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-feedback-modal/answer-feedback-modal.html"*/'<ion-content>\n    <div padding [ngClass]=\'{ "vertical-middle": !status?.mediaUrl }\'>\n\n        <div padding class=\'message\' [ngClass]=\'{ "correct": status?.isCorrect }\'>\n            {{ status?.text }}\n        </div>\n\n        <app-media [mediaUrl]=\'status?.mediaUrl\' [mediaType]=\'status?.mediaType\'></app-media>\n\n    </div>\n</ion-content>\n\n\n\n<ion-footer>\n    <ng-container *ngIf=\'status?.isCorrect; then answerCorrectBlock; else answerWrongBlock\'></ng-container>\n</ion-footer>\n\n\n<ng-template #answerCorrectBlock>\n    <ion-toolbar color=\'light\'>\n        <button class=\'modal-button\' ion-button solid (click)=\'next()\'>Next Question</button>\n    </ion-toolbar>\n</ng-template>\n\n\n<ng-template #answerWrongBlock>\n    <ion-toolbar color=\'light\'>\n        <ion-buttons left>\n            <button ion-button solid color=\'primary\' padding (click)=\'retry()\'>Try Again</button>\n        </ion-buttons>\n\n        <ion-buttons right>\n            <button ion-button solid color=\'primary\' padding (click)=\'next()\' >Next Question</button>\n        </ion-buttons>\n    </ion-toolbar>\n</ng-template>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-feedback-modal/answer-feedback-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], AnswerFeedbackModalComponent);

//# sourceMappingURL=answer-feedback-modal.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivitiesComponent = (function () {
    function ActivitiesComponent(api) {
        this.api = api;
        this.searchText = '';
        this.searchSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.allActivities = this.sortActivities(this.api.activities);
        this.activities = this.allActivities;
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchSubject
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (text) {
            _this.activities = _this.search(text);
            return text;
        })
            .subscribe();
    };
    ActivitiesComponent.prototype.inputChanged = function (event) {
        this.searchSubject.next(event.target.value || ' ');
    };
    ActivitiesComponent.prototype.search = function (text) {
        if (!text.trim()) {
            return this.allActivities;
        }
        ;
        var search = new RegExp(text, 'i');
        return this.allActivities.filter(function (activity) {
            return (search.test(activity.title) ||
                search.test(activity.brief_description) ||
                search.test(activity.description));
        });
    };
    ActivitiesComponent.prototype.sortActivities = function (activities) {
        var key = 'modified';
        return activities.slice().sort(function (x, y) {
            return new Date(y[key]).valueOf() - new Date(x[key]).valueOf();
        });
    };
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'activities',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/home/tabs/activities/activities.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Activities</ion-title>\n\n    <ion-buttons end>\n      <button ion-button no-padding>\n        <ion-item>\n    <ion-avatar>\n      <img src="assets/imgs/slide0.jpg">\n    </ion-avatar>\n  </ion-item>\n      </button>\n    </ion-buttons>\n\n<!-- <ion-buttons end>\n <ion-item>\n    <ion-avatar>\n      <img src="assets/imgs/slide0.jpg">\n    </ion-avatar>\n  </ion-item>\n</ion-buttons> -->\n\n  </ion-navbar>\n</ion-header>\n\n <ion-content>\n\n  <ion-searchbar #searchBar\n    [(ngModel)]="searchText"\n    (ionInput)="inputChanged( $event )"\n  ></ion-searchbar> \n\n<activity-list [activities]=\'activities\' [filterEnrolled]=\'false\'></activity-list> \n\n  <ion-card>\n      <ion-item>\n          <ion-thumbnail item-start>\n          <img class="circle-pic" src="assets/imgs/activity-list.png">\n          </ion-thumbnail>\n          <h2>kp <small style="color:#928f8f">(0 Challenges )</small> </h2>\n          <ion-icon name="md-calendar"></ion-icon>\n          <p style="display: -webkit-inline-box;">date</p>\n      </ion-item>\n      <ion-card-content>\n          <p>description</p>\n      </ion-card-content>\n  </ion-card>\n\n</ion-content> \n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/home/tabs/activities/activities.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */]])
], ActivitiesComponent);

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningJournalComponent; });
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



var LearningJournalComponent = (function () {
    function LearningJournalComponent(api, navCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.appFeatures = {};
        this.journals = {};
        this.segment = 'general';
        this.showSpinner = false;
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
        ];
    }
    LearningJournalComponent.prototype.activityJournalPage = function (userActivityJournal) {
        var _this = this;
        this.showSpinner = true;
        this.navCtrl.push('ActivityJournalPage', {
            activity: userActivityJournal.activity,
            userActivity: userActivityJournal.user_activity,
        })
            .then(function () {
            _this.showSpinner = false;
        });
    };
    LearningJournalComponent.prototype.featureEnabled = function (name) {
        var feature = this.appFeatures[name];
        if (feature === undefined) {
            return true;
        }
        return feature;
    };
    LearningJournalComponent.prototype.getAppFeatures = function () {
        var _this = this;
        this.api.getAppFeature().subscribe(function (response) {
            response.data.map(function (item) {
                _this.appFeatures[item.name] = item.enabled;
            });
        });
    };
    LearningJournalComponent.prototype.getData = function () {
        var _this = this;
        this.api.getLearningJournal().subscribe(function (data) {
            _this.journals.general = data;
        });
        this.api.getUserActivityJournal().subscribe(function (data) {
            _this.journals.activity = data;
        });
    };
    LearningJournalComponent.prototype.ionViewDidEnter = function () {
        if (!this.api.user.userId) {
            this.navCtrl.push('LoginPage');
            return;
        }
        this.getAppFeatures();
        this.getData();
    };
    LearningJournalComponent.prototype.learningJournalPage = function (learningJournal) {
        var _this = this;
        this.showSpinner = true;
        this.navCtrl.push('LearningJournalPage', { learningJournal: learningJournal })
            .then(function () {
            _this.showSpinner = false;
        });
    };
    LearningJournalComponent.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    return LearningJournalComponent;
}());
LearningJournalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'learning-journal',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/home/tabs/learning-journal/learning-journal.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <ion-spinner color=\'light\' *ngIf=\'showSpinner\'></ion-spinner>\n            <span *ngIf=\'!showSpinner\'>Journals</span>\n        </ion-title>\n          <ion-buttons end>\n      <button ion-button no-padding>\n        <ion-item>\n    <ion-avatar>\n      <img src="assets/imgs/slide0.jpg">\n    </ion-avatar>\n  </ion-item>\n      </button>\n    </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n        <ion-segment [(ngModel)]=\'segment\' *ngIf=\'featureEnabled( "Activity-Journal" )\'>\n            <ion-segment-button value=\'general\'>General</ion-segment-button>\n            <ion-segment-button value=\'activity\'>Activity</ion-segment-button>\n        </ion-segment>\n\n        <ng-container [ngSwitch]=\'segment\'>\n\n            <section *ngSwitchCase=\'"general"\'>\n\n                <ion-fab bottom right>\n                    <button mini color=\'primary\' ion-fab (click)=\'learningJournalPage()\'>\n                        <ion-icon name=\'add\'></ion-icon>\n                    </button>\n                </ion-fab>\n\n                <h6 padding *ngIf=\'!journals?.general?.length\'>Click \'+\' to add journals</h6>\n\n                <ion-list *ngIf=\'journals?.general?.length\'>\n                    <button ion-item\n                        *ngFor=\'let item of journals?.general\'\n                        (click)=\'learningJournalPage( item )\'\n                    >\n                        {{ item.title }}\n                    </button>\n                </ion-list>\n\n            </section>\n\n\n            <section *ngSwitchCase=\'"activity"\'>\n                <h6 padding *ngIf=\'!journals?.activity?.length\'>No journals available</h6>\n\n                <ion-list>\n                    <button ion-item (click)=\'activityJournalPage( item )\'\n                        *ngFor=\'let item of journals?.activity\'\n                    >\n                        {{ item.title }}\n                    </button>\n                </ion-list>\n            </section>\n\n        </ng-container>\n\n<!-- <ion-list>\n    <ion-item>\n      <h2>My Journal 2</h2>\n     <ion-icon item-end  ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n    </ion-item>\n\n</ion-list>  -->\n\n <ion-list inset>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/home/tabs/learning-journal/learning-journal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], LearningJournalComponent);

//# sourceMappingURL=learning-journal.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyActivitiesComponent; });
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



var MyActivitiesComponent = (function () {
    function MyActivitiesComponent(api, navCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.activityGroup = 'Enrolled';
        this.showInfo = [];
        this.activityGroups = [
            { name: 'Enrolled', label: 'Enrolled' },
            { name: 'Started', label: 'In Progress' },
            { name: 'Completed', label: 'Completed' },
        ];
        this.noActivitiesButtons = [
            "Search for Activities",
        ];
        this.showNoActivities = false;
    }
    MyActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api;
        this.today = this.getToday();
        setTimeout(function () {
            _this.showNoActivities = true;
            var started = _this.api.userActivities.some(function (item) { return item.state == 'Started'; });
            if (started) {
                _this.activityGroup = 'Started';
            }
        }, 2000);
    };
    MyActivitiesComponent.prototype.getLocations = function (activity) {
        var locations = activity.locations || [];
        return locations.join(', ');
    };
    MyActivitiesComponent.prototype.getToday = function () {
        var date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth();
        var yy = date.getFullYear();
        var today = new Date(yy, mm, dd).toISOString();
        return today.substr(0, 19) + "Z";
    };
    MyActivitiesComponent.prototype.runActivity = function (activity) {
        this.navCtrl.push('ActivityIntroPage', { id: activity.pk });
    };
    MyActivitiesComponent.prototype.selectTab = function (tabNo) {
        this.navCtrl.parent.select(tabNo);
    };
    MyActivitiesComponent.prototype.toggleInfo = function (index) {
        this.showInfo[index] = !this.showInfo[index];
    };
    MyActivitiesComponent.prototype.trackByActivity = function (index, activity) {
        return activity.pk;
    };
    return MyActivitiesComponent;
}());
MyActivitiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'my-activities',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/home/tabs/my-activities/my-activities.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>My Activities</ion-title>\n\n<ion-buttons end>\n      <button ion-button no-padding>\n        <ion-item>\n    <ion-avatar>\n      <img src="assets/imgs/slide0.jpg">\n    </ion-avatar>\n  </ion-item>\n      </button>\n    </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content *ngIf=\'api.userActivities.length\'>\n\n<ion-card *ngFor=\'let activity of api.userActivities; index as index; trackBy: trackByActivity\'>\n  <ion-item (click)=\'runActivity( activity )\'>\n    <ion-thumbnail item-start>\n       <img class="circle-pic" [src]=\'activity.pictureUrl || "assets/imgs/activity-list.png"\'>\n    </ion-thumbnail>\n       <h2>{{ activity.title.split(\'::\')[2] }} <small style="color:#928f8f">({{ activity.journal_count }} Challenges )</small> </h2>\n    <ion-icon name="md-calendar"></ion-icon>\n      <p style="display: -webkit-inline-box;">{{ activity.modified | date:\'d-MMM HH:mm\' }}</p>\n      <ion-badge item-end *ngIf=\'activity.state == "Completed"\' color="secondary">{{ activity.state }}</ion-badge>\n      <ion-badge item-end *ngIf=\'activity.state == "In Progress"\' color="danger">{{ activity.state }}</ion-badge>\n      <ion-badge item-end *ngIf=\'activity.state == "Enrolled"\'>{{ activity.state }}</ion-badge>\n  </ion-item>\n</ion-card>\n\n    <!-- <content-grid *ngIf=\'!api.userActivities.length && showNoActivities\'>\n        <div class=\'no-activities-container\'>\n            <h4>You have not enrolled in any activities yet.</h4>\n            <br><br>\n\n            <div style=\'margin-left:20%; margin-right:20%;\'>\n            <button\n                *ngFor=\'let item of noActivitiesButtons; index as index\'\n                ion-button block round\n                color=\'primary\'\n                padding-vertical margin\n                (click)=\'selectTab( index+1 )\'\n            >\n                {{ item }}\n            </button>\n            </div>\n        </div>\n    </content-grid>\n\n\n    <content-grid *ngIf=\'api.userActivities.length\'>\n\n        <ion-segment [(ngModel)]=\'activityGroup\'>\n            <ion-segment-button\n                *ngFor=\'let item of activityGroups\'\n                [value]=\'item.name\'\n            >{{ item.label }}</ion-segment-button>\n        </ion-segment>\n\n        <section>\n\n            <ng-container *ngFor=\'let activity of api.userActivities; index as index; trackBy: trackByActivity\'>\n\n                <ion-card margin-vertical\n                    *ngIf=\'\n                        activity.state == activityGroup\n                        && ( !activity.start_date || activity.start_date <= today )\n                    \'\n                >\n                <ion-card-header (click)=\'runActivity( activity )\'>\n                        {{ activity.title }}\n                    </ion-card-header>\n\n\n                    <ion-card-content (click)=\'runActivity( activity )\'>\n\n                        <ion-item\n                            detail-none\n                            no-margin no-padding\n                        >\n                            <ion-thumbnail item-start>\n                                <img class=\'activity-image\' alt=\'\'\n                                [src]=\'activity.pictureUrl || "/app/assets/imgs/activity-list.png"\'\n                            >\n                            </ion-thumbnail>\n\n                            <p class=\'activity-description\'>\n                                {{ activity.description }}\n                            </p>\n                        </ion-item>\n\n                    </ion-card-content>\n\n                    <section class=\'ion-card-footer\'>\n\n                        <p class=\'activity-info activity-info__location\'>\n                            {{ getLocations( activity ) }}\n                        </p>\n\n                        <p class=\'activity-info\' *ngIf=\'activity.fromDate\'>\n                            {{ activity.fromDate | date:\'dd-MMM\' }}\n                            <span class=\'to\' *ngIf=\'activity.toDate\'>to</span>\n                            {{ activity.toDate | date:\'dd-MMM\' }}\n                            <span *ngIf=\'activity.datesComment\'>({{ activity.datesComment }})</span>\n                        </p>\n\n                        <p class=\'activity-info\' *ngIf=\'activity.fromTime\'>\n                            {{ activity.fromTime }}\n                            <span class=\'to\' *ngIf=\'activity.toTime\'>to</span>\n                            {{ activity.toTime }}\n                            <span *ngIf=\'activity.timesComment\'>({{ activity.timesComment }})</span>\n                        </p>\n\n                        <p class=\'activity-info\' *ngIf=\'activity.deadline\' ion-text color=\'primary\'>\n                            Commencement date: {{ activity.start_date | date: "d-MMM-yyyy" }}\n                        </p>\n\n                        <p class=\'activity-info\' *ngIf=\'activity.deadline\' ion-text color=\'primary\'>\n                            Deadline: {{ activity.deadline | date: "d-MMM-yyyy" }}\n                        </p>\n\n                        <p text-center>\n                            <ion-icon name=\'ios-more\' (click)=\'toggleInfo( index )\'></ion-icon>\n                        </p>\n\n                        <div *ngIf=\'showInfo && showInfo [index]\'>\n\n                            <p class=\'activity-info\' *ngIf=\'activity.situation\'>\n                                {{ activity.situation }}\n                            </p>\n\n                            <p class=\'activity-info\' *ngIf=\'activity.duration\'>\n                                Duration: {{ activity.duration }}\n                            </p>\n\n                            <p class=\'activity-info\' *ngIf=\'activity.cost\'>\n                                Cost: {{ activity.cost }}\n                            </p>\n\n                        </div>\n\n                    </section>\n\n                </ion-card>\n            </ng-container>\n        </section>\n    </content-grid> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/home/tabs/my-activities/my-activities.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], MyActivitiesComponent);

//# sourceMappingURL=my-activities.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RECONNECT_INTERVAL = 1000;
var RECONNECT_RETRIES = 20;
var WebsocketProvider = (function () {
    function WebsocketProvider(platform) {
        this.platform = platform;
        this._retries = RECONNECT_RETRIES;
        this.forums = {};
        this.websockets = {};
        this.subjects = {};
    }
    WebsocketProvider.prototype.closeSocket = function (forumId) {
        var socket = this.websockets[forumId];
        if (socket) {
            socket.close();
        }
    };
    WebsocketProvider.prototype.getForum = function (forumId, onopen) {
        var obs = this.forums[forumId] || this.newForum(forumId, onopen);
        return obs.filter(function (item) { return !!item; });
    };
    WebsocketProvider.prototype.getOrigin = function (protocol) {
        protocol = protocol || window.location.hostname.indexOf('localhost') == -1 ? 'wss:' : 'ws:';
        var server = window.location.search
            .substr(1)
            .split('&')
            .map(function (item) {
            var _a = item.split('='), k = _a[0], v = _a[1];
            if (k == 's') {
                if (v.indexOf('://') == -1) {
                    return "ws://" + v;
                }
                else {
                    return v.replace(/.*?:\/\//, 'ws://');
                }
            }
        })
            .filter(function (item) { return !!item; });
        return server[0] || protocol + "//" + window.location.hostname;
    };
    WebsocketProvider.prototype.leaveForum = function (forumId) {
        this.closeSocket(forumId);
        this.subjects[forumId] = null;
        this.forums[forumId] = null;
        this.websockets[forumId] = null;
    };
    WebsocketProvider.prototype.login = function (systemForumId, token) {
        this.websockets[systemForumId].send(JSON.stringify({
            type: 'authenticate',
            token: token,
        }));
    };
    WebsocketProvider.prototype.getUserForumId = function (userId) {
        return "user." + userId;
    };
    WebsocketProvider.prototype.getUrl = function (name) {
        return this.getOrigin() + "/ws/invitation/" + name + "/";
    };
    WebsocketProvider.prototype.newForum = function (forumId, onopen) {
        var subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        var obs = subject.asObservable();
        this.subjects[forumId] = subject;
        this.forums[forumId] = obs;
        this.websockets[forumId] = this.newSocket(forumId, subject, onopen);
        return obs;
    };
    WebsocketProvider.prototype.newMessage = function (forumId, message) {
        message['token'] = null;
        this.websockets[forumId].send(JSON.stringify(message));
    };
    WebsocketProvider.prototype.newSocket = function (name, subject, onopen) {
        var _this = this;
        var url = this.getUrl(name);
        var socket = new WebSocket(url);
        socket.addEventListener('open', function () {
            _this._retries = RECONNECT_RETRIES;
        });
        if (onopen) {
            socket.addEventListener('open', onopen);
        }
        socket.onmessage = function (event) {
            subject.next(event.data);
        };
        socket.onclose = function (event) {
            console.warn("Socket closed: " + name);
            if (!_this.websockets[name]) {
                return;
            }
            console.warn(event);
            if (_this._retries) {
                setTimeout(function () {
                    console.log(_this._retries + " Reconnecting: " + name + "...");
                    _this.websockets[name] = _this.newSocket(name, subject);
                    _this._retries--;
                }, RECONNECT_INTERVAL);
            }
            else {
                alert('Unable to connect to server!');
            }
        };
        socket.onerror = function (event) {
            console.error("Socket error: " + name + ".");
            console.error(event);
        };
        return socket;
    };
    return WebsocketProvider;
}());
WebsocketProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], WebsocketProvider);

//# sourceMappingURL=websocket.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_directives_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_utils_utils__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_websocket__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_8__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/activity-info/activity-info.module#ActivityInfoPageModule', name: 'ActivityInfoPage', segment: 'activity-info/:id', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/activity-intro/activity-intro.module#ActivityIntroPageModule', name: 'ActivityIntroPage', segment: 'activity-intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/activity-journal/activity-journal.module#ActivityJournalPageModule', name: 'ActivityJournalPage', segment: 'activity-journal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/api-test/api-test.module#ApiTestPageModule', name: 'ApiTestPage', segment: 'api-test', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'activity', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/invite/invite.module#InvitePageModule', name: 'InvitePage', segment: 'invite', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/leaderboard/leaderboard.module#LeaderboardPageModule', name: 'LeaderboardPage', segment: 'leaderboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/learning-journal/learning-journal.module#LearningJournalPageModule', name: 'LearningJournalPage', segment: 'learning-journal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/messaging/messaging.module#MessagingPageModule', name: 'MessagingPage', segment: 'messaging', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/network/network.module#NetworkPageModule', name: 'NetworkPage', segment: 'network', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/todo-detail/todo-detail.module#TodoDetailPageModule', name: 'TodoDetailPage', segment: 'todo-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/todo-list/todo-list.module#TodoListPageModule', name: 'TodoListPage', segment: 'todo-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/activity-answer/activity-answer.module#ActivityAnswerPageModule', name: 'ActivityAnswerPage', segment: 'activity-answer', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_websocket__["a" /* WebsocketProvider */],
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateAnswer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_validation_logical__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_validation_math__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer_validation_table__ = __webpack_require__(247);



var ValidateAnswer = (function () {
    function ValidateAnswer(activity, question, userActivity, answer) {
        this.status = null;
        var checker = this['type_' + question.questionType];
        if (!checker) {
            var msg = "Invalid question type: " + question.questionType;
            alert(msg);
            throw (msg);
        }
        this.status = checker(activity, question, userActivity, answer);
    }
    ValidateAnswer.prototype.type_action = function (activity, question, userActivity, answer) {
        return null;
    };
    ValidateAnswer.prototype.type_fillInBlanks = function (activity, question, userActivity, answer) {
        for (var _i = 0, _a = question.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            if (choice.choice.trim() == answer.trim()) {
                return {
                    isCorrect: true,
                    text: choice.feedback || 'Correct!',
                    mediaUrl: choice.feedbackUrl,
                    mediaType: choice.feedbackUrlType,
                };
            }
        }
        return {
            isCorrect: false,
            text: question.feedbackIncorrect || 'Wrong answer!',
            mediaUrl: question.feedbackIncorrectUrl,
            mediaType: question.feedbackIncorrectUrlType,
        };
    };
    ValidateAnswer.prototype.type_logic = function (activity, question, userActivity, answer) {
        var validator = new __WEBPACK_IMPORTED_MODULE_0__answer_validation_logical__["a" /* AnswerValidationLogical */](activity, question, userActivity, answer);
        return validator.validate();
    };
    ValidateAnswer.prototype.type_math = function (activity, question, userActivity, answer) {
        var validator = new __WEBPACK_IMPORTED_MODULE_1__answer_validation_math__["a" /* AnswerValidationMath */](activity, question, userActivity, answer);
        return validator.validate();
    };
    ValidateAnswer.prototype.type_multipleChoice = function (activity, question, userActivity, answer) {
        var choice = question.choices[answer];
        return {
            isCorrect: choice.isCorrect || false,
            text: choice.feedback || (choice.isCorrect ? 'Correct!' : 'Wrong answer!'),
            mediaUrl: choice.feedbackUrl,
            mediaType: choice.feedbackUrlType,
        };
    };
    ValidateAnswer.prototype.type_noAutoCorrection = function (activity, question, userActivity, answer) {
        return null;
    };
    ValidateAnswer.prototype.type_table = function (activity, question, userActivity, answer) {
        var validator = new __WEBPACK_IMPORTED_MODULE_2__answer_validation_table__["a" /* AnswerValidationTable */](activity, question, userActivity, answer);
        return validator.validate();
    };
    ValidateAnswer.prototype.type_upload = function (activity, question, userActivity, answer) {
        return null;
    };
    return ValidateAnswer;
}());

//# sourceMappingURL=answer-validation.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerValidationLogical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_validation_base__ = __webpack_require__(81);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AnswerValidationLogical = (function (_super) {
    __extends(AnswerValidationLogical, _super);
    function AnswerValidationLogical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnswerValidationLogical.prototype.getOperand = function (operandNo) {
        var operand = this.question["logicalTypeOperand" + operandNo];
        if (operand == -1) {
            operand = parseFloat(this.question["logicalTypeOperand" + operandNo + "Value"]);
        }
        else {
            var qIndices_1 = {};
            this.activity.questions.map(function (question, index) {
                qIndices_1[question.id] = index;
            });
            var qIdx = qIndices_1[operand];
            operand = parseFloat(this.userActivity.answers[qIdx]);
        }
        if (isNaN(operand)) {
            return null;
        }
        return operand;
    };
    AnswerValidationLogical.prototype.validate = function () {
        var operand1, operand2;
        operand1 = this.getOperand(1);
        if (operand1 === null) {
            return this.error('System Error 1: Invalid value');
        }
        if (this.question.logicalType.startsWith('between')) {
            operand2 = this.getOperand(2);
            if (operand2 === null) {
                return this.error('System Error 2: Invalid value');
            }
        }
        var answer = parseFloat(this.answer);
        if (isNaN(answer)) {
            return this.error('System Error 3: Invalid value');
        }
        switch (this.question.logicalType) {
            case '>':
                if (answer > operand1) {
                    return this.answerCorrect();
                }
                break;
            case '>=':
                if (answer >= operand1) {
                    return this.answerCorrect();
                }
                break;
            case '=':
                if (answer == operand1) {
                    return this.answerCorrect();
                }
                break;
            case '<=':
                if (answer <= operand1) {
                    return this.answerCorrect();
                }
                break;
            case '<':
                if (answer < operand1) {
                    return this.answerCorrect();
                }
                break;
            case 'betweenInc':
                if (answer >= operand1 && answer <= operand2) {
                    return this.answerCorrect();
                }
                break;
            case 'betweenExc':
                if (answer > operand1 && answer < operand2) {
                    return this.answerCorrect();
                }
                break;
        } // switch
        return this.answerIncorrect();
    };
    return AnswerValidationLogical;
}(__WEBPACK_IMPORTED_MODULE_0__answer_validation_base__["a" /* AnswerValidationBase */]));

//# sourceMappingURL=answer-validation-logical.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerValidationMath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_validation_base__ = __webpack_require__(81);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AnswerValidationMath = (function (_super) {
    __extends(AnswerValidationMath, _super);
    function AnswerValidationMath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnswerValidationMath.prototype.compareAnswer = function (answer, correctAnswer, round) {
        if (round === void 0) { round = null; }
        answer = parseFloat(answer);
        if (isNaN(answer)) {
            return this.error('System Error 1: Invalid value');
        }
        if (isNaN(correctAnswer)) {
            return this.error('System Error 2: Invalid value');
        }
        if (round !== null) {
            answer = this.round(answer);
            correctAnswer = this.round(correctAnswer);
        }
        if (answer == correctAnswer) {
            return this.answerCorrect();
        }
        else {
            return this.answerIncorrect();
        }
    };
    AnswerValidationMath.prototype.getOperand = function (operandNo, qIndices) {
        var operand = this.question["mathTypeOperand" + operandNo];
        if (operand == -1) {
            operand = parseFloat(this.question["mathTypeOperand" + operandNo + "Value"]);
        }
        else {
            var qIdx = qIndices[operand];
            operand = parseFloat(this.userActivity.answers[qIdx]);
        }
        return operand;
    };
    AnswerValidationMath.prototype.getOperandList = function (qIndices) {
        var _this = this;
        return this.question.mathTypeOperand1.map(function (qId) {
            var qIdx = qIndices[qId];
            return parseFloat(_this.userActivity.answers[qIdx]);
        });
    };
    AnswerValidationMath.prototype.getOperands = function () {
        var qIndices = this.getQIndices();
        var operands = [];
        var listTypes = ['sum', 'average'];
        if (listTypes.indexOf(this.question.mathType) != -1) {
            operands = this.getOperandList(qIndices);
        }
        else {
            operands.push(this.getOperand(1, qIndices));
            operands.push(this.getOperand(2, qIndices));
        }
        return operands;
    };
    AnswerValidationMath.prototype.getQIndices = function () {
        var qIndices = {};
        this.activity.questions.map(function (question, index) {
            qIndices[question.id] = index;
        });
        return qIndices;
    };
    AnswerValidationMath.prototype.mathAverage = function (operands) {
        var total = operands.reduce(function (x, y) { return x + y; });
        return total / operands.length;
    };
    AnswerValidationMath.prototype.mathDivide = function (operands) {
        return operands[0] / operands[1];
    };
    AnswerValidationMath.prototype.mathMultiply = function (operands) {
        return operands[0] * operands[1];
    };
    AnswerValidationMath.prototype.mathSubtract = function (operands) {
        return operands[0] - operands[1];
    };
    AnswerValidationMath.prototype.mathSum = function (operands) {
        return operands.reduce(function (x, y) { return x + y; });
    };
    AnswerValidationMath.prototype.round = function (value, precision) {
        if (precision === void 0) { precision = 2; }
        var factor = Math.pow(10, precision);
        var tmp = Math.round(value * factor);
        return tmp / factor;
    };
    AnswerValidationMath.prototype.validate = function () {
        var operands = this.getOperands();
        var correctAnswer = null;
        switch (this.question.mathType) {
            case 'sum':
                correctAnswer = this.mathSum(operands);
                return this.compareAnswer(this.answer, correctAnswer);
            case 'average':
                correctAnswer = this.mathAverage(operands);
                return this.compareAnswer(this.answer, correctAnswer, this.question.precision || 0);
            case '-':
                correctAnswer = this.mathSubtract(operands);
                return this.compareAnswer(this.answer, correctAnswer);
            case '/':
                correctAnswer = this.mathDivide(operands);
                return this.compareAnswer(this.answer, correctAnswer, this.question.precision || 0);
            case '*':
                correctAnswer = this.mathMultiply(operands);
                return this.compareAnswer(this.answer, correctAnswer);
        }
    };
    return AnswerValidationMath;
}(__WEBPACK_IMPORTED_MODULE_0__answer_validation_base__["a" /* AnswerValidationBase */]));

//# sourceMappingURL=answer-validation-math.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerValidationTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_validation_base__ = __webpack_require__(81);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AnswerValidationTable = (function (_super) {
    __extends(AnswerValidationTable, _super);
    function AnswerValidationTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnswerValidationTable.prototype.countResults = function (results) {
        var counts = { correct: 0, wrong: 0 };
        results.map(function (row) {
            row.map(function (col) {
                if (col.startsWith('correct')) {
                    counts.correct += 1;
                }
                else if (col.startsWith('wrong')) {
                    counts.wrong += 1;
                }
            });
        });
        return counts;
    };
    AnswerValidationTable.prototype.compare = function (correctAnswers, answers) {
        var _this = this;
        return answers.map(function (rowItem, rowIdx) {
            return rowItem.map(function (answer, colIdx) {
                if (!correctAnswers[rowIdx]) {
                    return '';
                }
                var correctAnswer = correctAnswers[rowIdx][colIdx];
                if (correctAnswer == null) {
                    return '';
                }
                if (correctAnswer instanceof Array) {
                    var length_1 = correctAnswer.length;
                    if (!length_1) {
                        return '';
                    }
                    for (var i = 0; i < length_1; i++) {
                        if (!answer) {
                            return 'wrong-answer';
                        }
                        if (correctAnswer[i].trim().toLowerCase() == answer.trim().toLowerCase()) {
                            return 'correct-answer';
                        }
                    }
                    return 'wrong-answer';
                }
                else {
                    if (_this.round(correctAnswer) == _this.round(answer)) {
                        return 'correct-answer';
                    }
                    else {
                        return 'wrong-answer';
                    }
                }
            });
        });
    };
    AnswerValidationTable.prototype.getRowColIdx = function (operandNo, indexInfo, validationInfo) {
        var operand = validationInfo.cells[operandNo];
        if (!operand) {
            return;
        }
        var _a = operand.split('/'), rowName = _a[0], colName = _a[1];
        return [indexInfo.rows[rowName], indexInfo.columns[colName]];
    };
    AnswerValidationTable.prototype.getOperand = function (operandNo, indexInfo, validationInfo, answers) {
        var indices = this.getRowColIdx(operandNo, indexInfo, validationInfo);
        if (!indices) {
            return null;
        }
        var rowIdx = indices[0], colIdx = indices[1];
        return answers[rowIdx][colIdx];
    };
    AnswerValidationTable.prototype.getAnswer_average = function (indexInfo, validationInfo, answers) {
        var _this = this;
        var data = validationInfo.cells.map(function (item, idx) {
            return parseFloat(_this.getOperand(idx, indexInfo, validationInfo, answers));
        });
        var total = data.reduce(function (x, y) { return x + y; });
        return total / data.length;
    };
    AnswerValidationTable.prototype.getAnswer_divide = function (indexInfo, validationInfo, answers) {
        var operand1 = this.getOperand(0, indexInfo, validationInfo, answers);
        var operand2 = this.getOperand(1, indexInfo, validationInfo, answers);
        return parseFloat(operand1) / parseFloat(operand2);
    };
    AnswerValidationTable.prototype.getAnswer_disabled = function (indexInfo, validationInfo, answers) {
        return null;
    };
    AnswerValidationTable.prototype.getAnswer_multiply = function (indexInfo, validationInfo, answers) {
        var operand1 = this.getOperand(0, indexInfo, validationInfo, answers);
        var operand2 = this.getOperand(1, indexInfo, validationInfo, answers);
        return parseFloat(operand1) * parseFloat(operand2);
    };
    AnswerValidationTable.prototype.getAnswer_subtract = function (indexInfo, validationInfo, answers) {
        var operand1 = this.getOperand(0, indexInfo, validationInfo, answers);
        var operand2 = this.getOperand(1, indexInfo, validationInfo, answers);
        return parseFloat(operand1) - parseFloat(operand2);
    };
    AnswerValidationTable.prototype.getAnswer_sum = function (indexInfo, validationInfo, answers) {
        var _this = this;
        var data = validationInfo.cells.map(function (item, idx) {
            return parseFloat(_this.getOperand(idx, indexInfo, validationInfo, answers));
        });
        return data.reduce(function (x, y) { return x + y; });
    };
    AnswerValidationTable.prototype.getAnswer_text = function (indexInfo, validationInfo, answers) {
        return validationInfo.textAnswers.map(function (item) { return item.answer; });
    };
    AnswerValidationTable.prototype.getIndexInfo = function () {
        var indexInfo = { rows: {}, columns: {} };
        this.question.table.rows.map(function (item, idx) {
            indexInfo.rows[item.name] = idx;
        });
        this.question.table.columns.map(function (item, idx) {
            indexInfo.columns[item.name] = idx;
        });
        return indexInfo;
    };
    AnswerValidationTable.prototype.getCorrectAnswers = function () {
        var _this = this;
        var answers = [];
        var indexInfo = this.getIndexInfo();
        this.question.table.rows.map(function (rowItem, rowIdx) {
            if (!answers[rowIdx]) {
                answers[rowIdx] = [];
            }
            _this.question.table.columns.map(function (colItem, colIdx) {
                if (!_this.question.table.cellValidations) {
                    answers[rowIdx][colIdx] = null;
                    return;
                }
                if (!_this.question.table.cellValidations[rowIdx]) {
                    answers[rowIdx][colIdx] = null;
                    return;
                }
                var validation = _this.question.table.cellValidations[rowIdx][colIdx];
                if (!validation || !validation.validationType) {
                    answers[rowIdx][colIdx] = null;
                    return;
                }
                ;
                answers[rowIdx][colIdx] = _this['getAnswer_' + validation.validationType](indexInfo, validation, _this.answer);
            });
        });
        return answers;
    };
    AnswerValidationTable.prototype.round = function (value, precision) {
        if (precision === void 0) { precision = 2; }
        var factor = Math.pow(10, precision);
        var tmp = Math.round(value * factor);
        return tmp / factor;
    };
    AnswerValidationTable.prototype.validate = function () {
        var correctAnswers = this.getCorrectAnswers();
        this.question.table.results = this.compare(correctAnswers, this.answer);
        var counts = this.countResults(this.question.table.results);
        if (counts.wrong > 0) {
            return this.answerIncorrect();
        }
        else {
            return this.answerCorrect();
        }
    };
    return AnswerValidationTable;
}(__WEBPACK_IMPORTED_MODULE_0__answer_validation_base__["a" /* AnswerValidationBase */]));

//# sourceMappingURL=answer-validation-table.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppMediaComponent = (function () {
    function AppMediaComponent(platform) {
        this.platform = platform;
        this.autoplay = false;
        this.controls = true;
        this.type = '';
        this.showDefaultImage = false;
    }
    Object.defineProperty(AppMediaComponent.prototype, "mediaType", {
        set: function (type) {
            if (!type) {
                return;
            }
            if (type.toLowerCase().indexOf('picture') != -1) {
                this.type = 'image';
            }
            else if (type.toLowerCase().indexOf('video') != -1) {
                this.type = 'video';
            }
        },
        enumerable: true,
        configurable: true
    });
    AppMediaComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showDefaultImage = true;
        }, 500);
    };
    return AppMediaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], AppMediaComponent.prototype, "cssClassImage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], AppMediaComponent.prototype, "cssClassVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], AppMediaComponent.prototype, "mediaUrl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], AppMediaComponent.prototype, "autoplay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], AppMediaComponent.prototype, "controls", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], AppMediaComponent.prototype, "defaultImage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], AppMediaComponent.prototype, "mediaType", null);
AppMediaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-media',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/components/app-media/app-media.html"*/'<ng-container [ngSwitch]=\'type\'>\n    <img *ngSwitchCase=\'"image"\'\n        [src]=\'mediaUrl || "#"\'\n        [class]=\'cssClassImage\'\n    >\n\n    <video *ngSwitchCase=\'"video"\'\n        type=\'video/mp4\'\n        [attr.controls]=\'controls || null\'\n        [attr.autoplay]=\'autoplay || null\'\n        [src]=\'mediaUrl || "#"\'\n        [class]=\'cssClassVideo\'\n        [width]=\'platform.width() - 32\'\n    ></video>\n</ng-container>\n\n<img *ngIf=\'!mediaUrl && defaultImage && showDefaultImage\'\n    [src]=\'"/app/assets/imgs/" + defaultImage\'\n    [class]=\'cssClassImage\'\n>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/components/app-media/app-media.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], AppMediaComponent);

//# sourceMappingURL=app-media.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_google_charts__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = (function () {
    function ChartComponent() {
        this.chartType = 'BarChart';
        this.chartReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.chartId = this.get_chartId();
    }
    ChartComponent.prototype.get_chartId = function () {
        return "chart" + Math.round(Math.random() * 10000);
    };
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.chartType) {
            console.error('Unknown chart type');
            return;
        }
        __WEBPACK_IMPORTED_MODULE_1_google_charts__["a" /* GoogleCharts */].load(function () {
            _this[_this.chartType]();
        }, ['gauge']);
    };
    ChartComponent.prototype.drawChart = function () {
        var _this = this;
        if (!this.data) {
            console.error(this.chartType + " error: no data");
            return;
        }
        var chart = new __WEBPACK_IMPORTED_MODULE_1_google_charts__["a" /* GoogleCharts */].api.visualization[this.chartType](document.getElementById(this.chartId));
        __WEBPACK_IMPORTED_MODULE_1_google_charts__["a" /* GoogleCharts */].api.visualization.events.addListener(chart, 'ready', function () {
            _this.chartReady.emit(true);
        });
        chart.draw(this.chartData, this.chartOptions);
        return chart;
    };
    ChartComponent.prototype.BarChart = function () {
        var _this = this;
        setTimeout(function () {
            _this.chartData = __WEBPACK_IMPORTED_MODULE_1_google_charts__["a" /* GoogleCharts */].api.visualization.arrayToDataTable(_this.data);
            _this.drawChart();
        }, 750);
    };
    ChartComponent.prototype.Gauge = function () {
        var _this = this;
        setTimeout(function () {
            _this.chartData = __WEBPACK_IMPORTED_MODULE_1_google_charts__["a" /* GoogleCharts */].api.visualization.arrayToDataTable(_this.data);
            _this.drawChart();
        }, 750);
    };
    return ChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "chartOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ChartComponent.prototype, "chartType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ChartComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ChartComponent.prototype, "chartReady", void 0);
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'chart',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/components/chart/chart.html"*/'<div [id]=\'chartId\'></div>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/components/chart/chart.html"*/
    })
], ChartComponent);

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentGridComponent = (function () {
    function ContentGridComponent() {
    }
    ContentGridComponent.prototype.ngAfterViewInit = function () {
        setTimeout(this.resizeTextarea, 1000);
    };
    ContentGridComponent.prototype.resizeTextarea = function () {
        for (var _i = 0, _a = Array.from(document.querySelectorAll('textarea')); _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.scrollHeight) {
                element.style.height = element.scrollHeight + "px";
            }
        }
    };
    return ContentGridComponent;
}());
ContentGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'content-grid',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/components/content-grid/content-grid.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col\n      col-12\n      col-lg-8 offset-lg-2\n      col-xl-6 offset-xl-3\n    >\n\n        <ng-content></ng-content>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/components/content-grid/content-grid.html"*/
    }),
    __metadata("design:paramtypes", [])
], ContentGridComponent);

//# sourceMappingURL=content-grid.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalEditorComponent; });
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



var JournalEditorComponent = (function () {
    function JournalEditorComponent(api, toastCtrl, loadingCtrl) {
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this._text = '';
        this.editor = {};
        this.error = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.textChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.height = '40vh';
        this.modules = {
            toolbar: [
                ['bold', 'italic', 'underline'],
                ['image'],
            ]
        };
    }
    Object.defineProperty(JournalEditorComponent.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
            this.textChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    JournalEditorComponent.prototype.contentChanged = function (event) {
        this.text = event.html;
    };
    JournalEditorComponent.prototype.editorCreated = function (editorInstance) {
        this.editor = editorInstance;
        var toolbar = editorInstance.getModule('toolbar');
        toolbar.addHandler('image', this.imageHandler.bind(this));
    };
    JournalEditorComponent.prototype.imageHandler = function () {
        var _this = this;
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.click();
        input.onchange = function () {
            var file = input.files[0];
            if (/^image\//.test(file.type)) {
                _this.uploadImage(file);
            }
            else {
                _this.error.emit('You can only upload images');
            }
        };
    };
    JournalEditorComponent.prototype.placeInEditor = function (url) {
        var range = this.editor.getSelection();
        this.editor.insertEmbed(range.index, 'image', url);
    };
    JournalEditorComponent.prototype.uploadImage = function (file) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loading.present();
        this.api.postImage({ image: file }).subscribe(function (response) {
            _this.placeInEditor(response.uploads.image);
            loading.dismiss();
        });
    };
    return JournalEditorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], JournalEditorComponent.prototype, "error", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], JournalEditorComponent.prototype, "textChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], JournalEditorComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], JournalEditorComponent.prototype, "modules", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], JournalEditorComponent.prototype, "text", null);
JournalEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'journal-editor',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/components/journal-editor/journal-editor.html"*/'<quill-editor\n    [(ngModel)]="_text"\n    [style]="{ height: height }"\n    [modules]="modules"\n    (onContentChanged)="contentChanged( $event );"\n    (onEditorCreated)="editorCreated( $event )"\n></quill-editor>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/components/journal-editor/journal-editor.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], JournalEditorComponent);

//# sourceMappingURL=journal-editor.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.segments = 4;
        this.progressSegments = new Array(this.segments).fill(0);
        this.perSegment = 100 / this.segments;
        this.perSegmentWidth = this.perSegment + '%';
    }
    ProgressBarComponent.prototype.getSegmentProgress = function (segmentNo, progress) {
        var segmentMax = this.perSegment * (segmentNo + 1);
        var segmentMin = this.perSegment * segmentNo;
        if (progress >= segmentMax) {
            this.progressSegments[segmentNo] = 100;
            return '100%';
        }
        if (progress <= segmentMin) {
            this.progressSegments[segmentNo] = 0;
            return '0%';
        }
        var segmentAmt = progress - segmentMin;
        var amt = Math.round(100 * segmentAmt / this.perSegment);
        this.progressSegments[segmentNo] = amt;
        return amt + "%";
    };
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "progress", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "segments", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/components/progress-bar/progress-bar.html"*/'<div\n    class=\'progress-bar-container\'\n    margin-vertical\n>\n    <div\n        *ngFor=\'let progressSegment of progressSegments; index as index\'\n        [style.width]=\'perSegmentWidth\'\n        class=\'progress-bar-segment\'\n    >\n        <div\n            class=\'progress-bar\'\n            [style.width]=\'getSegmentProgress( index, progress )\'\n        >{{  progressSegment }}%</div>\n    </div>\n</div>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/components/progress-bar/progress-bar.html"*/
    })
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnderConstructionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnderConstructionComponent = (function () {
    function UnderConstructionComponent() {
    }
    return UnderConstructionComponent;
}());
UnderConstructionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'under-construction',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/components/under-construction/under-construction.html"*/'<img src=\'assets/imgs/under-construction.png\'>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/components/under-construction/under-construction.html"*/
    }),
    __metadata("design:paramtypes", [])
], UnderConstructionComponent);

//# sourceMappingURL=under-construction.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityListComponent; });
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



var ActivityListComponent = (function () {
    function ActivityListComponent(api, events, navCtrl) {
        this.api = api;
        this.events = events;
        this.navCtrl = navCtrl;
        this.activities = [];
        this.filterEnrolled = true;
        this.format = '';
        this.enrolledIds = [];
    }
    ActivityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enrolledIds = this.getEnrolledIds();
        this.events.subscribe('activityEnrolled', function (activity) {
            _this.enrolledIds = _this.getEnrolledIds();
        });
    };
    ActivityListComponent.prototype.getEnrolledIds = function () {
        return this.api.userActivities.map(function (item) {
            return item.pk;
        });
    };
    ActivityListComponent.prototype.activityInfo = function (activity) {
        this.navCtrl.push('ActivityInfoPage', {
            id: activity.pk,
            activity: activity,
            enrolled: this.enrolledIds,
        });
    };
    return ActivityListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ActivityListComponent.prototype, "activities", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], ActivityListComponent.prototype, "filterEnrolled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ActivityListComponent.prototype, "format", void 0);
ActivityListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'activity-list',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/home/activity-list/activity-list.html"*/'<content-grid>\n<ng-container *ngFor=\'let activity of activities\'>\n\n    <ion-card\n        margin-bottom\n        (click)=\'activityInfo( activity )\'\n        *ngIf=\'!filterEnrolled || enrolledIds.indexOf( activity.pk ) == -1\'\n    >\n\n    <ion-item>\n        <ion-thumbnail item-start>\n        <img alt=\'\' class=\'circle-pic\'\n        [src]=\'activity.pictureUrl || "assets/imgs/activity-list.png"\'\n        >\n        </ion-thumbnail>\n        <h2>{{ activity.title }} <small style="color:#928f8f">({{ activity.journal_count }} Challenges )</small> </h2>\n        <ion-icon name="md-calendar"></ion-icon>\n        <p style="display: -webkit-inline-box;">{{ activity.modified | date:\'d-MMM HH:mm\' }}</p>\n        <!-- <div class=\'activity-info\' [ngClass]=\'"format__" + format\'>\n\n            <p class=\'activity-info--title\'>\n                <ion-icon\n                    class=\'activity-info--enrolled\'\n                    name=\'checkmark-circle\'\n                    item-end\n                    color=\'secondary\'\n                    *ngIf=\'enrolledIds.indexOf( activity.pk ) != -1\'\n                ></ion-icon>\n                {{ activity.title }}\n            </p>\n\n            <p class=\'activity-info--description\'>\n                {{ activity.description }}\n            </p>\n        </div> -->\n\n    </ion-item>\n    <ion-card-content>\n            <p>{{ activity.description}}</p>\n    </ion-card-content>\n\n    </ion-card>\n\n</ng-container>\n</content-grid>'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/home/activity-list/activity-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ActivityListComponent);

//# sourceMappingURL=activity-list.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiProvider = (function () {
    function ApiProvider(alertCtrl, events, http, loadingCtrl, settings, toastCtrl, utils) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.settings = settings;
        this.toastCtrl = toastCtrl;
        this.utils = utils;
        this.activities = [];
        this.httpOptions = { withCredentials: true };
        this.userActivities = [];
        this.user = this.settings.user;
        this.events.subscribe('login', function (user) {
            _this.user = _this.settings.user;
            _this.refreshData();
        });
    }
    ApiProvider.prototype.addUserActivity = function (activity) {
        var activitySummary = {
            pk: activity.id,
            title: activity.title,
            description: activity.briefDescription,
            pictureUrl: activity.pictureUrl,
            fromDate: activity.fromDate,
            toDate: activity.toDate,
            fromTime: activity.fromTime,
            toTime: activity.toTime,
            locations: activity.locations,
            state: 'Enrolled',
        };
        var userActivityPks = this.userActivities.map(function (item) { return item.pk; });
        if (userActivityPks.indexOf(activitySummary.pk) == -1) {
            this.userActivities.unshift(activitySummary);
            return activitySummary;
        }
    };
    ApiProvider.prototype.deleteUserActivity = function (userActivityId) {
        var url = this.getUrl("UserActivity/" + userActivityId + "/");
        return this.post(url, {});
    };
    ApiProvider.prototype.enrollActivity = function (activity) {
        var _this = this;
        if (!this.user.userId) {
            alert('User ID not found!');
            throw ('User ID not found!');
        }
        var url = this.getUrl('UserActivity/');
        return this.post(url, {
            user: this.user.userId,
            activity: activity.id,
        })
            .do(function () {
            var activitySummary = _this.addUserActivity(activity);
            _this.events.publish('activityEnrolled', activitySummary);
        });
    };
    ApiProvider.prototype.get = function (url, options) {
        return this.http.get(url, options || this.httpOptions)
            .map(function (response) { return response.json(); });
    };
    ApiProvider.prototype.getActivity = function (activityId) {
        var url = this.getUrl("Activity/" + activityId + "/");
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getActivityList = function () {
        var url = this.getUrl('ActivityQuery/');
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getAppFeature = function (name) {
        var resource = 'AppFeature/';
        if (name) {
            resource = "" + resource + name + "/";
        }
        var url = this.getUrl(resource);
        return this.get(url);
    };
    ApiProvider.prototype.getInvitation = function (invitationId) {
        var url = this.getUrl("Invitation/" + invitationId);
        return this.get(url);
    };
    ApiProvider.prototype.getInvitationChatHistory = function (invitationId) {
        var url = this.getUrl("InvitationChatMessage/" + invitationId + "/");
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getInvitationTeams = function (invitationId) {
        var url = this.getUrl("InvitationTeams/" + invitationId + "/");
        return this.get(url);
    };
    ApiProvider.prototype.getLearningJournal = function (learningJournalId) {
        var resource = 'LearningJournal/';
        if (learningJournalId) {
            resource = "" + resource + learningJournalId + "/";
        }
        var url = this.getUrl(resource);
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getMessagingActivities = function (user) {
        var url = this.getUrl("MessagingActivities/" + user.userId + "/");
        return this.get(url);
    };
    ApiProvider.prototype.getMyGroups = function () {
        var url = this.getUrl('MyGroups/');
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getMyGroupsWithUsers = function () {
        var url = this.getUrl('MyGroupsWithUsers/');
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getOrigin = function () {
        return '';
        //return 'https://yakamoz.kuriocities.com';
    };
    ApiProvider.prototype.getUrl = function (resource, version) {
        if (version === void 0) { version = 'v1'; }
        if (!resource) {
            return null;
        }
        return this.getOrigin() + "/api/" + version + "/" + resource;
    };
    ApiProvider.prototype.getUserActivities = function (activityId) {
        var url = this.getUrl('UserActivity/');
        if (activityId) {
            url = "" + url + activityId + "/";
        }
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getUserActivityChatHistory = function (userActivityId) {
        var url = this.getUrl("UserActivityChatMessage/" + userActivityId + "/");
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getUserActivityJournal = function (userActivityId) {
        var resource = 'UserActivityJournal/';
        if (userActivityId) {
            resource = "" + resource + userActivityId + "/";
        }
        var url = this.getUrl(resource);
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.getUserActivityToDo = function (userActivityToDoId) {
        var resource = 'UserActivityToDo/';
        if (userActivityToDoId !== undefined) {
            resource = "" + resource + userActivityToDoId + "/";
        }
        var url = this.getUrl(resource);
        return this.get(url);
    };
    ApiProvider.prototype.getUserProfile = function () {
        var url = this.getUrl('UserProfile/');
        return this.get(url)
            .map(function (response) {
            return response.data;
        });
    };
    ApiProvider.prototype.loading = function (content, duration, otherOptions) {
        if (duration === void 0) { duration = 3000; }
        var loader = this.loadingCtrl.create(__assign({ content: content, duration: duration }, (otherOptions || {})));
        loader.present();
        return loader;
    };
    ApiProvider.prototype.post = function (url, data, options, json) {
        if (!url) {
            debugger;
        }
        var postData;
        if (json) {
            postData = JSON.stringify(data);
        }
        else {
            postData = new FormData();
            for (var key in data) {
                postData.append(key, data[key]);
            }
        }
        return this.http.post(url, postData, options || this.httpOptions)
            .map(function (response) {
            return response.json();
        });
    };
    ApiProvider.prototype.postUserActivityJournal = function (userActivityId, data) {
        var resource = "UserActivityJournal/" + userActivityId + "/";
        var url = this.getUrl(resource);
        return this.post(url, data);
    };
    ApiProvider.prototype.postChangePassword = function (data) {
        var url = this.getUrl('ChangePassword/');
        return this.post(url, data, null, true);
    };
    ApiProvider.prototype.postFeedback = function (data) {
        var url = this.getUrl('Feedback/');
        return this.post(url, data);
    };
    ApiProvider.prototype.postImage = function (data) {
        var url = this.getUrl("Image/");
        return this.post(url, data);
    };
    ApiProvider.prototype.postLearningJournal = function (learningJournalId, data) {
        var resource = 'LearningJournal/';
        if (learningJournalId) {
            resource = "" + resource + learningJournalId + "/";
        }
        var url = this.getUrl(resource);
        return this.post(url, data);
    };
    ApiProvider.prototype.postLearningJournalActivity = function (learningJournalId, data) {
        var url = this.getUrl("LearningJournalActivity/" + learningJournalId + "/");
        return this.post(url, data);
    };
    ApiProvider.prototype.postRegister = function (data) {
        var url = this.getUrl('Register/');
        return this.post(url, data, null, true);
    };
    ApiProvider.prototype.postUserActivityToDo = function (userActivityToDoId, data) {
        var resource = "UserActivityToDo/" + userActivityToDoId + "/";
        var url = this.getUrl(resource);
        return this.post(url, data);
    };
    ApiProvider.prototype.refreshData = function () {
        var _this = this;
        this.getUserActivities()
            .subscribe(function (data) {
            _this.userActivities = data;
        });
        this.getActivityList()
            .subscribe(function (data) {
            _this.activities = data;
        });
    };
    ApiProvider.prototype.sendInvitations = function (data) {
        var url = this.getUrl("Invitation/");
        return this.post(url, data, null, true);
    };
    ApiProvider.prototype.setUserActivityTeam = function (data) {
        var url = this.getUrl('UserActivityTeam/');
        return this.post(url, data, null, true);
    };
    ApiProvider.prototype.setUserActivityStateCompleted = function (activity) {
        var activityId = activity.id;
        for (var _i = 0, _a = this.userActivities; _i < _a.length; _i++) {
            var userActivity = _a[_i];
            if (userActivity.pk == activityId) {
                if (userActivity.state.toLowerCase() == 'started') {
                    userActivity.state = 'Completed';
                }
                break;
            }
        }
    };
    ApiProvider.prototype.setUserActivityStateStarted = function (activity) {
        var activityId = activity.id;
        for (var _i = 0, _a = this.userActivities; _i < _a.length; _i++) {
            var userActivity = _a[_i];
            if (userActivity.pk == activityId) {
                if (userActivity.state.toLowerCase() == 'enrolled') {
                    userActivity.state = 'Started';
                }
                break;
            }
        }
    };
    ApiProvider.prototype.toast = function (options) {
        return this.toastCtrl.create(options);
    };
    ApiProvider.prototype.userActivityAction = function (activityId, data) {
        var url = this.getUrl("UserActivityAction/" + activityId + "/");
        return this.post(url, data, null);
    };
    return ApiProvider;
}());
ApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
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



var MyApp = (function () {
    function MyApp(api, platform) {
        this.api = api;
        this.platform = platform;
        this.adminGroups = [
            'KCT-Checker',
            'KCT-Creator',
            'KCT-Inviter',
            'KCT-Activity-Data',
        ];
        this.rootPage = 'HomePage';
        this.pages = [
            { title: 'Activities', component: 'HomePage', icon: 'home' },
            //    { title: 'Notifications',   component: 'NotificationsPage', icon: 'notifications' },
            //    { title: 'Preferences',     component: 'PreferencesPage',   icon: 'heart'         },
            { title: 'Network', component: 'NetworkPage', icon: 'people' },
            //    { title: 'Learner Profile', component: 'ProfilePage',       icon: 'pie'           },
            //    { title: 'Leaderboard',     component: 'LeaderboardPage',   icon: 'ribbon'        },
            { title: 'Messaging', component: 'MessagingPage', icon: 'chatbubbles' },
            { title: 'Feedback', component: 'FeedbackPage', icon: 'mail' },
            { title: 'To Do List', component: 'TodoListPage', icon: 'md-done-all' },
        ];
    }
    MyApp.prototype.onWebkitfullscreenchange = function (event) {
        if (this.platform.is('android')) {
            document.webkitExitFullscreen();
        }
    };
    MyApp.prototype.canAccessAdmin = function () {
        var _this = this;
        if (!this.api.settings.user.groups) {
            return false;
        }
        return this.api.settings.user.groups.some(function (item) { return _this.adminGroups.indexOf(item) != -1; });
    };
    MyApp.prototype.changePassword = function () {
        this.nav.push('ChangePasswordPage');
    };
    MyApp.prototype.logout = function () {
        this.api.settings.clearUser();
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component, { component: page.component });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('webkitfullscreenchange'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyApp.prototype, "onWebkitfullscreenchange", null);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>KurioCities</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content>\n    <ion-list>\n\n      <ion-item detail-none class=\'menu-item\'>\n\n        <ion-icon name=\'contact\'\n          style=\'margin-right: 0.5em;\'\n        ></ion-icon>\n\n        <span class=\'strong\'>{{ api.settings.user.userName }}</span>\n\n        <button item-right ion-button clear menuClose (click)=\'changePassword()\'>\n          <ion-icon name="lock" color=\'dark\'></ion-icon>\n        </button>\n\n        <button item-right ion-button clear menuClose (click)="logout()">\n          <ion-icon name="log-out" color=\'dark\'></ion-icon>\n        </button>\n\n      </ion-item>\n\n\n      <button ion-item menuClose detail-push\n        class=\'menu-item\'\n        *ngFor="let p of pages"\n        (click)="openPage(p)"\n      >\n        <ion-icon [name]="p?.icon" color=\'primary\'></ion-icon>\n        <span class=\'menu-item--text\'>{{p.title}}</span>\n      </button>\n\n\n      <a ion-item menuClose\n        class=\'menu-item\'\n        target=\'_blank\'\n        href=\'/ae\'\n        *ngIf=\'canAccessAdmin()\'\n      >\n        <ion-icon name="at" color=\'primary\'></ion-icon>\n        <span class=\'menu-item--text\'>KurioCities Admin</span>\n      </a>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [],
        imports: [],
        exports: []
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerValidationBase; });
var AnswerValidationBase = (function () {
    function AnswerValidationBase(activity, question, userActivity, answer) {
        this.activity = activity;
        this.question = question;
        this.userActivity = userActivity;
        this.answer = answer;
    }
    AnswerValidationBase.prototype.answerCorrect = function (message, mediaUrl, mediaType) {
        return {
            isCorrect: true,
            text: message || this.question.feedbackCorrect || 'Correct!',
            mediaUrl: this.question.feedbackCorrectUrl,
            mediaType: this.question.feedbackCorrectUrlType,
        };
    };
    AnswerValidationBase.prototype.answerIncorrect = function (message, mediaUrl, mediaType) {
        return {
            isCorrect: false,
            text: message || this.question.feedbackIncorrect || 'Wrong answer!',
            mediaUrl: this.question.feedbackIncorrectUrl,
            mediaType: this.question.feedbackIncorrectUrlType,
        };
    };
    AnswerValidationBase.prototype.error = function (message) {
        return {
            isCorrect: false,
            text: message,
            mediaUrl: null,
            mediaType: null,
        };
    };
    return AnswerValidationBase;
}());

//# sourceMappingURL=answer-validation-base.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map