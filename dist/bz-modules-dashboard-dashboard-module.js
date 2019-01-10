(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bz-modules-dashboard-dashboard-module"],{

/***/ "./src/app/bz-modules/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@7.0.4@@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/bz-modules/dashboard/dashboard.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_5__["dashboardRoutes"])
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/bz-modules/dashboard/dashboard.routes.ts":
/*!**********************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard.routes.ts ***!
  \**********************************************************/
/*! exports provided: dashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function() { return dashboardRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.ts");

var dashboardRoutes = [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
    }];


/***/ }),

/***/ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h3 class=\"dashboard-title\">{{'dashboard.title' | translate}}</h3>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"top-rect top-rect-blue\">\r\n          <p>65535 PV/Day</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"top-rect top-rect-green\">\r\n          <p>123,456K</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"top-rect top-rect-orange\">\r\n          <p>$123,456</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"top-rect top-rect-pink\">\r\n          <p>123,456</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"chart-container line-container\">\r\n          <div echarts [options]=\"lineChart\" class=\"nf-chart\" #line></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"chart-container bar-container\">\r\n          <div echarts [options]=\"barChart\" class=\"nf-chart\" #bar></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard/dashboard.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-title {\n  margin-top: 0px; }\n\n.top-rect {\n  width: 100%;\n  height: 90px;\n  color: #fff; }\n\n.top-rect p {\n    font-size: 24px;\n    margin: 0px;\n    text-align: center;\n    line-height: 90px; }\n\n.top-rect-blue {\n  background-color: #25859e !important; }\n\n.top-rect-green {\n  background-color: #6acece !important; }\n\n.top-rect-orange {\n  background-color: #eabc7f !important; }\n\n.top-rect-pink {\n  background-color: #6acece !important; }\n\n.chart-container {\n  width: 100%;\n  height: 485px;\n  margin-top: 30px;\n  background-color: #fff;\n  padding-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL0U6XFxnaXRodWItbXlcXE9wZW5XTVNcXE9wZW5XTVMtRnJvbnRlbmQvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVyxFQU9aOztBQVZEO0lBS0ksZ0JBQWU7SUFDZixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLGtCQUFpQixFQUNsQjs7QUFHSDtFQUNFLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLFlBQVc7RUFDWCxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9iei1tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4udG9wLXJlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udG9wLXJlY3QtYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1ODU5ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9wLXJlY3QtZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWNlY2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvcC1yZWN0LW9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYmM3ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9wLXJlY3QtcGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhY2VjZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hhcnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4NXB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _utils_color_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/color.util */ "./src/app/utils/color.util.ts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/_echarts@3.8.5@echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        var _this = this;
        this.barChart = {
            title: {
                text: '库存金额变化',
                subtext: '纯属虚构',
                x: 'center'
            },
            color: _utils_color_util__WEBPACK_IMPORTED_MODULE_1__["default"].baseColor,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: '{b}月{a}:{c}'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '访问量',
                    type: 'bar',
                    barWidth: '60%',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var color = _utils_color_util__WEBPACK_IMPORTED_MODULE_1__["default"].genColor(_this.barChart.series[0].data);
                                return color[params.dataIndex];
                            }
                        }
                    },
                    data: [100, 520, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 110]
                }
            ]
        };
        this.lineChart = {
            title: {
                text: '库存量变化',
                subtext: '纯属虚构',
                x: 'center'
            },
            color: _utils_color_util__WEBPACK_IMPORTED_MODULE_1__["default"].baseColor,
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 次'
                }
            },
            series: [
                {
                    name: '访问量',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 39, 16, 199]
                },
                {
                    name: '访问量',
                    type: 'line',
                    data: [21, 21, 25, 23, 22, 23, 20, 223, 200, 109, 26, 299]
                },
                {
                    name: '访问量',
                    type: 'line',
                    data: [31, 31, 35, 33, 32, 33, 30, 323, 300, 209, 36, 399]
                },
                {
                    name: '访问量1',
                    type: 'line',
                    data: [41, 41, 45, 43, 42, 43, 40, 423, 400, 309, 46, 499]
                },
                {
                    name: '访问量2',
                    type: 'line',
                    data: [51, 51, 55, 53, 52, 53, 50, 523, 500, 409, 56, 599]
                },
                {
                    name: '访问量3',
                    type: 'line',
                    data: [61, 61, 65, 63, 62, 63, 60, 623, 600, 509, 66, 699]
                },
                {
                    name: '访问量4',
                    type: 'line',
                    data: [71, 71, 75, 73, 72, 73, 70, 723, 700, 609, 76, 799]
                },
                {
                    name: '访问量5',
                    type: 'line',
                    data: [81, 81, 85, 83, 82, 83, 80, 823, 800, 709, 86, 899]
                },
                {
                    name: '访问量6',
                    type: 'line',
                    data: [91, 91, 95, 93, 92, 93, 90, 923, 900, 809, 96, 999]
                },
                {
                    name: '访问量7',
                    type: 'line',
                    data: [101, 101, 105, 103, 102, 103, 100, 1000, 1000, 909, 106, 1099]
                },
                {
                    name: '访问量8',
                    type: 'line',
                    data: [111, 111, 115, 113, 112, 113, 110, 1100, 1100, 1009, 116, 1199]
                },
                {
                    name: '访问量9',
                    type: 'line',
                    data: [121, 121, 125, 123, 122, 123, 120, 1200, 1200, 1109, 126, 1299]
                },
                {
                    name: '访问量10',
                    type: 'line',
                    data: [131, 131, 135, 133, 132, 133, 130, 1300, 1300, 1209, 136, 1399]
                }
            ]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.lineEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.line.nativeElement);
        this.lineEchart.setOption(this.lineChart);
        this.barEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.bar.nativeElement);
        this.barEchart.setOption(this.barChart);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('line'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "line", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "bar", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bz-modules-dashboard-dashboard-module.js.map