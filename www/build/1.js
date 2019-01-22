webpackJsonp([1],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningJournalPageModule", function() { return LearningJournalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__learning_journal__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LearningJournalPageModule = (function () {
    function LearningJournalPageModule() {
    }
    return LearningJournalPageModule;
}());
LearningJournalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__learning_journal__["a" /* LearningJournalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__learning_journal__["a" /* LearningJournalPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], LearningJournalPageModule);

//# sourceMappingURL=learning-journal.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningJournalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LearningJournal = (function () {
    function LearningJournal() {
        this.id = null;
        this.title = '';
        this.text = '';
        this.questions = [];
    }
    return LearningJournal;
}());
var LearningJournalQuestion = (function () {
    function LearningJournalQuestion() {
    }
    return LearningJournalQuestion;
}());
var LearningJournalPage = (function () {
    function LearningJournalPage(api, navCtrl, navParams, toastCtrl, loadingCtrl, utils) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.utils = utils;
        this.appFeatures = {};
        this.data = {};
        this.error = '';
        this.segment = 'notes';
    }
    LearningJournalPage.prototype.addQuestion = function () {
        try {
            if (this.data.questions.length
                && !this.data.questions[this.data.questions.length - 1].text.trim()) {
                return;
            }
        }
        catch (e) {
            return;
        }
        this.data.questions.push(new LearningJournalQuestion());
    };
    LearningJournalPage.prototype.createActivity = function () {
        var _this = this;
        var activity = this.newActivity(this.data);
        var data = JSON.stringify(activity);
        if (!this.data.id) {
            throw ('Invalid Learning Journal ID');
        }
        var loading = this.utils.loading('Creating Activity...');
        this.api.postLearningJournalActivity(this.data.id, { data: data }).subscribe(function (response) {
            loading.dismiss();
            _this.api.refreshData();
            var options = { buttons: [{
                        text: 'Close',
                        role: 'cancel',
                        handler: function () {
                            setTimeout(function () { return _this.navCtrl.pop(); }, 500);
                        }
                    }] };
            var alert = _this.utils.alert("Activity " + response.data.title + " created", options, false);
            setTimeout(function () { return alert.present(); }, 500);
        });
    };
    LearningJournalPage.prototype.featureEnabled = function (name) {
        var feature = this.appFeatures[name];
        if (feature === undefined) {
            return true;
        }
        return feature;
    };
    LearningJournalPage.prototype.getAppFeatures = function () {
        var _this = this;
        this.api.getAppFeature().subscribe(function (response) {
            response.data.map(function (item) {
                _this.appFeatures[item.name] = item.enabled;
            });
        });
    };
    LearningJournalPage.prototype.ionViewDidEnter = function () {
        this.data = this.navParams.get('learningJournal') || new LearningJournal();
        this.getAppFeatures();
        setTimeout(this.resizeAllTextareas);
    };
    LearningJournalPage.prototype.newActivity = function (data) {
        var activity = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Activity */]();
        activity.title = data.title;
        activity.briefDescription = 'Please complete the following questions';
        activity.description = data.title;
        activity.status = 'Published';
        activity.username = this.api.user.userName;
        data.questions.map(function (item, index) {
            var question = new __WEBPACK_IMPORTED_MODULE_3__models__["b" /* Question */]();
            question.question = item.text;
            question.questionOrder = (index + 1) * 10;
            question.questionType = 'noAutoCorrection';
            activity.questions.push(question);
        });
        return activity;
    };
    LearningJournalPage.prototype.resizeAllTextareas = function () {
        var element;
        for (var _i = 0, _a = Array.from(document.querySelectorAll('.question textarea')); _i < _a.length; _i++) {
            element = _a[_i];
            if (element.scrollHeight) {
                element.style.height = element.scrollHeight + "px";
            }
        }
    };
    LearningJournalPage.prototype.resizeTextarea = function (index) {
        if (!index) {
            return this.resizeAllTextareas();
        }
        var elements = Array.from(document.querySelectorAll('.question textarea'));
        var element = elements[index];
        element.style.height = element.scrollHeight + "px";
    };
    LearningJournalPage.prototype.saveJournal = function () {
        var _this = this;
        var loader = this.utils.loading('Saving journal...');
        var data = JSON.stringify(this.data);
        this.api.postLearningJournal(this.data.id, { data: data }).subscribe(function (response) {
            loader.dismiss();
            _this.data.id = response.data.id;
        });
    };
    return LearningJournalPage;
}());
LearningJournalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-learning-journal',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/learning-journal/learning-journal.html"*/'<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">\n\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{ data?.id? \'\' : \'New\' }} Learning Journal DK</ion-title>\n\n       <ion-buttons right>\n            <button ion-button\n                [disabled]=\'!data.title?.trim()\'\n                (click)=\'saveJournal()\'\n            >Save\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-segment [(ngModel)]=\'segment\' *ngIf=\'featureEnabled( "General-Journal-Question" )\'>\n        <ion-segment-button value=\'notes\'>Notes</ion-segment-button>\n        <ion-segment-button value=\'questions\'>Questions</ion-segment-button>\n    </ion-segment>\n\n\n    <ng-container [ngSwitch]=\'segment\'>\n\n        <section *ngSwitchCase=\'"notes"\'>\n\n            <ion-item margin-vertical>\n                <ion-label stacked>Title</ion-label>\n                <ion-input [(ngModel)]=\'data.title\' placeholder=\'Insert title here...\'></ion-input>\n            </ion-item>\n\n            <journal-editor\n                [(text)] = \'data.text\'\n            ></journal-editor>\n\n            <div class=\'error\' text-center>{{ error }}</div>\n\n        </section>\n\n\n        <section *ngSwitchCase=\'"questions"\' margin-top>\n\n            <ion-fab bottom right>\n                <button ion-fab mini color=\'primary\' (click)=\'addQuestion()\'>\n                    <ion-icon name=\'add\'></ion-icon>\n                </button>\n            </ion-fab>\n\n            <h6 padding *ngIf=\'!data?.questions?.length\'>Click \'+\' to add questions</h6>\n\n            <div *ngIf=\'data?.questions?.length\'>\n\n                <ion-list>\n                    <ion-item *ngFor=\'let item of data?.questions; index as index\'>\n                        <ion-label>{{ index + 1 }}.</ion-label>\n                        <ion-textarea\n                            class=\'question\'\n                            [(ngModel)]=\'item.text\'\n                            placeholder=\'Insert question here...\'\n                            (ionChange)=\'resizeTextarea( index )\'\n                        ></ion-textarea>\n                    </ion-item>\n                </ion-list>\n\n                <button ion-button outline small color=\'dark\'\n                    *ngIf=\'data?.questions?.length\n                        && data?.questions [0].text\n                        && data?.id\n                    \'\n                    (click)=\'createActivity()\'\n                >\n                    Create Activity\n                </button>\n\n            </div>\n\n        </section>\n\n   \n\n<ion-list>\n    <ion-item>\n      <h2>01. My Neighbor Totoro</h2>\n     <ion-icon item-end><img src="assets/imgs/Learning-UI/add-notes.svg"></ion-icon>\n    </ion-item>\n</ion-list>            \n\n    </ng-container>\n\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/learning-journal/learning-journal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */]])
], LearningJournalPage);

//# sourceMappingURL=learning-journal.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BackboneTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
/* unused harmony export Choice */
/* unused harmony export Outcome */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Question; });
/* unused harmony export QuestionTable */
/* unused harmony export QuestionTableRowColumn */
var BackboneTypes = [
    'activity',
    'job',
    'intelligence',
];
var Activity = (function () {
    function Activity() {
        this.ageGroups = [];
        this.backboneType = BackboneTypes[0];
        this.cities = ['Singapore'];
        this.contexts = [];
        this.coach = '';
        this.id = null;
        this.jobs = [];
        this.locations = [];
        this.outcomes = [];
        this.private = true;
        this.questions = [];
        this.status = 'Draft';
        this.title = '';
        this.username = '';
        this.briefDescription = '';
        this.description = '';
        this.outcomes = [
            new Outcome(),
            new Outcome(),
            new Outcome(),
        ];
    }
    return Activity;
}());

var Choice = (function () {
    function Choice() {
        this.order = 999;
    }
    return Choice;
}());

var Outcome = (function () {
    function Outcome() {
    }
    return Outcome;
}());

var Question = (function () {
    function Question() {
        this.ageGroups = [];
        this.checker = '';
        this.choices = [];
        this.question = '';
        this.questionOrder = 999;
        this.subjects = [];
        this.questionType = '';
        this.id = new Date().valueOf();
        this.table = new QuestionTable();
    }
    return Question;
}());

var QuestionTable = (function () {
    function QuestionTable() {
        this.rows = [];
        this.columns = [];
        this.cellValidations = [];
    }
    return QuestionTable;
}());

var QuestionTableRowColumn = (function () {
    function QuestionTableRowColumn() {
        this.label = '';
        this.dataType = '';
        this.validation = null;
        this.name = new Date().valueOf();
    }
    return QuestionTableRowColumn;
}());

//# sourceMappingURL=models.js.map

/***/ })

});
//# sourceMappingURL=1.js.map