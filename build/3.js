webpackJsonp([3],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
            ],
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__the_post_the_post__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notifications = [
            {
                username: "y_lumberjack",
                who: "DonaldDuck64",
                type: "liked",
                post: {
                    id: "14",
                    username: "y_lumberjack",
                    category: "Classic",
                    challenge: "Slam Dunk!",
                    description: "Here is another sample description.",
                    location: "Jaboticabal-SP",
                    views: 105,
                    likes: 50,
                    dislikes: 10,
                    date: "10/10/2017"
                }
            },
            {
                username: "y_lumberjack",
                who: "Japa",
                type: "commented",
                comment: "asdfioqjweoq...",
                post: {
                    id: "11",
                    username: "y_lumberjack",
                    category: "Classic",
                    challenge: "Do what you can't",
                    description: "Just a sample description here.",
                    location: "Jaboticabal-SP",
                    views: 105,
                    likes: 50,
                    dislikes: 10,
                    date: "10/10/2017"
                }
            },
            {
                username: "y_lumberjack",
                who: "Rolao",
                type: "followed"
            }
        ];
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        //console.log(this.notifications);
    };
    NotificationsPage.prototype.goToProfile = function (username) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], { "username": username });
    };
    NotificationsPage.prototype.goToPost = function (postID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__the_post_the_post__["a" /* ThePostPage */], postID);
    };
    // PULLDOWN REFRESH
    NotificationsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 1000);
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\notifications\notifications.html"*/'<ion-content ion-row>\n\n\n\n  <!-- PULL TO REFRESH -->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content>\n\n      </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <!-- NOTIFICATION BLOCK -->\n\n  <ion-card *ngFor="let n of notifications">\n\n\n\n    <div col-12 class="notification_block">\n\n        <!-- IF FOLLOWED -->\n\n        <ng-container *ngIf="n?.type === \'followed\'">\n\n              <div col-2 (click)="goToProfile(n?.who)"> <img src="assets/img/pic/{{ n?.who }}.jpg" class="pic"> </div>\n\n              <div col-6> <b (click)="goToProfile(n?.who)">{{ n?.who }}</b><br> started following you.</div>\n\n              <div col-4><button ion-button (click)="follow(n?.who)">Follow</button></div>\n\n        </ng-container>\n\n        <!-- IF COMMENTED -->\n\n        <ng-container *ngIf="n?.type === \'commented\'">\n\n                <div col-2 (click)="goToProfile(n?.who)"> \n\n                  <img src="assets/img/pic/{{ n?.who }}.jpg" class="pic"> \n\n                </div>\n\n                <div col-7> \n\n                  <b (click)="goToProfile(n?.who)">{{ n?.who }}</b>\n\n                  commented: {{ n?.comment }}\n\n                </div>\n\n                <div col-3 (click)="goToPost(n?.post.id)" class="small_thumbnail">\n\n                    <img src="assets/img/{{ n?.post.id }}.jpg">\n\n                </div>\n\n        </ng-container>\n\n        <!-- IF LIKED -->\n\n        <ng-container *ngIf="n?.type === \'liked\'">\n\n                <div col-2 (click)="goToProfile(n?.who)"> <img src="assets/img/pic/{{ n?.who }}.jpg" class="pic"> </div>\n\n                <div col-7> \n\n                  <b (click)="goToProfile(n?.who)">{{ n?.who }}</b>\n\n                  <br> liked your food challenge.\n\n                </div> \n\n                <div col-3 (click)="goToPost(n?.post.id)" class="small_thumbnail">\n\n                    <img src="assets/img/{{ n?.post.id }}.jpg">\n\n                </div>\n\n        </ng-container>\n\n    </div>\n\n  </ion-card>\n\n  <!--\n\n      <div col-2 (click)="goToProfile(fromUser?)"> <img src="assets/img/pic/{{ fromUser? }}.jpg" class="pic"> </div>\n\n      <div col-7 (click)="goToPost(postID)"> \n\n        <b>{{ fromUser? }}</b>\n\n        <br> liked your food challenge.\n\n      </div> \n\n      <div col-3 (click)="goToPost(postID)">\n\n          <img class="small_thumbnail" src="assets/img/{{ postID }}.jpg">\n\n      </div>\n\n   -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=3.js.map