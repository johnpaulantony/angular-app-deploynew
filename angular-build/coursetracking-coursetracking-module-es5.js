(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coursetracking-coursetracking-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/add/add.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/add/add.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <section class=\"content-header d-flex flex-row justify-content-center\" >\r\n      <button type=\"button\"  class=\"btn btn-primary \" routerLink=\"/coursetracking/addcourse\">Course</button>\r\n\r\n      <button type=\"button\"  id=\"b\" class=\"btn btn-info mx-5 \" routerLink=\"/coursetracking/addsubject\">Subject</button>\r\n\r\n\r\n      <button type=\"button\"  class=\"btn btn-secondary \" routerLink=\"/coursetracking/addtopic\">Topic</button>\r\n     \r\n     \r\n   </section> \r\n       \r\n \r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addcourse/addcourse.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addcourse/addcourse.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<fieldset class=\"col-sm-3 col-md-6\">\r\n    <legend>Add Courses</legend>\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label>Course Name</label>\r\n      <input class=\"form-control\" name=\"cname\" [(ngModel)]=\"course.course_name\" placeholder=\"Course Name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Course Description</label>\r\n      <input class=\"form-control\" name=\"cdescription\" [(ngModel)]=\"course.description\" placeholder=\"Course Description\">\r\n    </div>\r\n    <button class=\"btn btn-primary my-2\">Submit</button>\r\n    <br>\r\n   \r\n</form>\r\n</fieldset>\r\n<div class=\"card my-5\">\r\n  <div class=\"card-body\">\r\n  <table class=\"table table-bordered table-striped\">\r\n  <thead class=\"thead-dark\">\r\n  <tr>\r\n  \r\n  <th scope=\"col\">Name</th>\r\n  <th scope=\"col\">Description</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let courses of course1\">\r\n \r\n  <td>{{ courses.course_name }}</td>\r\n  <td>{{ courses.description }}</td>\r\n  </tr>\r\n  </tbody>\r\n  </table>\r\n  </div>\r\n  </div>\r\n ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addsubject/addsubject.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addsubject/addsubject.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>addsubject works!</p>\r\n<fieldset class=\"col-sm-3 col-md-6\">\r\n    <legend>Add Subjects</legend>\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Course Name</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"test.courseId\" name=\"courseId\">\r\n                <option *ngFor=\"let sub of course\" value=\"{{sub.courseID}}\">{{sub.course_name}}</option>\r\n\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Subject Name</label>\r\n            <input class=\"form-control\" name=\"sname\" [(ngModel)]=\"test.subjectName\" placeholder=\"Subject Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Subject Description</label>\r\n            <input class=\"form-control\" name=\"sdescription\" [(ngModel)]=\"test.description\" placeholder=\"Subject Description\">\r\n        </div>\r\n        <button class=\"btn btn-primary my-2\">Submit</button>\r\n        <br>\r\n\r\n    </form>\r\n</fieldset>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addtopic/addtopic.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addtopic/addtopic.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>addsubject works!</p>\r\n<fieldset class=\"col-sm-3 col-md-6\">\r\n    <legend>Add topics</legend>\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Course Name</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"test.courseId\" name=\"courseID\" #mySelect\r\n            (change)='onOptionsSelected(mySelect.value)'>\r\n                <option *ngFor=\"let sub of course\" value=\"{{sub.courseID}}\">{{sub.course_name}}</option>\r\n\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Subject Name</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"test.subjectId\" name=\"subjectId\" >\r\n                <option *ngFor=\"let sub of subject\" value=\"{{sub.subjectId}}\">{{sub.subjectName}}</option>\r\n\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Topic name</label>\r\n            <input class=\"form-control\" name=\"sdescription\" [(ngModel)]=\"test.TopicName\" placeholder=\"Subject Description\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Topic Description</label>\r\n            <input class=\"form-control\" name=\"sdescription\" [(ngModel)]=\"test.description\" placeholder=\"Subject Description\">\r\n        </div>\r\n        <button class=\"btn btn-primary my-2\">Submit</button>\r\n        <br>\r\n\r\n    </form>\r\n</fieldset>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/viewc/viewc.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/viewc/viewc.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>viewc works!</p>\r\n<fieldset class=\"col-sm-3 col-md-6\">\r\n<div class=\"card my-5\">\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered table-striped\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Course Name</th>\r\n            <th scope=\"col\">Course Description</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let courses of course\">\r\n            <td>{{ courses.courseId }}</td>\r\n            <td>{{ courses.course_name }}</td>\r\n            <td>{{courses.description}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</fieldset>");
            /***/ 
        }),
        /***/ "./src/app/coursetracking/add/add.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/coursetracking/add/add.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("button{\r\n    height:100px;\r\n    width:200px;\r\nfont-family:'Source Sans Pro',sans-serif;\r\nfont-size: 30px\r\n}\r\n#b{\r\n    background-color: #222d32\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZix3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXRyYWNraW5nL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG5mb250LWZhbWlseTonU291cmNlIFNhbnMgUHJvJyxzYW5zLXNlcmlmO1xyXG5mb250LXNpemU6IDMwcHhcclxufVxyXG4jYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJkMzJcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/coursetracking/add/add.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/coursetracking/add/add.component.ts ***!
          \*****************************************************/
        /*! exports provided: AddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function () { return AddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AddComponent = /** @class */ (function () {
                function AddComponent() {
                }
                AddComponent.prototype.ngOnInit = function () {
                };
                return AddComponent;
            }());
            AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/add/add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.css */ "./src/app/coursetracking/add/add.component.css")).default]
                })
            ], AddComponent);
            /***/ 
        }),
        /***/ "./src/app/coursetracking/addcourse/addcourse.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/coursetracking/addcourse/addcourse.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset\r\n{\r\n    border:1px solid black !important;\r\n}\r\nlegend{\r\n    width:auto;\r\n    padding:0 10px; \r\n    border-bottom:none;\r\n    font-size: 14px;\r\n}\r\nlabel{\r\n    font-size: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkY291cnNlL2FkZGNvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXRyYWNraW5nL2FkZGNvdXJzZS9hZGRjb3Vyc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0XHJcbntcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5sZWdlbmR7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgcGFkZGluZzowIDEwcHg7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/coursetracking/addcourse/addcourse.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/coursetracking/addcourse/addcourse.component.ts ***!
          \*****************************************************************/
        /*! exports provided: AddcourseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcourseComponent", function () { return AddcourseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
            var AddcourseComponent = /** @class */ (function () {
                function AddcourseComponent(router, traineeservice) {
                    this.router = router;
                    this.traineeservice = traineeservice;
                    this.course = new _models_issue__WEBPACK_IMPORTED_MODULE_4__["Issue"]();
                }
                AddcourseComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.traineeservice.save(this.course).subscribe(function (result) { return _this.gotoadd(); });
                    if (this.result == true) {
                        alert("success");
                    }
                    else
                        alert("fail");
                };
                AddcourseComponent.prototype.gotoadd = function () {
                    this.router.navigate(['/add']);
                };
                AddcourseComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.traineeservice.getCourseDetails().subscribe(function (data) { _this.course1 = data; });
                };
                return AddcourseComponent;
            }());
            AddcourseComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__["TraineeserviceService"] }
            ]; };
            AddcourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-addcourse',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addcourse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addcourse/addcourse.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addcourse.component.css */ "./src/app/coursetracking/addcourse/addcourse.component.css")).default]
                })
            ], AddcourseComponent);
            /***/ 
        }),
        /***/ "./src/app/coursetracking/addsubject/addsubject.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/coursetracking/addsubject/addsubject.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset\r\n{\r\n    border:1px solid black !important;\r\n}\r\nlegend{\r\n    width:auto;\r\n    padding:0 10px; \r\n    border-bottom:none;\r\n    font-size: 14px;\r\n}\r\nlabel{\r\n    font-size: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkc3ViamVjdC9hZGRzdWJqZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkc3ViamVjdC9hZGRzdWJqZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldFxyXG57XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxubGVnZW5ke1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIHBhZGRpbmc6MCAxMHB4OyBcclxuICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/coursetracking/addsubject/addsubject.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/coursetracking/addsubject/addsubject.component.ts ***!
          \*******************************************************************/
        /*! exports provided: AddsubjectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddsubjectComponent", function () { return AddsubjectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");
            /* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
            var AddsubjectComponent = /** @class */ (function () {
                function AddsubjectComponent(traineeservice) {
                    this.traineeservice = traineeservice;
                    this.test = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
                }
                AddsubjectComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.traineeservice.saveSubject(this.test).subscribe(function (result) { return _this.result; });
                };
                AddsubjectComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.traineeservice.getCourseDetails().subscribe(function (data) { _this.course = data; console.log("Data" + data); });
                };
                return AddsubjectComponent;
            }());
            AddsubjectComponent.ctorParameters = function () { return [
                { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__["TraineeserviceService"] }
            ]; };
            AddsubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-addsubject',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addsubject.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addsubject/addsubject.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addsubject.component.css */ "./src/app/coursetracking/addsubject/addsubject.component.css")).default]
                })
            ], AddsubjectComponent);
            /***/ 
        }),
        /***/ "./src/app/coursetracking/addtopic/addtopic.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/coursetracking/addtopic/addtopic.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset\r\n{\r\n    border:1px solid black !important;\r\n}\r\nlegend{\r\n    width:auto;\r\n    padding:0 10px; \r\n    border-bottom:none;\r\n    font-size: 14px;\r\n}\r\nlabel{\r\n    font-size: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNldHJhY2tpbmcvYWRkdG9waWMvYWRkdG9waWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2V0cmFja2luZy9hZGR0b3BpYy9hZGR0b3BpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXRcclxue1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbmxlZ2VuZHtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBwYWRkaW5nOjAgMTBweDsgXHJcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/coursetracking/addtopic/addtopic.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/coursetracking/addtopic/addtopic.component.ts ***!
          \***************************************************************/
        /*! exports provided: AddtopicComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtopicComponent", function () { return AddtopicComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");
            /* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
            var AddtopicComponent = /** @class */ (function () {
                function AddtopicComponent(traineeservice) {
                    this.traineeservice = traineeservice;
                    this.test = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
                }
                AddtopicComponent.prototype.onOptionsSelected = function (value) {
                    console.log("the selected value is " + value);
                };
                AddtopicComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.traineeservice.saveTopic(this.test).subscribe(function (result) { return _this.result; });
                };
                AddtopicComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.traineeservice.getCourseDetails().subscribe(function (data) { _this.course = data; });
                    this.traineeservice.getSubjectDetails().subscribe(function (data) { _this.subject = data; console.log("Data" + data); });
                };
                return AddtopicComponent;
            }());
            AddtopicComponent.ctorParameters = function () { return [
                { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__["TraineeserviceService"] }
            ]; };
            AddtopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-addtopic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addtopic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/addtopic/addtopic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addtopic.component.css */ "./src/app/coursetracking/addtopic/addtopic.component.css")).default]
                })
            ], AddtopicComponent);
            /***/ 
        }),
        /***/ "./src/app/coursetracking/coursetracking-routing.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/coursetracking/coursetracking-routing.module.ts ***!
          \*****************************************************************/
        /*! exports provided: CoursetrackingRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursetrackingRoutingModule", function () { return CoursetrackingRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _viewc_viewc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewc/viewc.component */ "./src/app/coursetracking/viewc/viewc.component.ts");
            /* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/coursetracking/add/add.component.ts");
            /* harmony import */ var _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcourse/addcourse.component */ "./src/app/coursetracking/addcourse/addcourse.component.ts");
            /* harmony import */ var _addsubject_addsubject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addsubject/addsubject.component */ "./src/app/coursetracking/addsubject/addsubject.component.ts");
            /* harmony import */ var _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addtopic/addtopic.component */ "./src/app/coursetracking/addtopic/addtopic.component.ts");
            var routes = [{
                    path: 'viewc',
                    component: _viewc_viewc_component__WEBPACK_IMPORTED_MODULE_3__["ViewcComponent"]
                },
                {
                    path: 'add',
                    component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
                },
                {
                    path: 'addcourse',
                    component: _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_5__["AddcourseComponent"]
                },
                {
                    path: 'addsubject',
                    component: _addsubject_addsubject_component__WEBPACK_IMPORTED_MODULE_6__["AddsubjectComponent"]
                },
                {
                    path: 'addtopic',
                    component: _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_7__["AddtopicComponent"]
                }
            ];
            var CoursetrackingRoutingModule = /** @class */ (function () {
                function CoursetrackingRoutingModule() {
                }
                return CoursetrackingRoutingModule;
            }());
            CoursetrackingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], CoursetrackingRoutingModule);
            function newFunction() {
                return 'viewc';
            }
            /***/ 
        }),
        /***/ "./src/app/coursetracking/coursetracking.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/coursetracking/coursetracking.module.ts ***!
          \*********************************************************/
        /*! exports provided: CoursetrackingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursetrackingModule", function () { return CoursetrackingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _coursetracking_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coursetracking-routing.module */ "./src/app/coursetracking/coursetracking-routing.module.ts");
            /* harmony import */ var _viewc_viewc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewc/viewc.component */ "./src/app/coursetracking/viewc/viewc.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/coursetracking/add/add.component.ts");
            /* harmony import */ var _addsubject_addsubject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addsubject/addsubject.component */ "./src/app/coursetracking/addsubject/addsubject.component.ts");
            /* harmony import */ var _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addcourse/addcourse.component */ "./src/app/coursetracking/addcourse/addcourse.component.ts");
            /* harmony import */ var _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addtopic/addtopic.component */ "./src/app/coursetracking/addtopic/addtopic.component.ts");
            var CoursetrackingModule = /** @class */ (function () {
                function CoursetrackingModule() {
                }
                return CoursetrackingModule;
            }());
            CoursetrackingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_viewc_viewc_component__WEBPACK_IMPORTED_MODULE_5__["ViewcComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], _addsubject_addsubject_component__WEBPACK_IMPORTED_MODULE_8__["AddsubjectComponent"], _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_9__["AddcourseComponent"], _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_10__["AddtopicComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _coursetracking_routing_module__WEBPACK_IMPORTED_MODULE_4__["CoursetrackingRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                    ]
                })
            ], CoursetrackingModule);
            /***/ 
        }),
        /***/ "./src/app/coursetracking/viewc/viewc.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/coursetracking/viewc/viewc.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXRyYWNraW5nL3ZpZXdjL3ZpZXdjLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/coursetracking/viewc/viewc.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/coursetracking/viewc/viewc.component.ts ***!
          \*********************************************************/
        /*! exports provided: ViewcComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcComponent", function () { return ViewcComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../traineeservice.service */ "./src/app/traineeservice.service.ts");
            var ViewcComponent = /** @class */ (function () {
                function ViewcComponent(traineeservice) {
                    this.traineeservice = traineeservice;
                }
                ViewcComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.traineeservice.getCourseDetails().subscribe(function (data) {
                        _this.course = data;
                    });
                };
                return ViewcComponent;
            }());
            ViewcComponent.ctorParameters = function () { return [
                { type: _traineeservice_service__WEBPACK_IMPORTED_MODULE_2__["TraineeserviceService"] }
            ]; };
            ViewcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-viewc',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coursetracking/viewc/viewc.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewc.component.css */ "./src/app/coursetracking/viewc/viewc.component.css")).default]
                })
            ], ViewcComponent);
            /***/ 
        }),
        /***/ "./src/app/models/issue.ts": 
        /*!*********************************!*\
          !*** ./src/app/models/issue.ts ***!
          \*********************************/
        /*! exports provided: Issue */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function () { return Issue; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Issue = /** @class */ (function () {
                function Issue() {
                }
                return Issue;
            }());
            /***/ 
        }),
        /***/ "./src/app/traineeservice.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/traineeservice.service.ts ***!
          \*******************************************/
        /*! exports provided: TraineeserviceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraineeserviceService", function () { return TraineeserviceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TraineeserviceService = /** @class */ (function () {
                function TraineeserviceService(http) {
                    this.http = http;
                    this.Url = 'http://192.168.6.25:8080/smi';
                }
                TraineeserviceService.prototype.getCourseDetails = function () {
                    return this.http.get(this.Url + "/get");
                };
                TraineeserviceService.prototype.getSubjectDetails = function () {
                    return this.http.get(this.Url + "/getsubject");
                };
                TraineeserviceService.prototype.save = function (course) {
                    return this.http.post(this.Url + "/insert", course);
                };
                TraineeserviceService.prototype.saveTopic = function (course) {
                    return this.http.post(this.Url + "/inserttopic", course);
                };
                TraineeserviceService.prototype.saveSubject = function (course) {
                    console.log(course);
                    return this.http.post(this.Url + "/insertsubject", course);
                };
                return TraineeserviceService;
            }());
            TraineeserviceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TraineeserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TraineeserviceService);
            /***/ 
        })
    }]);
//# sourceMappingURL=coursetracking-coursetracking-module-es2015.js.map
//# sourceMappingURL=coursetracking-coursetracking-module-es5.js.map
//# sourceMappingURL=coursetracking-coursetracking-module-es5.js.map