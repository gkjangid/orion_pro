webpackJsonp([15],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = (function () {
    function ChatPageModule() {
    }
    return ChatPageModule;
}());
ChatPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
        ],
    })
], ChatPageModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_websocket__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatPage = (function () {
    function ChatPage(alertCtrl, api, navCtrl, navParams, settings, websocket) {
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.websocket = websocket;
        this.allMessages = [];
        this.messages = [];
        this.segment = 'activity';
        this.segments = [
            { label: 'Activity', value: 'activity' },
            { label: 'Team', value: 'team' },
        ];
        this.showSpinner = true;
        this.teams = [];
    }
    ChatPage.prototype.changeTeam = function () {
        var _this = this;
        var getInputs = function () {
            return _this.teams.map(function (item) {
                return {
                    type: 'radio',
                    name: 'team',
                    label: item,
                    value: item,
                    checked: item == _this.team,
                };
            });
        };
        var getButtons = function () {
            return [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    handler: function (team) {
                        _this.filterMessages(team);
                    },
                },
            ];
        };
        this.alertCtrl.create({
            title: 'Select Team',
            inputs: getInputs(),
            buttons: getButtons(),
        }).present();
    };
    ChatPage.prototype.changeSegment = function (segment) {
        if (segment == 'activity') {
            return this.filterMessages('');
        }
        if (this.userActivity) {
            return this.filterMessages(this.userActivity.team);
        }
        if (!this.team) {
            this.team = this.teams[0];
        }
        return this.filterMessages(this.team);
    };
    ChatPage.prototype.filterMessages = function (team) {
        var _this = this;
        this.team = team;
        if (team) {
            this.messages = this.allMessages.filter(function (item) { return item.team == _this.team; });
        }
        else {
            this.messages = this.allMessages.filter(function (item) { return !item.team; });
        }
        this.scrollToBottom();
    };
    ChatPage.prototype.getChatHistory = function () {
        var _this = this;
        var obs = this.userActivity ?
            this.api.getUserActivityChatHistory(this.userActivity.id) :
            this.api.getInvitationChatHistory(this.invitation.id);
        obs.subscribe(function (data) {
            _this.showSpinner = false;
            _this.allMessages = data;
            _this.changeSegment('activity');
            _this.scrollToBottom();
        });
    };
    ChatPage.prototype.getforumId = function () {
        if (this.invitation) {
            return this.invitation.id;
        }
        var forumId = this.userActivity.invitation_id;
        if (this.userActivity.team) {
            forumId = forumId + "/team/" + this.userActivity.team;
        }
        return forumId;
    };
    ChatPage.prototype.getTeams = function () {
        if (this.invitation) {
            return this.navParams.get('teams') || [];
        }
        var team = this.userActivity.team;
        return team ? [team] : [];
    };
    ChatPage.prototype.getWebsocket = function (forumId) {
        var _this = this;
        this.websocket.getForum(forumId).subscribe(function (data) {
            var message = JSON.parse(data);
            _this.receivedMessage(message);
        });
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        this.userActivity = this.navParams.get('userActivity');
        if (!this.userActivity) {
            this.invitation = this.navParams.get('invitation');
            if (!this.invitation) {
                this.navCtrl.setRoot('HomePage');
                return;
            }
        }
        var obj = this.userActivity || this.invitation;
        this.title = obj.activity.title;
        this.forumId = this.getforumId();
        this.teams = this.getTeams();
        this.getWebsocket(this.forumId);
        this.getChatHistory();
    };
    ChatPage.prototype.keyup = function (event) {
        if (event.keyCode == 13) {
            this.send();
        }
    };
    ChatPage.prototype.receivedMessage = function (message) {
        this.allMessages.push(message);
        if (this.segment == 'activity') {
            if (!message.team) {
                this.messages.push(message);
                this.scrollToBottom();
            }
            return;
        }
        if (this.segment == 'team') {
            if (message.team == this.team) {
                this.messages.push(message);
                this.scrollToBottom();
            }
            return;
        }
    };
    ChatPage.prototype.scrollToBottom = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 100; }
        setTimeout(function () {
            if (_this.content) {
                try {
                    _this.content.scrollToBottom();
                }
                catch (e) {
                    console.warn('scrollToBottom error');
                }
            }
        }, delay);
    };
    ChatPage.prototype.send = function () {
        var message = this.message.trim();
        if (!message) {
            return;
        }
        var data = {
            message: message,
            fromUser: this.settings.user.userName,
            team: this.segment == 'team' ? this.team : null,
        };
        this.websocket.newMessage(this.forumId, data);
        this.message = '';
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/home/orion/Desktop/kp/learner-app/src/pages/chat/chat.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n            <span *ngIf=\'team\'>Team: {{ team }}</span>\n            <span *ngIf=\'!team\'>{{ title }}</span>\n        </ion-title>\n    </ion-navbar>\n\n    <ion-toolbar color=\'light\'>\n\n        <ion-segment [(ngModel)]=\'segment\' *ngIf=\'teams?.length\'>\n            <ion-segment-button\n                *ngFor=\'let item of segments\'\n                [value]=\'item.value\'\n                (click)=\'changeSegment( item.value )\'\n            >\n                {{ item.label }}\n            </ion-segment-button>\n\n        </ion-segment>\n\n        <div text-center text-uppercase ion-text color=\'primary\' *ngIf=\'!teams?.length\'>\n            Activity\n        </div>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-fab top right *ngIf=\'segment=="team" && teams.length > 1 && !userActivity\'>\n        <button ion-fab mini (click)=\'changeTeam()\'>\n            <ion-icon name=\'ios-people\'></ion-icon>\n        </button>\n    </ion-fab>\n\n\n    <ion-list no-lines>\n\n        <ion-item class=\'message\' *ngFor=\'let item of messages\'>\n            <p>\n                <span class=\'message--time\'>{{ item.time | date:\'hh:mm a dd-MMM\' }}</span>\n                <span class=\'message--username\'>{{ item.fromUser }}</span>\n            </p>\n            <p class=\'message--text\' text-wrap>{{ item.message }}</p>\n        </ion-item>\n\n        <ion-item class=\'message\' text-center *ngIf=\'!messages?.length\'>\n            <ion-spinner *ngIf=\'showSpinner\'></ion-spinner>\n            <b *ngIf=\'!showSpinner\'>No messages here</b>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n    <ion-item>\n        <ion-input\n            placeholder=\'Enter message here...\'\n            [(ngModel)]=\'message\'\n            (keyup)=\'keyup( $event )\'\n        ></ion-input>\n        <button ion-button item-right (click)=\'send()\'>Send</button>\n    </ion-item>\n</ion-footer>'/*ion-inline-end:"/home/orion/Desktop/kp/learner-app/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_websocket__["a" /* WebsocketProvider */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=15.js.map