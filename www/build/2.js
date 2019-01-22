webpackJsonp([2],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListPageModule", function() { return TodoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_list__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodoListPageModule = (function () {
    function TodoListPageModule() {
    }
    return TodoListPageModule;
}());
TodoListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__todo_list__["a" /* TodoListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todo_list__["a" /* TodoListPage */]),
        ],
    })
], TodoListPageModule);

//# sourceMappingURL=todo-list.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListPage; });
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



var TodoListPage = (function () {
    function TodoListPage(api, navCtrl, navParams) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusMap = {};
        this.todos = [];
        this.todoStatuses = [];
        this.today = new Date();
        this.today.setHours(0, 0, 0, 0);
    }
    TodoListPage.prototype.gotoTodo = function (todo, index) {
        var data = { id: 0 };
        if (todo) {
            data = { id: todo.id };
        }
        this.navCtrl.push('TodoDetailPage', data);
    };
    TodoListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!this.navParams.get('component')) {
            this.navCtrl.setRoot('HomePage');
            return;
        }
        this.api.getUserActivityToDo().subscribe(function (response) {
            _this.todos = response.data;
            _this.todoStatuses = response.todoStatuses;
            _this.todoStatuses.map(function (item) {
                _this.statusMap[item[0]] = item[1];
            });
        });
    };
    TodoListPage.prototype.overdue = function (todo) {
        if (todo.status == 'in-progress' && this.today > new Date(todo.deadline)) {
            return ' (overdue)';
        }
    };
    return TodoListPage;
}());
TodoListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-todo-list',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/todo-list/todo-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>To Do List</ion-title>\n        <ion-buttons right>\n            <button ion-button (click)=\'gotoTodo()\'>Add</button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <ion-item-divider color=\'dark\'>\n		<ion-grid>\n		<ion-row>\n		<ion-col col-8>Description/Deadline</ion-col>\n		<ion-col col-4 text-center >Status</ion-col>\n		</ion-row>\n		 \n		</ion-grid>\n\n    </ion-item-divider>\n\n</ion-header>\n\n\n<ion-content>\n\n<!--     <table border=\'1\' width=\'100%\'>\n\n        <thead>\n            <tr>\n                <th text-left>Description</th>\n                <th>Deadline</th>\n                <th>Status</th>\n                <th>Activity</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\'let item of todos; index as index\' (click)=\'gotoTodo( item, index )\'>\n                <td text-wrap>{{ item.description }}</td>\n                <td text-center>{{ item.deadline | date }}</td>\n                <td text-center>\n                    {{ statusMap [item.status] }}\n                    <span class=\'overdue\'>{{ overdue( item ) }}</span>\n                </td>\n                <td>{{ item.activity_title }}</td>\n            </tr>\n        </tbody>\n    </table> -->\n\n\n    <ion-card>\n  <ion-item>\n    <h2>Marty McFly Wait a minute</h2>\n    <ion-icon name="md-calendar"></ion-icon>\n      <p style="display: -webkit-inline-box;">13 Oct</p>\n      <div item-end text-right>\n       <ion-badge color="danger"> in progress </ion-badge>\n       <br/>\n       <small padding-right ion-text color="danger">Overdue</small> \n      </div>\n  </ion-item>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/todo-list/todo-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TodoListPage);

//# sourceMappingURL=todo-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map