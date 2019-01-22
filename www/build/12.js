webpackJsonp([12],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePageModule", function() { return InvitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InvitePageModule = (function () {
    function InvitePageModule() {
    }
    return InvitePageModule;
}());
InvitePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invite__["a" /* InvitePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invite__["a" /* InvitePage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], InvitePageModule);

//# sourceMappingURL=invite.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitePage; });
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



var InvitePage = (function () {
    function InvitePage(api, navCtrl, navParams) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activity = {};
        this.deadline = null;
        this.groups = [];
        this.individuals = [];
        this.minYear = new Date().getFullYear();
        this.maxYear = this.minYear + 2;
        this.segment = 'groups';
        this.showSpinner = false;
        this.startDate = null;
    }
    InvitePage.prototype.alertInviteErrors = function (errors) {
        var _this = this;
        this.api.utils.alertCtrl.create({
            subTitle: 'The following have already enrolled.  No Invitations were sent to them.',
            message: errors.join('\n'),
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                },
            ],
        }).present();
    };
    InvitePage.prototype.getGroupName = function (name) {
        return name.split('-').slice(1).join('-').trim();
    };
    InvitePage.prototype.getGroups = function (data) {
        return data.filter(function (item) { return item.name.startsWith('PVT-'); });
    };
    InvitePage.prototype.getIndividuals = function (groups) {
        var individuals = {};
        groups.map(function (group) {
            group.users.map(function (user) {
                individuals[user.username] = user;
            });
        });
        return Object.keys(individuals).sort().map(function (item) {
            return individuals[item];
        });
    };
    InvitePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.activity = this.navParams.get('activity');
        this.api.getMyGroupsWithUsers()
            .subscribe(function (data) {
            _this.groups = _this.getGroups(data);
            _this.individuals = _this.getIndividuals(_this.groups);
        });
    };
    InvitePage.prototype.invite = function () {
        var _this = this;
        this.showSpinner = true;
        var data = {
            activityId: this.activity.id,
            groups: this.groups
                .filter(function (item) { return item.selected; })
                .map(function (item) { return item.name; }),
            individuals: this.individuals
                .filter(function (item) { return item.selected; })
                .map(function (item) { return item.username; }),
            startDate: this.startDate,
            deadline: this.deadline,
        };
        if (data.groups.length || data.individuals.length) {
            this.api.sendInvitations(data).subscribe(function (response) {
                _this.showSpinner = false;
                _this.api.refreshData();
                var errors = response.data;
                if (errors.length) {
                    _this.alertInviteErrors(errors);
                }
                else {
                    _this.navCtrl.pop();
                }
            });
        }
        else {
            this.showSpinner = false;
        }
    };
    return InvitePage;
}());
InvitePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-invite',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/invite/invite.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Activity Invitation</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<content-grid>\n\n    <ion-segment [(ngModel)]=\'segment\'>\n        <ion-segment-button value=\'groups\'   >Groups   </ion-segment-button>\n        <ion-segment-button value=\'individuals\'>Individuals</ion-segment-button>\n    </ion-segment>\n\n    <ion-item>\n        <ion-label>Start Date</ion-label>\n        <ion-datetime\n            displayFormat=\'DD-MMM-YYYY\'\n            pickerFormat=\'DD-MMM-YYYY\'\n            [(ngModel)]=\'startDate\'\n            placeholder=\'N/A\'\n            [min]=\'minYear\'\n            [max]=\'maxYear\'\n        ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Deadline</ion-label>\n        <ion-datetime\n            displayFormat=\'DD-MMM-YYYY\'\n            pickerFormat=\'DD-MMM-YYYY\'\n            [(ngModel)]=\'deadline\'\n            placeholder=\'N/A\'\n            [min]=\'minYear\'\n            [max]=\'maxYear\'\n        ></ion-datetime>\n    </ion-item>\n\n    <button ion-button block round color=\'primary\'\n        (click)=\'invite()\'\n        [disabled]=\'showSpinner\'\n    >\n        <ion-spinner *ngIf=\'showSpinner\'></ion-spinner>\n        Invite\n    </button>\n\n    <ion-item [ngSwitch]=\'segment\'>\n\n        <ion-list *ngSwitchCase=\'"groups"\'>\n            <ng-container *ngFor=\'let item of groups; index as index\'>\n                <ion-item *ngIf=\'getGroupName( item.name )\'>\n                    <ion-label>{{ getGroupName( item.name ) }}</ion-label>\n                    <ion-checkbox [(ngModel)]=\'groups [index] .selected\'></ion-checkbox>\n                </ion-item>\n            </ng-container>\n        </ion-list>\n\n        <ion-list *ngSwitchCase=\'"individuals"\'>\n            <ion-item *ngFor=\'let item of individuals; index as index\'>\n                <ion-label>{{ item.username }}</ion-label>\n                <ion-checkbox [(ngModel)]=\'individuals [index] .selected\'></ion-checkbox>\n            </ion-item>\n        </ion-list>\n\n    </ion-item>\n\n</content-grid>\n</ion-content>\n'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/invite/invite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], InvitePage);

//# sourceMappingURL=invite.js.map

/***/ })

});
//# sourceMappingURL=12.js.map