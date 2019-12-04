(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/freshers/freshers.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/freshers/freshers.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\">\r\n<div class=\"d-lg-flex d-md-flex flex-row\">\r\n    <fieldset class=\"col-sm-3 col-md-4 \">\r\n        <legend>Student Details</legend>\r\n        <div class=\"form-group\">\r\n        <label>Student Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"cname\" placeholder=\"Student Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <label>Date of Joining</label>\r\n        <input type=\"date\" class=\"form-control\" name=\"cdescription\"  placeholder=\"Date of Joining\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Mobile No</label>\r\n            <input type=\"tel\" class=\"form-control\" placeholder=\"Mobile no\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n            <label>Mail Id</label>\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"Mail Id\">\r\n            </div>\r\n        <div class=\"form-group\">\r\n        <label>Bond</label><br>\r\n        <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n            <label class=\"form-check-label\" for=\"inlineRadio1\">True</label>\r\n          </div>\r\n          <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n            <label class=\"form-check-label\" for=\"inlineRadio2\">False</label>\r\n          </div></div>\r\n          <div class=\"form-group\">\r\n            <label>Training Duration</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"cdescription\"  placeholder=\"Training Duration\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Salary Type</label><br>\r\n                <div class=\"form-check form-check-inline\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n                    <label class=\"form-check-label\" for=\"inlineRadio1\">Stipend</label>\r\n                  </div>\r\n                  <div class=\"form-check form-check-inline\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n                    <label class=\"form-check-label\" for=\"inlineRadio2\">Salary</label>\r\n                  </div></div>\r\n                  \r\n    </fieldset>\r\n<fieldset class=\"col-sm-3 col-md-4 ml-1\">\r\n  <legend>Amenities</legend>\r\n  <div class=\"form-group\">\r\n  <label>Student Stay</label><br>\r\n  <div class=\"form-check form-check-inline\">\r\n    <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n    <label class=\"form-check-label\" for=\"inlineRadio1\">DayScholar</label>\r\n  </div>\r\n  <div class=\"form-check form-check-inline\">\r\n    <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n    <label class=\"form-check-label\" for=\"inlineRadio2\">Hostel</label>\r\n  </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Student Status</label><br>\r\n    <div class=\"form-check form-check-inline\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n        <label class=\"form-check-label\" for=\"inlineRadio1\">In Training</label>\r\n      </div>\r\n      <div class=\"form-check form-check-inline\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Deployed</label>\r\n      </div>\r\n      <div class=\"form-check form-check-inline\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Terminated</label>\r\n      </div>\r\n      <div class=\"form-check form-check-inline\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Discontinued</label>\r\n      </div></div>\r\n  <div class=\"form-group\">\r\n  <label>College</label>\r\n  <input type=\"text\" class=\"form-control\" name=\"cdescription\"  placeholder=\"Date of Joining\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Qualification</label>\r\n    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n      <option>BE</option>\r\n      <option>ME</option>\r\n    </select>\r\n  </div>\r\n    <div class=\"form-group\">\r\n      <label>Year of passing</label>\r\n      <input type=\"date\" class=\"form-control\" name=\"cdescription\" placeholder=\"Year of passing\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Stream</label>\r\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n          <option>IT</option>\r\n          <option>CSE</option>\r\n          <option>ECE</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Mode of selection</label>\r\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n          <option>On Campus</option>\r\n          <option>Off Campus</option>\r\n          <option>Reference</option>\r\n        </select>\r\n      </div>\r\n</fieldset>\r\n<fieldset class=\"col-sm-3 col-md-4 ml-1\">\r\n    <legend>Student personal details</legend>\r\n    \r\n    <div class=\"form-group\">\r\n        <label>Address</label>\r\n        <textarea class=\"form-control\"></textarea>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Parent's No</label>\r\n        <input type=\"tel\" class=\"form-control\" placeholder=\"Parent's no\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Alternate No</label>\r\n            <input type=\"tel\" class=\"form-control\" placeholder=\"Alternate no\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Date of Birth</label>\r\n                <input type=\"date\" class=\"form-control\" name=\"cdescription\"  placeholder=\"DOB\">\r\n                </div>\r\n        <div class=\"form-group\">\r\n            <label>Gender</label><br>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineRadio1\">Male</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineRadio2\">Female</label>\r\n              </div></div>\r\n              <button class=\"btn btn-primary my-2\">Submit</button>\r\n                  <br>\r\n</fieldset>\r\n</div>\r\n</form>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/upskilling/upskilling.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/upskilling/upskilling.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<p>upskilling works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/views/views.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/views/views.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<p>views works!</p>");
            /***/ 
        }),
        /***/ "./src/app/student/freshers/freshers.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/student/freshers/freshers.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset{\r\n    border:1px solid black !important;\r\n}\r\nlegend{\r\n    width:auto;\r\n    height:auto;\r\n    padding:0 10px;\r\n    border-bottom:none;\r\n    font-size:14px;\r\n}\r\nlabel{\r\n    font-size:12px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9mcmVzaGVycy9mcmVzaGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYzs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2ZyZXNoZXJzL2ZyZXNoZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5sZWdlbmR7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcblxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/student/freshers/freshers.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/student/freshers/freshers.component.ts ***!
          \********************************************************/
        /*! exports provided: FreshersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreshersComponent", function () { return FreshersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FreshersComponent = /** @class */ (function () {
                function FreshersComponent() {
                }
                FreshersComponent.prototype.ngOnInit = function () {
                };
                return FreshersComponent;
            }());
            FreshersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-freshers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./freshers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/freshers/freshers.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./freshers.component.css */ "./src/app/student/freshers/freshers.component.css")).default]
                })
            ], FreshersComponent);
            /***/ 
        }),
        /***/ "./src/app/student/student-routing.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/student/student-routing.module.ts ***!
          \***************************************************/
        /*! exports provided: StudentRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function () { return StudentRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _freshers_freshers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freshers/freshers.component */ "./src/app/student/freshers/freshers.component.ts");
            /* harmony import */ var _upskilling_upskilling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upskilling/upskilling.component */ "./src/app/student/upskilling/upskilling.component.ts");
            /* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/views.component */ "./src/app/student/views/views.component.ts");
            var routes = [
                {
                    path: 'freshers',
                    component: _freshers_freshers_component__WEBPACK_IMPORTED_MODULE_3__["FreshersComponent"]
                },
                {
                    path: 'upskilling',
                    component: _upskilling_upskilling_component__WEBPACK_IMPORTED_MODULE_4__["UpskillingComponent"]
                },
                {
                    path: 'views',
                    component: _views_views_component__WEBPACK_IMPORTED_MODULE_5__["ViewsComponent"]
                }
            ];
            var StudentRoutingModule = /** @class */ (function () {
                function StudentRoutingModule() {
                }
                return StudentRoutingModule;
            }());
            StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], StudentRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/student/student.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/student/student.module.ts ***!
          \*******************************************/
        /*! exports provided: StudentModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function () { return StudentModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
            /* harmony import */ var _freshers_freshers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./freshers/freshers.component */ "./src/app/student/freshers/freshers.component.ts");
            /* harmony import */ var _upskilling_upskilling_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upskilling/upskilling.component */ "./src/app/student/upskilling/upskilling.component.ts");
            /* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/views.component */ "./src/app/student/views/views.component.ts");
            var StudentModule = /** @class */ (function () {
                function StudentModule() {
                }
                return StudentModule;
            }());
            StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_freshers_freshers_component__WEBPACK_IMPORTED_MODULE_4__["FreshersComponent"], _upskilling_upskilling_component__WEBPACK_IMPORTED_MODULE_5__["UpskillingComponent"], _views_views_component__WEBPACK_IMPORTED_MODULE_6__["ViewsComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _student_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentRoutingModule"]
                    ]
                })
            ], StudentModule);
            /***/ 
        }),
        /***/ "./src/app/student/upskilling/upskilling.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/student/upskilling/upskilling.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar{\r\n    padding:0px !important;\r\n}\r\n.sp\r\n{\r\n    padding-left: 7px;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.treeview-menu li\r\n{\r\n    margin-left:30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC91cHNraWxsaW5nL3Vwc2tpbGxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC91cHNraWxsaW5nL3Vwc2tpbGxpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zcFxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxufVxyXG5hOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi50cmVldmlldy1tZW51IGxpXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/student/upskilling/upskilling.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/student/upskilling/upskilling.component.ts ***!
          \************************************************************/
        /*! exports provided: UpskillingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpskillingComponent", function () { return UpskillingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UpskillingComponent = /** @class */ (function () {
                function UpskillingComponent() {
                }
                UpskillingComponent.prototype.ngOnInit = function () {
                };
                return UpskillingComponent;
            }());
            UpskillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-upskilling',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upskilling.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/upskilling/upskilling.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upskilling.component.css */ "./src/app/student/upskilling/upskilling.component.css")).default]
                })
            ], UpskillingComponent);
            /***/ 
        }),
        /***/ "./src/app/student/views/views.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/student/views/views.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar{\r\n    padding:0px !important;\r\n}\r\n.sp\r\n{\r\n    padding-left: 7px;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.treeview-menu li\r\n{\r\n    margin-left:30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC92aWV3cy92aWV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3ZpZXdzL3ZpZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcclxufVxyXG4uc3Bcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4udHJlZXZpZXctbWVudSBsaVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/student/views/views.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/student/views/views.component.ts ***!
          \**************************************************/
        /*! exports provided: ViewsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsComponent", function () { return ViewsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ViewsComponent = /** @class */ (function () {
                function ViewsComponent() {
                }
                ViewsComponent.prototype.ngOnInit = function () {
                };
                return ViewsComponent;
            }());
            ViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-views',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./views.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/views/views.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./views.component.css */ "./src/app/student/views/views.component.css")).default]
                })
            ], ViewsComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=student-student-module-es2015.js.map
//# sourceMappingURL=student-student-module-es5.js.map
//# sourceMappingURL=student-student-module-es5.js.map