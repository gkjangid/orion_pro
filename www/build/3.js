webpackJsonp([3],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailPageModule", function() { return TodoDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_detail__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TodoDetailPageModule = (function () {
    function TodoDetailPageModule() {
    }
    return TodoDetailPageModule;
}());
TodoDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__todo_detail__["a" /* TodoDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todo_detail__["a" /* TodoDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], TodoDetailPageModule);

//# sourceMappingURL=todo-detail.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDetailPage; });
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



var TodoDetailPage = (function () {
    function TodoDetailPage(api, navCtrl, navParams) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categories = [];
        this.footerColor = 'light';
        this.model = {};
        this.statuses = [];
        this.minYear = new Date().getFullYear();
        this.maxYear = this.minYear + 2;
    }
    TodoDetailPage.prototype.checkInput = function () {
        if (!this.model.description) {
            return this.error('Action cannot be blank');
        }
        if (!this.model.deadline) {
            this.errorMsg = 'Deadline cannot be blank';
            return;
        }
        if (!this.model.category_id) {
            return this.error('Category cannot be blank');
        }
        if (this.model.status == 'completed' && !this.model.notes) {
            return this.error('Notes cannot be blank');
        }
        this.errorMsg = '';
        this.footerColor = 'light';
        return true;
    };
    TodoDetailPage.prototype.error = function (msg) {
        this.errorMsg = msg;
        this.footerColor = 'danger';
        return false;
    };
    TodoDetailPage.prototype.getData = function (todoId) {
        var _this = this;
        this.api.getUserActivityToDo(todoId).subscribe(function (response) {
            _this.statuses = response.todoStatuses;
            _this.categories = response.actionCategories;
            if (todoId === 0) {
                _this.model = { status: _this.statuses[0][0] };
            }
            else {
                _this.model = response.data[0];
            }
        });
    };
    TodoDetailPage.prototype.ionViewDidEnter = function () {
        var todoId = this.navParams.get('id');
        if (todoId === undefined) {
            this.navCtrl.setRoot('HomePage');
        }
        this.getData(todoId);
    };
    TodoDetailPage.prototype.save = function () {
        var _this = this;
        if (!this.checkInput()) {
            return;
        }
        this.api.postUserActivityToDo(this.model.id || 0, this.model).subscribe(function (response) {
            _this.navCtrl.pop();
        });
    };
    return TodoDetailPage;
}());
TodoDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-todo-detail',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/todo-detail/todo-detail.html"*/'<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>To Do Details</ion-title>\n        <ion-buttons right>\n            <button ion-button (click)=\'save()\'>Save</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item margin-vertical>\n        <ion-label stacked>Action</ion-label>\n        <ion-textarea\n            [(ngModel)]=\'model.description\'\n            placeholder=\'Insert here the specific action you will take\'\n        ></ion-textarea>\n    </ion-item>\n\n\n    <ion-item margin-vertical>\n        <ion-label stacked>Deadline</ion-label>\n        <ion-datetime\n            [(ngModel)]=\'model.deadline\'\n            displayFormat=\'DD-MMM-YYYY\' [min]=\'minYear\' [max]=\'maxYear\'\n            placeholder=\'Insert here the date by which the action will be completed\'\n        ></ion-datetime>\n    </ion-item>\n\n\n    <ion-list no-lines margin-vertical>\n        <ion-item>\n            <ion-label stacked>Status</ion-label>\n            <ion-select interface=\'popover\' [(ngModel)]=\'model.status\'>\n                <ion-option\n                    *ngFor=\'let item of statuses\'\n                    [value]=\'item[0]\'\n                >{{ item[1] }}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n\n    <ion-list no-lines margin-vertical>\n        <ion-item>\n            <ion-label stacked>Category</ion-label>\n            <ion-select interface=\'popover\' [(ngModel)]=\'model.category_id\'>\n                <ion-option\n                    *ngFor=\'let item of categories\'\n                    [value]=\'item.id\'\n                >{{ item.name }}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n\n    <div margin-vertical padding-left>\n        <ion-label stacked margin-bottom>Notes</ion-label>\n        <journal-editor\n            height=\'30vh\'\n            [(text)] = \'model.notes\'\n        ></journal-editor>\n    </div>\n\n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar [color]=\'footerColor\'>\n        <span ion-text color=\'light\' padding-left>\n            <strong>{{ errorMsg }}</strong>\n        </span>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/todo-detail/todo-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TodoDetailPage);

//# sourceMappingURL=todo-detail.js.map

/***/ })

});
//# sourceMappingURL=3.js.map