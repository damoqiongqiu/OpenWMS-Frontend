(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bz-modules-sys-sys-module"],{

/***/ "./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div echarts [options]=\"pieChart\" class=\"nf-chart\" #pie></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div echarts [options]=\"barChart\" class=\"nf-chart\" #bar></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div echarts [options]=\"lineChart\" class=\"nf-chart\" #line></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nf-chart {\n  width: 100%;\n  height: 400px;\n  float: left;\n  padding: 1rem;\n  background-color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9zeXMvc3lzLW1vbml0b3IvRTpcXGdpdGh1Yi1teVxcT3BlbldNU1xcT3BlbldNUy1Gcm9udGVuZC9zcmNcXGFwcFxcYnotbW9kdWxlc1xcc3lzXFxzeXMtbW9uaXRvclxcc3lzLW1vbml0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFVO0VBQ1YsY0FBWTtFQUNaLFlBQVU7RUFDVixjQUFZO0VBQ1osa0NBQWlDLEVBQ3BDIiwiZmlsZSI6InNyYy9hcHAvYnotbW9kdWxlcy9zeXMvc3lzLW1vbml0b3Ivc3lzLW1vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmYtY2hhcnR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHBhZGRpbmc6MXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.ts ***!
  \*********************************************************************/
/*! exports provided: SysMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysMonitorComponent", function() { return SysMonitorComponent; });
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



var SysMonitorComponent = /** @class */ (function () {
    function SysMonitorComponent() {
        var _this = this;
        this.pieChart = {
            theme: '',
            event: [
                {
                    type: 'click',
                    cb: function (res) {
                        console.log(res);
                    }
                }
            ],
            color: _utils_color_util__WEBPACK_IMPORTED_MODULE_1__["default"].baseColor,
            title: {
                text: 'NiceFish访问用户地区分布',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                top: '30rem',
                left: 'left',
                data: ['深圳', '北京', '广州', '上海', '长沙']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    startAngle: -180,
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {
                            value: 3350,
                            name: '深圳'
                        },
                        {
                            value: 310,
                            name: '北京'
                        },
                        {
                            value: 234,
                            name: '广州'
                        },
                        {
                            value: 135,
                            name: '上海'
                        },
                        {
                            value: 1548,
                            name: '长沙'
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        this.barChart = {
            title: {
                text: 'NiceFish月访问量统计',
                subtext: '纯属虚构',
                x: 'center'
            },
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
                    data: [900, 1258, 1300, 1334, 1390, 1430, 1520, 1000, 500, 444, 999, 555]
                }
            ]
        };
        this.lineChart = {
            title: {
                text: 'NiceFish月访问趋势图',
                subtext: '纯属虚构',
                x: 'center'
            },
            legend: {
                x: 'center',
                y: 'center'
            },
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
                    data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 19, 16, 199]
                },
                {
                    name: '访问量1',
                    type: 'line',
                    data: [21, 21, 25, 23, 22, 23, 20, 223, 200, 29, 26, 299]
                },
                {
                    name: '访问量2',
                    type: 'line',
                    data: [31, 31, 35, 33, 32, 33, 30, 323, 300, 39, 36, 399]
                },
                {
                    name: '访问量3',
                    type: 'line',
                    data: [41, 41, 45, 43, 42, 43, 40, 423, 400, 49, 46, 499]
                },
                {
                    name: '访问量4',
                    type: 'line',
                    data: [41, 41, 45, 43, 42, 43, 40, 423, 400, 49, 56, 499]
                },
                {
                    name: '访问量5',
                    type: 'line',
                    data: [51, 51, 55, 53, 52, 53, 50, 523, 500, 59, 66, 599]
                },
                {
                    name: '访问量6',
                    type: 'line',
                    data: [61, 61, 65, 63, 62, 63, 60, 623, 600, 69, 76, 699]
                },
                {
                    name: '访问量7',
                    type: 'line',
                    data: [71, 71, 75, 73, 72, 73, 70, 723, 700, 79, 86, 799]
                },
                {
                    name: '访问量8',
                    type: 'line',
                    data: [81, 81, 85, 83, 82, 83, 80, 823, 800, 89, 96, 899]
                }
            ]
        };
    }
    SysMonitorComponent.prototype.ngOnInit = function () {
        this.barEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.bar.nativeElement);
        this.barEchart.setOption(this.barChart);
        this.lineEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.line.nativeElement);
        this.lineEchart.setOption(this.lineChart);
        this.pieEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.pie.nativeElement);
        this.pieEchart.setOption(this.pieChart);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('line'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SysMonitorComponent.prototype, "line", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SysMonitorComponent.prototype, "bar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pie'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SysMonitorComponent.prototype, "pie", void 0);
    SysMonitorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sys-monitor',
            template: __webpack_require__(/*! ./sys-monitor.component.html */ "./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.html"),
            styles: [__webpack_require__(/*! ./sys-monitor.component.scss */ "./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SysMonitorComponent);
    return SysMonitorComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/sys/sys.component.html":
/*!***************************************************!*\
  !*** ./src/app/bz-modules/sys/sys.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/sys/sys.component.scss":
/*!***************************************************!*\
  !*** ./src/app/bz-modules/sys/sys.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvc3lzL3N5cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/sys/sys.component.ts":
/*!*************************************************!*\
  !*** ./src/app/bz-modules/sys/sys.component.ts ***!
  \*************************************************/
/*! exports provided: SysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysComponent", function() { return SysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SysComponent = /** @class */ (function () {
    function SysComponent() {
    }
    SysComponent.prototype.ngOnInit = function () {
    };
    SysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sys',
            template: __webpack_require__(/*! ./sys.component.html */ "./src/app/bz-modules/sys/sys.component.html"),
            styles: [__webpack_require__(/*! ./sys.component.scss */ "./src/app/bz-modules/sys/sys.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SysComponent);
    return SysComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/sys/sys.module.ts":
/*!**********************************************!*\
  !*** ./src/app/bz-modules/sys/sys.module.ts ***!
  \**********************************************/
/*! exports provided: SysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysModule", function() { return SysModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@7.0.4@@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _sys_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sys.routes */ "./src/app/bz-modules/sys/sys.routes.ts");
/* harmony import */ var _sys_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sys.component */ "./src/app/bz-modules/sys/sys.component.ts");
/* harmony import */ var _sys_monitor_sys_monitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sys-monitor/sys-monitor.component */ "./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SysModule = /** @class */ (function () {
    function SysModule() {
    }
    SysModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_sys_routes__WEBPACK_IMPORTED_MODULE_4__["sysRoutes"])
            ],
            declarations: [
                _sys_component__WEBPACK_IMPORTED_MODULE_5__["SysComponent"],
                _sys_monitor_sys_monitor_component__WEBPACK_IMPORTED_MODULE_6__["SysMonitorComponent"]
            ]
        })
    ], SysModule);
    return SysModule;
}());



/***/ }),

/***/ "./src/app/bz-modules/sys/sys.routes.ts":
/*!**********************************************!*\
  !*** ./src/app/bz-modules/sys/sys.routes.ts ***!
  \**********************************************/
/*! exports provided: sysRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sysRoutes", function() { return sysRoutes; });
/* harmony import */ var _sys_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sys.component */ "./src/app/bz-modules/sys/sys.component.ts");
/* harmony import */ var _sys_monitor_sys_monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sys-monitor/sys-monitor.component */ "./src/app/bz-modules/sys/sys-monitor/sys-monitor.component.ts");


var sysRoutes = [{
        path: '',
        component: _sys_component__WEBPACK_IMPORTED_MODULE_0__["SysComponent"],
        children: [
            { path: '', redirectTo: 'sysmonitor', pathMatch: 'full' },
            { path: 'sysmonitor', component: _sys_monitor_sys_monitor_component__WEBPACK_IMPORTED_MODULE_1__["SysMonitorComponent"] },
        ]
    }];


/***/ })

}]);
//# sourceMappingURL=bz-modules-sys-sys-module.js.map