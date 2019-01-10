(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-layout-workspace-workspace-module"],{

/***/ "./src/app/common/dropdown-directive/dropdown-trigger.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common/dropdown-directive/dropdown-trigger.directive.ts ***!
  \*************************************************************************/
/*! exports provided: DropdownTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownTriggerDirective", function() { return DropdownTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/common/dropdown-directive/dropdown.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownTriggerDirective = /** @class */ (function () {
    function DropdownTriggerDirective(dropdown, elementRef) {
        var _this = this;
        this.dropdown = dropdown;
        this.elementRef = elementRef;
        this.closeDropdownOnOutsideClick = function (event) { _this.closeIfInClosableZone(event); };
    }
    DropdownTriggerDirective.prototype.open = function () {
        if (this.dropdown.isOpened())
            return;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownTriggerDirective.prototype.close = function () {
        if (!this.dropdown.isOpened())
            return;
        this.dropdown.close();
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownTriggerDirective.prototype.toggle = function () {
        if (this.dropdown.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DropdownTriggerDirective.prototype.openDropdown = function () {
        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.close();
        }
        else {
            this.open();
        }
    };
    //如果点击的位置不在下拉菜单内部，则关闭下拉
    DropdownTriggerDirective.prototype.closeIfInClosableZone = function (event) {
        if (event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    };
    DropdownTriggerDirective.prototype.ngOnDestroy = function () {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownTriggerDirective.prototype, "openDropdown", null);
    DropdownTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dropdown-trigger]',
            exportAs: "dropdown-trigger"
        })
        /**
         * 下拉按钮，点击这个区域会把原来隐藏的下拉内容显示出来
         * 这个指令用来和DropdownDirective配合实现下拉功能
         * 从github上的这个项目简化而来：https://github.com/pleerock/ngx-dropdown
         */
        ,
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()),
        __metadata("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownTriggerDirective);
    return DropdownTriggerDirective;
}());



/***/ }),

/***/ "./src/app/common/dropdown-directive/dropdown.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/dropdown-directive/dropdown.directive.ts ***!
  \*****************************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
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

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(elementRef) {
        this.elementRef = elementRef;
        this.toggleClick = true;
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropdownDirective.prototype.open = function () {
        //这种操作HTML元素的方式还是很丑陋的，对吧？
        var element = this.elementRef.nativeElement;
        element.classList.add("open");
        this.onOpen.emit("open");
    };
    DropdownDirective.prototype.close = function () {
        var element = this.elementRef.nativeElement;
        element.classList.remove("open");
        this.onClose.emit("close");
    };
    DropdownDirective.prototype.isOpened = function () {
        var element = this.elementRef.nativeElement;
        return element.classList.contains("open");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropdownToggle"),
        __metadata("design:type", Boolean)
    ], DropdownDirective.prototype, "toggleClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "onClose", void 0);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dropdown]',
            exportAs: 'dropdown'
        })
        /**
         * 下拉菜单本身
         * 从github上的这个项目简化而来：https://github.com/pleerock/ngx-dropdown
         */
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/global-layout/breadcrumb/breadcrumb.component.html":
/*!********************************************************************!*\
  !*** ./src/app/global-layout/breadcrumb/breadcrumb.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  breadcrumb works!\r\n</p> -->\r\n"

/***/ }),

/***/ "./src/app/global-layout/breadcrumb/breadcrumb.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/global-layout/breadcrumb/breadcrumb.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-layout/breadcrumb/breadcrumb.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/global-layout/breadcrumb/breadcrumb.component.ts ***!
  \******************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
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

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/global-layout/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/global-layout/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/global-layout/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"layout-footer no-margin\">\r\n    <div>\r\n        Powered by <a href=\"http://git.oschina.net/mumu-osc/NiceFish\" target=\"_blank\">NiceFish</a>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/global-layout/footer/footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/global-layout/footer/footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/global-layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/global-layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/global-layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/global-layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/menu/menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/global-layout/menu/menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul\r\n  app-submenu\r\n  [item]=\"model\"\r\n  root=\"true\"\r\n  class=\"ultima-menu ultima-main-menu clearfix\"\r\n  [reset]=\"reset\"\r\n  visible=\"true\"\r\n  parentActive=\"true\"\r\n></ul>\r\n"

/***/ }),

/***/ "./src/app/global-layout/menu/menu.component.scss":
/*!********************************************************!*\
  !*** ./src/app/global-layout/menu/menu.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-layout/menu/menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/global-layout/menu/menu.component.ts ***!
  \******************************************************/
/*! exports provided: MenuComponent, AppSubMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSubMenuComponent", function() { return AppSubMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/_@angular_animations@7.0.4@@angular/animations/fesm5/animations.js");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workspace/workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/_@ngx-translate_core@11.0.1@@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(app, translateService) {
        var _this = this;
        this.app = app;
        this.translateService = translateService;
        this.translateService.get('globalLayout').subscribe(function (globalLayout) {
            _this.model = [
                { label: globalLayout.dashboard, icon: 'dashboard', routerLink: ['/workspace/dashboard'] },
                {
                    label: globalLayout.inventoryControl, icon: 'list', badge: '3', badgeStyleClass: 'teal-badge',
                    items: [
                        { label: globalLayout.inventory, icon: 'desktop_mac', routerLink: ['/workspace/inventory/inventory-table/page/1'] },
                        { label: globalLayout.inbound, icon: 'desktop_mac', routerLink: ['/workspace/inventory/inbound-receipt-table/page/1'] },
                        { label: globalLayout.outbound, icon: 'desktop_mac', routerLink: ['/workspace/inventory/outbound-receipt-table/page/1'] },
                    ]
                },
                {
                    label: globalLayout.baseData, icon: 'list', badge: '5', badgeStyleClass: 'teal-badge',
                    items: [
                        { label: globalLayout.warehouseData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/warehouse-table/page/1'] },
                        { label: globalLayout.categoryData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/category-table/page/1'] },
                        { label: globalLayout.vendorData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/vendor-table/page/1'] },
                        { label: globalLayout.customerData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/customer-table/page/1'] },
                        { label: globalLayout.staffData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/staff-table/page/1'] }
                    ]
                },
                {
                    label: globalLayout.systemMonitoring, icon: 'list', badge: '1', badgeStyleClass: 'teal-badge',
                    items: [
                        { label: globalLayout.Echarts, icon: 'desktop_mac', routerLink: ['/workspace/sys/sysmonitor'] },
                    ]
                },
                {
                    label: globalLayout.theme, icon: 'palette', badge: '12', badgeStyleClass: 'teal-badge',
                    items: [
                        { label: globalLayout.indigoPink, icon: 'brush', command: function (event) { _this.changeTheme('indigo'); } },
                        { label: globalLayout.brownGreen, icon: 'brush', command: function (event) { _this.changeTheme('brown'); } },
                        { label: globalLayout.blueAmber, icon: 'brush', command: function (event) { _this.changeTheme('blue'); } },
                        { label: globalLayout.blueGrayGreen, icon: 'brush', command: function (event) { _this.changeTheme('blue-grey'); } },
                        { label: globalLayout.darkBlue, icon: 'brush', command: function (event) { _this.changeTheme('dark-blue'); } },
                        { label: globalLayout.darkGreen, icon: 'brush', command: function (event) { _this.changeTheme('dark-green'); } },
                        { label: globalLayout.greenYellow, icon: 'brush', command: function (event) { _this.changeTheme('green'); } },
                        { label: globalLayout.purpleCyan, icon: 'brush', command: function (event) { _this.changeTheme('purple-cyan'); } },
                        { label: globalLayout.purpleAmber, icon: 'brush', command: function (event) { _this.changeTheme('purple-amber'); } },
                        { label: globalLayout.tealLime, icon: 'brush', command: function (event) { _this.changeTheme('teal'); } },
                        { label: globalLayout.cyanAmber, icon: 'brush', command: function (event) { _this.changeTheme('cyan'); } },
                        { label: globalLayout.greyDeepOrange, icon: 'brush', command: function (event) { _this.changeTheme('grey'); } }
                    ]
                },
                {
                    label: globalLayout.customization, icon: 'settings_application', badge: '10', badgeStyleClass: 'teal-badge',
                    items: [
                        { label: globalLayout.compactSize, icon: 'fiber_manual_record', command: function () { return _this.app.layoutCompact = true; } },
                        { label: globalLayout.materialSize, icon: 'fiber_smart_record', command: function () { return _this.app.layoutCompact = false; } },
                        { label: globalLayout.staticMenu, icon: 'menu', command: function () { return _this.app.changeToStaticMenu(); } },
                        { label: globalLayout.overlayMenu, icon: 'exit_to_app', command: function () { return _this.app.changeToOverlayMenu(); } },
                        { label: globalLayout.slimMenu, icon: 'more_vert', command: function () { return _this.app.changeToSlimMenu(); } },
                        { label: globalLayout.horizontalMenu, icon: 'border_horizontal', command: function () { return _this.app.changeToHorizontalMenu(); } },
                        { label: globalLayout.lightMenu, icon: 'label_outline', command: function () { return _this.app.darkMenu = false; } },
                        { label: globalLayout.darkMenu, icon: 'label', command: function () { return _this.app.darkMenu = true; } },
                        { label: globalLayout.inlineProfile, icon: 'contacts', command: function () { return _this.app.profileMode = 'inline'; } },
                        { label: globalLayout.topProfile, icon: 'person_pin', command: function () { return _this.app.profileMode = 'top'; } },
                    ]
                }
            ];
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.changeTheme = function (theme) {
        var themeLink = document.getElementById('theme-css');
        var layoutLink = document.getElementById('layout-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MenuComponent.prototype, "reset", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/global-layout/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/global-layout/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], MenuComponent);
    return MenuComponent;
}());

var AppSubMenuComponent = /** @class */ (function () {
    function AppSubMenuComponent(app) {
        this.app = app;
    }
    AppSubMenuComponent.prototype.itemClick = function (event, item, index) {
        var _this = this;
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(function () {
                _this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            }
            else {
                this.app.resetMenu = false;
            }
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    };
    AppSubMenuComponent.prototype.onMouseEnter = function (index) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    };
    AppSubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(AppSubMenuComponent.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSubMenuComponent.prototype, "parentActive", {
        get: function () {
            return this._parentActive;
        },
        set: function (val) {
            this._parentActive = val;
            if (!this._parentActive) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppSubMenuComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "root", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "reset", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "parentActive", null);
    AppSubMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-submenu]',
            template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\" *ngIf=\"child.visible === false ? false : true\">\n                <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\"\n                   class=\"ripplelink\" *ngIf=\"!child.routerLink\"\n                    [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i *ngIf=\"child.icon\" class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n\n                <a (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\" class=\"ripplelink\" *ngIf=\"child.routerLink\"\n                    [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\"\n                   [routerLinkActiveOptions]=\"{exact: true}\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i *ngIf=\"child.icon\" class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">{{child.label}}</div>\n                </div>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [visible]=\"isActive(i)\" [reset]=\"reset\" [parentActive]=\"isActive(i)\"\n                    [@children]=\"(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?\n                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'\"></ul>\n            </li>\n        </ng-template>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('children', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                        'z-index': 100
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0px',
                        'z-index': '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceComponent"]])
    ], AppSubMenuComponent);
    return AppSubMenuComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/profile/profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/global-layout/profile/profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\" [ngClass]=\"{'profile-expanded':active}\">\r\n    <a href=\"#\" (click)=\"onClick($event)\">\r\n        <img class=\"profile-image\" src=\"../../../assets/imgs/io.png\" />\r\n        <span class=\"profile-name\">Admin</span>\r\n        <i class=\"material-icons\">keyboard_arrow_down</i>\r\n    </a>\r\n</div>\r\n\r\n<ul class=\"ultima-menu profile-menu\" [@menu]=\"active ? 'visible' : 'hidden'\">\r\n    <li role=\"menuitem\">\r\n        <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\r\n            <i class=\"material-icons\">person</i>\r\n            <span>Profile</span>\r\n        </a>\r\n    </li>\r\n    <li role=\"menuitem\">\r\n        <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\r\n            <i class=\"material-icons\">security</i>\r\n            <span>Privacy</span>\r\n        </a>\r\n    </li>\r\n    <li role=\"menuitem\">\r\n        <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\r\n            <i class=\"material-icons\">settings_application</i>\r\n            <span>Settings</span>\r\n        </a>\r\n    </li>\r\n    <li role=\"menuitem\">\r\n        <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\r\n            <i class=\"material-icons\">power_settings_new</i>\r\n            <span>Logout</span>\r\n        </a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/global-layout/profile/profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/global-layout/profile/profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-layout/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/global-layout/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workspace/workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/_@angular_animations@7.0.4@@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(app) {
        this.app = app;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.onClick = function (event) {
        var _this = this;
        this.active = !this.active;
        setTimeout(function () {
            _this.app.layoutMenuScrollerViewChild.moveBar();
        }, 450);
        event.preventDefault();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/global-layout/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/global-layout/profile/profile.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('menu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__["WorkspaceComponent"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/rightpanel/rightpanel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/global-layout/rightpanel/rightpanel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-rightpanel\" [ngClass]=\"{'layout-rightpanel-active': app.rightPanelActive}\" (click)=\"app.onRightPanelClick()\">\r\n  <p-scrollPanel #scrollRightPanel [style]=\"{height: '100%'}\">\r\n    <div class=\"layout-rightpanel-wrapper\">\r\n      <div class=\"layout-rightpanel-header\">\r\n          <div class=\"weather-day\">Wednesday</div>\r\n          <div class=\"weather-date\">Jan 26</div>\r\n      </div>\r\n\r\n      <div class=\"layout-rightpanel-content\">\r\n          <h1>Weather</h1>\r\n          <h2>San Francisco, USA</h2>\r\n\r\n          <div class=\"weather-today\">\r\n              <span class=\"weather-today-value\">21&#8451;</span>\r\n              <img src=\"assets/layout/images/dashboard/weather-icon-2.svg\" width=\"60\"/>\r\n          </div>\r\n\r\n          <ul class=\"weekly-weather\">\r\n              <li>\r\n                  Thursday\r\n                  <img src=\"assets/layout/images/dashboard/weather-icon-1.svg\"/>\r\n                  <span class=\"weekly-weather-value\">24</span>\r\n              </li>\r\n              <li>\r\n                  Friday\r\n                  <img src=\"assets/layout/images/dashboard/weather-icon-3.svg\"/>\r\n                  <span class=\"weekly-weather-value\">19</span>\r\n              </li>\r\n              <li>\r\n                  Saturday\r\n                  <img src=\"assets/layout/images/dashboard/weather-icon-4.svg\"/>\r\n                  <span class=\"weekly-weather-value\">15</span>\r\n              </li>\r\n              <li>\r\n                  Sunday\r\n                  <img src=\"assets/layout/images/dashboard/weather-icon-1.svg\"/>\r\n                  <span class=\"weekly-weather-value\">24</span>\r\n              </li>\r\n              <li>\r\n                  Monday\r\n                  <img src=\"assets/layout/images/dashboard/weather-icon-2.svg\"/>\r\n                  <span class=\"weekly-weather-value\">21</span>\r\n              </li>\r\n              <li>\r\n                  Tuesday\r\n                  <img src=\"assets/layout/images/dashboard/weather-icon-3.svg\"/>\r\n                  <span class=\"weekly-weather-value\">20</span>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n    </div>\r\n  </p-scrollPanel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/global-layout/rightpanel/rightpanel.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/global-layout/rightpanel/rightpanel.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvcmlnaHRwYW5lbC9yaWdodHBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-layout/rightpanel/rightpanel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/global-layout/rightpanel/rightpanel.component.ts ***!
  \******************************************************************/
/*! exports provided: RightpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightpanelComponent", function() { return RightpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workspace/workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/_primeng@6.1.7@primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RightpanelComponent = /** @class */ (function () {
    function RightpanelComponent(app) {
        this.app = app;
    }
    RightpanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.rightPanelMenuScrollerViewChild.moveBar(); }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollRightPanel'),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ScrollPanel"])
    ], RightpanelComponent.prototype, "rightPanelMenuScrollerViewChild", void 0);
    RightpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rightpanel',
            template: __webpack_require__(/*! ./rightpanel.component.html */ "./src/app/global-layout/rightpanel/rightpanel.component.html"),
            styles: [__webpack_require__(/*! ./rightpanel.component.scss */ "./src/app/global-layout/rightpanel/rightpanel.component.scss")]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__["WorkspaceComponent"]])
    ], RightpanelComponent);
    return RightpanelComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/top-menu/top-menu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/global-layout/top-menu/top-menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <!-- .navbar-toggle样式用于toggle收缩的内容，即nav-collapse collapse样式所在元素 -->\r\n            <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\"\r\n                (click)=\"toogleCli(toggleSta)\">\r\n                <span class=\"sr-only\">Toggle Navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <!-- 确保无论是宽屏还是窄屏，navbar-brand都显示 -->\r\n            <a routerLink=\"/login\" class=\"navbar-brand\">\r\n                Open-WMS\r\n            </a>\r\n            <a href=\"https://gitee.com/mumu-osc/OpenWMS-Frontend\" target=\"_blank\" class=\"navbar-brand\">\r\n                <i class=\"fa fa-github fa-2\" aria-hidden=\"true\"></i>\r\n            </a>\r\n\r\n        </div>\r\n        <!-- <theme-switcher></theme-switcher> -->\r\n        <!-- 屏幕宽度小于768px时，div.navbar-responsive-collapse容器里的内容都会隐藏，显示icon-bar图标，当点击icon-bar图标时，再展开。屏幕大于768px时，默认显示。 -->\r\n        <div class=\"collapse navbar-collapse navbar-responsive-collapse\" aria-expanded=\"false\" [class.in]=\"toggleSta\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\" dropdown>\r\n                    <a routerLink=\"dashboard\">\r\n                <li class=\"fa fa-area-chart fa-2\"></li>{{'globalLayout.dashboard' | translate}}</a>\r\n                </li>\r\n                <li class=\"dropdown\" dropdown>\r\n                    <a dropdown-trigger>\r\n                <li class=\"fa fa-bars fa-2\"></li>{{'globalLayout.inventoryControl' | translate}}</a>\r\n                <ul class=\"dropdown-menu dropdown-menu-left\">\r\n                    <li>\r\n                        <a routerLink=\"inventory/inventory-table/page/1\">{{'globalLayout.inventory' | translate}}</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"inventory/inbound-receipt-table/page/1\">{{'globalLayout.inbound' | translate}}</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"inventory/outbound-receipt-table/page/1\">{{'globalLayout.outbound' | translate}}</a>\r\n                    </li>\r\n                </ul>\r\n                </li>\r\n                <li class=\"dropdown\" dropdown>\r\n                    <a dropdown-trigger>\r\n                <li class=\"fa fa-cogs fa-2\"></li>{{'globalLayout.baseData' | translate}}</a>\r\n                <ul class=\"dropdown-menu  dropdown-menu-left\">\r\n                    <li>\r\n                        <a routerLink=\"basic-data/warehouse-table/page/1\">{{'globalLayout.warehouseData' | translate}}</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"basic-data/category-table/page/1\">{{'globalLayout.categoryData' | translate}}</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"basic-data/vendor-table/page/1\">{{'globalLayout.vendorData' | translate}}</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"basic-data/customer-table/page/1\">{{'globalLayout.customerData' | translate}}</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"basic-data/staff-table/page/1\">{{'globalLayout.staffData' | translate}}</a>\r\n                    </li>\r\n                </ul>\r\n                </li>\r\n                <li class=\"dropdown\" dropdown>\r\n                    <a dropdown-trigger>\r\n                <li class=\"fa fa-area-chart fa-2\"></li>{{'globalLayout.systemMonitoring' | translate}}</a>\r\n                <ul class=\"dropdown-menu  dropdown-menu-left\">\r\n                    <li>\r\n                        <a routerLink=\"sys/sysmonitor\">{{'globalLayout.Echarts' | translate}}</a>\r\n                    </li>\r\n                </ul>\r\n                </li>\r\n                <li class=\"dropdown\" dropdown>\r\n                    <a dropdown-trigger>\r\n                <li class=\"fa fa-user-circle fa-2\"></li> Admin</a>\r\n                <ul class=\"dropdown-menu  dropdown-menu-right\">\r\n                    <li>\r\n                        <a routerLink=\"sys/sysmonitor\">\r\n                    <li class=\"fa fa-user-o fa-2\"></li>{{'user.profile' | translate}}</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"sys/sysmonitor\">\r\n                    <li class=\"fa fa-gear fa-2\"></li>{{'user.settings' | translate}}</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/login\">\r\n                    <li class=\"fa fa-sign-out fa-2\"></li>{{'user.logout' | translate}}</a>\r\n                    </li>\r\n                </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/global-layout/top-menu/top-menu.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/global-layout/top-menu/top-menu.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  padding: 0px;\n  min-width: 120px;\n  background-color: #38434e; }\n  .dropdown-menu li a {\n    position: relative;\n    left: -1px;\n    padding: 10px 20px;\n    color: #fff; }\n  .dropdown-menu li a:hover {\n      background-color: #39b9c6; }\n  .navbar-inverse {\n  background-color: #435360;\n  border-color: #435360; }\n  .navbar-inverse .navbar-nav > li > a:hover {\n    background-color: #242c33; }\n  .navbar-inverse .navbar-nav .open > a {\n    background-color: #242c33; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWxheW91dC90b3AtbWVudS9FOlxcZ2l0aHViLW15XFxPcGVuV01TXFxPcGVuV01TLUZyb250ZW5kL3NyY1xcYXBwXFxnbG9iYWwtbGF5b3V0XFx0b3AtbWVudVxcdG9wLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBWWhCLDBCQUF5QixFQUMxQjtFQWZEO0lBS00sbUJBQWtCO0lBQ2xCLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsWUFBVyxFQUlaO0VBWkw7TUFVUSwwQkFBeUIsRUFDMUI7RUFLUDtFQUNFLDBCQUF5QjtFQUN6QixzQkFBcUIsRUFTdEI7RUFYRDtJQUtNLDBCQUF5QixFQUMxQjtFQU5MO0lBUU0sMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLWxheW91dC90b3AtbWVudS90b3AtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICBsaSB7XHJcbiAgICBhIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWI5YzY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDM0ZTtcclxufVxyXG4ubmF2YmFyLWludmVyc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzUzNjA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDM1MzYwO1xyXG4gIC5uYXZiYXItbmF2e1xyXG4gICAgPiBsaSA+IGE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyYzMzO1xyXG4gICAgfVxyXG4gICAgLm9wZW4gPmF7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDJjMzM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/global-layout/top-menu/top-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/global-layout/top-menu/top-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/event-bus.service */ "./src/app/common/services/event-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent(elementRef, eventBusService) {
        this.elementRef = elementRef;
        this.eventBusService = eventBusService;
        this.toggleBtnStatus = false;
        this.showTopMenu = false;
        this.toggleSta = false;
    }
    TopMenuComponent.prototype.ngOnInit = function () { };
    TopMenuComponent.prototype.onTogglerClick = function (event) {
        this.toggleBtnStatus = !this.toggleBtnStatus;
        this.eventBusService.topToggleBtn.next(this.toggleBtnStatus);
    };
    TopMenuComponent.prototype.toogleCli = function (val) {
        this.toggleSta = !this.toggleSta;
    };
    TopMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/app/global-layout/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.scss */ "./src/app/global-layout/top-menu/top-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _common_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"]])
    ], TopMenuComponent);
    return TopMenuComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/topbar/topbar.component.html":
/*!************************************************************!*\
  !*** ./src/app/global-layout/topbar/topbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar clearfix\">\r\n    <div class=\"topbar-left\">\r\n        <a routerLink=\"/login\" class=\"navbar-brand position-relative\">\r\n            Open-WMS\r\n        </a>\r\n        <a href=\"https://gitee.com/mumu-osc/OpenWMS-Frontend\" target=\"_blank\" class=\"navbar-brand position-relative\">\r\n            <i class=\"fa fa-github fa-2\" aria-hidden=\"true\"></i>\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"topbar-right\">\r\n        <a id=\"menu-button\" href=\"#\" (click)=\"app.onMenuButtonClick($event)\">\r\n            <i class=\"material-icons\">menu</i>\r\n        </a>\r\n\r\n        <a id=\"rightpanel-menu-button\" href=\"#\" (click)=\"app.onRightPanelButtonClick($event)\">\r\n            <i class=\"material-icons\">more_vert</i>\r\n        </a>\r\n\r\n        <a id=\"topbar-menu-button\" href=\"#\" (click)=\"app.onTopbarMenuButtonClick($event)\">\r\n            <i class=\"material-icons\">menu</i>\r\n        </a>\r\n\r\n        <ul class=\"topbar-items animated fadeInDown\" [ngClass]=\"{'topbar-items-visible': app.topbarMenuActive}\">\r\n            <li #profile class=\"profile-item\" *ngIf=\"app.profileMode==='top'||app.isHorizontal()\" [ngClass]=\"{'active-top-menu':app.activeTopbarItem === profile}\">\r\n\r\n                <a href=\"#\" (click)=\"app.onTopbarItemClick($event,profile)\">\r\n                    <img class=\"profile-image\" src=\"../../../assets/imgs/io.png\" />\r\n                    <span class=\"topbar-item-name\">Jane Williams</span>\r\n                </a>\r\n\r\n                <ul class=\"ultima-menu animated fadeInDown\">\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">person</i>\r\n                            <span>Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">security</i>\r\n                            <span>Privacy</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">settings_applications</i>\r\n                            <span>Settings</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">power_settings_new</i>\r\n                            <span>Logout</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li #settings [ngClass]=\"{'active-top-menu':app.activeTopbarItem === settings}\">\r\n                <a href=\"#\" (click)=\"app.onTopbarItemClick($event,settings)\">\r\n                    <i class=\"topbar-icon material-icons\">settings</i>\r\n                    <span class=\"topbar-item-name\">Settings</span>\r\n                </a>\r\n                <ul class=\"ultima-menu animated fadeInDown\">\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">palette</i>\r\n                            <span>Change Theme</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">favorite_border</i>\r\n                            <span>Favorites</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">lock</i>\r\n                            <span>Lock Screen</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">wallpaper</i>\r\n                            <span>Wallpaper</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li #messages [ngClass]=\"{'active-top-menu':app.activeTopbarItem === messages}\">\r\n                <a href=\"#\" (click)=\"app.onTopbarItemClick($event,messages)\">\r\n                    <i class=\"topbar-icon material-icons animated swing\">message</i>\r\n                    <span class=\"topbar-badge animated rubberBand\">5</span>\r\n                    <span class=\"topbar-item-name\">Messages</span>\r\n                </a>\r\n                <ul class=\"ultima-menu animated fadeInDown\">\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <img src=\"assets/layout/images/avatar1.png\" width=\"35\" />\r\n                            <span>Give me a call</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <img src=\"assets/layout/images/avatar2.png\" width=\"35\" />\r\n                            <span>Sales reports attached</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <img src=\"assets/layout/images/avatar3.png\" width=\"35\" />\r\n                            <span>About your invoice</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <img src=\"assets/layout/images/avatar2.png\" width=\"35\" />\r\n                            <span>Meeting today at 10pm</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <img src=\"assets/layout/images/avatar4.png\" width=\"35\" />\r\n                            <span>Out of office</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li #notifications [ngClass]=\"{'active-top-menu':app.activeTopbarItem === notifications}\">\r\n                <a href=\"#\" (click)=\"app.onTopbarItemClick($event,notifications)\">\r\n                    <i class=\"topbar-icon material-icons\">timer</i>\r\n                    <span class=\"topbar-badge animated rubberBand\">4</span>\r\n                    <span class=\"topbar-item-name\">Notifications</span>\r\n                </a>\r\n                <ul class=\"ultima-menu animated fadeInDown\">\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">bug_report</i>\r\n                            <span>Pending tasks</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">event</i>\r\n                            <span>Meeting today at 3pm</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">file_download</i>\r\n                            <span>Download documents</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"menuitem\">\r\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\r\n                            <i class=\"material-icons\">flight</i>\r\n                            <span>Book flight</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li #search class=\"search-item\" [ngClass]=\"{'active-top-menu':app.activeTopbarItem === search}\" (click)=\"app.onTopbarItemClick($event,search)\">\r\n                <span class=\"md-inputfield\">\r\n                    <input type=\"text\" pInputText>\r\n                    <label>Search</label>\r\n                    <i class=\"topbar-icon material-icons\">search</i>\r\n                </span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/global-layout/topbar/topbar.component.scss":
/*!************************************************************!*\
  !*** ./src/app/global-layout/topbar/topbar.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position-relative {\n  position: relative;\n  z-index: 1000;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWxheW91dC90b3BiYXIvRTpcXGdpdGh1Yi1teVxcT3BlbldNU1xcT3BlbldNUy1Gcm9udGVuZC9zcmNcXGFwcFxcZ2xvYmFsLWxheW91dFxcdG9wYmFyXFx0b3BiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbi1yZWxhdGl2ZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/global-layout/topbar/topbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/global-layout/topbar/topbar.component.ts ***!
  \**********************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workspace/workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(app) {
        this.app = app;
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/global-layout/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/global-layout/topbar/topbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__["WorkspaceComponent"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.component.html":
/*!******************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <top-menu></top-menu> -->\r\n<!-- <div class=\"layout-content\">\r\n    <router-outlet></router-outlet>\r\n</div> -->\r\n<div class=\"layout-wrapper\" [ngClass]=\"{'layout-compact':layoutCompact}\" (click)=\"onLayoutClick()\">\r\n  <div #layoutContainer class=\"layout-container\"\r\n            [ngClass]=\"{'menu-layout-static': !isOverlay(),\r\n            'menu-layout-overlay': isOverlay(),\r\n            'layout-menu-overlay-active': overlayMenuActive,\r\n            'menu-layout-horizontal': isHorizontal(),\r\n            'menu-layout-slim': isSlim(),\r\n            'layout-menu-static-inactive': staticMenuDesktopInactive,\r\n            'layout-menu-static-active': staticMenuMobileActive}\">\r\n    <topbar></topbar>\r\n    <div class=\"layout-menu\" [ngClass]=\"{'layout-menu-dark':darkMenu}\" (click)=\"onMenuClick($event)\">\r\n      <p-scrollPanel #scrollPanel [style]=\"{height: '100%'}\">\r\n           <profile *ngIf=\"profileMode=='inline'&&!isHorizontal()\"></profile>\r\n           <app-menu [reset]=\"resetMenu\">\r\n            <!-- <top-menu></top-menu> -->\r\n           </app-menu>\r\n      </p-scrollPanel>\r\n    </div>\r\n    <div class=\"layout-main\">\r\n        <breadcrumb></breadcrumb>\r\n        <div class=\"layout-content\">\r\n          <router-outlet></router-outlet>\r\n          <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n    <rightpanel></rightpanel>\r\n    <div class=\"layout-mask\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvd29ya3NwYWNlL3dvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.component.ts ***!
  \****************************************************************/
/*! exports provided: WorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceComponent", function() { return WorkspaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/event-bus.service */ "./src/app/common/services/event-bus.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/_primeng@6.1.7@primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["SLIM"] = 2] = "SLIM";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 3] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent(renderer2, zone, eventBusService) {
        this.renderer2 = renderer2;
        this.zone = zone;
        this.eventBusService = eventBusService;
        this.isCollapsed = false;
        // constructor(private elementRef: ElementRef, private eventBusService: EventBusService) {
        // }
        this.layoutCompact = true;
        this.layoutMode = MenuOrientation.STATIC;
        this.darkMenu = false;
        this.profileMode = 'inline';
        this.resize = true;
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventBusService.topToggleBtn.subscribe(function (value) {
            _this.toggleMenuStatus(value);
        });
        this.zone.runOutsideAngular(function () {
            _this.bindRipple();
        });
    };
    WorkspaceComponent.prototype.bindRipple = function () {
        this.rippleInitListener = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.rippleInitListener);
    };
    WorkspaceComponent.prototype.init = function () {
        this.rippleMouseDownListener = this.rippleMouseDown.bind(this);
        document.addEventListener('mousedown', this.rippleMouseDownListener, false);
    };
    WorkspaceComponent.prototype.rippleMouseDown = function (e) {
        for (var target = e.target; target && target !== this; target = target['parentNode']) {
            if (!this.isVisible(target)) {
                continue;
            }
            // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
            if (this.selectorMatches(target, '.ripplelink, .ui-button')) {
                var element = target;
                this.rippleEffect(element, e);
                break;
            }
        }
    };
    WorkspaceComponent.prototype.selectorMatches = function (el, selector) {
        var p = Element.prototype;
        var f = p['matches'] ||
            p['webkitMatchesSelector'] ||
            p['mozMatchesSelector'] ||
            p['msMatchesSelector'] ||
            function (s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };
        return f.call(el, selector);
    };
    WorkspaceComponent.prototype.isVisible = function (el) {
        return !!(el.offsetWidth || el.offsetHeight);
    };
    WorkspaceComponent.prototype.rippleEffect = function (element, e) {
        if (element.querySelector('.ink') === null) {
            var inkEl = document.createElement('span');
            this.addClass(inkEl, 'ink');
            if (this.hasClass(element, 'ripplelink') &&
                element.querySelector('span')) {
                element
                    .querySelector('span')
                    .insertAdjacentHTML('afterend', "<span class='ink'></span>");
            }
            else {
                element.appendChild(inkEl);
            }
        }
        var ink = element.querySelector('.ink');
        this.removeClass(ink, 'ripple-animate');
        if (!ink.offsetHeight && !ink.offsetWidth) {
            var d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        var x = e.pageX - this.getOffset(element).left - ink.offsetWidth / 2;
        var y = e.pageY - this.getOffset(element).top - ink.offsetHeight / 2;
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        ink.style.pointerEvents = 'none';
        this.addClass(ink, 'ripple-animate');
    };
    WorkspaceComponent.prototype.hasClass = function (element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }
        else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    };
    WorkspaceComponent.prototype.addClass = function (element, className) {
        if (element.classList) {
            element.classList.add(className);
        }
        else {
            element.className += ' ' + className;
        }
    };
    WorkspaceComponent.prototype.removeClass = function (element, className) {
        if (element.classList) {
            element.classList.remove(className);
        }
        else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };
    WorkspaceComponent.prototype.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top +
                (window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0),
            left: rect.left +
                (window.pageXOffset ||
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft ||
                    0)
        };
    };
    WorkspaceComponent.prototype.unbindRipple = function () {
        if (this.rippleInitListener) {
            document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
        }
        if (this.rippleMouseDownListener) {
            document.removeEventListener('mousedown', this.rippleMouseDownListener);
        }
    };
    WorkspaceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutContainer = (this.layourContainerViewChild.nativeElement);
        setTimeout(function () {
            _this.layoutMenuScrollerViewChild.moveBar();
        }, 100);
    };
    WorkspaceComponent.prototype.onLayoutClick = function () {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.resetMenu = true;
            }
            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }
            this.menuHoverActive = false;
        }
        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }
        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
        this.resize = !this.resize;
    };
    WorkspaceComponent.prototype.onMenuButtonClick = function (event) {
        this.menuClick = true;
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;
        if (this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
            }
        }
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onMenuClick = function ($event) {
        this.menuClick = true;
        this.resetMenu = false;
    };
    WorkspaceComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        this.hideOverlayMenu();
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onTopbarSubItemClick = function (event) {
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onRightPanelButtonClick = function (event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onRightPanelClick = function () {
        this.rightPanelClick = true;
    };
    WorkspaceComponent.prototype.hideOverlayMenu = function () {
        this.rotateMenuButton = false;
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    };
    WorkspaceComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    WorkspaceComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    WorkspaceComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    WorkspaceComponent.prototype.isOverlay = function () {
        return this.layoutMode === MenuOrientation.OVERLAY;
    };
    WorkspaceComponent.prototype.isHorizontal = function () {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    };
    WorkspaceComponent.prototype.isSlim = function () {
        return this.layoutMode === MenuOrientation.SLIM;
    };
    WorkspaceComponent.prototype.changeToStaticMenu = function () {
        this.layoutMode = MenuOrientation.STATIC;
    };
    WorkspaceComponent.prototype.changeToOverlayMenu = function () {
        this.layoutMode = MenuOrientation.OVERLAY;
    };
    WorkspaceComponent.prototype.changeToHorizontalMenu = function () {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    };
    WorkspaceComponent.prototype.changeToSlimMenu = function () {
        this.layoutMode = MenuOrientation.SLIM;
    };
    WorkspaceComponent.prototype.ngOnDestroy = function () {
        this.unbindRipple();
    };
    WorkspaceComponent.prototype.toggleMenuStatus = function (isCollapse) {
        this.isCollapsed = isCollapse;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layoutContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkspaceComponent.prototype, "layourContainerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPanel'),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ScrollPanel"])
    ], WorkspaceComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    WorkspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workspace',
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/global-layout/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.scss */ "./src/app/global-layout/workspace/workspace.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _common_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"]])
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.module.ts ***!
  \*************************************************************/
/*! exports provided: WorkspaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceModule", function() { return WorkspaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top-menu/top-menu.component */ "./src/app/global-layout/top-menu/top-menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/global-layout/footer/footer.component.ts");
/* harmony import */ var _workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../topbar/topbar.component */ "./src/app/global-layout/topbar/topbar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/global-layout/profile/profile.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/global-layout/menu/menu.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "./src/app/global-layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _rightpanel_rightpanel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rightpanel/rightpanel.component */ "./src/app/global-layout/rightpanel/rightpanel.component.ts");
/* harmony import */ var _common_dropdown_directive_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/dropdown-directive/dropdown.directive */ "./src/app/common/dropdown-directive/dropdown.directive.ts");
/* harmony import */ var _common_dropdown_directive_dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/dropdown-directive/dropdown-trigger.directive */ "./src/app/common/dropdown-directive/dropdown-trigger.directive.ts");
/* harmony import */ var _workspace_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workspace.routes */ "./src/app/global-layout/workspace/workspace.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var WorkspaceModule = /** @class */ (function () {
    function WorkspaceModule() {
    }
    WorkspaceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_common_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_workspace_routes__WEBPACK_IMPORTED_MODULE_13__["workspaceRoutes"])],
            declarations: [
                _workspace_component__WEBPACK_IMPORTED_MODULE_5__["WorkspaceComponent"],
                _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_3__["TopMenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__["TopbarComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["AppSubMenuComponent"],
                _rightpanel_rightpanel_component__WEBPACK_IMPORTED_MODULE_10__["RightpanelComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _common_dropdown_directive_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
                _common_dropdown_directive_dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_12__["DropdownTriggerDirective"]
            ]
        })
    ], WorkspaceModule);
    return WorkspaceModule;
}());



/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.routes.ts":
/*!*************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.routes.ts ***!
  \*************************************************************/
/*! exports provided: workspaceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workspaceRoutes", function() { return workspaceRoutes; });
/* harmony import */ var _workspace_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");

var workspaceRoutes = [
    {
        path: '',
        component: _workspace_component__WEBPACK_IMPORTED_MODULE_0__["WorkspaceComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: '../../bz-modules/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'inventory',
                loadChildren: '../../bz-modules/inventory/inventory.module#InventoryModule'
            },
            {
                path: 'basic-data',
                loadChildren: '../../bz-modules/basic-data/basic-data.module#BasicDataModule'
            },
            { path: 'sys', loadChildren: '../../bz-modules/sys/sys.module#SysModule' }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=global-layout-workspace-workspace-module.js.map