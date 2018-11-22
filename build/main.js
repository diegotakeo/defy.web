webpackJsonp([16],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThePostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_comments__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThePostPage = /** @class */ (function () {
    function ThePostPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        // IS SET WHEN CALLED VIA NAVCTRL.PUSH
        this.postID = this.navParams.get("postID");
        this.username = this.navParams.get("username");
        this.name = this.navParams.get("name");
        // USE postID TO MAKE [HTTP GET REQUEST]
        this.post = {
            id: this.postID,
            username: this.username,
            name: this.name,
            type: "picture",
            category: "Aquatic",
            challenge: "Water Assault",
            description: "Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.",
            location: "Matão-SP",
            views: 1234,
            likes: 558,
            dislikes: 1451,
            date: "05/12/2017"
        };
    }
    ThePostPage.prototype.openModalMore = function (postID) {
        var actionSheet = this.actionSheetCtrl.create({
            //title: 'Modify your album',
            buttons: [
                {
                    text: 'Edit',
                    icon: 'create',
                    handler: function () {
                        console.log(' clicked');
                    }
                }, {
                    text: 'Share',
                    icon: 'share-alt',
                    handler: function () {
                        console.log(' clicked');
                    }
                }, {
                    text: 'Delete',
                    icon: 'trash',
                    handler: function () {
                        console.log(' clicked');
                    }
                }, {
                    text: 'Report...',
                    icon: 'warning',
                    //role: 'destructive',
                    handler: function () {
                        console.log('Report clicked');
                    }
                }, {
                    text: 'Share on Messenger',
                    icon: 'chatboxes',
                    handler: function () {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Share on Whatsapp',
                    icon: 'logo-whatsapp',
                    //role: 'cancel',
                    handler: function () {
                        console.log('Share clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ThePostPage.prototype.openModalShare = function (postID) {
        var actionSheet = this.actionSheetCtrl.create({
            //title: 'Modify your album',
            buttons: [
                {
                    text: 'Share on Facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                    }
                }, {
                    text: 'Share on Twitter',
                    icon: 'logo-twitter',
                    handler: function () {
                    }
                }, {
                    text: 'Share on Messenger',
                    icon: 'chatboxes',
                    handler: function () {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Share on Whatsapp',
                    icon: 'logo-whatsapp',
                    //role: 'cancel',
                    handler: function () {
                        console.log('Share clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // PULLDOWN REFRESH
    ThePostPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 1000);
    };
    // NAVIGATE
    ThePostPage.prototype.goToComments = function (postID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__comments_comments__["a" /* CommentsPage */], postID);
    };
    ThePostPage.prototype.goToProfile = function (username) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], { "username": username });
    };
    ThePostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-the-post',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\the-post\the-post.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Post</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n    <!-- PULL TO REFRESH -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content>\n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n        \n\n\n\n    <!-- BEGIN POST -->\n\n    <ion-card>\n\n        <!-- POST HEADER -->\n\n        <ion-item>\n\n          <ion-avatar item-start (click)="goToProfile(post?.username)">\n\n            <img src="assets/img/pic/{{post?.username}}.jpg">\n\n          </ion-avatar>\n\n          <ion-icon name="icon" class="more" (click)="openModalMore(post?.id)"></ion-icon>\n\n  \n\n          <h2 (click)="goToProfile(post?.username)">{{ post?.name }}</h2>\n\n          <p (click)="goToProfile(post?.username)">{{ post?.category }} || {{ post?.challenge }}</p>\n\n        </ion-item>\n\n    \n\n        <!-- IF PICTURE -->\n\n        <ng-container *ngIf="post?.type === \'picture\'">\n\n          <img src="assets/img/{{postID}}.jpg">\n\n        </ng-container>\n\n  \n\n        <!-- IF VIDEO -->\n\n        <ng-container *ngIf="post?.type === \'video\'">\n\n            <img src="assets/img/{{post?.id}}.jpg">\n\n        </ng-container>\n\n  \n\n  \n\n        <div class="options">\n\n            <ion-icon name="icon"></ion-icon>\n\n            <ion-icon name="icon"></ion-icon>\n\n            <ion-icon name="icon" (click)="goToComments(post?.id)"></ion-icon>\n\n            <ion-icon name="icon" class="right" (click)="openModalShare(post?.id)"></ion-icon>\n\n        </div>\n\n  \n\n        <ion-card-content>\n\n          <p>{{ post?.description }}</p>\n\n        </ion-card-content>\n\n    \n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button color="primary" clear small icon-start>\n\n                <ion-icon name=\'thumbs-up\'></ion-icon>\n\n                {{ post?.likes }} Likes\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button color="primary" clear small icon-start>\n\n                <ion-icon name=\'text\'></ion-icon>\n\n                {{ post?.comments }} Comments\n\n            </button>\n\n          </ion-col>\n\n          <ion-col center text-center>\n\n            <ion-note>\n\n              {{ post?.views }} Views\n\n            </ion-note>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\the-post\the-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ThePostPage);
    return ThePostPage;
}());

//# sourceMappingURL=the-post.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengesDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChallengesDescriptionPage = /** @class */ (function () {
    function ChallengesDescriptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = this.navParams.get('title');
        this.category = this.navParams.get('category');
        this.description = this.navParams.get('description');
        this.icon = this.navParams.get('icon');
    }
    ChallengesDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-challenges-description',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\challenges-description\challenges-description.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Description</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="description">\n\n        <ion-icon>{{ icon }}</ion-icon>\n\n        <h4>{{ title }}</h4>\n\n        <p>\n\n          {{ description }}\n\n        </p>\n\n\n\n        \n\n        <button ion-button (click)="app.openCamera()">Accept Challenge</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\challenges-description\challenges-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ChallengesDescriptionPage);
    return ChallengesDescriptionPage;
}());

//# sourceMappingURL=challenges-description.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitlesPage = /** @class */ (function () {
    function TitlesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titles = this.navParams.get("titles");
        this.selected = this.navParams.get("selected");
    }
    TitlesPage.prototype.ionViewDidLoad = function () {
        // console.log(this.titles);
        // console.log(this.selected);
    };
    TitlesPage.prototype.selectTitle = function (title) {
        // UPDATE SELECTED_TITLE FROM user/:username 
        // CLOSE PAGE & REFRESH NEW VALUE
    };
    TitlesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-titles',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\titles\titles.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>List of titles earned</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-list radio-group>\n\n  <ion-list-header>\n\n    Titles Achieved\n\n  </ion-list-header>\n\n\n\n  <ion-item *ngFor="let title of titles">\n\n    <ion-label>{{ title }}</ion-label>\n\n    \n\n    <ion-radio checked="false" value="{{ title }}" *ngIf="title != selected" (click)="selectTitle(title)"></ion-radio>\n\n    <ion-radio checked="true"  value="{{ title }}" *ngIf="title == selected" (click)="selectTitle(title)"></ion-radio>\n\n    \n\n  </ion-item>\n\n\n\n</ion-list>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\titles\titles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TitlesPage);
    return TitlesPage;
}());

//# sourceMappingURL=titles.js.map

/***/ }),

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/challenges-description/challenges-description.module": [
		330,
		15
	],
	"../pages/challenges-list/challenges-list.module": [
		178
	],
	"../pages/challenges/challenges.module": [
		182
	],
	"../pages/chat/chat.module": [
		331,
		14
	],
	"../pages/chatrooms/chatrooms.module": [
		332,
		13
	],
	"../pages/comments/comments.module": [
		335,
		12
	],
	"../pages/edit-profile/edit-profile.module": [
		333,
		11
	],
	"../pages/item-create/item-create.module": [
		336,
		7
	],
	"../pages/item-detail/item-detail.module": [
		334,
		6
	],
	"../pages/list-master/list-master.module": [
		339,
		5
	],
	"../pages/login/login.module": [
		337,
		4
	],
	"../pages/notifications/notifications.module": [
		338,
		3
	],
	"../pages/privacy/privacy.module": [
		183
	],
	"../pages/profile/profile.module": [
		188
	],
	"../pages/search/search.module": [
		184
	],
	"../pages/settings/settings.module": [
		185
	],
	"../pages/signup/signup.module": [
		340,
		2
	],
	"../pages/tabs/tabs.module": [
		341,
		1
	],
	"../pages/terms/terms.module": [
		186
	],
	"../pages/the-post/the-post.module": [
		343,
		10
	],
	"../pages/timeline/timeline.module": [
		187
	],
	"../pages/titles/titles.module": [
		342,
		9
	],
	"../pages/tutorial/tutorial.module": [
		344,
		0
	],
	"../pages/welcome/welcome.module": [
		345,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesListPageModule", function() { return ChallengesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__challenges_list__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChallengesListPageModule = /** @class */ (function () {
    function ChallengesListPageModule() {
    }
    ChallengesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__challenges_list__["a" /* ChallengesListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__challenges_list__["a" /* ChallengesListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__challenges_list__["a" /* ChallengesListPage */]
            ]
        })
    ], ChallengesListPageModule);
    return ChallengesListPageModule;
}());

//# sourceMappingURL=challenges-list.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__challenges_description_challenges_description__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChallengesListPage = /** @class */ (function () {
    function ChallengesListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.category = this.navParams.get('category');
        this.challenges = [
            {
                "title": "Ice Bucket Challenge",
                "category": "Classic",
                "description": "Drop a bucket of water in your head",
                "icon": "💦"
            },
            {
                "title": "Make-up Challenge",
                "category": "Couples",
                "description": "Get your boyfriend/girlfriend to do your makeup",
                "icon": "👩"
            },
            {
                "title": "Tape a friend LV 1",
                "category": "Pranks",
                "description": "Tape your friend in the wall",
                "icon": "🔨"
            },
            {
                "title": "Tape a friend LV 2",
                "category": "Pranks",
                "description": "Tape your friend in a chair and leave him outside",
                "icon": "💺"
            },
            {
                "title": "Tape a friend LV 3",
                "category": "Pranks",
                "description": "Tape your friend in a street pole",
                "icon": "🛑"
            },
            {
                "title": "Water Assault",
                "category": "Aquatic",
                "description": "Tape your friend in a chair, get him outside and attack him with water balloons!",
                "icon": "💦"
            },
            {
                "title": "Human Flag",
                "category": "Fitness",
                "description": "Lift yourself from the ground by holding a pole and keeping a straight horizontal position. Just like a flag.",
                "icon": "🚩"
            },
            {
                "title": "Cake Challenge",
                "category": "Food",
                "description": "Faça um bolo gigante com o seu parceiro.",
                "icon": "✂️"
            }, {
                "title": "Troll Cake Challenge",
                "category": "Food",
                "description": "Faça um bolo com os ingredientes mais estranhos que encontrar, mas lembre-se de experimentar",
                "icon": "👍"
            }, {
                "title": "Torta na cara lvl 1",
                "category": "Food",
                "description": "Combine com um amigo de se surpreenderem com uma tortada na cara.",
                "icon": "📋"
            }, {
                "title": "Torta na cara lvl 2",
                "category": "Food",
                "description": "Agora sem combinar, pegue alguém desprevenido com uma tortada!",
                "icon": "🖐"
            }, {
                "title": "O Inconveniente na Biblioteca lvl1",
                "category": "Public",
                "description": "Vá a uma biblioteca pública e coma coisas barulhentas.",
                "icon": "🤑"
            }, {
                "title": "O Inconveniente na Biblioteca lvl2",
                "category": "Public",
                "description": "Vá a uma biblioteca pública e veja vídeos adultos (SEM fone)",
                "icon": "👺"
            }, {
                "title": "Assuste as pessoas com uma fantasia! Lvl1",
                "category": "Pranks",
                "description": "Compre uma fantasia, e assuste todos os seus amigos!",
                "icon": "👹"
            }, {
                "title": "Assuste as pessoas com uma fantasia! Lvl2",
                "category": "Pranks",
                "description": "Compre uma fantasia, vá em um lugar público, e comece com os sustos!",
                "icon": "👻"
            }, {
                "title": "Esportista imaginário (Futebol)",
                "category": "Sports",
                "description": "Jogue futebol imaginário com as pessoas na rua!",
                "icon": "💪"
            }, {
                "title": "Esportista imaginário (Basquete)",
                "category": "Sports",
                "description": " Jogue basquete imaginário com as pessoas na rua!",
                "icon": "💪"
            }, {
                "title": "Atleta de rua!",
                "category": "Sports",
                "description": "Jogue futebol em um lugar movimentado e atrapalhe as pessoas.",
                "icon": "🎃"
            }, {
                "title": "Eu não posso ver! Lvl1",
                "category": "Public",
                "description": "Finja-se de cego e comece a trolar quem estiver por perto!",
                "icon": "🤖"
            }, {
                "title": "Eu não posso ver! Lvl2",
                "category": "Public",
                "description": "Finja-se de cego e comece a trolar quem estiver por perto, desta vez em um Shopping.",
                "icon": "🙏"
            }, {
                "title": "Eu sou louco!",
                "category": "Public",
                "description": "Vá até lugares movimentados e comece a se fingir de louco!",
                "icon": "🙌"
            }, {
                "title": "Vendedor Abusado!",
                "category": "Public",
                "description": "Vá até lugares movimentados e comece a vender produtos constrangedores!",
                "icon": "☂️"
            }, {
                "title": "Vendedor Abusado! Lvl1",
                "category": "Public",
                "description": "Vá até lugares movimentados e comece a vender produtos constrangedores!",
                "icon": "👹"
            }, {
                "title": "Vendedor Abusado! Lvl2",
                "category": "Public",
                "description": "Vá até lugares movimentados e comece a vender seus amigos, isso mesmo, combine com um amigo e tente vende-lo.",
                "icon": "💼"
            }, {
                "title": "Vendedor Abusado!",
                "category": "Public",
                "description": "Vá até lugares movimentados e comece a vender produtos constrangedores!",
                "icon": "👔"
            }, {
                "title": "Smack Cam",
                "category": "Classic",
                "description": "Coloque algo grudento, melado, ou até mesmo nojento e de um tapa no rosto do seu amigo!",
                "icon": "👕"
            }, {
                "title": "Shoulder Cookie",
                "category": "Classic",
                "description": "Coloque um biscoito no ombro e tente come-lo!",
                "icon": "💃"
            }, {
                "title": "Planking",
                "category": "Classic",
                "description": "Pretend you are a wooden plank and stay totally straight in a random place, that's right, a board.",
                "icon": "👞"
            }, {
                "title": "Owling",
                "category": "Classic",
                "description": "Pretend you are an owl and stay in somewhere in a resting pose.",
                "icon": "🤠"
            }, {
                "title": "Harlem Shake",
                "category": "Classic",
                "description": "Isso mesmo, o classico Harlem Shake está de volta, pegue seus amigos e mexa o corpo!",
                "icon": "😵"
            }, {
                "title": "Water Bottle Challenge",
                "category": "Classic",
                "description": "Uma garrafa, um pouco de água, e muitas tentativas até deixa-la em pé",
                "icon": "😝"
            }, {
                "title": "Poop or Nutella Prank",
                "category": "Classic",
                "description": "Vá até um banheiro público e engane quem estiver ao lado com Nutella!",
                "icon": "💩"
            }, {
                "title": "Hit and Run!",
                "category": "Public",
                "description": "De um tapa na bunda de algum estranho e veja o que acontece.",
                "icon": "😱"
            }, {
                "title": "Pular de Paraquedas!",
                "category": "Sports",
                "description": "Pule de paraquedas e grave seu salto!",
                "icon": "🤘"
            }, {
                "title": "Bungee Jump",
                "category": "Sports",
                "description": "Faça um bungee jump irado e grave sua descida!",
                "icon": "👥"
            }, {
                "title": "Salto na piscina!",
                "category": "Aquatic",
                "description": "De um salto mortal emu ma piscina e mostre pra todos o seu talento.",
                "icon": "👣"
            }, {
                "title": "Já ouviu falar em tirolesa?",
                "category": "Sports",
                "description": "Grave seu percurso de tirolesa e prove pra todo mundo que não tem medo de altura!",
                "icon": "👅"
            }, {
                "title": "Pulo em movimento Lvl 1",
                "category": "Parkour",
                "description": "Fique no teto de um carro e faça um parkour irado!",
                "icon": "👤"
            }, {
                "Name": "Pulo em movimento Lvl 2",
                "category": "Sports",
                "description": "Fique no teto de um carro e de um super salto, mas dessa vez faça uma manobra pra cair na piscina!",
                "icon": ""
            }, {
                "title": "Salte sobre os amigos!",
                "description": "Coloque seus amigos enfileirados e falta um salto por cima deles!",
                "category": "Sports",
                "icon": "😲"
            }, {
                "Name": "Ollie sobre seu amigo.",
                "description": "Faça um ollie por cima do seu amigo deitado!",
                "category": "Skate",
                "icon": "😱 "
            }, {
                "title": "Pule 4 cadeiras andando de Skate",
                "description": "Coloque 4 cadeiras enfileiradas e pule sobre elas!",
                "category": "Skate",
                "icon": "✌️"
            }, {
                "title": "Dançar na rua",
                "description": "Vá para um local público e comece a dançar feito louco!",
                "category": "Public",
                "icon": "🤞"
            }, {
                "title": "Cante em público",
                "description": "Vá para um local publico (SHOPPINGGGG) e comece a cantar loucamento, mas SEM musica!",
                "category": "Public",
                "icon": "👏"
            }, {
                "title": "Make up Challenge Lvl 2",
                "description": "Peça pro seu parceiro fazer uma maquiagem inusitada e saia pra um lugar movimentado!",
                "category": "Classic",
                "icon": "💁"
            }, {
                "title": "Make up Challenge Lvl 1",
                "description": "Peça para o seu parceiro te fazer uma maquiagem e mostre pra todo mundo o seu estilo!",
                "category": "Classic",
                "icon": "💆"
            }, {
                "title": "Prendendo os cadarços",
                "description": "Amarre o calçado do seu amigo nele mesmo e veja o que acontece!",
                "category": "Pranks",
                "icon": "👁"
            }, {
                "title": "Bebida nojenta",
                "description": "Faça uma bebida com os piores ingredientes que tiver na geladeira, mas tem que beber",
                "category": "Food",
                "icon": "🙌"
            }, {
                "title": "Prova de força",
                "description": "Carregue seu amigo (o mais pesado) por algum lugar e causa uma bagunça",
                "category": "Fitness",
                "icon": "👊"
            }, {
                "title": "Nadando de guarda chuva.",
                "description": "Suba em um lugar alto, faça um salto e tente amenizar sua queda na piscina com um guarda -chuva.",
                "category": "Aquatico",
                "icon": "😨"
            }, {
                "title": "Cachorro perigoso",
                "description": "Corra pela rua e saia gritando como se tivesse um cachorro louco!",
                "category": "Public",
                "icon": "🤒"
            }, {
                "title": "Ataque de zumbis!",
                "description": "Combine com os seus amigos, um é o sobrevivente, o resto são zumbis, e aterrorize um lugar movimentado!",
                "category": "Public",
                "icon": "💀"
            }, {
                "title": "Hora de desenhar",
                "description": "Faça um desenho totalmente embaraçoso no quadro negro e espera a reação de todo mundo",
                "category": "Drawing",
                "icon": "✍️"
            }, {
                "title": "Um dia de fantasia",
                "description": "Vá fantasiado para a escola e faça tudo como se fosse um dia normal.",
                "category": "Fashion",
                "icon": "🎃"
            }, {
                "title": "Um estranho no colégio",
                "description": "Entre em uma escola qualquer e finja ser um aluno normal, mas cuidado pra não ser pego.",
                "category": "Public",
                "icon": "👽"
            }, {
                "title": "Dançando no Colegio",
                "description": "Comece a dançar loucamente no intervalo do colégio e faça uma bagunça",
                "category": "Dance",
                "icon": "🤙"
            }, {
                "title": "Novo funcionário",
                "description": "Se vista como funcionário da escola e tente fingir não ser mais um aluno",
                "category": "Public",
                "icon": "😑"
            }, {
                "title": "Um dia mais molhado",
                "description": "Leve alguns balões para a escola, encha de água, e refresque seus amigos no intervalo",
                "category": "Pranks",
                "icon": "😱"
            }
        ];
    }
    // ionViewDidLoad() {
    //   console.log(this.challenges);
    // }
    // PUSH CHALLENGES-DESCRIPTION PAGE
    ChallengesListPage.prototype.presentModal = function (challenge) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__challenges_description_challenges_description__["a" /* ChallengesDescriptionPage */], challenge);
    };
    ChallengesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-challenges-list',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\challenges-list\challenges-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ category }} Challenges</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div ion-row text-center class="category_box">\n\n\n\n\n\n      <!-- [ CHALLENGES LIST ] -->\n\n      <ng-container *ngFor="let challenge of challenges" >\n\n        <div col-6\n\n          *ngIf="challenge?.category == category"\n\n          (click)="presentModal(challenge)" \n\n          [ngStyle]="{ \'background-color\': \'#\' + challenge?.color }" >\n\n\n\n          <ion-icon>{{ challenge?.icon }}</ion-icon>\n\n          <br><br>\n\n          <p>{{ challenge?.title }}</p>\n\n        </div>\n\n      </ng-container>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\challenges-list\challenges-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ChallengesListPage);
    return ChallengesListPage;
}());

//# sourceMappingURL=challenges-list.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'http://localhost:8080';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    // HOW API WORKS (api/user/me, {id:123}, options)
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesPageModule", function() { return ChallengesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__challenges__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChallengesPageModule = /** @class */ (function () {
    function ChallengesPageModule() {
    }
    ChallengesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__challenges__["a" /* ChallengesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__challenges__["a" /* ChallengesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__challenges__["a" /* ChallengesPage */]
            ]
        })
    ], ChallengesPageModule);
    return ChallengesPageModule;
}());

//# sourceMappingURL=challenges.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function() { return PrivacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrivacyPageModule = /** @class */ (function () {
    function PrivacyPageModule() {
    }
    PrivacyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__privacy__["a" /* PrivacyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__privacy__["a" /* PrivacyPage */]),
            ],
        })
    ], PrivacyPageModule);
    return PrivacyPageModule;
}());

//# sourceMappingURL=privacy.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
            ],
        })
    ], TermsPageModule);
    return TermsPageModule;
}());

//# sourceMappingURL=terms.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelinePageModule = /** @class */ (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */]
            ]
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tab5Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'WelcomePage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
// export const Tab1Root = 'ListMasterPage';
// export const Tab2Root = 'SearchPage';
// export const Tab3Root = 'SettingsPage';
// export const Tab4Root = 'SettingsPage';
// export const Tab5Root = 'SettingsPage';
var Tab1Root = 'TimelinePage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'ChallengesPage';
var Tab4Root = 'NotificationsPage';
var Tab5Root = 'ProfilePage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\chat\chat.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>chat</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatroomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatroomsPage = /** @class */ (function () {
    function ChatroomsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatroomsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatroomsPage');
    };
    ChatroomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chatrooms',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\chatrooms\chatrooms.html"*/'<!--\n\n  Generated template for the ChatroomsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>chatrooms</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\chatrooms\chatrooms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ChatroomsPage);
    return ChatroomsPage;
}());

//# sourceMappingURL=chatrooms.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\edit-profile\edit-profile.html"*/'<!--\n\n  Generated template for the EditProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editProfile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, facebook) {
        this.navCtrl = navCtrl;
        this.facebook = facebook;
        this.userData = null;
    }
    // REGULAR LOGIN
    WelcomePage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    // SOCIAL MEDIA LOGIN
    WelcomePage.prototype.facelogin = function () {
        var _this = this;
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(300).height(300)', []).then(function (profile) {
                _this.userData = { email: profile['email'], name: profile['name'], picture: profile['picture']['data']['url'] };
                _this.navCtrl.push('TabsPage', _this.userData);
            });
        }).catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    // SIGN UP
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n  \n\n\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n  </div>\n\n\n\n  <div class="bottom_buttons" ion-row>\n\n      <button ion-button col-8 block  (click)="login()"       class="login">{{ \'LOGIN\' | translate }}</button>\n\n      <button ion-button col-4 block  (click)="facelogin()"   class="facelogin"></button>\n\n      \n\n      <!--<button ion-button col-4 block  (click)="googlelogin()" class="google"></button>-->\n\n      \n\n      <button ion-button block        (click)="signup()"      class="signup">{{ \'SIGNUP\' | translate }}</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_providers__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_timeline_timeline_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_search_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_challenges_challenges_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_challenges_list_challenges_list_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_challenges_description_challenges_description__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_titles_titles__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_the_post_the_post__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chatrooms_chatrooms__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_chat_chat__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_comments_comments__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_profile_edit_profile__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// SOCIAL LOGIN STUFF
// import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";







// MY PAGES















// SOCIAL LOGIN STUFF
// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("512785102877-bensoblr6sl738t87il9095g8cnlebpe.apps.googleusercontent.com")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("499236597098303")
//   }
// ]);
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_14__providers_providers__["c" /* Settings */](storage, {
        loggedUser: 'y_lumberjack',
        isLogged: true
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                //TimelinePage,
                //ProfilePage,
                //SearchPage,
                //ChallengesPage,
                //ChallengesListPage,
                __WEBPACK_IMPORTED_MODULE_21__pages_challenges_description_challenges_description__["a" /* ChallengesDescriptionPage */],
                //TermsPage,
                //PrivacyPage,
                __WEBPACK_IMPORTED_MODULE_25__pages_titles_titles__["a" /* TitlesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_the_post_the_post__["a" /* ThePostPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chatrooms_chatrooms__["a" /* ChatroomsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/challenges-description/challenges-description.module#ChallengesDescriptionPageModule', name: 'ChallengesDescriptionPage', segment: 'challenges-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatrooms/chatrooms.module#ChatroomsPageModule', name: 'ChatroomsPage', segment: 'chatrooms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/challenges-list/challenges-list.module#ChallengesListPageModule', name: 'ChallengesListPage', segment: 'challenges-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/challenges/challenges.module#ChallengesPageModule', name: 'ChallengesPage', segment: 'challenges', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/titles/titles.module#TitlesPageModule', name: 'TitlesPage', segment: 'titles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/the-post/the-post.module#ThePostPageModule', name: 'ThePostPage', segment: 'the-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timeline/timeline.module#TimelinePageModule', name: 'TimelinePage', segment: 'timeline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__pages_timeline_timeline_module__["TimelinePageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_challenges_challenges_module__["ChallengesPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_challenges_list_challenges_list_module__["ChallengesListPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy_module__["PrivacyPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms_module__["TermsPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings_module__["SettingsPageModule"]
                // SocialLoginModule.initialize(config) // SOCIAL LOGIN IMPORT
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                //TimelinePage,
                //ProfilePage,
                //SearchPage,
                //ChallengesPage,
                //ChallengesListPage,
                __WEBPACK_IMPORTED_MODULE_21__pages_challenges_description_challenges_description__["a" /* ChallengesDescriptionPage */],
                //TermsPage,
                //PrivacyPage,
                __WEBPACK_IMPORTED_MODULE_25__pages_titles_titles__["a" /* TitlesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_the_post_the_post__["a" /* ThePostPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chatrooms_chatrooms__["a" /* ChatroomsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_14__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_14__providers_providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_14__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
// SETTINGS CLASS
//    METHODS: setValue("key", value) & getValue("key") <----------- [MAIN METHODS = GET & SET]
//             load() & save()
//             merge(settings) & _mergeDefaults(defaults)
//             allSettings();
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Class USER (provider)
//  ENDPOINTS: "api/login" & "api/signup"
//  METHODS: user.login & user.signup (expects a JSON return)
//           user.logout & user._loggedIn
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    // ----------------------------------- [ LOGIN ] (get data from form and post)
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('api/login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            // ALERT: it expects a JSON with {status: success, user: {}}
            // if (res.status == 'success') {
            //   this._loggedIn(res);
            // } else {
            //   console.log(res);
            // }
            // SETS LOGGED IN SESSION WITH USER JSON DATA
            _this._loggedIn(res);
        }, function (err) {
            console.error('ERROR', err);
        });
        // LOGIN PAGE will handle the rest (navigation carrying data)
        return seq;
    };
    // ----------------------------------- [ SIGNUP ]
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('api/signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            // ALERT: it expects a JSON with {status: success, user: {}}
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        // SIGNUP PAGE will handle the rest (navigation + data)
        return seq;
    };
    // ----------------------------------- [ LOGOUT ] (forget session)
    User.prototype.logout = function () {
        // Log the user out, which forgets the session
        this._user = null;
    };
    // ----------------------------------- [ _LOGGEDIN ] (set session)
    User.prototype._loggedIn = function (resp) {
        // Process a login/signup response to store user data
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__challenges_list_challenges_list__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ModalController } from 'ionic-angular';

var ChallengesPage = /** @class */ (function () {
    function ChallengesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.navCtrl = navCtrl;
        // MATERIAL ICONS
        this.categories = [
            {
                name: 'Classic',
                icon: '',
                color: '9e9e9e'
            }, {
                name: 'Pranks',
                icon: '',
                color: 'F44336'
            }, {
                name: 'Trending',
                icon: '',
                color: '2196F3'
            }, {
                name: 'Food',
                icon: '',
                color: 'ffeb3b'
            }, {
                name: 'Drawing',
                icon: '',
                color: '4CAF50'
            }, {
                name: 'Photography',
                icon: '',
                color: 'cddc39'
            }, {
                name: 'Aquatic',
                icon: '',
                color: '009688'
            }, {
                name: 'Public',
                icon: '',
                color: '607d8b'
            }, {
                name: 'Singing',
                icon: '',
                color: '9c27b0'
            }, {
                name: 'Party',
                icon: '',
                color: 'ffeb3b'
            }, {
                name: 'Sports',
                icon: '',
                color: '00bcd4'
            }, {
                name: 'Fashion',
                icon: '',
                color: 'F44336'
            }, {
                name: 'Music',
                icon: '',
                color: 'e91e63'
            }, {
                name: 'Pets',
                icon: '',
                color: 'ffeb3b'
            }, {
                name: 'Hiking',
                icon: '',
                color: '795548'
            }, {
                name: 'Travel',
                icon: '',
                color: '607d8b'
            }, {
                name: 'Couch',
                icon: '',
                color: 'ff9800'
            }, {
                name: 'Nerd',
                icon: '',
                color: 'F44336'
            }, {
                name: 'Magic',
                icon: '',
                color: '9c27b0'
            }, {
                name: 'Fitness',
                icon: '',
                color: '2196F3'
            }, {
                name: 'Couples',
                icon: '',
                color: 'FF4081'
            }, {
                name: 'Dance',
                icon: '',
                color: '76FF03'
            }
        ];
        // IONIC ICONS
        // this.categories = [
        //   {
        //     name: 'Classic',
        //     icon: 'ios-cube-outline',
        //     color: '9e9e9e'
        //   },{
        //     name: 'Pranks',
        //     icon: 'ios-flame-outline',
        //     color: 'F44336'
        //   },{
        //     name: 'Trending',
        //     icon: 'ios-trophy-outline',
        //     color: '2196F3'
        //   },{
        //     name: 'Food',
        //     icon: 'ios-restaurant-outline',
        //     color: 'ffeb3b'
        //   },{
        //     name: 'Drawing',
        //     icon: 'ios-color-palette-outline',
        //     color: '4CAF50'
        //   },{
        //     name: 'Photography',
        //     icon: 'ios-camera-outline',
        //     color: 'cddc39'
        //   },{
        //     name: 'Aquatic',
        //     icon: 'ios-umbrella-outline',
        //     color: '009688'
        //   },{
        //     name: 'Public',
        //     icon: 'ios-videocam-outline',
        //     color: '607d8b'
        //   },{
        //     name: 'Singing',
        //     icon: 'ios-mic-outline',
        //     color: '9c27b0'
        //   },{
        //     name: 'Party',
        //     icon: 'ios-beer-outline',
        //     color: 'ffeb3b'
        //   },{
        //     name: 'Sports',
        //     icon: 'ios-baseball-outline',
        //     color: '00bcd4'
        //   },{
        //     name: 'Fashion',
        //     icon: 'ios-shirt-outline',
        //     color: 'F44336'
        //   },{
        //     name: 'Music',
        //     icon: 'ios-musical-notes-outline',
        //     color: 'e91e63'
        //   },{
        //     name: 'Pets',
        //     icon: 'ios-paw-outline',
        //     color: 'ffeb3b'
        //   },{
        //     name: 'Hiking',
        //     icon: 'ios-partly-sunny-outline',
        //     color: '795548'
        //   },{
        //     name: 'Couch',
        //     icon: 'ios-pizza-outline',
        //     color: 'ff9800'
        //   },{
        //     name: 'Magic',
        //     icon: 'ios-star-outline',
        //     color: '9c27b0'
        //   },{
        //     name: 'Fitness',
        //     icon: 'ios-walk-outline',
        //     color: '2196F3'
        //   }
        // ]
    }
    // PUSH CHALLENGES-LIST PAGE
    ChallengesPage.prototype.presentModal = function (category) {
        // let modal = this.modalCtrl.create(ChallengesListPage);
        // modal.present;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__challenges_list_challenges_list__["a" /* ChallengesListPage */], { 'category': category });
    };
    ChallengesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-challenges',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\challenges\challenges.html"*/'<ion-content>\n\n        <div ion-row text-center class="category_box">\n\n\n\n            <!-- [ CATEGORY LISTING ] -->\n\n            <div col-6 \n\n                *ngFor="let category of categories" \n\n                (click)="presentModal(category?.name)" \n\n                [ngStyle]="{ \'background-color\': \'#\' + category?.color }" >\n\n              \n\n                <!-- <ion-icon name="{{ category?.icon }}"></ion-icon> -->\n\n                <ion-icon name="icon">{{ category?.icon }}</ion-icon>\n\n              <!-- <i class="material-icons">{{ category?.icon}}</i> -->\n\n              <p>{{ category?.name }}</p>\n\n            </div>\n\n\n\n            <!-- <div col-6><ion-icon name="ios-cube-outline"></ion-icon><p>Classic        </p></div>\n\n            <div col-6><ion-icon name="ios-flame-outline"></ion-icon><p>Pranks         </p></div>\n\n            <div col-6><ion-icon name="ios-trophy-outline"></ion-icon><p>Trending         </p></div>\n\n            <div col-6><ion-icon name="ios-restaurant-outline"></ion-icon><p>Food           </p></div>\n\n            <div col-6><ion-icon name="ios-baseball-outline"></ion-icon><p>Sports          </p></div>\n\n            <div col-6><ion-icon name="ios-beer-outline"></ion-icon><p>Party          </p></div>\n\n            <div col-6><ion-icon name="ios-umbrella-outline"></ion-icon><p>Aquatic        </p></div>\n\n            <div col-6><ion-icon name="ios-camera-outline"></ion-icon><p>Photography    </p></div>\n\n            <div col-6><ion-icon name="ios-color-palette-outline"></ion-icon><p>Drawing		    </p></div>\n\n            <div col-6><ion-icon name="ios-mic-outline"></ion-icon><p>Singing		    </p></div>\n\n            <div col-6><ion-icon name="ios-partly-sunny-outline"></ion-icon><p>Hiking		      </p></div>\n\n            <div col-6><ion-icon name="ios-paw-outline"></ion-icon><p>Pets		      </p></div>\n\n            <div col-6><ion-icon name="ios-videocam-outline"></ion-icon><p>Public		      </p></div>\n\n            <div col-6><ion-icon name="ios-shirt-outline"></ion-icon><p>Fashion		      </p></div>\n\n            <div col-6><ion-icon name="ios-musical-notes-outline"></ion-icon><p>Music		      </p></div>\n\n            <div col-6><ion-icon name="ios-pizza-outline"></ion-icon><p>Couch		      </p></div>\n\n            <div col-6><ion-icon name="ios-star-outline"></ion-icon><p>Magic		      </p></div>\n\n            <div col-6><ion-icon name="ios-walk-outline"></ion-icon><p>Fitness        </p></div> -->\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\challenges\challenges.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ChallengesPage);
    return ChallengesPage;
}());

//# sourceMappingURL=challenges.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPage');
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-privacy',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\privacy\privacy.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Privacy Policy\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n        <p>[Individual or Company Name] built the [App Name] app as a [open source | free | freemium | ad-supported | commercial] app. This SERVICE is provided by [Individual or company name] [at no cost] and is intended\n\n            for use as is.</p>\n\n        <p>This page is used to inform website visitors regarding [my|our] policies with the collection, use, and\n\n            disclosure of Personal Information if anyone decided to use [my|our] Service.</p>\n\n        <p>If you choose to use [my|our] Service, then you agree to the collection and use of information in\n\n            relation with this policy. The Personal Information that [I|we] collect are used for providing and\n\n            improving the Service. [I|We] will not use or share your information with anyone except as described\n\n            in this Privacy Policy.</p>\n\n        <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions,\n\n            which is accessible at [App Name], unless otherwise defined in this Privacy Policy.</p>\n\n        \n\n        <p><strong>Information Collection and Use</strong></p>\n\n        <p>For a better experience while using our Service, [I|we] may require you to provide us with certain\n\n            personally identifiable information, including but not limited to [add whatever else you collect here, e.g. users name | address | location | pictures]. \n\n          The information that [I|we] request is [retained on your device and is not\n\n            collected by [me|us] in any way]|[will be retained by us and used as described in this privacy policy.</p>\n\n        <p>The app does use third party services that may collect information used to identify you. [You can mention Google services here and link to Google\'s privacy policy if you want].\n\n        \n\n        <p><strong>Log Data</strong></p>\n\n        <p>[I|We] want to inform you that whenever you use [my|our] Service, in case of an error in the app [I|we] collect\n\n            data and information (through third party products) on your phone called Log Data. This Log Data\n\n            may include information such as your devices’s Internet Protocol (“IP”) address, device name,\n\n            operating system version, configuration of the app when utilising [my|our] Service, the time and date\n\n            of your use of the Service, and other statistics.</p>\n\n        \n\n        <p><strong>Cookies</strong></p>\n\n        <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier.\n\n            These are sent to your browser from the website that you visit and are stored on your devices’s\n\n            internal memory.</p>\n\n        <p>>!-- Check if this is true for your app, if unsure, just assume that you do use cookies and modify this next line -->This Services does not uses these “cookies” explicitly. However, the app may use third party code\n\n            and libraries that use “cookies” to collection information and to improve their services. You\n\n            have the option to either accept or refuse these cookies, and know when a cookie is being sent\n\n            to your device. If you choose to refuse our cookies, you may not be able to use some portions of\n\n            this Service.</p>\n\n        \n\n        <p><strong>Service Providers</strong></p> <!-- This part need seem like it\'s not needed, but if you use any Google services, or any other third party libraries, chances are, you need this. -->\n\n        <p>[I|We] may employ third-party companies and individuals due to the following reasons:</p>\n\n        <ul>\n\n            <li>To facilitate our Service;</li>\n\n            <li>To provide the Service on our behalf;</li>\n\n            <li>To perform Service-related services; or</li>\n\n            <li>To assist us in analyzing how our Service is used.</li>\n\n        </ul>\n\n        <p>[I|We] want to inform users of this Service that these third parties have access to your Personal\n\n            Information. The reason is to perform the tasks assigned to them on our behalf. However, they\n\n            are obligated not to disclose or use the information for any other purpose.</p>\n\n        \n\n        <p><strong>Security</strong></p>\n\n        <p>[I|We] value your trust in providing us your Personal Information, thus we are striving to use\n\n            commercially acceptable means of protecting it. But remember that no method of transmission over\n\n            the internet, or method of electronic storage is 100% secure and reliable, and [I|we] cannot\n\n            guarantee its absolute security.</p>\n\n        \n\n        <p><strong>Links to Other Sites</strong></p>\n\n        <p>This Service may contain links to other sites. If you click on a third-party link, you will be\n\n            directed to that site. Note that these external sites are not operated by [me|us]. Therefore, I\n\n            strongly advise you to review the Privacy Policy of these websites. I have no control over, and\n\n            assume no responsibility for the content, privacy policies, or practices of any third-party\n\n            sites or services.</p>\n\n        \n\n        <p><strong>Children’s Privacy</strong></p>\n\n        <p>This Services do not address anyone under the age of 13. [I|We] do not knowingly collect personal\n\n            identifiable information from children under 13. In the case [I|we] discover that a child under 13\n\n            has provided [me|us] with personal information, [I|we] immediately delete this from our servers. If you\n\n            are a parent or guardian and you are aware that your child has provided us with personal\n\n            information, please contact [me|us] so that [I|we] will be able to do necessary actions.</p>\n\n        \n\n        <p><strong>Changes to This Privacy Policy</strong></p>\n\n        <p>[I|We] may update our Privacy Policy from time to time. Thus, you are advised to review this page\n\n            periodically for any changes. [I|We] will notify you of any changes by posting the new Privacy Policy\n\n            on this page. These changes are effective immediately, after they are posted on this page.</p>\n\n        \n\n        <p><strong>Contact Us</strong></p>\n\n        <p>If you have any questions or suggestions about [my|our] Privacy Policy, do not hesitate to contact\n\n            [me|us].</p>\n\n        <p>This Privacy Policy page was created at <a href="https://privacypolicytemplate.net"\n\n                                                      target="_blank">privacypolicytemplate.net</a>.\n\n  </ion-content>'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\privacy\privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\search\search.html"*/'<ion-content>\n\n\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of items">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            option1: [this.options.option1],
            option2: [this.options.option2],
            option3: [this.options.option3]
        };
        switch (this.page) {
            case 'main':
                break;
            case 'profile':
                group = {
                    option4: [this.options.option4]
                };
                break;
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    var SettingsPage_1;
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ pageTitle }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <form [formGroup]="form" *ngIf="settingsReady">\n\n    <ion-list *ngIf="page == \'main\'">\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION1\' | translate }}</ion-label>\n\n        <ion-toggle formControlName="option1"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION2\' | translate }}</ion-label>\n\n        <ion-input formControlName="option2"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION3\' | translate }}</ion-label>\n\n        <ion-select formControlName="option3">\n\n          <ion-option value="1" checked="true">1</ion-option>\n\n          <ion-option value="2">2</ion-option>\n\n          <ion-option value="3">3</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <button ion-item [navPush]="subSettings" [navParams]="profileSettings">\n\n        {{ \'SETTINGS_PROFILE_BUTTON\' | translate }}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="page == \'profile\'">\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION4\' | translate }}</ion-label>\n\n        <ion-input formControlName="option4"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\terms\terms.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Terms of Service</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    Terms of Service ("Terms")\n\n    <br><br>\n\n    Last updated: (add date)\n\n    <br><br>\n\n    Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the\n\n    http://www.mywebsite.com (change this) website and the My Mobile App (change this) mobile\n\n    application (the "Service") operated by My Company (change this) ("us", "we", or "our").\n\n    Your access to and use of the Service is conditioned on your acceptance of and compliance with\n\n    these Terms. These Terms apply to all visitors, users and others who access or use the Service.\n\n    By accessing or using the Service you agree to be bound by these Terms. If you disagree\n\n    with any part of the terms then you may not access the Service.\n\n    <br><br>\n\n    Termination<br>\n\n    We may terminate or suspend access to our Service immediately, without prior notice or liability, for\n\n    any reason whatsoever, including without limitation if you breach the Terms.\n\n    All provisions of the Terms which by their nature should survive termination shall survive\n\n    termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and\n\n    limitations of liability.\n\n    <br><br>\n\n    Subscriptions<br>\n\n    Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in\n\n    advance on a recurring ...\n\n    The Subscriptions section is for SaaS businesses. For the full disclosure section or for a\n\n    “Purchases” section, create your own Terms of Service.\n\n    \n\n    <br><br>\n\n    Content<br>\n\n    Our Service allows you to post, link, store, share and otherwise make available certain information,\n\n    text, graphics, videos, or other material ("Content"). You are responsible for the …\n\n    The Content section is for businesses that allow users to create, edit, share, make content on\n\n    their websites or apps. For the full disclosure section, create your own Terms of Service.\n\n    Links To Other Web Sites<br>\n\n    Our Service may contain links to third-party web sites or services that are not owned or controlled\n\n    by My Company (change this).<br>\n\n    My Company (change this) has no control over, and assumes no responsibility for, the content,\n\n    privacy policies, or practices of any third party web sites or services. You further acknowledge and\n\n    agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any\n\n    damage or loss caused or alleged to be caused by or in connection with use of or reliance on any\n\n    such content, goods or services available on or through any such web sites or services.\n\n    <br><br>\n\n    Changes<br>\n\n    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a\n\n    revision is material we will try to provide at least 30 (change this) days\' notice prior to any new terms\n\n    taking effect. What constitutes a material change will be determined at our sole discretion.\n\n    <br><br>\n\n    Contact Us<br>\n\n    If you have any questions about these Terms, please contact us.    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\terms\terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_comments__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimelinePage = /** @class */ (function () {
    function TimelinePage(navCtrl, navParams, actionSheetCtrl, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.username = 'y_lumberjack';
        // HTTP GET REQUEST
        this.http.get('https://defy-182116.appspot.com/posts/').subscribe(
        // SUCCESS
        function (data) {
            console.log("SUCCESS: Sucessfully retrieved posts from server.");
            _this.posts = data;
            console.log(data);
        }, 
        // ERROR
        function (err) {
            console.log("ERROR: Could not retrieve data from server.");
            _this.posts = [
                {
                    _id: "11",
                    username: "DonaldDuck64",
                    name: "Donald Trump",
                    type: "video",
                    category: "Food",
                    challenge: "Go to CapcomBar",
                    description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
                    location: "Jaboticabal-SP",
                    views: 78965,
                    likes: 123,
                    dislikes: 654,
                    date: "10/10/2017"
                },
                {
                    _id: "14",
                    username: "y_lumberjack",
                    name: "Diego T. Yamaguchi",
                    type: "video",
                    category: "Music",
                    challenge: "Play Zelda!",
                    description: "I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.",
                    location: "Jaboticabal-SP",
                    views: 1234,
                    likes: 51,
                    dislikes: 1651,
                    date: "05/12/2017"
                },
                {
                    _id: "15",
                    username: "Rolao",
                    name: "Dr. Steve Zaragoza",
                    type: "picture",
                    category: "Aquatic",
                    challenge: "Water Assault",
                    description: "Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.",
                    location: "Matão-SP",
                    views: 999999,
                    likes: 558,
                    dislikes: 1451,
                    date: "05/12/2017"
                }
            ];
        });
    }
    TimelinePage.prototype.ionViewDidLoad = function () {
        console.log(this.posts);
    };
    TimelinePage.prototype.openModalMore = function (postID, description, location) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            //title: 'Modify your album',
            buttons: [
                {
                    text: 'Edit',
                    icon: 'create',
                    handler: function () {
                        console.log('Edit clicked');
                        _this.editPostPrompt(postID, description, location);
                    }
                }, {
                    text: 'Share',
                    icon: 'share-alt',
                    handler: function () {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Delete',
                    icon: 'trash',
                    handler: function () {
                        console.log('Delete clicked');
                        _this.deletePostPrompt(postID);
                    }
                }, {
                    text: 'Report...',
                    icon: 'warning',
                    //role: 'destructive',
                    handler: function () {
                        console.log('Report clicked');
                    }
                }, {
                    text: 'Share on Messenger',
                    icon: 'chatboxes',
                    handler: function () {
                        console.log('Share on Messenger clicked');
                    }
                }, {
                    text: 'Share on Whatsapp',
                    icon: 'logo-whatsapp',
                    //role: 'cancel',
                    handler: function () {
                        console.log('Share on Whatsapp clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TimelinePage.prototype.openModalShare = function (postID) {
        var actionSheet = this.actionSheetCtrl.create({
            //title: 'Modify your album',
            buttons: [
                {
                    text: 'Share on Facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                    }
                }, {
                    text: 'Share on Twitter',
                    icon: 'logo-twitter',
                    handler: function () {
                    }
                }, {
                    text: 'Share on Messenger',
                    icon: 'chatboxes',
                    handler: function () {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Share on Whatsapp',
                    icon: 'logo-whatsapp',
                    //role: 'cancel',
                    handler: function () {
                        console.log('Share clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // [EDIT POST PROMPT]
    TimelinePage.prototype.editPostPrompt = function (postID, description, location) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Edit post',
            inputs: [
                {
                    name: 'description',
                    placeholder: 'Description',
                    value: description
                },
                {
                    name: 'location',
                    placeholder: 'Location',
                    value: location
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        // HTTP: UPDATE POST
                        _this.http.put('https://defy-182116.appspot.com/posts/', { '_id': postID, 'description': data.description, 'location': data.location }).subscribe(function (data) {
                            console.log("SUCCESS: Sucessfully updated post.");
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        }, function (err) {
                            console.log("ERROR: Could not update post.");
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    // [DELETE POST PROMPT]
    TimelinePage.prototype.deletePostPrompt = function (postID) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete post?',
            message: 'Are you sure you wanna delete this post?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel was clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes was clicked');
                        _this.http.delete('https://defy-182116.appspot.com/posts/' + postID).subscribe(function (data) {
                            console.log("SUCCESS: Sucessfully deleted post.");
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        }, function (err) {
                            console.log("ERROR: Could not delete post.");
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    // [LIKE POST]
    TimelinePage.prototype.likePost = function (postID) {
        this.http.put('http://localhost:8080/like', { 'id_post': postID, 'username': this.username, 'type': 'like' }).subscribe(function (data) {
            console.log("SUCCESS: Sucessfully liked post.");
        }, function (err) {
            console.log("ERROR: Could not like post.");
        });
    };
    // [DISLIKE POST]
    TimelinePage.prototype.dislikePost = function (postID) {
        this.http.put('http://localhost:8080/like', { 'id_post': postID, 'username': this.username, 'type': 'dislike' }).subscribe(function (data) {
            console.log("SUCCESS: Sucessfully disliked post.");
        }, function (err) {
            console.log("ERROR: Could not dislike post.");
        });
    };
    // PULLDOWN REFRESH
    TimelinePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            // REFRESH PAGE (later just make a AJAX append)
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            refresher.complete();
        }, 1000);
    };
    // NAVIGATE
    TimelinePage.prototype.goToComments = function (postID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__comments_comments__["a" /* CommentsPage */], postID);
    };
    TimelinePage.prototype.goToProfile = function (username) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], { "username": username });
    };
    TimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\timeline\timeline.html"*/'<ion-header>\n\n  \n\n    <ion-navbar ion-row>\n\n      <ion-title text-center>defy</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n\n\n    <!-- PULL TO REFRESH -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content>\n\n      </ion-refresher-content>\n\n    </ion-refresher>\n\n      \n\n\n\n    <!-- START POSTS -->\n\n    <ion-card *ngFor="let post of posts">\n\n  \n\n      <!-- POST HEADER -->\n\n      <ion-item>\n\n        <ion-avatar item-start (click)="goToProfile(post?.username)">\n\n          <img src="assets/img/pic/{{post?.username}}.jpg">\n\n        </ion-avatar>\n\n        <ion-icon name="icon" class="more" (click)="openModalMore(post?._id, post?.description, post?.location)"></ion-icon>\n\n\n\n        <h2><b (click)="goToProfile(post?.username)">{{ post?.username }}</b></h2>\n\n        <p>{{ post?.category }} || {{ post?.challenge }}</p>\n\n      </ion-item>\n\n  \n\n      <!-- IF PICTURE -->\n\n      <ng-container *ngIf="post?.type === \'picture\'">\n\n        <img src="assets/img/posts/{{post?._id}}.jpg">\n\n      </ng-container>\n\n\n\n      <!-- IF VIDEO -->\n\n      <ng-container *ngIf="post?.type === \'video\'">\n\n          <img src="assets/img/posts/{{post?._id}}.jpg">\n\n      </ng-container>\n\n\n\n\n\n      <div class="options">\n\n          <ion-icon name="icon" (click)="likePost(post?.id);    like = !like; dislike = false"    [ngClass]="{\'active\' : like}" ></ion-icon>\n\n          <ion-icon name="icon" (click)="dislikePost(post?.id); dislike = !dislike; like = false" [ngClass]="{\'active\' : dislike}" ></ion-icon>\n\n          <ion-icon name="icon" (click)="goToComments(post?.id)"></ion-icon>\n\n          <ion-icon name="icon" class="right" (click)="openModalShare(post?.id)"></ion-icon>\n\n      </div>\n\n\n\n      <!-- DESCRIPTION -->\n\n      <ion-card-content>\n\n        <p>{{ post?.description }}</p>\n\n      </ion-card-content>\n\n  \n\n\n\n      <!-- TEMP BOTTOM JUNK -->\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button color="primary" clear small icon-start>\n\n              <ion-icon name=\'thumbs-up\'></ion-icon>\n\n              {{ post?.likes }} Likes\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button color="primary" clear small icon-start>\n\n              <ion-icon name=\'text\'></ion-icon>\n\n              {{ post?.comments }} Comments\n\n          </button>\n\n        </ion-col>\n\n        <ion-col center text-center>\n\n          <ion-note>\n\n            {{ post?.views }} Views\n\n          </ion-note>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\timeline\timeline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], TimelinePage);
    return TimelinePage;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, fb, localNotifications) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.fb = fb;
        this.localNotifications = localNotifications;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_pages__["a" /* FirstRunPage */];
        this.pages = [
            //{ title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Home', component: 'TabsPage' },
            { title: 'Privacy Policy', component: 'PrivacyPage' },
            { title: 'Terms of Service', component: 'TermsPage' },
            { title: 'Settings', component: 'SettingsPage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // [LOCAL NOTIFICATION ATTEMPT]
            _this.localNotifications.schedule({
                id: 1,
                title: "Defy is on fire!",
                text: 'O aplicativo está funcionando perfeitamente!',
                data: { myData: "Insert hidden data here" }
            });
        });
        this.initTranslate();
        // CHECK GLOBAL SETTINGS "localStorage-ish" IF USER IS LOGGED
        // if (settings.getValue('isLogged'))  //does not FUCKING WORK LIKE THIS!
        //   this.rootPage = MainPage;
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.fb.logout().then(function (data) {
            console.log('SUCESSFULLY LOGGED OUT FROM FACEBOOK!');
            _this.nav.setRoot('WelcomePage');
        }, function (error) {
            // CHANGE LATER
            console.log('FACEBOOK LOGOUT DID NOT WORKED!');
            _this.nav.setRoot('WelcomePage');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n\n        <button menuClose ion-item (click)=\"logout()\">\n          Logout\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.http.get('https://defy-182116.appspot.com/comments/' + this.postID).subscribe(function (data) {
            console.log("SUCCESS: Sucessfully retrieved user profile from server.");
            _this.comments = data;
        }, function (err) {
            console.log("ERROR: Could not retrieve data from server.");
            _this.comments = [
                {
                    username: "y_lumberjack",
                    comment: "I've had a pretty messed up day. If we just.."
                }, {
                    username: "6",
                    comment: "Native: tried calling SplashScreen.hide, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"
                }, {
                    username: "DonaldDuck64",
                    comment: "Slow network is detected. Fallback font will be used while loading"
                }
            ];
        });
        // this.comments = [
        //   {
        //     username: "y_lumberjack",
        //     comment: "I've had a pretty messed up day. If we just.."
        //   },{
        //     username: "6",
        //     comment: "Native: tried calling SplashScreen.hide, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"
        //   },{
        //     username: "DonaldDuck64",
        //     comment: "Slow network is detected. Fallback font will be used while loading"
        //   }
        // ]
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\comments\comments.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Comments</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <br>\n\n  <ng-container *ngFor="let comment of comments" >\n\n    <!-- <ion-list>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/img/pic/{{ comment?.username }}.jpg">\n\n        </ion-avatar>\n\n        <p><b>{{ comment?.username }}</b> {{ comment?.comment }}</p>\n\n      </ion-item>\n\n    </ion-list> -->\n\n    <ion-item-sliding>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n              <img src="assets/img/pic/{{ comment?.username }}.jpg">\n\n          </ion-avatar>\n\n          <b>{{ comment?.username }}</b> \n\n          <p>{{ comment?.comment }}</p>\n\n        </ion-item>\n\n\n\n        <ion-item-options side="left">\n\n          <button ion-button color="primary"><ion-icon name="text"></ion-icon>Text</button>\n\n          <button ion-button color="secondary"><ion-icon name="call"></ion-icon>Call</button>\n\n        </ion-item-options>\n\n\n\n        <ion-item-options side="right">\n\n          <button ion-button color="primary"><ion-icon name="mail"></ion-icon>Email</button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n      \n\n  </ng-container>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\comments\comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__titles_titles__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__the_post_the_post__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Settings } from '../../providers/providers';

var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, 
    // private settings: Settings,
    http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.profile_tabs = 'tab1';
        this.username = "y_lumberjack"; // SET BY DEFAULT LOGGED USER
        // WHEN CLICKED ON A goToProfile(username)
        if (this.navParams.get('username'))
            this.username = this.navParams.get('username'); // IF CALLED, THEN ITS REPLACED (meaning, not MY page)
        // else
        //   console.log(settings.getValue('loggedUser'));
        // console.log(this.navParams.get('username'));
        // try {
        //   this.settings.load().then(() => {
        //     this.settings.getValue('isLogged').then(val => {
        //       console.log(val);
        //     });
        //   });
        // } catch (e) {
        //   console.log('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
        // } 
        this.http.get('https://defy-182116.appspot.com/user/' + this.username).subscribe(function (data) {
            console.log("SUCCESS: Sucessfully retrieved user profile from server.");
            _this.profile = data;
        }, function (err) {
            console.log("ERROR: Could not retrieve data from server.");
            _this.profile =
                {
                    name: 'Diego T. Yamaguchi',
                    username: 'y_lumberjack',
                    views: '123',
                    followers: '456',
                    following: '789',
                    badge: '3',
                    about: 'Hello! Thanks for stopping by! This is a sample description, k bye',
                    lv: '3',
                    xp: '4',
                    title: 'Game Master',
                    titles: ['Savage', 'Mr. Tite', 'Filho do capeta', 'Satan himself', 'Peixinho', 'Pica das Galaxias', 'Game Master'],
                    posts: ['11', '12', '13', '14', '15', '16', '17', '11', '12']
                };
        });
    }
    // ionViewDidLoad() {
    //   console.log(this.username);
    // }
    ProfilePage.prototype.goToTitles = function (titles, selected) {
        var data = { "titles": titles, "selected": selected };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__titles_titles__["a" /* TitlesPage */], data);
    };
    ProfilePage.prototype.goToPost = function (postID, ownerUsername, ownerName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__the_post_the_post__["a" /* ThePostPage */], { "postID": postID, "username": ownerUsername, "name": ownerName });
    };
    // -------------------------------------------------------------------------------------------------- //
    // [ DISABLE ACCOUNT ]
    ProfilePage.prototype.disableAccount = function () {
        this.http.put('https://defy-182116.appspot.com/user/disable', { 'username': this.username }).subscribe(function (data) {
            console.log("SUCCESS: Sucessfully disabled account. The account will remain inactivated until you decide to log in again.");
            window.location.href = "";
        }, function (err) {
            console.log("ERROR: Could not disable account.");
        });
    };
    // [MAKE ACCOUNT PRIVATE]
    ProfilePage.prototype.setPrivateAccount = function () {
        this.http.put('https://defy-182116.appspot.com/user/private', { 'username': this.username, 'is_private': true }).subscribe(function (data) {
            console.log("SUCCESS: Sucessfully made account private.");
        }, function (err) {
            console.log("ERROR: Could not make account private.");
        });
    };
    // [MAKE ACCOUNT PUBLIC]
    ProfilePage.prototype.setPublicAccount = function () {
        this.http.put('https://defy-182116.appspot.com/user/private', { 'username': this.username, 'is_private': false }).subscribe(function (data) {
            console.log("SUCCESS: Sucessfully made account public.");
        }, function (err) {
            console.log("ERROR: Could not make account public.");
        });
    };
    // [EDIT ACCOUNT]
    ProfilePage.prototype.editProfile = function () {
        //open modal with form
    };
    ProfilePage.prototype.submitEditProfile = function () {
    };
    // -------------------------------------------------------------------------------------------------- //
    // PULLDOWN REFRESH
    ProfilePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            // REFRESH PAGE (later just make a AJAX append)
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            refresher.complete();
        }, 1000);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\dev\git\defy.ionic\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ username }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <!-- PULL TO REFRESH -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content>\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n\n\n    <div>\n\n        <div ion-row class="profile_head">\n\n\n\n            <!-- PROFILE PICTURE -->\n\n            <div col-3 text-center>\n\n                <img class="profile_picture" src="assets/img/pic/{{ username }}.jpg">\n\n            </div>\n\n\n\n            <div col-9 ion-row text-center>\n\n                <!-- VIEWS & FOLLOWERS & FOLLOWINGS -->\n\n                <div col-3><b>{{ profile?.views }}</b> <br>views</div>\n\n                <div col-3><b>{{ profile?.followers }}</b> <br>followers</div>\n\n                <div col-3><b>{{ profile?.following }}</b> <br>following</div>\n\n                <div col-2><img class="profile_badge" src="assets/img/badges/{{ profile?.badge }}.png"></div>\n\n\n\n                <!-- LEVEL BAR -->\n\n                <div col-11 class="level_bar left">\n\n                    <div></div>\n\n                    <div></div>\n\n                    <div></div>\n\n                    <div></div>\n\n                    <div></div>\n\n                    <div></div>\n\n                    <div></div>\n\n                    <div></div>\n\n                    <div></div>\n\n                    <div style="border:none;"></div>\n\n                    <div class="lv_percentage" [ngStyle]="{ \'width\': profile?.xp + \'0%\' }"></div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n        \n\n\n\n        <!-- PROFILE LEVEL & TITLE -->\n\n        <div ion-row>\n\n            <div col-3 style="text-align:center;"><b>LEVEL <b>{{ profile?.lv }}</b></b></div>\n\n            <!-- <button col-8 (click)="goToTitles(profile?.titles, profile?.title);">\n\n                {{ profile?.title }}\n\n            </button> -->\n\n\n\n\n\n            <ion-item col-8 class="titulo_do_mano">\n\n                <ion-select col-12 [(ngModel)]="titles" placeholder="{{ profile?.title }}">\n\n\n\n                    <ion-label>Select a title</ion-label>\n\n                    <ion-option *ngFor="let title of profile?.titles" value="{{ title }}">{{ title }}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </div>\n\n\n\n        <div col-12 style="padding:20px;">\n\n            <b>{{ profile?.name }}</b><br>\n\n            <span>\n\n                {{ profile?.about }}\n\n            </span>\n\n        </div>\n\n\n\n        <!-- PROFILE NAVIGATION -->\n\n        <ion-segment [(ngModel)]="profile_tabs">\n\n            <ion-segment-button value="tab1">\n\n                <ion-icon name="md-apps"></ion-icon>                              \n\n            </ion-segment-button>\n\n            <ion-segment-button value="tab2">\n\n                <ion-icon name="md-flash"></ion-icon>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="tab3">\n\n                <ion-icon name="md-settings"></ion-icon>                              \n\n            </ion-segment-button>\n\n          </ion-segment>\n\n\n\n\n\n        <!-- PROFILE TAB 1 -->\n\n        <div [ngSwitch]="profile_tabs">\n\n            <div *ngSwitchCase="\'tab1\'" ion-row>\n\n                <div col-4 *ngFor="let p of profile?.posts" (click)="goToPost(p, profile?.username, profile?.name)">\n\n                      <img src="assets/img/posts/{{ p }}.jpg">\n\n                </div>\n\n            </div>\n\n          \n\n            <!-- PROFILE TAB 2 -->\n\n            <div *ngSwitchCase="\'tab2\'">\n\n            </div>\n\n\n\n            <!-- PROFILE TAB 3 -->\n\n            <div *ngSwitchCase="\'tab3\'">\n\n                <ion-list>\n\n                    <ion-item (click)="setPrivateAccount()">Make Account Private</ion-item>\n\n                    <ion-item (click)="setPublicAccount()">Make Account Public</ion-item>\n\n                    <ion-item (click)="disableAccount()">Disable Account</ion-item>\n\n                    <ion-item>Logout</ion-item>\n\n                </ion-list>\n\n                      \n\n            </div>\n\n          </div>\n\n\n\n        <!-- PROFILE TAB 3 [posts] -->\n\n        <!-- <div class="profile_tab profile_posts childs_go_to_post" ion-row>\n\n            <div col-4><img src="assets/img/11.jpg"></div>\n\n            <div col-4><img src="assets/img/12.jpg"></div>\n\n            <div col-4><img src="assets/img/13.jpg"></div>\n\n            <div col-4><img src="assets/img/14.jpg"></div>\n\n            <div col-4><img src="assets/img/15.jpg"></div>\n\n            <div col-4><img src="assets/img/16.jpg"></div>\n\n            <div col-4><img src="assets/img/17.jpg"></div>\n\n            <div col-4><img src="assets/img/11.jpg"></div>\n\n            <div col-4><img src="assets/img/12.jpg"></div>\n\n        </div> -->\n\n\n\n        <!-- PROFILE TAB 2 [challenges] -->\n\n        <!-- <div class="profile_tab profile_challenges boxed">\n\n            <div ion-row style="color:#222;margin-bottom:0;">\n\n                <div col-6 class="grey">       <i class="material-icons">play_arrow    </i><br>Classic</div>\n\n                <div col-6 class="red">        <i class="material-icons">whatshot      </i><br>Pranks</div>\n\n                <div col-6 class="blue">       <i class="material-icons">fitness_center</i><br>Fitness</div>\n\n                <div col-6 class="yellow">     <i class="material-icons">restaurant    </i><br>Food</div>\n\n                <div col-6 class="purple">     <i class="material-icons">star          </i><br>Skate</div>\n\n                <div col-6 class="teal">       <i class="material-icons">pool          </i><br>Aquatic</div>\n\n                <div col-6 class="brown">      <i class="material-icons">photo_camera  </i><br>photography</div>\n\n                <div col-6 class="green">      <i class="material-icons">palette       </i><br>Drawing</div>\n\n            </div>\n\n        </div> -->\n\n\n\n        <!-- PROFILE TAB 3 [settings] -->\n\n        <!-- <div class="profile_tab profile_settings">\n\n            <ul class="collection">\n\n                <li class="collection-item">Invite Facebook Friends</li>\n\n                <li class="collection-item">Edit Profile</li>\n\n                <li class="collection-item">Private Account</li>\n\n                <li class="collection-item">Log Out</li>\n\n            </ul>\n\n        </div> -->\n\n    </div>\n\n              <!-- END DEFAULT PAGE -->\n\n      \n\n              <!--\n\n              <div class="post_page page"></div>\n\n              <div class="comment_page page"></div>\n\n              <div class="profile_page page"></div> -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\dev\git\defy.ionic\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[235]);
//# sourceMappingURL=main.js.map