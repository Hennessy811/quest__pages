(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _create_quest_create_quest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-quest/create-quest.component */ "./src/app/create-quest/create-quest.component.ts");
/* harmony import */ var _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks-list/tasks-list.component */ "./src/app/tasks-list/tasks-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'new-quest', component: _create_quest_create_quest_component__WEBPACK_IMPORTED_MODULE_3__["CreateQuestComponent"] },
    { path: 'tasks-list', component: _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_4__["TasksListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _create_quest_create_quest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-quest/create-quest.component */ "./src/app/create-quest/create-quest.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _create_quest_mockup_mockup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-quest/mockup/mockup.component */ "./src/app/create-quest/mockup/mockup.component.ts");
/* harmony import */ var _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks-list/tasks-list.component */ "./src/app/tasks-list/tasks-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _create_quest_create_quest_component__WEBPACK_IMPORTED_MODULE_8__["CreateQuestComponent"],
                _create_quest_mockup_mockup_component__WEBPACK_IMPORTED_MODULE_12__["MockupComponent"],
                _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_13__["TasksListComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<app-header></app-header>\r\n\r\n<div class=\"carousel-block\">\r\n  <ngb-carousel #authSlider>\r\n\r\n    <ng-template ngbSlide>\r\n      <div class=\"slide-container\">\r\n        <img [src]=\"images[0]\" alt=\"Инструмент для проведения конкурсов\" class=\"slide-item col-sm-12 col-md-6\">\r\n        <div class=\"text-block col-md-6\">\r\n          <h2>Инструмент для проведения конкурсов</h2>\r\n          <p>\r\n            SetQuest - удобный бесплатный инструмент для построения и развития\r\n            сообщества в сети. Мы не занимаемся \"накруткой\", \"продвижением\"\r\n            и любыми манипуляциями с подписчиками. Мы помогаем авторам\r\n            (блогерам, стримерам, брендам, администраторам пабликов - и т.д.)\r\n            встречать лицом к лицу свою лояльную аудиторию и выстраивать\r\n            с ней доверительные отношения.\r\n          </p>\r\n\r\n          <div class=\"controls\">\r\n            <button class=\"get_started\">От винта</button>\r\n\r\n            <div class=\"arrows\">\r\n              <button class=\"control-arrows\" (click)=\"authSlider.next()\"><img src=\"assets/icons/Left_arrow.svg\" alt=\"\"></button>\r\n              <button class=\"control-arrows\" (click)=\"authSlider.prev()\"><img src=\"assets/icons/Right_arrow.svg\" alt=\"\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template ngbSlide>\r\n      <div class=\"slide-container\">\r\n        <img [src]=\"images[1]\" alt=\"Инструмент для проведения конкурсов\" class=\"slide-item col-sm-12 col-md-6\">\r\n        <div class=\"text-block col-md-6\">\r\n          <h2>Инструмент для проведения конкурсов</h2>\r\n          <p>\r\n            SetQuest выполняет роль командного пульта или главного штаба\r\n            — здесь авторы создают задания и предлагают \"плюшки\"\r\n            для пользователей, а те, в свою очередь, получают доступ\r\n            к эксклюзивному контенту и понятную геймификацию.\r\n          </p>\r\n\r\n          <div class=\"controls\">\r\n            <button class=\"get_started\">От винта</button>\r\n\r\n            <div class=\"arrows\">\r\n              <button class=\"control-arrows\" (click)=\"authSlider.next()\"><img src=\"assets/icons/Left_arrow.svg\" alt=\"\"></button>\r\n              <button class=\"control-arrows\" (click)=\"authSlider.prev()\"><img src=\"assets/icons/Right_arrow.svg\" alt=\"\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template ngbSlide>\r\n      <div class=\"slide-container\">\r\n        <img [src]=\"images[2]\" alt=\"Инструмент для проведения конкурсов\" class=\"slide-item col-sm-12 col-md-6\">\r\n        <div class=\"text-block col-md-6\">\r\n          <h2>Инструмент для проведения конкурсов</h2>\r\n          <p>\r\n            Все подсчеты и проверки система проводит сама - прозрачно и честно.\r\n            Вы в реальном времени видите, как ваш креатив приводит к вам новых\r\n            активных подписчиков и подогревает интерес старых.\r\n          </p>\r\n\r\n          <div class=\"controls\">\r\n            <button class=\"get_started\">От винта</button>\r\n\r\n            <div class=\"arrows\">\r\n              <button class=\"control-arrows\" (click)=\"authSlider.next()\"><img src=\"assets/icons/Left_arrow.svg\" alt=\"\"></button>\r\n              <button class=\"control-arrows\" (click)=\"authSlider.prev()\"><img src=\"assets/icons/Right_arrow.svg\" alt=\"\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template ngbSlide>\r\n      <div class=\"slide-container\">\r\n        <img [src]=\"images[3]\" alt=\"Инструмент для проведения конкурсов\" class=\"slide-item col-sm-12 col-md-6\">\r\n        <div class=\"text-block col-md-6\">\r\n          <h2>Инструмент для проведения конкурсов</h2>\r\n          <p>\r\n            Мы приложили много усилий, чтобы сделать функционал SetQuest\r\n            таким продуманным и полезным. Попробуйте и оцените нашу работу!\r\n          </p>\r\n\r\n          <div class=\"controls\">\r\n            <button class=\"get_started\">От винта</button>\r\n\r\n            <div class=\"arrows\">\r\n              <button class=\"control-arrows\" (click)=\"authSlider.next()\"><img src=\"assets/icons/Left_arrow.svg\" alt=\"\"></button>\r\n              <button class=\"control-arrows\" (click)=\"authSlider.prev()\"><img src=\"assets/icons/Right_arrow.svg\" alt=\"\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n\r\n  </ngb-carousel>\r\n\r\n</div>\r\n\r\n\r\n<app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.sass":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-block {\n  padding: 155px 0; }\n\n.slide-container {\n  display: flex; }\n\n@media screen and (max-width: 767px) {\n    .slide-container img.slide-item {\n      display: none; } }\n\n.slide-container img {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content; }\n\n.slide-container .text-block {\n    -ms-grid-row-align: center;\n        align-self: center;\n    padding: 0 60px; }\n\n@media screen and (max-width: 767px) {\n      .slide-container .text-block {\n        padding: 0; } }\n\n.slide-container .text-block .controls {\n      display: flex;\n      justify-content: space-between; }\n\n.slide-container .text-block .controls .get_started {\n        border: none;\n        border-radius: 50px;\n        padding: 10px 25px;\n        color: white;\n        font-size: 13px;\n        text-transform: uppercase;\n        background-color: #e63325; }\n\n.slide-container .text-block .controls .control-arrows {\n        border: none;\n        background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = /** @class */ (function () {
    function AuthComponent(config) {
        this.images = [
            'assets/images/slide_1.png',
            'assets/images/slide_2.png',
            'assets/images/slide_3.png',
            'assets/images/slide_4.png',
        ];
        config.interval = 100000000;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.sass */ "./src/app/auth/auth.component.sass")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/create-quest/create-quest.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-quest/create-quest.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container create-quest\">\r\n<app-header></app-header>\r\n\r\n  <h2>Создать задание</h2>\r\n\r\n<mat-horizontal-stepper class=\"pb-5\" [linear]=\"isLinear\" #stepper>\r\n\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n    <div class=\"general-step-container\">\r\n      <div class=\"step-box\">\r\n        <p class=\"general-info\">1. Основная информация\r\n        </p>\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <div class=\"field-group\">\r\n            <ng-template matStepLabel>1. Основная информация</ng-template>\r\n            <label for=\"linkToChannel\">Автор конкурса</label><br>\r\n            <span>Например: https://www.youtube.com/channel/UCMnP4AgDkEfdbvmWIUtXiEw</span><br>\r\n            <mat-form-field>\r\n              <input id=\"linkToChannel\" matInput placeholder=\"Введите ссылку\" formControlName=\"linkToAuthor\">\r\n            </mat-form-field>\r\n            <button class=\"add-link\">Задать</button>\r\n          </div>\r\n          <div class=\"field-group\">\r\n            <label for=\"linkToTask\">Ссылка на задание</label><br>\r\n            <span>Например: https://www.youtube.com/channel/UCMnP4AgDkEfdbvmWIUtXiEw</span><br>\r\n            <mat-form-field>\r\n              <input id=\"linkToTask\" matInput placeholder=\"Введите ссылку\" formControlName=\"linkToTask\">\r\n            </mat-form-field>\r\n            <button class=\"add-link\">Задать</button>\r\n          </div>\r\n        </form>\r\n        <div>\r\n          <button class=\"mt-5 step-next\" mat-button matStepperNext>Дальше\r\n            <img src=\"src/assets/icons/Next_arrow.svg\" alt=\"\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-mockup></app-mockup>\r\n    </div>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"secondFormGroup\">\r\n    <div class=\"general-step-container\">\r\n      <div class=\"step-box\">\r\n        <p class=\"general-info\">\r\n         2. Дополнительные данные\r\n        </p>\r\n        <form [formGroup]=\"secondFormGroup\">\r\n          <div class=\"field-group\">\r\n            <ng-template matStepLabel>2. Дополнительные данные</ng-template>\r\n            <mat-form-field>\r\n              <input class=\"w-100\" id=\"enterHeaderName\" matInput placeholder=\"Введите заголовок\" formControlName=\"headerName\">\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field>\r\n              <input class=\"w-100\" id=\"enterDescription\" matInput placeholder=\"Введите заголовок\" formControlName=\"description\">\r\n            </mat-form-field>\r\n            <br>\r\n            <label for=\"addlabel\">Дополнительные поля</label><br>\r\n            <mat-form-field>\r\n              <input id=\"addlabel\" matInput placeholder=\"Название\" formControlName=\"addlabel\">\r\n            </mat-form-field>\r\n            <button class=\"add-link\">Задать</button>\r\n          </div>\r\n        </form>\r\n        <div class=\"mt-5\">\r\n          <button class=\"step-back\" mat-button matStepperPrevious>Назад</button>\r\n          <button class=\"step-next\" mat-button matStepperNext>Дальше\r\n            <img src=\"src/assets/icons/Next_arrow.svg\" alt=\"\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-mockup></app-mockup>\r\n    </div>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"thirdFormGroup\">\r\n    <div class=\"general-step-container\">\r\n      <div class=\"step-box\">\r\n        <p class=\"general-info\">\r\n          3. Призы\r\n        </p>\r\n        <form [formGroup]=\"thirdFormGroup\">\r\n          <div class=\"field-group\">\r\n            <ng-template matStepLabel>3. Призы</ng-template>\r\n            <mat-form-field>\r\n              <input id=\"enterPrizeName\" matInput placeholder=\"Введите название приза\" formControlName=\"enterPrizeName\">\r\n            </mat-form-field>\r\n            <br>\r\n            <label for=\"addlabel\">Количество победителей</label><br>\r\n            <mat-form-field>\r\n              <mat-select required>\r\n                <mat-option>1</mat-option>\r\n                <mat-option (onSelectionChange)=\"selected_numberOfWinners = number\" *ngFor=\"let number of numberOfWinners\">\r\n                  {{number}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <input id=\"numberOfWinners\" matInput placeholder=\"Название\" formControlName=\"numberOfWinners\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <button class=\"step-back\" mat-button matStepperPrevious>Назад</button>\r\n            <button class=\"step-next\" mat-button matStepperNext>Дальше\r\n              <img src=\"src/assets/icons/Next_arrow.svg\" alt=\"\">\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <app-mockup></app-mockup>\r\n    </div>\r\n  </mat-step>\r\n\r\n  <mat-step>\r\n    <ng-template matStepLabel>Well done!</ng-template>\r\n    <app-mockup></app-mockup>\r\n\r\n    <div class=\"mt-5 text-center\">\r\n      <button class=\"step-next w-auto ml-1 mr-2\"><img class=\"mr-2\" src=\"src/assets/icons/create_sign.svg\" alt=\"\">Создать конкурс</button>\r\n      <button class=\" ml-2 mr-1\" mat-button (click)=\"stepper.reset()\">Сбросить</button>\r\n    </div>\r\n  </mat-step>\r\n\r\n</mat-horizontal-stepper>\r\n\r\n\r\n<app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-quest/create-quest.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/create-quest/create-quest.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-quest {\n  min-width: 490px; }\n\nh2 {\n  padding: 35px 0;\n  font-family: Roboto;\n  font-size: 20px;\n  font-weight: 500; }\n\n.mat-form-field {\n  width: 60% !important; }\n\n.general-step-container {\n  display: flex;\n  justify-content: space-between; }\n\n@media screen and (max-width: 1024px) {\n    .general-step-container {\n      display: block;\n      margin: auto; } }\n\nbutton {\n  padding: 10px 20px;\n  text-transform: uppercase;\n  border-radius: 50px;\n  border: none;\n  background: white;\n  width: 190px;\n  font-size: 14px;\n  vertical-align: baseline;\n  box-shadow: 0 0 1em #d9d9d9; }\n\n@media screen and (max-width: 767px) {\n    button {\n      width: 120px; } }\n\nbutton svg {\n    vertical-align: middle;\n    margin: 0 20px 0 0; }\n\nlabel {\n  color: #000000;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: 500; }\n\nspan {\n  color: #727274;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 400; }\n\nform {\n  overflow: hidden;\n  padding: 35px 25px;\n  box-shadow: 0 0 2px 0.2px #8080806b; }\n\n.add-link {\n  color: white;\n  font-size: 14px;\n  padding: 10px 20px;\n  float: right;\n  margin-top: 10px;\n  background-color: #57ca79; }\n\np.general-info {\n  font-family: Roboto;\n  font-size: 17px;\n  font-weight: 500;\n  margin-top: 15px; }\n\n.step-box {\n  width: 55%; }\n\n.step-box .step-next {\n    text-transform: initial;\n    float: right; }\n\n@media screen and (max-width: 1024px) {\n      .step-box .step-next {\n        float: unset; } }\n\n@media screen and (max-width: 1024px) {\n    .step-box {\n      width: 100%; } }\n\n.step-back {\n  border: none;\n  box-shadow: none;\n  text-decoration: underline;\n  text-transform: inherit;\n  font-weight: bold; }\n\napp-mockup {\n  width: 43%; }\n"

/***/ }),

/***/ "./src/app/create-quest/create-quest.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-quest/create-quest.component.ts ***!
  \********************************************************/
/*! exports provided: CreateQuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestComponent", function() { return CreateQuestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateQuestComponent = /** @class */ (function () {
    function CreateQuestComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.numberOfWinners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.selected_numberOfWinners = 1;
    }
    CreateQuestComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            linkToAuthor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            linkToTask: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            headerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addlabel: ['']
        });
        this.thirdFormGroup = this._formBuilder.group({
            enterPrizeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            numberOfWinners: ['']
        });
    };
    CreateQuestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-quest',
            template: __webpack_require__(/*! ./create-quest.component.html */ "./src/app/create-quest/create-quest.component.html"),
            styles: [__webpack_require__(/*! ./create-quest.component.sass */ "./src/app/create-quest/create-quest.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateQuestComponent);
    return CreateQuestComponent;
}());



/***/ }),

/***/ "./src/app/create-quest/mockup/mockup.component.html":
/*!***********************************************************!*\
  !*** ./src/app/create-quest/mockup/mockup.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mockup-container\">\n  <p class=\"mockup text-center\">\n    Макет\n  </p>\n\n  <div class=\"mockup-body\">\n    <div class=\"header-img\">\n      <img src=\"src/assets/images/mockup_header.png\" alt=\"\">\n    </div>\n\n    <div class=\"mockup-body-content\">\n      <div class=\"about_author\">\n        <img src=\"src/assets/icons/AVATAR.png\" alt=\"\">\n        <p>SETQUEST QUIZ</p>\n      </div>\n\n      <div class=\"quiz_info\">\n        <div class=\"quest_description\">\n          <h3>Заголовок</h3>\n          <p>Условием участия в конкурсе является подписка\n            на канал и лайк к видео. Из тех, кто выполнит\n            условия конкурса случайным образом будет\n            выбран победитель, который получит приз.</p>\n        </div>\n        <div class=\"quest_task\">\n          <table class=\"m-auto\">\n            <tr>\n              <td class=\"text-center\"><img class=\"prize_img\" src=\"src/assets/icons/prize-icon.svg\" alt=\"\"></td>\n              <td>Название приза</td>\n              <td></td>\n              <td><img src=\"src/assets/icons/trash_icon.svg\" alt=\"\"></td>\n            </tr>\n            <tr>\n              <td><img class=\"portrait\" src=\"src/assets/icons/AVATAR.png\" alt=\"\"></td>\n              <td>Capybara SetQuest</td>\n              <td><button class=\"quest_action\">Лайкнуть</button></td>\n              <td><img src=\"src/assets/icons/trash_icon.svg\" alt=\"\"></td>\n            </tr>\n            <tr>\n              <td><img class=\"portrait\" src=\"src/assets/icons/AVATAR.png\" alt=\"\"></td>\n              <td>Что такое SetQuest?</td>\n              <td><button class=\"quest_action\">Подписаться</button></td>\n              <td><img src=\"src/assets/icons/trash_icon.svg\" alt=\"\"></td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center\">\n    <button class=\"check-button\">Проверить</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/create-quest/mockup/mockup.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/create-quest/mockup/mockup.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mockup-container {\n  padding: 15px; }\n\n.header-img img {\n  width: 100%; }\n\nh3 {\n  font-size: 15px;\n  font-weight: bold; }\n\n.mockup {\n  font-weight: 500; }\n\n.mockup-body {\n  box-shadow: 0 0 2px 0.2px #8080806b; }\n\n.mockup-body-content {\n    padding: 20px; }\n\n.about_author {\n  display: flex;\n  align-items: center;\n  margin: 0 0 10px 0; }\n\n.about_author p {\n    padding: 0 0 0 15px;\n    font-weight: bold;\n    margin: 0; }\n\n.quest_task table tr:first-child {\n  color: #000;\n  font-weight: bold; }\n\n.quest_task table tr {\n  color: #727274;\n  height: 70px;\n  vertical-align: middle; }\n\n.quest_task table tr td {\n    padding: 5px 5px; }\n\n.quest_action {\n  padding: 10px 10px;\n  text-transform: uppercase;\n  border-radius: 50px;\n  border: none;\n  background: #e62f21;\n  color: white;\n  width: 120px;\n  font-size: 12px;\n  vertical-align: baseline;\n  box-shadow: 0 0 1em #d9d9d9; }\n\n.check-button {\n  border-radius: 50px;\n  border: none;\n  color: white;\n  font-size: 14px;\n  padding: 10px 20px;\n  background-color: #57ca79;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/create-quest/mockup/mockup.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-quest/mockup/mockup.component.ts ***!
  \*********************************************************/
/*! exports provided: MockupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockupComponent", function() { return MockupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockupComponent = /** @class */ (function () {
    function MockupComponent() {
    }
    MockupComponent.prototype.ngOnInit = function () {
    };
    MockupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mockup',
            template: __webpack_require__(/*! ./mockup.component.html */ "./src/app/create-quest/mockup/mockup.component.html"),
            styles: [__webpack_require__(/*! ./mockup.component.sass */ "./src/app/create-quest/mockup/mockup.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MockupComponent);
    return MockupComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-line_grey\"></div>\r\n\r\n<p>\r\n  &copy; Setquest — инструмент для построения и развития сообщества в сети. Использование сайта, в том числе создание заданий означает согласие с\r\n  <a href=\"#\">Пользовательским соглашением</a>. <br>\r\n  Оплачивая услуги на сайте, вы принимаете <a href=\"#\">оферту</a>. <a href=\"#\">Информация о cookies</a>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-line_grey {\n  margin: auto;\n  width: 100%;\n  height: 1px;\n  background-color: #f0f0f0; }\n\np {\n  margin-top: 30px;\n  font-size: 12px;\n  color: #858585;\n  margin-bottom: 0; }\n\np a {\n    color: #858585;\n    text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/shared/footer/footer.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"logo\">\r\n    <span *ngIf=\"!isLoggedIn\" routerLink=\"/\">setquest</span>\r\n    <img *ngIf=\"isLoggedIn\" routerLink=\"/tasks-list\" src=\"https://images.unsplash.com/photo-1534118865446-5abb88d668d2?ixlib=rb-0.3.5&s=904e833b430bdd23b2703ae7ec5d8828&auto=format&fit=crop&w=634&q=80\">\r\n  </div>\r\n\r\n  <div class=\"auth\">\r\n    <button *ngIf=\"!isLoggedIn\" (click)=\"isLoggedIn=true\" routerLink=\"/new-quest\">\r\n      <svg\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n      width=\"20px\" height=\"20px\">\r\n      <path fill-rule=\"evenodd\"  fill=\"rgb(230, 47, 33)\"\r\n            d=\"M15.885,20.000 L4.516,20.000 C2.248,20.000 0.401,18.116 0.401,15.798 L0.401,13.444 C0.401,13.055 0.705,12.741 1.086,12.741 C1.467,12.741 1.775,13.055 1.775,13.444 L1.775,15.798 C1.775,17.343 3.005,18.598 4.516,18.598 L15.885,18.598 C17.395,18.598 18.626,17.339 18.626,15.798 L18.626,4.202 C18.626,2.657 17.395,1.402 15.885,1.402 L4.516,1.402 C3.005,1.402 1.775,2.661 1.775,4.202 L1.775,6.585 C1.775,6.969 1.467,7.284 1.086,7.284 C0.709,7.284 0.401,6.973 0.401,6.585 L0.401,4.202 C0.401,1.884 2.244,-0.000 4.516,-0.000 L15.885,-0.000 C18.153,-0.000 20.000,1.884 20.000,4.202 L20.000,15.798 C20.000,18.116 18.157,20.000 15.885,20.000 ZM13.809,9.303 L11.252,6.695 C10.984,6.421 10.984,5.976 11.252,5.702 C11.521,5.428 11.958,5.428 12.226,5.702 L15.957,9.507 C16.225,9.781 16.225,10.227 15.957,10.501 L12.226,14.306 C12.094,14.441 11.917,14.510 11.741,14.510 C11.565,14.510 11.388,14.441 11.256,14.306 C10.988,14.032 10.988,13.587 11.256,13.313 L13.817,10.705 L0.689,10.705 C0.308,10.705 -0.000,10.390 -0.000,10.002 C-0.000,9.614 0.308,9.303 0.689,9.303 L13.809,9.303 Z\"/>\r\n    </svg> Вход</button>\r\n\r\n    <button *ngIf=\"isLoggedIn\" (click)=\"isLoggedIn=false\" routerLink=\"/\">\r\n      <svg\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n      width=\"20px\" height=\"20px\">\r\n      <path fill-rule=\"evenodd\"  fill=\"rgb(230, 47, 33)\"\r\n            d=\"M15.885,20.000 L4.516,20.000 C2.248,20.000 0.401,18.116 0.401,15.798 L0.401,13.444 C0.401,13.055 0.705,12.741 1.086,12.741 C1.467,12.741 1.775,13.055 1.775,13.444 L1.775,15.798 C1.775,17.343 3.005,18.598 4.516,18.598 L15.885,18.598 C17.395,18.598 18.626,17.339 18.626,15.798 L18.626,4.202 C18.626,2.657 17.395,1.402 15.885,1.402 L4.516,1.402 C3.005,1.402 1.775,2.661 1.775,4.202 L1.775,6.585 C1.775,6.969 1.467,7.284 1.086,7.284 C0.709,7.284 0.401,6.973 0.401,6.585 L0.401,4.202 C0.401,1.884 2.244,-0.000 4.516,-0.000 L15.885,-0.000 C18.153,-0.000 20.000,1.884 20.000,4.202 L20.000,15.798 C20.000,18.116 18.157,20.000 15.885,20.000 ZM13.809,9.303 L11.252,6.695 C10.984,6.421 10.984,5.976 11.252,5.702 C11.521,5.428 11.958,5.428 12.226,5.702 L15.957,9.507 C16.225,9.781 16.225,10.227 15.957,10.501 L12.226,14.306 C12.094,14.441 11.917,14.510 11.741,14.510 C11.565,14.510 11.388,14.441 11.256,14.306 C10.988,14.032 10.988,13.587 11.256,13.313 L13.817,10.705 L0.689,10.705 C0.308,10.705 -0.000,10.390 -0.000,10.002 C-0.000,9.614 0.308,9.303 0.689,9.303 L13.809,9.303 Z\"/>\r\n    </svg> Выход</button>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"header-line_grey\"></div>\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 40px; }\n  @media screen and (max-width: 767px) {\n    .header {\n      padding-bottom: 20px; } }\n  .header .logo {\n    text-transform: uppercase;\n    padding: 15px;\n    font-size: 18px;\n    font-weight: 700; }\n  .header .logo img {\n      width: 55px;\n      height: 55px;\n      border-radius: 50px; }\n  .header .auth button {\n    padding: 15px;\n    border-radius: 50px;\n    border: none;\n    background: white;\n    width: 190px;\n    font-size: 16px;\n    vertical-align: baseline;\n    box-shadow: 0 0 1em #d9d9d9; }\n  @media screen and (max-width: 767px) {\n      .header .auth button {\n        width: 120px; } }\n  .header .auth button svg {\n      vertical-align: middle;\n      margin: 0 20px 0 0; }\n  .header-line_grey {\n  margin: auto;\n  width: 100%;\n  height: 1px;\n  background-color: #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/shared/header/header.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/tasks-list/tasks-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/tasks-list/tasks-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n\n  <div class=\"grid_layout\">\n    <div class=\"grid_header\">\n      <div>\n        <h2>Все задания</h2>\n        <span>25 заданий</span>\n      </div>\n      <div class=\"grid_header_layout\">\n        <img [ngClass]=\"{'active': isListedDisplayMode, 'inactive': !isListedDisplayMode}\" (click)=\"isListedDisplayMode = true\" src=\"src/assets/icons/display_listed.png\" alt=\"\">\n        <img [ngClass]=\"{'active': isListedDisplayMode, 'inactive': !isListedDisplayMode}\" (click)=\"isListedDisplayMode = false\" src=\"src/assets/icons/display_grid.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"grid_content\" *ngIf=\"isListedDisplayMode\">\n    <table>\n      <tr>\n        <td class=\"task_picture\">\n          <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n        </td>\n        <td class=\"task_description\">\n          <h3 class=\"task_header\">SQ // дизайн</h3>\n          <p>Условием участия в конкурсе является подписка на канал и лайк\n            к видео. Из тех, кто выполнит условия конкурса случайным образом\n            будет выбран победитель, который и получит приз.</p>\n        </td>\n        <td class=\"task_participants\">4334<br><span>участников</span></td>\n        <td class=\"winners\">0<br><span>победителей</span></td>\n        <td class=\"task_check\"><button>Проверить</button></td>\n      </tr>\n      <tr>\n        <td class=\"task_picture\">\n          <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n        </td>\n        <td class=\"task_description\">\n          <h3 class=\"task_header\">SQ // дизайн</h3>\n          <p>Условием участия в конкурсе является подписка на канал и лайк\n            к видео. Из тех, кто выполнит условия конкурса случайным образом\n            будет выбран победитель, который и получит приз.</p>\n        </td>\n        <td class=\"task_participants\">4334<br><span>участников</span></td>\n        <td class=\"winners\">0<br><span>победителей</span></td>\n        <td class=\"task_check\"><button>Проверить</button></td>\n      </tr>\n      <tr>\n        <td class=\"task_picture\">\n          <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n        </td>\n        <td class=\"task_description\">\n          <h3 class=\"task_header\">SQ // дизайн</h3>\n          <p>Условием участия в конкурсе является подписка на канал и лайк\n            к видео. Из тех, кто выполнит условия конкурса случайным образом\n            будет выбран победитель, который и получит приз.</p>\n        </td>\n        <td class=\"task_participants\">4334<br><span>участников</span></td>\n        <td class=\"winners\">0<br><span>победителей</span></td>\n        <td class=\"task_check\"><button>Проверить</button></td>\n      </tr>\n      <tr>\n        <td class=\"task_picture\">\n          <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n        </td>\n        <td class=\"task_description\">\n          <h3 class=\"task_header\">SQ // дизайн</h3>\n          <p>Условием участия в конкурсе является подписка на канал и лайк\n            к видео. Из тех, кто выполнит условия конкурса случайным образом\n            будет выбран победитель, который и получит приз.</p>\n        </td>\n        <td class=\"task_participants\">4334<br><span>участников</span></td>\n        <td class=\"winners\">0<br><span>победителей</span></td>\n        <td class=\"task_check\"><button>Проверить</button></td>\n      </tr>\n      <tr>\n        <td class=\"task_picture\">\n          <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n        </td>\n        <td class=\"task_description\">\n          <h3 class=\"task_header\">SQ // дизайн</h3>\n          <p>Условием участия в конкурсе является подписка на канал и лайк\n            к видео. Из тех, кто выполнит условия конкурса случайным образом\n            будет выбран победитель, который и получит приз.</p>\n        </td>\n        <td class=\"task_participants\">4334<br><span>участников</span></td>\n        <td class=\"winners\">0<br><span>победителей</span></td>\n        <td class=\"task_check\"><button>Проверить</button></td>\n      </tr>\n      <tr>\n        <td class=\"task_picture\">\n          <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n        </td>\n        <td class=\"task_description\">\n          <h3 class=\"task_header\">SQ // дизайн</h3>\n          <p>Условием участия в конкурсе является подписка на канал и лайк\n            к видео. Из тех, кто выполнит условия конкурса случайным образом\n            будет выбран победитель, который и получит приз.</p>\n        </td>\n        <td class=\"task_participants\">4334<br><span>участников</span></td>\n        <td class=\"winners\">0<br><span>победителей</span></td>\n        <td class=\"task_check\"><button>Проверить</button></td>\n      </tr>\n\n    </table>\n  </div>\n\n  <div class=\"tabled_content\" *ngIf=\"!isListedDisplayMode\">\n    <div class=\"tabled_content_item\">\n      <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n      <h3>SQ // дизайн</h3>\n      <div class=\"counter\">\n        <div class=\"task_participants\">\n          4334 <br>\n          <span>участников</span>\n        </div>\n        <div class=\"winners\">\n          0 <br>\n          <span>победителей</span>\n        </div>\n      </div>\n      <hr>\n      <p>Условием участия в конкурсе\n        является подписка на канал и лайк\n        к видео. Из тех, кто выполнит\n        условия конкурса случайным\n        образом будет выбран победитель,\n        который и получит приз.</p>\n      <div class=\"task_check\">\n        <button>Проверить</button>\n      </div>\n    </div>\n    <div class=\"tabled_content_item\">\n      <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n      <h3>SQ // дизайн</h3>\n      <div class=\"counter\">\n        <div class=\"task_participants\">\n          4334 <br>\n          <span>участников</span>\n        </div>\n        <div class=\"winners\">\n          0 <br>\n          <span>победителей</span>\n        </div>\n      </div>\n      <hr>\n      <p>Условием участия в конкурсе\n        является подписка на канал и лайк\n        к видео. Из тех, кто выполнит\n        условия конкурса случайным\n        образом будет выбран победитель,\n        который и получит приз.</p>\n      <div class=\"task_check\">\n        <button>Проверить</button>\n      </div>\n    </div>\n    <div class=\"tabled_content_item\">\n      <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n      <h3>SQ // дизайн</h3>\n      <div class=\"counter\">\n        <div class=\"task_participants\">\n          4334 <br>\n          <span>участников</span>\n        </div>\n        <div class=\"winners\">\n          0 <br>\n          <span>победителей</span>\n        </div>\n      </div>\n      <hr>\n      <p>Условием участия в конкурсе\n        является подписка на канал и лайк\n        к видео. Из тех, кто выполнит\n        условия конкурса случайным\n        образом будет выбран победитель,\n        который и получит приз.</p>\n      <div class=\"task_check\">\n        <button>Проверить</button>\n      </div>\n    </div>\n    <div class=\"tabled_content_item\">\n      <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n      <h3>SQ // дизайн</h3>\n      <div class=\"counter\">\n        <div class=\"task_participants\">\n          4334 <br>\n          <span>участников</span>\n        </div>\n        <div class=\"winners\">\n          0 <br>\n          <span>победителей</span>\n        </div>\n      </div>\n      <hr>\n      <p>Условием участия в конкурсе\n        является подписка на канал и лайк\n        к видео. Из тех, кто выполнит\n        условия конкурса случайным\n        образом будет выбран победитель,\n        который и получит приз.</p>\n      <div class=\"task_check\">\n        <button>Проверить</button>\n      </div>\n    </div>\n    <div class=\"tabled_content_item\">\n      <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n      <h3>SQ // дизайн</h3>\n      <div class=\"counter\">\n        <div class=\"task_participants\">\n          4334 <br>\n          <span>участников</span>\n        </div>\n        <div class=\"winners\">\n          0 <br>\n          <span>победителей</span>\n        </div>\n      </div>\n      <hr>\n      <p>Условием участия в конкурсе\n        является подписка на канал и лайк\n        к видео. Из тех, кто выполнит\n        условия конкурса случайным\n        образом будет выбран победитель,\n        который и получит приз.</p>\n      <div class=\"task_check\">\n        <button>Проверить</button>\n      </div>\n    </div>\n    <div class=\"tabled_content_item\">\n      <img src=\"src/assets/images/avatar_00.png\" alt=\"\">\n      <h3>SQ // дизайн</h3>\n      <div class=\"counter\">\n        <div class=\"task_participants\">\n          4334 <br>\n          <span>участников</span>\n        </div>\n        <div class=\"winners\">\n          0 <br>\n          <span>победителей</span>\n        </div>\n      </div>\n      <hr>\n      <p>Условием участия в конкурсе\n        является подписка на канал и лайк\n        к видео. Из тех, кто выполнит\n        условия конкурса случайным\n        образом будет выбран победитель,\n        который и получит приз.</p>\n      <div class=\"task_check\">\n        <button>Проверить</button>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/tasks-list/tasks-list.component.sass":
/*!******************************************************!*\
  !*** ./src/app/tasks-list/tasks-list.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid_header {\n  display: flex;\n  justify-content: space-between;\n  padding: 35px 0; }\n  .grid_header h2 {\n    font-size: 20px; }\n  .grid_header span {\n    font-size: 15px;\n    color: #727274; }\n  @media screen and (max-width: 1024px) {\n    .grid_header_layout {\n      display: none; } }\n  .grid_content {\n  box-shadow: 0 0 5px 1px rgba(180, 180, 180, 0.58);\n  border-radius: 10px;\n  padding: 20px 20px; }\n  .grid_content table tr {\n    border-bottom: 1px solid #ebebeb; }\n  .grid_content table tr td {\n      padding: 15px 0; }\n  .grid_content table tr .task_description {\n      padding-left: 15px;\n      max-width: 480px; }\n  .grid_content table tr .task_description h3 {\n        font-size: 17px;\n        font-weight: 500; }\n  .grid_content table tr .task_participants, .grid_content table tr .winners {\n      text-align: center;\n      padding: 0 80px;\n      color: #e62f21;\n      font-size: 25px;\n      font-weight: 900; }\n  .grid_content table tr .task_participants span, .grid_content table tr .winners span {\n        font-weight: 400;\n        font-size: 14px;\n        color: #737373; }\n  .task_check {\n  text-align: center; }\n  .task_check button {\n    border: none;\n    border-radius: 50px;\n    background-color: #57ca79;\n    width: 129px;\n    height: 34px;\n    color: white;\n    font-size: 14px; }\n  .tabled_content {\n  display: -ms-grid;\n  display: grid;\n  grid-auto-columns: auto;\n  -ms-grid-columns: 25% 25% 25% 25%;\n      grid-template-columns: 25% 25% 25% 25%; }\n  @media screen and (max-width: 1024px) {\n    .tabled_content {\n      display: block; } }\n  .tabled_content_item {\n    margin: 30px 10px;\n    box-shadow: 0 0 5px 1px rgba(180, 180, 180, 0.58);\n    border-radius: 10px;\n    padding: 15px 15px; }\n  .tabled_content_item img {\n      margin-top: -25%; }\n  .tabled_content_item h3 {\n      font-size: 17px;\n      margin-top: 15px; }\n  @media screen and (max-width: 1024px) {\n      .tabled_content_item {\n        width: unset; }\n        .tabled_content_item img {\n          margin-top: unset; } }\n  .tabled_content_item p {\n      color: #737373; }\n  .tabled_content_item .counter {\n      display: flex; }\n  .tabled_content_item .counter .task_participants, .tabled_content_item .counter .winners {\n        padding: 0 5px;\n        color: #e62f21;\n        text-align: left;\n        font-size: 17px;\n        font-weight: 700; }\n  .tabled_content_item .counter .task_participants span, .tabled_content_item .counter .winners span {\n          color: #737373;\n          font-weight: 500;\n          font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/tasks-list/tasks-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tasks-list/tasks-list.component.ts ***!
  \****************************************************/
/*! exports provided: TasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListComponent", function() { return TasksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksListComponent = /** @class */ (function () {
    function TasksListComponent() {
        this.isListedDisplayMode = false;
    }
    TasksListComponent.prototype.ngOnInit = function () {
    };
    TasksListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks-list',
            template: __webpack_require__(/*! ./tasks-list.component.html */ "./src/app/tasks-list/tasks-list.component.html"),
            styles: [__webpack_require__(/*! ./tasks-list.component.sass */ "./src/app/tasks-list/tasks-list.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksListComponent);
    return TasksListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Malakhov\WebstormProjects\quest\quests-app\quests-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map