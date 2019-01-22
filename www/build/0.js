webpackJsonp([0],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityAnswerPageModule", function() { return ActivityAnswerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_answer__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__answer_action_answer_action__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_camera_answer_camera__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__answer_number_answer_number__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__answer_radio_answer_radio__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__answer_table_answer_table__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__answer_text_answer_text__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__answer_upload_answer_upload__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var declarations = [
    __WEBPACK_IMPORTED_MODULE_2__activity_answer__["a" /* ActivityAnswerPage */],
    __WEBPACK_IMPORTED_MODULE_4__answer_action_answer_action__["a" /* AnswerActionComponent */],
    __WEBPACK_IMPORTED_MODULE_5__answer_camera_answer_camera__["a" /* AnswerCameraComponent */],
    __WEBPACK_IMPORTED_MODULE_6__answer_number_answer_number__["a" /* AnswerNumberComponent */],
    __WEBPACK_IMPORTED_MODULE_7__answer_radio_answer_radio__["a" /* AnswerRadioComponent */],
    __WEBPACK_IMPORTED_MODULE_8__answer_table_answer_table__["a" /* AnswerTableComponent */],
    __WEBPACK_IMPORTED_MODULE_9__answer_text_answer_text__["a" /* AnswerTextComponent */],
    __WEBPACK_IMPORTED_MODULE_10__answer_upload_answer_upload__["a" /* AnswerUploadComponent */],
];
var ActivityAnswerPageModule = (function () {
    function ActivityAnswerPageModule() {
    }
    return ActivityAnswerPageModule;
}());
ActivityAnswerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: declarations.slice(),
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_answer__["a" /* ActivityAnswerPage */]),
        ],
        entryComponents: declarations.slice(),
    })
], ActivityAnswerPageModule);

//# sourceMappingURL=activity-answer.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_feedback_modal_answer_feedback_modal__ = __webpack_require__(198);
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







var ActivityAnswerPage = (function () {
    function ActivityAnswerPage(alertCtrl, api, domSanitizer, events, modalCtrl, navCtrl, navParams, platform) {
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.domSanitizer = domSanitizer;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.appFeatures = {};
        this.photo = null;
        this.photoChanged = false;
        this.question = {};
        this.questionIdx = null;
        this.scores = {};
        this.spinner = false;
        this.time = '';
        this.userActivity = {};
    }
    ActivityAnswerPage.prototype.activityJournal = function () {
        this.navCtrl.push('ActivityJournalPage', {
            activity: this.activity,
            userActivity: this.userActivity,
        });
    };
    ActivityAnswerPage.prototype.activityCompleted = function () {
        this.api.setUserActivityStateCompleted(this.activity);
        this.createAlert(this.getCompletionMessage(), this.gotoActivityIntroPage.bind(this)).present();
    };
    ActivityAnswerPage.prototype.answerChanged = function (answer) {
        if (answer.objectUrl) {
            this.objectUrl = answer.objectUrl;
            this.photo = answer.file;
            answer = answer.filename;
        }
        var status = new __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["b" /* ValidateAnswer */](this.activity, this.question, this.userActivity, answer).status;
        this.userActivityAction('completed', this.userActivity, this.questionIdx, answer, this.photo, status);
    };
    ActivityAnswerPage.prototype.changeQuestion = function (offset) {
        var index = this.questionIdx + offset;
        if (index < 0 || index > this.activity.questions.length - 1) {
            return;
        }
        this.navCtrl.push('ActivityAnswerPage', {
            questionIdx: index,
            activity: this.activity,
            lastQuestion: this.lastQuestion,
            userActivity: this.userActivity,
            appFeatures: this.appFeatures,
        }, {
            animate: true,
            animation: 'ios-transition',
            duration: 350,
            direction: offset > 0 ? 'forward' : 'back',
        });
    };
    ActivityAnswerPage.prototype.chat = function () {
        this.navCtrl.push('ChatPage', { userActivity: this.userActivity });
    };
    ActivityAnswerPage.prototype.createAlert = function (message, okHandler, options) {
        options = __assign({ message: message, buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        if (okHandler) {
                            okHandler();
                        }
                        ;
                    },
                },
            ], enableBackdropDismiss: false }, options);
        return this.alertCtrl.create(options);
    };
    ActivityAnswerPage.prototype.createModal = function (_a) {
        var component = _a.component, componentParams = _a.componentParams, modalOptions = _a.modalOptions, onDidDismiss = _a.onDidDismiss;
        var options = __assign({ enableBackdropDismiss: false }, modalOptions);
        var modal = this.modalCtrl.create(component, componentParams, options);
        modal.onDidDismiss(onDidDismiss);
        return modal;
    };
    ActivityAnswerPage.prototype.createModalAnswerFeedback = function (answer, status) {
        var _this = this;
        return this.createModal({
            component: __WEBPACK_IMPORTED_MODULE_5__answer_feedback_modal_answer_feedback_modal__["a" /* AnswerFeedbackModalComponent */],
            componentParams: {
                activity: this.activity,
                question: this.question,
                userActivity: this.userActivity,
                answer: answer,
                status: status,
            },
            modalOptions: {
                enableBackdropDismiss: false,
            },
            onDidDismiss: function (response) {
                if (response == 'next') {
                    _this.nextStep();
                }
            },
        });
    };
    ActivityAnswerPage.prototype.featureEnabled = function (name) {
        var feature = this.appFeatures[name];
        if (feature === undefined) {
            return true;
        }
        return feature;
    };
    ActivityAnswerPage.prototype.getCompletionMessage = function () {
        var checker, msg = '';
        msg += 'Congratulations! You have completed this activity. ';
        var scores = this.getScores();
        if (scores != 'N/A') {
            msg += "Your temporary score is " + scores + ". ";
        }
        var needsChecker = this.activity.questions
            .some(function (item) {
            return item.needsChecker && item.questionType == 'noAutoCorrection';
        });
        if (needsChecker) {
            if (this.activity.needsCoach) {
                checker = this.activity.coach;
            }
            else {
                checker = this.activity.checker;
            }
            msg = msg += "<p>A notification will be sent to " + checker + " who will assign additional scores.";
        }
        return msg;
    };
    ActivityAnswerPage.prototype.getResponseAnswer = function (response) {
        if (this.question.questionType == 'table') {
            var tableAnswer = response.data.answer;
            if (tableAnswer instanceof Array) {
                return tableAnswer;
            }
            else {
                return [];
            }
        }
        else {
            return response.data.answer;
        }
    };
    ActivityAnswerPage.prototype.getScores = function () {
        var scores = this.scores.questions;
        if (!scores) {
            return 'N/A';
        }
        var totalScore = [0, 0];
        var questions = this.activity.questions;
        Object.keys(scores).map(function (key, idx) {
            var _a = scores[key], score = _a[0], maxScore = _a[1];
            if (questions[idx].needsChecker) {
                if (score === 0) {
                    return;
                }
            }
            totalScore[0] += score;
            totalScore[1] += maxScore;
        });
        var score = totalScore.join('/');
        var pct = Math.round(100 * totalScore[0] / totalScore[1]);
        return score + " (" + pct + "%)";
    };
    ActivityAnswerPage.prototype.goPrev = function () {
        this.changeQuestion(-1);
    };
    ActivityAnswerPage.prototype.goNext = function () {
        this.changeQuestion(1);
    };
    ActivityAnswerPage.prototype.gotoActivityIntroPage = function () {
        this.navCtrl.popToRoot({ animate: false });
        this.navCtrl.push('ActivityIntroPage', { id: this.activity.id }, { animate: true });
    };
    ActivityAnswerPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!this.api.user.userId) {
            this.navCtrl.setRoot('HomePage');
            return;
        }
        this.questionIdx = this.navParams.get('questionIdx');
        this.activity = this.navParams.get('activity');
        this.appFeatures = this.navParams.get('appFeatures');
        this.lastQuestion = this.navParams.get('lastQuestion');
        this.userActivity = this.navParams.get('userActivity');
        if (this.questionIdx === undefined || !this.activity) {
            this.navCtrl.pop().catch(function () {
                _this.navCtrl.setRoot('HomePage');
            });
            return;
        }
        this.question = this.activity.questions[this.questionIdx];
        this.time = new Date().valueOf().toString();
        this.userActivityAction('started', this.userActivity, this.questionIdx);
        this.navBar.backButtonClick = function (event) {
            _this.gotoActivityIntroPage();
        };
    };
    ActivityAnswerPage.prototype.ionViewDidLeave = function () {
        var videos = Array.from(document.querySelectorAll('video'));
        videos.map(function (item) { item.pause(); });
    };
    ActivityAnswerPage.prototype.isPhotoUpload = function () {
        var notPhotoUploadTypes = ['upload', 'action'];
        return this.question.photoUpload
            && notPhotoUploadTypes.indexOf(this.question.questionType) == -1;
    };
    ActivityAnswerPage.prototype.nextStep = function () {
        var _this = this;
        if (this.questionIdx == this.lastQuestion + 1) {
            this.lastQuestion += 1;
            this.events.publish('lastQuestion', this.lastQuestion);
        }
        if (this.questionIdx == this.activity.questions.length - 1) {
            this.activityCompleted();
            return;
        }
        this.changeQuestion(1);
        this.spinner = true;
        setTimeout(function () {
            _this.spinner = false;
        }, 500);
    };
    ActivityAnswerPage.prototype.photoChange = function (event) {
        this.objectUrl = event.objectUrl;
        this.photo = event.file;
        if (this.objectUrl) {
            this.thumbnail = this.domSanitizer.bypassSecurityTrustResourceUrl(this.objectUrl);
            this.photoChanged = true;
        }
        else {
            this.thumbnail = null;
            this.photoChanged = false;
        }
    };
    ActivityAnswerPage.prototype.userActivityAction = function (action, userActivity, questionIdx, answer, photo, status) {
        var _this = this;
        if (answer === void 0) { answer = ''; }
        if (photo === void 0) { photo = null; }
        if (status === void 0) { status = null; }
        var isCorrect = (status === null) ? null : status.isCorrect;
        this.api.userActivityAction(this.activity.id, {
            action: action,
            question: questionIdx,
            answer: JSON.stringify(answer),
            upload: photo,
            isCorrect: isCorrect,
        })
            .subscribe(function (response) {
            _this.scores = response.scores;
            if (answer) {
                userActivity.answers[_this.questionIdx] = _this.getResponseAnswer(response);
            }
            window.URL.revokeObjectURL(_this.objectUrl);
            if (action == 'completed') {
                _this.userActivityActionCompleted(response, userActivity, answer, status);
            }
        });
    };
    ActivityAnswerPage.prototype.userActivityActionCompleted = function (response, userActivity, answer, status) {
        if (this.question.questionType == 'upload'
            || this.question.questionType == 'action') {
            this.nextStep();
            return;
        }
        if (this.question.questionType == 'noAutoCorrection') {
            if (!this.question.needsChecker) {
                this.nextStep();
                return;
            }
            else {
                this.createAlert('Your answer will be sent for correction.', this.nextStep.bind(this)).present();
                return;
            }
        }
        var modal = this.createModalAnswerFeedback(answer, status);
        modal.present();
    };
    return ActivityAnswerPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Navbar */])
], ActivityAnswerPage.prototype, "navBar", void 0);
ActivityAnswerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-activity-answer',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/activity-answer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf=\'questionIdx != null\'>Question {{ questionIdx + 1 }}</ion-title>\n\n    <ion-buttons right>\n      <button ion-button (click)=\'activityJournal()\'\n        *ngIf=\'featureEnabled( "Activity-Journal" )\'\n      >\n          <ion-icon name=\'ios-book\'></ion-icon>\n      </button>\n\n      <button ion-button (click)=\'chat()\'\n        *ngIf=\'userActivity.invitation_id && featureEnabled( "Messaging" )\'\n      >\n        <ion-icon name=\'chatbubbles\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<content-grid>\n\n  <div *ngIf=\'\n    question?.pictureUrlType?.toLowerCase().indexOf( "video" ) != -1\n    && platform.is( "mobile" )\n    && platform.isPortrait();\n    then blkVideo; else blkImg\n  \'></div>\n\n  <div class=\'divider\'></div>\n\n  <ion-spinner *ngIf=\'spinner\'></ion-spinner>\n  <p class=\'question\' *ngIf=\'!spinner\'>{{ question?.question }}</p>\n\n  <div margin [ngSwitch]=\'question?.questionType\'>\n\n    <answer-radio *ngSwitchCase=\'"multipleChoice"\'\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      [photoChanged]=\'photoChanged\'\n      (data)=\'answerChanged($event)\'\n    ></answer-radio>\n\n    <answer-number *ngSwitchCase=\'"math"\'\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      [photoChanged]=\'photoChanged\'\n      (data)=\'answerChanged($event)\'\n      ></answer-number>\n\n    <answer-number *ngSwitchCase=\'"logic"\'\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      [photoChanged]=\'photoChanged\'\n      (data)=\'answerChanged($event)\'\n    ></answer-number>\n\n    <answer-table *ngSwitchCase=\'"table"\'\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      [photoChanged]=\'photoChanged\'\n      (data)=\'answerChanged($event)\'\n    ></answer-table>\n\n    <answer-text *ngSwitchCase=\'"fillInBlanks"\'\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      [photoChanged]=\'photoChanged\'\n      (data)=\'answerChanged($event)\'\n    ></answer-text>\n\n    <answer-text *ngSwitchCase=\'"noAutoCorrection"\'\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      [photoChanged]=\'photoChanged\'\n      (data)=\'answerChanged($event)\'\n    ></answer-text>\n\n    <answer-upload *ngSwitchCase=\'"upload"\'\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      (data)=\'answerChanged($event)\'\n    ></answer-upload>\n\n    <answer-action *ngSwitchCase=\'"action"\'\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      (data)=\'answerChanged($event)\'\n    ></answer-action>\n\n  </div>\n\n  <div *ngIf=\'isPhotoUpload()\' text-center>\n    <img\n      *ngIf=\'userActivity.uploads [questionIdx] && !thumbnail\'\n      [src]=\'userActivity.uploads [questionIdx] + "?" + time\'\n      class=\'thumbnail\'\n    >\n\n    <img\n      *ngIf=\'thumbnail\'\n      [src]=\'thumbnail\'\n      class=\'thumbnail\'\n    >\n\n    <answer-camera\n      [question]=\'question\'\n      [questionIdx]=\'questionIdx\'\n      [userActivity]=\'userActivity\'\n      (data)=\'photoChange($event)\'\n    ></answer-camera>\n  </div>\n\n</content-grid>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar color=\'light\'>\n\n    <ion-buttons left>\n        <button ion-button icon-only color=\'primary\' (click)=\'goPrev()\' [disabled]=\'!questionIdx\'>\n            <ion-icon name=\'arrow-dropleft-circle\'></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n        <button\n            ion-button icon-only color=\'primary\'\n            (click)=\'goNext()\'\n            [disabled]=\'questionIdx > lastQuestion || questionIdx == activity?.questions.length - 1\'\n        >\n            <ion-icon name=\'arrow-dropright-circle\'></ion-icon>\n        </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n<ng-template #blkVideo>\n  <p class=\'avatar-bullet\'>{{ question.avatarBullet1 }}</p>\n\n  <app-media\n      *ngIf=\'question.pictureUrl\'\n      [mediaType]   = \'question.pictureUrlType\'\n      [mediaUrl]    = \'question.pictureUrl\'\n      cssClassImage = \'image\'\n      cssClassVideo = \'video__portrait\'\n      defaultImage  = \'activity-answer.png\'\n  ></app-media>\n\n  <p class=\'avatar-bullet\'>{{ question.avatarBullet2 }}</p>\n</ng-template>\n\n\n<ng-template #blkImg>\n  <img *ngIf=\'!question.pictureUrl && activity\' class=\'image\' src =\'assets/imgs/activity-answer.png\'>\n\n  <app-media\n      *ngIf=\'question.pictureUrl\'\n      [mediaType]   = \'question.pictureUrlType\'\n      [mediaUrl]    = \'question.pictureUrl\'\n      cssClassImage = \'image\'\n      cssClassVideo = \'image video__landscape\'\n      defaultImage  = \'activity-answer.png\'\n  ></app-media>\n\n  <p class=\'avatar-bullet\'>{{ question.avatarBullet1 }}</p>\n  <p class=\'avatar-bullet\'>{{ question.avatarBullet2 }}</p>\n</ng-template>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/activity-answer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]])
], ActivityAnswerPage);

//# sourceMappingURL=activity-answer.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerActionComponent; });
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

var AnswerActionComponent = (function () {
    function AnswerActionComponent() {
        this.photoChanged = false;
        this.question = {};
        this.userActivity = {};
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.model = {};
        this.minYear = new Date().getFullYear();
        this.maxYear = this.minYear + 2;
    }
    AnswerActionComponent.prototype.answerChanged = function (event) {
        if (!this.model.answer || !this.model.deadline) {
            console.error('AnswerActionComponent: invalid data');
            return;
        }
        this.data.emit(this.userActivity.answers[this.questionIdx]);
    };
    AnswerActionComponent.prototype.ngOnInit = function () {
        this.userActivity.answers[this.questionIdx] = this.userActivity.answers[this.questionIdx] || {};
        this.model = this.userActivity.answers[this.questionIdx];
    };
    return AnswerActionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], AnswerActionComponent.prototype, "photoChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerActionComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], AnswerActionComponent.prototype, "questionIdx", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerActionComponent.prototype, "userActivity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], AnswerActionComponent.prototype, "data", void 0);
AnswerActionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'answer-action',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-action/answer-action.html"*/'<ion-item>\n    <ion-textarea\n        [(ngModel)]=\'model.answer\'\n        placeholder=\'Insert here the specific action you will take\'\n        #fieldAnswer=\'ngModel\'\n    ></ion-textarea>\n</ion-item>\n\n\n<ion-item margin-top>\n    <ion-label stacked></ion-label>\n    <ion-datetime\n        [(ngModel)]=\'model.deadline\'\n        displayFormat=\'DD-MMM-YYYY\' [min]=\'minYear\' [max]=\'maxYear\'\n        placeholder=\'Insert here the date by which the action will be completed\'\n        #fieldDeadline=\'ngModel\'\n    ></ion-datetime>\n</ion-item>\n\n\n<button\n    *ngIf=\'!userActivity?.completed\'\n    ion-button block round\n    [disabled]=\'( fieldAnswer.pristine && fieldDeadline.pristine ) || !model.answer || !model.deadline\'\n    (click)=\'answerChanged()\'\n>OK</button>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-action/answer-action.html"*/
    }),
    __metadata("design:paramtypes", [])
], AnswerActionComponent);

//# sourceMappingURL=answer-action.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerCameraComponent; });
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

var AnswerCameraComponent = (function () {
    function AnswerCameraComponent() {
        this.question = {};
        this.userActivity = {};
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AnswerCameraComponent.prototype.ngOnInit = function () { };
    //   const img  = this.userActivity.uploads[ this.questionIdx ];
    //   const time = new Date().valueOf();
    //   if ( img ){
    //     this.thumbnail = `${img}?${time}`;
    //   }
    // }
    AnswerCameraComponent.prototype.answerChanged = function (event) {
        var file = event.target.files[0];
        if (!file) {
            this.data.emit({
                file: null,
                objectUrl: null,
            });
        }
        else {
            this.data.emit({
                file: file,
                objectUrl: window.URL.createObjectURL(file),
            });
            // this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl( this.objectUrl );
        }
    };
    return AnswerCameraComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerCameraComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], AnswerCameraComponent.prototype, "questionIdx", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerCameraComponent.prototype, "userActivity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], AnswerCameraComponent.prototype, "data", void 0);
AnswerCameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'answer-camera',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-camera/answer-camera.html"*/'<p class=\'camera--icon-container\'>\n    <label class=\'camera\'>\n\n        <ion-icon name=\'camera\' color=\'primary\' class=\'camera--icon\'></ion-icon>\n\n        <input\n            type=\'file\'\n            accept=\'image/*\'\n            class=\'camera--file-input\'\n            (change)=\'answerChanged( $event )\'\n            capture\n        >\n    </label>\n</p>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-camera/answer-camera.html"*/
    }),
    __metadata("design:paramtypes", [])
], AnswerCameraComponent);

//# sourceMappingURL=answer-camera.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerNumberComponent; });
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

var AnswerNumberComponent = (function () {
    function AnswerNumberComponent() {
        this.photoChanged = false;
        this.question = {};
        this.userActivity = {};
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AnswerNumberComponent.prototype.answerChanged = function (event) {
        this.data.emit(event);
    };
    return AnswerNumberComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], AnswerNumberComponent.prototype, "photoChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerNumberComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], AnswerNumberComponent.prototype, "questionIdx", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerNumberComponent.prototype, "userActivity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], AnswerNumberComponent.prototype, "data", void 0);
AnswerNumberComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'answer-number',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-number/answer-number.html"*/'<ion-input\n  type=\'number\'\n  [(ngModel)]=\'userActivity.answers[ questionIdx ]\'\n  placeholder=\'Enter answer here...\'\n  #fieldAnswer=\'ngModel\'\n></ion-input>\n\n<button\n  ion-button block round\n  [disabled]=\'fieldAnswer.pristine && !photoChanged\'\n  (click)=\'answerChanged( userActivity.answers[ questionIdx ] )\'\n>OK</button>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-number/answer-number.html"*/
    }),
    __metadata("design:paramtypes", [])
], AnswerNumberComponent);

//# sourceMappingURL=answer-number.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerRadioComponent; });
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

var AnswerRadioComponent = (function () {
    function AnswerRadioComponent() {
        this.photoChanged = false;
        this.question = {};
        this.userActivity = {};
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AnswerRadioComponent.prototype.answerChanged = function (event) {
        this.data.emit(event);
    };
    AnswerRadioComponent.prototype.answerChangedRadio = function (event) {
        if (!this.question.photoUpload) {
            this.data.emit(event);
        }
    };
    return AnswerRadioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], AnswerRadioComponent.prototype, "photoChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerRadioComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], AnswerRadioComponent.prototype, "questionIdx", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerRadioComponent.prototype, "userActivity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], AnswerRadioComponent.prototype, "data", void 0);
AnswerRadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'answer-radio',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-radio/answer-radio.html"*/'<ion-list\n  radio-group\n  [(ngModel)]=\'userActivity.answers[ questionIdx ]\'\n  (ngModelChange)=\'answerChangedRadio( userActivity.answers[ questionIdx ] )\'\n  #fieldAnswer=\'ngModel\'\n>\n  <ion-item *ngFor=\'let item of question.choices; index as index\'>\n      <ion-label text-wrap>{{ item.choice }}</ion-label>\n      <ion-radio item-start\n        [value]=\'index\'\n        [ngClass]=\'{\n          "wrong-answer":   !item.isCorrect && fieldAnswer.pristine,\n          "correct-answer":  item.isCorrect && fieldAnswer.pristine\n        }\'\n      ></ion-radio>\n  </ion-item>\n</ion-list>\n\n<button\n  *ngIf=\'question.photoUpload\'\n  ion-button block round\n  [disabled]=\'fieldAnswer.pristine && !photoChanged\'\n  (click)=\'answerChanged( userActivity.answers[ questionIdx ] )\'\n>OK</button>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-radio/answer-radio.html"*/
    })
], AnswerRadioComponent);

//# sourceMappingURL=answer-radio.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerTableComponent; });
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

var AnswerTableComponent = (function () {
    function AnswerTableComponent() {
        this.photoChanged = false;
        this.question = {};
        this.userActivity = {};
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AnswerTableComponent.prototype.ngOnInit = function () {
        if (!(this.userActivity.answers[this.questionIdx] instanceof Array)) {
            this.userActivity.answers[this.questionIdx] = this.getTableArray();
        }
    };
    AnswerTableComponent.prototype.answerChanged = function (event) {
        this.data.emit(event);
    };
    AnswerTableComponent.prototype.getScrollHeight = function () {
        var tableRef = this.tableRef;
        if (tableRef) {
            return tableRef.nativeElement.scrollHeight + 75 + 'px';
        }
    };
    AnswerTableComponent.prototype.getResult = function (rowIndex, colIndex) {
        if (this.isDisabled(rowIndex, colIndex)) {
            return 'cell-disabled';
        }
        if (!this.question.table.results) {
            return '';
        }
        if (!this.question.table.results[rowIndex]) {
            return '';
        }
        return this.question.table.results[rowIndex][colIndex];
    };
    AnswerTableComponent.prototype.getTableArray = function () {
        var _this = this;
        return this.question.table.rows.map(function (item) {
            return _this.question.table.columns.map(function (item) {
                return null;
            });
        });
    };
    AnswerTableComponent.prototype.isDisabled = function (row, col) {
        if (!this.question.table
            || !this.question.table.cellValidations
            || !this.question.table.cellValidations[row]
            || !this.question.table.cellValidations[row][col]) {
            return false;
        }
        return this.question.table.cellValidations[row][col].validationType == 'disabled';
    };
    return AnswerTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], AnswerTableComponent.prototype, "photoChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerTableComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], AnswerTableComponent.prototype, "questionIdx", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerTableComponent.prototype, "userActivity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], AnswerTableComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('answertable'),
    __metadata("design:type", Object)
], AnswerTableComponent.prototype, "tableRef", void 0);
AnswerTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'answer-table',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-table/answer-table.html"*/'<button\n  margin-top\n  ion-button block round\n  (click)=\'answerChanged( userActivity.answers[ questionIdx ] )\'\n>OK</button>\n\n<ion-scroll\n    scrollX=\'true\' scrollY=\'true\' zoom=\'false\'\n    [style.height]=\'getScrollHeight()\'\n>\n    <table border=\'1\' align=\'center\' #answertable>\n        <thead>\n            <th>&nbsp;</th>\n            <th *ngFor=\'let column of question.table.columns\'>{{ column.label }}</th>\n        </thead>\n\n        <tbody>\n        <tr *ngFor=\'let row of question.table.rows; index as rowIndex\'>\n            <td class=\'strong\'>{{ row.label }}</td>\n            <td\n            *ngFor=\'let column of question.table.columns; index as colIndex\'\n            class=\'{{ getResult( rowIndex, colIndex ) }}\'\n            >\n                <ion-item>\n                    <ion-input\n                        *ngIf=\'!isDisabled( rowIndex, colIndex )\'\n                        [(ngModel)]=\'userActivity.answers [questionIdx] [rowIndex] [colIndex]\'\n                        text-center\n                        placeholder=\'...\'\n                    ></ion-input>\n                </ion-item>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</ion-scroll>\n\n<button\n  margin-top\n  ion-button block round\n  (click)=\'answerChanged( userActivity.answers[ questionIdx ] )\'\n>OK</button>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-table/answer-table.html"*/
    }),
    __metadata("design:paramtypes", [])
], AnswerTableComponent);

//# sourceMappingURL=answer-table.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerTextComponent; });
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

var AnswerTextComponent = (function () {
    function AnswerTextComponent() {
        this.photoChanged = false;
        this.question = {};
        this.userActivity = {};
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AnswerTextComponent.prototype.answerChanged = function (event) {
        this.data.emit(event);
    };
    return AnswerTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], AnswerTextComponent.prototype, "photoChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerTextComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], AnswerTextComponent.prototype, "questionIdx", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerTextComponent.prototype, "userActivity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], AnswerTextComponent.prototype, "data", void 0);
AnswerTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'answer-text',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-text/answer-text.html"*/'<ion-item>\n    <ion-textarea\n        [(ngModel)]=\'userActivity.answers[ questionIdx ]\'\n        placeholder=\'...\'\n        #fieldAnswer=\'ngModel\'\n    ></ion-textarea>\n</ion-item>\n\n<button\n    ion-button block round\n    [disabled]=\'fieldAnswer.pristine && !photoChanged\'\n    (click)=\'answerChanged( userActivity.answers[ questionIdx ] )\'\n>OK</button>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-text/answer-text.html"*/
    }),
    __metadata("design:paramtypes", [])
], AnswerTextComponent);

//# sourceMappingURL=answer-text.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerUploadComponent; });
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

var AnswerUploadComponent = (function () {
    function AnswerUploadComponent() {
        this.question = {};
        this.userActivity = {};
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.objectUrl = null;
        this.file = null;
        this.filename = '';
        this.submitDisabled = true;
    }
    AnswerUploadComponent.prototype.ngOnInit = function () { };
    AnswerUploadComponent.prototype.answerChanged = function (event) {
        var file = event.target.files[0];
        if (!file) {
            this.objectUrl = null;
            this.file = null;
            this.filename = '';
            this.submitDisabled = true;
            return;
        }
        this.objectUrl = window.URL.createObjectURL(file);
        this.file = file;
        this.filename = file.name;
        this.submitDisabled = false;
    };
    AnswerUploadComponent.prototype.submit = function () {
        this.data.emit({
            file: this.file,
            filename: this.filename,
            objectUrl: this.objectUrl,
        });
    };
    return AnswerUploadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerUploadComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], AnswerUploadComponent.prototype, "questionIdx", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AnswerUploadComponent.prototype, "userActivity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], AnswerUploadComponent.prototype, "data", void 0);
AnswerUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'answer-upload',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-upload/answer-upload.html"*/'<div *ngIf=\'userActivity.answers [questionIdx]\' margin-vertical>\n    Uploaded file:\n    <a  [href]=\'userActivity.uploads [questionIdx]\'\n        [download]=\'userActivity.answers [questionIdx]\'\n    >\n        {{ userActivity.answers [questionIdx] }}\n    </a>\n</div>\n\n<label margin-vertical>\n    <input\n        type=\'file\'\n        class=\'camera--file-input__\'\n        (change)=\'answerChanged( $event )\'\n    >\n</label>\n\n<button\n  ion-button block round\n  margin-vertical\n  [disabled]=\'submitDisabled\'\n  (click)=\'submit()\'\n>Upload</button>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/activity-answer/answer-upload/answer-upload.html"*/
    }),
    __metadata("design:paramtypes", [])
], AnswerUploadComponent);

//# sourceMappingURL=answer-upload.js.map

/***/ })

});
//# sourceMappingURL=0.js.map