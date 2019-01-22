webpackJsonp([9],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPageModule", function() { return MessagingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messaging__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessagingPageModule = (function () {
    function MessagingPageModule() {
    }
    return MessagingPageModule;
}());
MessagingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__messaging__["a" /* MessagingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messaging__["a" /* MessagingPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], MessagingPageModule);

//# sourceMappingURL=messaging.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingPage; });
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




var MessagingPage = (function () {
    function MessagingPage(api, navCtrl, utils) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.columns = [
            { name: 'title', label: 'Activity' },
            { name: 'inviterUsername', label: 'Inviter' },
            { name: 'created', label: 'Date Invited' },
        ];
        this.groups = [
            'KCT-Messaging',
            'KCT-Coach',
        ];
        this.invitations = [];
        this.selfEnrolled = [];
        this.sortColumn = 'date_completed';
    }
    MessagingPage.prototype.getInvitations = function () {
        var _this = this;
        this.api.getMessagingActivities(this.api.user).subscribe(function (response) {
            _this.invitations = response.data.map(function (item) {
                item.title = item.activity.title;
                item.inviterUsername = item.inviter.username;
                var invitees = item.invitees;
                var users = Object.keys(invitees.completed);
                var completed = users.filter(function (item) { return !!invitees.completed[item]; });
                item.completed = completed.length + " / " + users.length;
                return item;
            });
        });
    };
    MessagingPage.prototype.ionViewDidEnter = function () {
        if (!this.utils.canAccessPage(this.groups, this.api.user)) {
            this.navCtrl.setRoot('HomePage');
            return;
        }
        this.getInvitations();
    };
    MessagingPage.prototype.chatPage = function (invitation) {
        var _this = this;
        this.api.getInvitationTeams(invitation.id).subscribe(function (data) {
            _this.navCtrl.push('ChatPage', { invitation: invitation, teams: data.teams });
        });
    };
    return MessagingPage;
}());
MessagingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-messaging',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/messaging/messaging.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Messaging</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n<ion-card *ngFor=\'let item of invitations\'>\n   \n\n<ion-list>\n    <button ion-item>\n    <ion-row>\n    <ion-col col-4><small>Activity Name :</small></ion-col>\n    <ion-col col-8><P>{{ item?.inviter.first_name }} {{ item?.inviter.last_name }}</P></ion-col>\n    <ion-col col-4><small>Date invited :</small></ion-col>\n    <ion-col col-8><P>{{ item?.created | date:\'d-MMM HH:mm\' }}</P></ion-col>\n    <ion-col col-4><small>Inviter :</small></ion-col>\n    <ion-col col-8><P></P>{{ item?.inviterUsername }}</ion-col>\n  </ion-row>\n    </button>\n  </ion-list>\n\n</ion-card>\n\n\n\n\n    <!--<table border=\'1\' width=\'100%\'>\n        <thead>\n            <tr>\n                <th\n                    [ngClass]=\'"col__" + item.name\'\n                    *ngFor=\'let item of columns\'\n                >\n                    {{ item.label }} -->\n<!--\n                    (click)=\'sort( item.name )\'\n                    <column-label\n                        [label]=\'item.label\'\n                        [name]=\'item.name\'\n                        [sortColumn]=\'sortColumn\'\n                    ></column-label>\n -->\n        <!--       </th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngIf=\'!invitations?.length\'>\n                <td text-center colspan=\'99\' padding>N/A</td>\n            </tr>\n\n            <tr class=\'data-row\' *ngFor=\'let item of invitations\'>\n                <td text-wrap text-left class=\'pointer\' (click)=\'chatPage( item )\'>\n                    {{ item?.title }}\n                </td>\n                <td>{{ item?.inviterUsername }}</td>\n                <td>{{ item?.created | date:\'d-MMM HH:mm\' }}</td>\n            </tr>\n        </tbody>\n    </table>\n\n</ion-content>-->\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/messaging/messaging.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */]])
], MessagingPage);

//# sourceMappingURL=messaging.js.map

/***/ })

});
//# sourceMappingURL=9.js.map