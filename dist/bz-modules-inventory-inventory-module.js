(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bz-modules-inventory-inventory-module"],{

/***/ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\r\n  <div class=\"col-xs-12 form-bgcolor col-padding\">\r\n    <h3 class=\"text-center\">{{inboundDetail.title}}</h3>\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.receiptNo' | translate}}：</label>\r\n        <p class=\"form-control-static\">{{inboundDetail.receiptNo}}</p>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.waybillNo' | translate}}：</label>\r\n        <p class=\"form-control-static\">{{inboundDetail.waybillNo}}</p>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.inboundTime' | translate}}：</label>\r\n        <p class=\"form-control-static\">{{inboundDetail.inboundTime | date:'yyyy-MM-dd HH:mm:ss'}}</p>\r\n      </div>\r\n    </form>\r\n\r\n    <table class=\"table table-bordered detail-table\">\r\n      <thead>\r\n        <tr>\r\n          <th>{{'inboundAndOutbound.index' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.vendor' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.productName' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.specificat' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.model' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.origin' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.number' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.itemUnit' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.price' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.sum' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.warehouse' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.cellNo' | translate}}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n        <tr *ngFor=\"let item of inboundDetail.items\">\r\n          <th scope=\"row\">{{item.index}}</th>\r\n          <td>{{item.vendor}}</td>\r\n          <td>{{item.itemName}}</td>\r\n          <td>{{item.spec}}</td>\r\n          <td>{{item.model}}</td>\r\n          <td>{{item.producerLocation}}</td>\r\n          <td>{{item.num}}</td>\r\n          <td>{{item.unit}}</td>\r\n          <td>{{item.price}}</td>\r\n          <td>{{item.sum}}</td>\r\n          <td>{{item.warehouse}}</td>\r\n          <td>{{item.storeCell}}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td colspan=\"12\">{{'inboundAndOutbound.totalNum' | translate}}：{{inboundDetail.totalNum}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.handlerName' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{inboundDetail.handlerName}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.acceptor' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{inboundDetail.acceptor}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.deliveryman' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{inboundDetail.deliveryman}}</label>\r\n      </div>\r\n    </form>\r\n\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group col-xs-12\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"returnToTable()\">{{'return' | translate}}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-table {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvaW5ib3VuZC1yZWNlaXB0LWRldGFpbC9FOlxcZ2l0aHViLW15XFxPcGVuV01TXFxPcGVuV01TLUZyb250ZW5kL3NyY1xcYXBwXFxiei1tb2R1bGVzXFxpbnZlbnRvcnlcXGluYm91bmQtcmVjZWlwdC1kZXRhaWxcXGluYm91bmQtcmVjZWlwdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9iei1tb2R1bGVzL2ludmVudG9yeS9pbmJvdW5kLXJlY2VpcHQtZGV0YWlsL2luYm91bmQtcmVjZWlwdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsLXRhYmxle1xyXG4gICAgbWFyZ2luOjE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InboundReceiptDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundReceiptDetailComponent", function() { return InboundReceiptDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_inbound_receipt_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/inbound-receipt-detail.service */ "./src/app/common/services/inbound-receipt-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboundReceiptDetailComponent = /** @class */ (function () {
    function InboundReceiptDetailComponent(router, inboundReceiptDetailService) {
        this.router = router;
        this.inboundReceiptDetailService = inboundReceiptDetailService;
    }
    InboundReceiptDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inboundReceiptDetailService.getInboundDetail().subscribe(function (inboundDetail) {
            _this.inboundDetail = inboundDetail;
        });
    };
    InboundReceiptDetailComponent.prototype.returnToTable = function () {
        this.router.navigateByUrl("/workspace/inventory/inbound-receipt-table/page/1");
    };
    InboundReceiptDetailComponent.prototype.printReceipt = function () {
        window.print();
    };
    InboundReceiptDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "inbound-receipt-detail",
            template: __webpack_require__(/*! ./inbound-receipt-detail.component.html */ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.html"),
            styles: [__webpack_require__(/*! ./inbound-receipt-detail.component.scss */ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_services_inbound_receipt_detail_service__WEBPACK_IMPORTED_MODULE_2__["InboundReceiptDetailService"]])
    ], InboundReceiptDetailComponent);
    return InboundReceiptDetailComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\r\n  <h3 class=\"header-no-margin\">{{'inboundAndOutbound.inboundControl' | translate}}</h3>\r\n  <form class=\"form-inline top-filter-form form-bgcolor col-padding\" role=\"form\">\r\n    <div class=\"form-group btn-margin-1rem\">\r\n      <label>{{'inboundAndOutbound.selectedInventory' | translate}}：</label>\r\n      <p-dropdown [options]=\"warehouses\" optionLabel=\"name\" [(ngModel)]=\"selectedInbentory\" name=\"warehouse\" [style]=\"{'width':'150px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"form-group btn-margin-1rem\">\r\n      <label>{{'inboundAndOutbound.startDate' | translate}}：</label>\r\n      <p-calendar [(ngModel)]=\"startDate\" dateFormat=\"yy-mm-dd\" hourFormat=\"24\" name=\"startDate\"></p-calendar>\r\n    </div>\r\n    <div class=\"form-group btn-margin-1rem\">\r\n      <label>{{'inboundAndOutbound.endDate' | translate}}：</label>\r\n      <p-calendar [(ngModel)]=\"endDate\" dateFormat=\"yy-mm-dd\" hourFormat=\"24\" name=\"endDate\"></p-calendar>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"newReceipt()\">\r\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{'inboundAndOutbound.newInbound' | translate}}\r\n      </button>\r\n    </div>\r\n  </form>\r\n  <div class=\"row no-margin\">\r\n    <div class=\"col-xs-12 form-bgcolor col-padding\">\r\n      <div class=\"user-item-container\">\r\n        <p-dataTable [value]=\"items\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"index\">\r\n          <p-column field=\"index\" header=\"{{'inboundAndOutbound.index' | translate}}\" [sortable]=\"true\" [style]=\"{'width':'80px'}\"></p-column>\r\n          <p-column field=\"warehouseName\" header=\"{{'inboundAndOutbound.warehouseName' | translate}}\" [sortable]=\"true\"></p-column>\r\n          <p-column field=\"receiptNo\" header=\"{{'inboundAndOutbound.receiptNo' | translate}}\" [sortable]=\"true\"></p-column>\r\n          <p-column field=\"waybillNo\" header=\"{{'inboundAndOutbound.waybillNo' | translate}}\" [sortable]=\"true\"></p-column>\r\n          <p-column field=\"enterDate\" header=\"{{'inboundAndOutbound.enterDate' | translate}}\" [sortable]=\"true\"></p-column>\r\n          <p-column header=\"{{'operate' | translate}}\">\r\n              <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"receiptDetail()\">{{'editItem' | translate}}</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\r\n              </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L2luYm91bmQtcmVjZWlwdC10YWJsZS9pbmJvdW5kLXJlY2VpcHQtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: InboundReceiptTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundReceiptTableComponent", function() { return InboundReceiptTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/warehouse.service */ "./src/app/common/services/warehouse.service.ts");
/* harmony import */ var _common_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/category.service */ "./src/app/common/services/category.service.ts");
/* harmony import */ var _common_services_inbound_receipt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/inbound-receipt.service */ "./src/app/common/services/inbound-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InboundReceiptTableComponent = /** @class */ (function () {
    function InboundReceiptTableComponent(router, activeRoute, warehouseService, categoryService, inboundReceiptService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.warehouseService = warehouseService;
        this.categoryService = categoryService;
        this.inboundReceiptService = inboundReceiptService;
    }
    InboundReceiptTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date();
        this.endDate = new Date();
        this.warehouseService.getWarehouses().subscribe(function (warehouses) {
            _this.warehouses = warehouses;
        });
        // this.inboundReceiptService.inboundRecords.subscribe((items) => {
        //   this.items = items;
        // });
        this.inboundReceiptService.getInboundRecords().subscribe(function (items) {
            _this.items = items;
        });
    };
    InboundReceiptTableComponent.prototype.newReceipt = function () {
        this.router.navigateByUrl("/workspace/inventory/new-inbound-receipt/receipt-no/IN-1-333333");
    };
    InboundReceiptTableComponent.prototype.receiptDetail = function () {
        this.router.navigateByUrl("/workspace/inventory/inbound-receipt-detail/receipt-no/IN-1-2222222");
    };
    InboundReceiptTableComponent.prototype.printReceipt = function () {
        window.print();
    };
    InboundReceiptTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "inbound-receipt-table",
            template: __webpack_require__(/*! ./inbound-receipt-table.component.html */ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.html"),
            styles: [__webpack_require__(/*! ./inbound-receipt-table.component.scss */ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseService"],
            _common_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _common_services_inbound_receipt_service__WEBPACK_IMPORTED_MODULE_4__["InboundReceiptService"]])
    ], InboundReceiptTableComponent);
    return InboundReceiptTableComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"header-no-margin margin-bottom-1rem\">\r\n  {{ \"inventoryControl.inventoryDetails\" | translate }}---iPhone X\r\n</h3>\r\n<p-tabView>\r\n  <p-tabPanel header=\"{{ 'inventoryControl.inventoryCurve' | translate }}\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Default button group\">\r\n      <button type=\"button\" class=\"btn btn-primary\">\r\n        {{ \"inventoryControl.week\" | translate }}\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-primary\">\r\n        {{ \"inventoryControl.month\" | translate }}\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-primary\">\r\n        {{ \"inventoryControl.quarter\" | translate }}\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-primary\">\r\n        {{ \"inventoryControl.year\" | translate }}\r\n      </button>\r\n    </div>\r\n<div class=\"chart-container\" >\r\n  <div\r\n  echarts\r\n  [options]=\"options\"\r\n  class=\"nf-chart\"\r\n  #line\r\n></div>\r\n</div>\r\n\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"{{ 'inventoryControl.summary' | translate }}\">\r\n    <form class=\"form-horizontal\">\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.warehouse\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\">\r\n          <p class=\"form-control-static\">京东南京一号仓</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.StorageLocation\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\">\r\n          <p class=\"form-control-static\">A1001、A1002</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.category\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\">\r\n          <p class=\"form-control-static\">消费电子产品</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"h-divider\"></div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.productName\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">iPhone-X</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.barCode\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\">\r\n          <p class=\"form-control-static\">0x0010abcd</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.model\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">A1661</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.specificat\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\">\r\n          <p class=\"form-control-static\">\r\n            全面屏，黑色，重量500g，20cm×20cm×20cm\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.vendor\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">Apple</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.origin\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\">\r\n          <p class=\"form-control-static\">深圳富士康龙华科技园</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.shelfLife\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">18个月</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.breakable\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">是</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.perishable\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">是</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.productDetail\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\">\r\n          <p class=\"form-control-static\">这里是关于商品的各种具体描述</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"h-divider\"></div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.pickStrategy\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">FIFO</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.bookInventory\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">1000个</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.realInventory\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">999个</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.variance\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">-1个</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.maxInventory\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">5000个</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.minInventory\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">100个</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.itemUnit\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">个</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.unitPrice\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">2000元</p></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-xs-3 control-label\"\r\n          >{{ \"inventoryControl.inventorySum\" | translate }}：</label\r\n        >\r\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">200万元</p></div>\r\n      </div>\r\n    </form>\r\n  </p-tabPanel>\r\n</p-tabView>\r\n<form class=\"form-horizontal\">\r\n  <div class=\"form-bgcolor col-padding \">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-primary btn-margin-1rem\"\r\n      (click)=\"backToList()\"\r\n    >\r\n      {{ \"return\" | translate }}\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"printBill()\">\r\n      {{ \"print\" | translate }}\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-divider {\n  width: 100%;\n  height: 0px;\n  border: 0.5px solid #ccc; }\n\n.chart-container {\n  position: relative;\n  width: 100%;\n  height: 485px;\n  margin-top: 30px;\n  background-color: #fff;\n  padding-top: 15px; }\n\n:host /deep/ .ui-widget {\n  padding: 1rem; }\n\n.btn-group {\n  position: relative;\n  left: -.9rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvaW52ZW50b3J5LWl0ZW0tZGV0YWlsL0U6XFxnaXRodWItbXlcXE9wZW5XTVNcXE9wZW5XTVMtRnJvbnRlbmQvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGludmVudG9yeVxcaW52ZW50b3J5LWl0ZW0tZGV0YWlsXFxpbnZlbnRvcnktaXRlbS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFVO0VBQ1YsWUFBVTtFQUNWLHlCQUF1QixFQUMxQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L2ludmVudG9yeS1pdGVtLWRldGFpbC9pbnZlbnRvcnktaXRlbS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaC1kaXZpZGVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDowcHg7XHJcbiAgICBib3JkZXI6MC41cHggc29saWQgI2NjYztcclxufVxyXG4uY2hhcnQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0ODVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLy51aS13aWRnZXR7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uYnRuLWdyb3Vwe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0Oi0uOXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: InventoryItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryItemDetailComponent", function() { return InventoryItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/_echarts@3.8.5@echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_color_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/color.util */ "./src/app/utils/color.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryItemDetailComponent = /** @class */ (function () {
    function InventoryItemDetailComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.options = {
            title: {
                text: '库存变化曲线',
                subtext: '纯属虚构',
                x: "center"
            },
            tooltip: {
                trigger: 'axis'
            },
            color: _utils_color_util__WEBPACK_IMPORTED_MODULE_3__["default"].baseColor,
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            series: [
                {
                    name: '入库',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
                },
                {
                    name: '出库',
                    type: 'line',
                    data: [110, 110, 150, 130, 120, 130, 100, 1230, 1000, 990, 660, 1990]
                },
                {
                    name: '进库',
                    type: 'line',
                    data: [210, 310, 250, 230, 220, 230, 200, 230, 1500, 990, 660, 590]
                },
                {
                    name: '库1',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库2',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库3',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库4',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库5',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库6',
                    type: 'line',
                    data: [510, 370, 290, 390, 420, 230, 300, 830, 600, 590, 760, 1590]
                }
            ]
        };
    }
    InventoryItemDetailComponent.prototype.ngOnInit = function () {
        this.lineEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.line.nativeElement);
        this.lineEchart.setOption(this.options);
    };
    InventoryItemDetailComponent.prototype.backToList = function () {
        this.router.navigateByUrl('/workspace/inventory/inventory-table/page/1');
    };
    InventoryItemDetailComponent.prototype.printBill = function () {
        window.print();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('line'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InventoryItemDetailComponent.prototype, "line", void 0);
    InventoryItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-item-detail',
            template: __webpack_require__(/*! ./inventory-item-detail.component.html */ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.html"),
            styles: [__webpack_require__(/*! ./inventory-item-detail.component.scss */ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], InventoryItemDetailComponent);
    return InventoryItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-table/inventory-table.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\r\n  <p-confirmDialog\r\n    header=\"{{ 'confirm' | translate }}\"\r\n    icon=\"fa fa-question-circle\"\r\n    #cd\r\n  >\r\n    <p-footer>\r\n      <button\r\n        type=\"button\"\r\n        icon=\"fa-check\"\r\n        class=\"btn btn-primary btn-margin-1rem\"\r\n        (click)=\"cd.accept()\"\r\n      >\r\n        {{ \"accept\" | translate }}\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        icon=\"fa-close\"\r\n        class=\"btn btn-default\"\r\n        (click)=\"cd.reject()\"\r\n      >\r\n        {{ \"reject\" | translate }}\r\n      </button>\r\n    </p-footer>\r\n  </p-confirmDialog>\r\n\r\n  <h3 class=\"header-no-margin\">\r\n    {{ \"inventoryControl.inventoryControl\" | translate }}\r\n  </h3>\r\n  <form class=\"form-inline top-filter-form form-bgcolor\" role=\"form\">\r\n    <div class=\"form-group btn-margin-1rem\">\r\n      <label>{{ \"inventoryControl.selectedInventory\" | translate }}：</label>\r\n      <p-dropdown\r\n        [options]=\"warehouses\"\r\n        optionLabel=\"name\"\r\n        [(ngModel)]=\"selectedInbentory\"\r\n        name=\"warehouse\"\r\n        [style]=\"{ width: '150px' }\"\r\n      ></p-dropdown>\r\n    </div>\r\n    <div class=\"form-group btn-margin-1rem\">\r\n      <label>{{ \"inventoryControl.selectedCategory\" | translate }}：</label>\r\n      <p-dropdown\r\n        [options]=\"categories\"\r\n        optionLabel=\"name\"\r\n        [(ngModel)]=\"selectedCategory\"\r\n        name=\"category\"\r\n        [style]=\"{ width: '150px' }\"\r\n      ></p-dropdown>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control\" />\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-primary\" type=\"button\">\r\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"row no-margin\">\r\n    <div class=\"col-xs-12 form-bgcolor col-padding\">\r\n      <div class=\"user-item-container\">\r\n        <p-dataTable [value]=\"items\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"index\"> -->\r\n        <!-- <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\" field=\"index\"></p-column> -->\r\n         <p-column field=\"index\" header=\"{{'inventoryControl.index' | translate}}\" [sortable]=\"true\" ></p-column>\r\n                    <p-column field=\"itemName\" header=\"{{'inventoryControl.itemName' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column field=\"itemUnit\" header=\"{{'inventoryControl.itemUnit' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column field=\"bookInventory\" header=\"{{'inventoryControl.bookInventory' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column field=\"realInventory\" header=\"{{'inventoryControl.realInventory' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column field=\"diffInventory\" header=\"{{'inventoryControl.diffInventory' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column field=\"costPrice\" header=\"{{'inventoryControl.costPrice' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column field=\"total\" header=\"{{'inventoryControl.total' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column field=\"warehouseName\" header=\"{{'inventoryControl.warehouseName' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column field=\"cellNo\" header=\"{{'inventoryControl.cellNo' | translate}}\" [sortable]=\"true\"></p-column>\r\n                    <p-column header=\"{{'operate' | translate}}\">\r\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"editItem(item)\">{{'editItem' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"delItem(item)\">{{'delItem' | translate}}</button>\r\n                        </ng-template>\r\n                    </p-column>\r\n        </p-dataTable>\r\n        <!-- <p-table\r\n          [columns]=\"cols\"\r\n          [rows]=\"10\"\r\n          [paginator]=\"true\"\r\n          [value]=\"items\"\r\n          [responsive]=\"true\"\r\n        >\r\n          <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n              <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" >\r\n                {{ col.header }}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n              <td *ngFor=\"let col of columns\">\r\n                {{rowData[col.field]}}\r\n              </td>\r\n            </tr>\r\n         </ng-template>\r\n        </p-table> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-table/inventory-table.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-item-container /deep/ table thead tr th:last-child {\n  width: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvaW52ZW50b3J5LXRhYmxlL0U6XFxnaXRodWItbXlcXE9wZW5XTVNcXE9wZW5XTVMtRnJvbnRlbmQvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGludmVudG9yeVxcaW52ZW50b3J5LXRhYmxlXFxpbnZlbnRvcnktdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRyxXQUNELEVBQUMiLCJmaWxlIjoic3JjL2FwcC9iei1tb2R1bGVzL2ludmVudG9yeS9pbnZlbnRvcnktdGFibGUvaW52ZW50b3J5LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaXRlbS1jb250YWluZXIgL2RlZXAvIHtcclxuICB0YWJsZSB0aGVhZCB0ciB0aDpsYXN0LWNoaWxke1xyXG4gICB3aWR0aDoxNSVcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-table/inventory-table.component.ts ***!
  \***********************************************************************************/
/*! exports provided: InventoryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryTableComponent", function() { return InventoryTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/_primeng@6.1.7@primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/_primeng@6.1.7@primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/warehouse.service */ "./src/app/common/services/warehouse.service.ts");
/* harmony import */ var _common_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/category.service */ "./src/app/common/services/category.service.ts");
/* harmony import */ var _common_services_inventory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/inventory.service */ "./src/app/common/services/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InventoryTableComponent = /** @class */ (function () {
    function InventoryTableComponent(router, activeRoute, confirmationService, messageService, warehouseService, categoryService, inventoryService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.warehouseService = warehouseService;
        this.categoryService = categoryService;
        this.inventoryService = inventoryService;
    }
    InventoryTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date();
        this.endDate = new Date();
        this.cols = [
            { field: 'index', header: 'index' },
            { field: 'itemName', header: 'itemName' },
            { field: 'bookInventory', header: 'bookInventory' },
            { field: 'realInventory', header: 'realInventory' },
            { field: 'diffInventory', header: 'diffInventory' },
            { field: 'costPrice', header: 'costPrice' },
            { field: 'total', header: 'total' },
            { field: 'warehouseName', header: 'warehouseName' },
            { field: 'cellNo', header: 'cellNo' },
            { field: 'warehouseName', header: 'warehouseName' },
        ];
        this.warehouseService.getWarehouses().subscribe(function (warehouses) {
            _this.warehouses = warehouses;
        });
        this.categoryService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
        this.inventoryService.getInventories("-1").subscribe(function (items) {
            _this.items = items;
        });
    };
    InventoryTableComponent.prototype.editItem = function (item) {
        console.log(item);
        this.router.navigateByUrl('/workspace/inventory/inventory-item-detail/item-id/1111');
    };
    InventoryTableComponent.prototype.delItem = function (item) {
        var _this = this;
        console.log(item);
        this.confirmationService.confirm({
            message: '确定要删除吗？',
            accept: function () {
                console.log(item);
                _this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
            }
        });
    };
    InventoryTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-table',
            template: __webpack_require__(/*! ./inventory-table.component.html */ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.html"),
            styles: [__webpack_require__(/*! ./inventory-table.component.scss */ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseService"],
            _common_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _common_services_inventory_service__WEBPACK_IMPORTED_MODULE_6__["InventoryService"]])
    ], InventoryTableComponent);
    return InventoryTableComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.component.html":
/*!***************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.component.ts ***!
  \*************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
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

var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/bz-modules/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/bz-modules/inventory/inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.module.ts ***!
  \**********************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/datatable/datatable */ "./node_modules/_primeng@6.1.7@primeng/components/datatable/datatable.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/calendar/calendar */ "./node_modules/_primeng@6.1.7@primeng/components/calendar/calendar.js");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/dropdown/dropdown */ "./node_modules/_primeng@6.1.7@primeng/components/dropdown/dropdown.js");
/* harmony import */ var primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/tabview/tabview */ "./node_modules/_primeng@6.1.7@primeng/components/tabview/tabview.js");
/* harmony import */ var primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory.component */ "./src/app/bz-modules/inventory/inventory.component.ts");
/* harmony import */ var _inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory-table/inventory-table.component */ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.ts");
/* harmony import */ var _inventory_item_detail_inventory_item_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inventory-item-detail/inventory-item-detail.component */ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.ts");
/* harmony import */ var _inbound_receipt_table_inbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inbound-receipt-table/inbound-receipt-table.component */ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.ts");
/* harmony import */ var _inbound_receipt_detail_inbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inbound-receipt-detail/inbound-receipt-detail.component */ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.ts");
/* harmony import */ var _outbound_receipt_table_outbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./outbound-receipt-table/outbound-receipt-table.component */ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.ts");
/* harmony import */ var _outbound_receipt_detail_outbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./outbound-receipt-detail/outbound-receipt-detail.component */ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.ts");
/* harmony import */ var _new_inbound_receipt_new_inbound_receipt_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-inbound-receipt/new-inbound-receipt.component */ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.ts");
/* harmony import */ var _common_services_inventory_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/services/inventory.service */ "./src/app/common/services/inventory.service.ts");
/* harmony import */ var _new_outbound_receipt_new_outbound_receipt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./new-outbound-receipt/new-outbound-receipt.component */ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.ts");
/* harmony import */ var _inventory_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inventory.routes */ "./src/app/bz-modules/inventory/inventory.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _common_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_inventory_routes__WEBPACK_IMPORTED_MODULE_17__["inventoryRoutes"])
            ],
            declarations: [
                _inventory_component__WEBPACK_IMPORTED_MODULE_7__["InventoryComponent"],
                _inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_8__["InventoryTableComponent"],
                _inventory_item_detail_inventory_item_detail_component__WEBPACK_IMPORTED_MODULE_9__["InventoryItemDetailComponent"],
                _inbound_receipt_table_inbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_10__["InboundReceiptTableComponent"],
                _inbound_receipt_detail_inbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_11__["InboundReceiptDetailComponent"],
                _outbound_receipt_table_outbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_12__["OutboundReceiptTableComponent"],
                _outbound_receipt_detail_outbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_13__["OutboundReceiptDetailComponent"],
                _new_inbound_receipt_new_inbound_receipt_component__WEBPACK_IMPORTED_MODULE_14__["NewInboundReceiptComponent"],
                _new_outbound_receipt_new_outbound_receipt_component__WEBPACK_IMPORTED_MODULE_16__["NewOutboundReceiptComponent"]
            ],
            providers: [
                _common_services_inventory_service__WEBPACK_IMPORTED_MODULE_15__["InventoryService"]
            ]
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.routes.ts":
/*!**********************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.routes.ts ***!
  \**********************************************************/
/*! exports provided: inventoryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventoryRoutes", function() { return inventoryRoutes; });
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.component */ "./src/app/bz-modules/inventory/inventory.component.ts");
/* harmony import */ var _inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-table/inventory-table.component */ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.ts");
/* harmony import */ var _inventory_item_detail_inventory_item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory-item-detail/inventory-item-detail.component */ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.ts");
/* harmony import */ var _inbound_receipt_table_inbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbound-receipt-table/inbound-receipt-table.component */ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.ts");
/* harmony import */ var _inbound_receipt_detail_inbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbound-receipt-detail/inbound-receipt-detail.component */ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.ts");
/* harmony import */ var _outbound_receipt_table_outbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outbound-receipt-table/outbound-receipt-table.component */ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.ts");
/* harmony import */ var _outbound_receipt_detail_outbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outbound-receipt-detail/outbound-receipt-detail.component */ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.ts");
/* harmony import */ var _new_inbound_receipt_new_inbound_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-inbound-receipt/new-inbound-receipt.component */ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.ts");
/* harmony import */ var _new_outbound_receipt_new_outbound_receipt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-outbound-receipt/new-outbound-receipt.component */ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.ts");









var inventoryRoutes = [{
        path: '',
        component: _inventory_component__WEBPACK_IMPORTED_MODULE_0__["InventoryComponent"],
        children: [
            { path: '', redirectTo: 'inventorytable/page/1', pathMatch: 'full' },
            { path: 'inventory-table/page/:page', component: _inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_1__["InventoryTableComponent"] },
            { path: 'inventory-item-detail/item-id/:item-id', component: _inventory_item_detail_inventory_item_detail_component__WEBPACK_IMPORTED_MODULE_2__["InventoryItemDetailComponent"] },
            { path: 'inbound-receipt-table/page/:page', component: _inbound_receipt_table_inbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_3__["InboundReceiptTableComponent"] },
            { path: 'inbound-receipt-detail/receipt-no/:receipt-no', component: _inbound_receipt_detail_inbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_4__["InboundReceiptDetailComponent"] },
            { path: 'new-inbound-receipt/receipt-no/:receipt-no', component: _new_inbound_receipt_new_inbound_receipt_component__WEBPACK_IMPORTED_MODULE_7__["NewInboundReceiptComponent"] },
            { path: 'outbound-receipt-table/page/:page', component: _outbound_receipt_table_outbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_5__["OutboundReceiptTableComponent"] },
            { path: 'outbound-receipt-detail/receipt-no/:receipt-no', component: _outbound_receipt_detail_outbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_6__["OutboundReceiptDetailComponent"] },
            { path: 'new-outbound-receipt/receipt-no/:receipt-no', component: _new_outbound_receipt_new_outbound_receipt_component__WEBPACK_IMPORTED_MODULE_8__["NewOutboundReceiptComponent"] }
        ]
    }];


/***/ }),

/***/ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\r\n  <div class=\"col-xs-12 form-bgcolor col-padding\">\r\n    <h3 class=\"text-center\">{{inboundDetail.title}}</h3>\r\n    <form class=\"form-inline form-bgcolor\">\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.receiptNo' | translate}}：</label>\r\n        <p class=\"form-control-static\">{{inboundDetail.receiptNo}}</p>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.waybillNo' | translate}}：</label>\r\n        <p class=\"form-control-static\">{{inboundDetail.waybillNo}}</p>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.inboundTime' | translate}}：</label>\r\n        <p class=\"form-control-static\">{{inboundDetail.inboundTime | date:'yyyy-MM-dd HH:mm:ss'}}</p>\r\n      </div>\r\n    </form>\r\n\r\n    <table class=\"table table-bordered detail-table\">\r\n      <thead>\r\n        <tr>\r\n          <th>{{'inboundAndOutbound.index' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.vendor' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.productName' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.specificat' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.model' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.origin' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.number' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.itemUnit' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.price' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.sum' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.warehouse' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.cellNo' | translate}}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of inboundDetail.items\">\r\n          <th scope=\"row\">{{item.index}}</th>\r\n          <td>{{item.vendor}}</td>\r\n          <td>{{item.itemName}}</td>\r\n          <td>{{item.spec}}</td>\r\n          <td>{{item.model}}</td>\r\n          <td>{{item.producerLocation}}</td>\r\n          <td>{{item.num}}</td>\r\n          <td>{{item.unit}}</td>\r\n          <td>{{item.price}}</td>\r\n          <td>{{item.sum}}</td>\r\n          <td>{{item.warehouse}}</td>\r\n          <td>{{item.storeCell}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"12\">请扫描货品</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.handlerName' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{inboundDetail.handlerName}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.acceptor' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{inboundDetail.acceptor}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.deliveryman' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{inboundDetail.deliveryman}}</label>\r\n      </div>\r\n    </form>\r\n\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group col-xs-12\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"returnToTable()\">{{'return' | translate}}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-table {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvbmV3LWluYm91bmQtcmVjZWlwdC9FOlxcZ2l0aHViLW15XFxPcGVuV01TXFxPcGVuV01TLUZyb250ZW5kL3NyY1xcYXBwXFxiei1tb2R1bGVzXFxpbnZlbnRvcnlcXG5ldy1pbmJvdW5kLXJlY2VpcHRcXG5ldy1pbmJvdW5kLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9iei1tb2R1bGVzL2ludmVudG9yeS9uZXctaW5ib3VuZC1yZWNlaXB0L25ldy1pbmJvdW5kLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsLXRhYmxle1xyXG4gICAgbWFyZ2luOjE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewInboundReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInboundReceiptComponent", function() { return NewInboundReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_new_inbound_receipt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/new-inbound-receipt.service */ "./src/app/common/services/new-inbound-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewInboundReceiptComponent = /** @class */ (function () {
    function NewInboundReceiptComponent(router, newInboundReceiptService) {
        this.router = router;
        this.newInboundReceiptService = newInboundReceiptService;
    }
    NewInboundReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newInboundReceiptService.getInboundDetail().subscribe(function (inboundDetail) {
            _this.inboundDetail = inboundDetail;
        });
    };
    NewInboundReceiptComponent.prototype.returnToTable = function () {
        this.router.navigateByUrl('/workspace/inventory/inbound-receipt-table/page/1');
    };
    NewInboundReceiptComponent.prototype.printReceipt = function () {
        window.print();
    };
    NewInboundReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-inbound-receipt',
            template: __webpack_require__(/*! ./new-inbound-receipt.component.html */ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.html"),
            styles: [__webpack_require__(/*! ./new-inbound-receipt.component.scss */ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_new_inbound_receipt_service__WEBPACK_IMPORTED_MODULE_2__["NewInboundReceiptService"]])
    ], NewInboundReceiptComponent);
    return NewInboundReceiptComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\r\n    <div class=\"col-xs-12 form-bgcolor col-padding\">\r\n      <h3 class=\"text-center\">{{outboundDetail.title}}</h3>\r\n      <form class=\"form-inline\">\r\n        <div class=\"form-group col-xs-3\">\r\n          <label class=\"control-label\">{{'inboundAndOutbound.warehouse' | translate}}：</label>\r\n          <label class=\"form-control-static\">{{outboundDetail.warehouseName}}</label>\r\n        </div>\r\n        <div class=\"form-group col-xs-3\">\r\n          <label class=\"control-label\">{{'inboundAndOutbound.outReceiptNo' | translate}}：</label>\r\n          <label class=\"form-control-static\">{{outboundDetail.receiptNo}}</label>\r\n        </div>\r\n        <div class=\"form-group col-xs-3\">\r\n          <label class=\"control-label\">{{'inboundAndOutbound.waybillNo' | translate}}：</label>\r\n          <label class=\"form-control-static\">{{outboundDetail.waybillNo}}</label>\r\n        </div>\r\n        <div class=\"form-group col-xs-3\">\r\n          <label class=\"control-label\">{{'inboundAndOutbound.outboundTime' | translate}}：</label>\r\n          <label class=\"form-control-static\">{{outboundDetail.outboundTime | date:'yyyy-MM-dd HH:mm:ss'}}</label>\r\n        </div>\r\n      </form>\r\n\r\n      <table class=\"table table-bordered detail-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>{{'inboundAndOutbound.index' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.receiver' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.productName' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.specificat' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.model' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.origin' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.number' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.itemUnit' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.price' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.sum' | translate}}</th>\r\n            <th>{{'inboundAndOutbound.cellNo' | translate}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of outboundDetail.items\">\r\n            <th scope=\"row\">{{item.index}}</th>\r\n            <td>{{item.receiver}}</td>\r\n            <td>{{item.itemName}}</td>\r\n            <td>{{item.spec}}</td>\r\n            <td>{{item.model}}</td>\r\n            <td>{{item.producerLocation}}</td>\r\n            <td>{{item.num}}</td>\r\n            <td>{{item.unit}}</td>\r\n            <td>{{item.price}}</td>\r\n            <td>{{item.sum}}</td>\r\n            <td>{{item.storeCell}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"12\">请扫描货品</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <form class=\"form-inline\">\r\n        <div class=\"form-group col-xs-4\">\r\n          <label>{{'inboundAndOutbound.handlerName' | translate}}：</label>\r\n          <label class=\"form-control-static\">{{outboundDetail.handlerName}}</label>\r\n        </div>\r\n        <div class=\"form-group col-xs-4\">\r\n          <label>{{'inboundAndOutbound.acceptor' | translate}}：</label>\r\n          <label class=\"form-control-static\">{{outboundDetail.acceptor}}</label>\r\n        </div>\r\n        <div class=\"form-group col-xs-4\">\r\n          <label>{{'inboundAndOutbound.deliveryman' | translate}}：</label>\r\n          <label class=\"form-control-static\">{{outboundDetail.deliveryman}}</label>\r\n        </div>\r\n      </form>\r\n\r\n      <form class=\"form-inline\">\r\n        <div class=\"form-group col-xs-12\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-margin-1rem \" (click)=\"returnToTable()\">{{'return' | translate}}</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-table {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvbmV3LW91dGJvdW5kLXJlY2VpcHQvRTpcXGdpdGh1Yi1teVxcT3BlbldNU1xcT3BlbldNUy1Gcm9udGVuZC9zcmNcXGFwcFxcYnotbW9kdWxlc1xcaW52ZW50b3J5XFxuZXctb3V0Ym91bmQtcmVjZWlwdFxcbmV3LW91dGJvdW5kLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9iei1tb2R1bGVzL2ludmVudG9yeS9uZXctb3V0Ym91bmQtcmVjZWlwdC9uZXctb3V0Ym91bmQtcmVjZWlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtdGFibGV7XHJcbiAgICBtYXJnaW46MTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NewOutboundReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOutboundReceiptComponent", function() { return NewOutboundReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_new_outbound_receipt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/new-outbound-receipt.service */ "./src/app/common/services/new-outbound-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewOutboundReceiptComponent = /** @class */ (function () {
    function NewOutboundReceiptComponent(router, newOutboundReceiptService) {
        this.router = router;
        this.newOutboundReceiptService = newOutboundReceiptService;
    }
    NewOutboundReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newOutboundReceiptService.getOutboundDetail().subscribe(function (outboundDetail) {
            _this.outboundDetail = outboundDetail;
        });
    };
    NewOutboundReceiptComponent.prototype.returnToTable = function () {
        this.router.navigateByUrl('/workspace/inventory/outbound-receipt-table/page/1');
    };
    NewOutboundReceiptComponent.prototype.printReceipt = function () {
        window.print();
    };
    NewOutboundReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-outbound-receipt',
            template: __webpack_require__(/*! ./new-outbound-receipt.component.html */ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.html"),
            styles: [__webpack_require__(/*! ./new-outbound-receipt.component.scss */ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_new_outbound_receipt_service__WEBPACK_IMPORTED_MODULE_2__["NewOutboundReceiptService"]])
    ], NewOutboundReceiptComponent);
    return NewOutboundReceiptComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\r\n  <div class=\"col-xs-12 form-bgcolor col-padding\">\r\n    <h3 class=\"text-center\">{{outboundDetail.title}}</h3>\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group col-xs-3\">\r\n        <label class=\"control-label\">{{'inboundAndOutbound.warehouse' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{outboundDetail.warehouseName}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-3\">\r\n        <label class=\"control-label\">{{'inboundAndOutbound.outReceiptNo' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{outboundDetail.receiptNo}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-3\">\r\n        <label class=\"control-label\">{{'inboundAndOutbound.waybillNo' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{outboundDetail.waybillNo}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-3\">\r\n        <label class=\"control-label\">{{'inboundAndOutbound.outboundTime' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{outboundDetail.outboundTime | date:'yyyy-MM-dd HH:mm:ss'}}</label>\r\n      </div>\r\n    </form>\r\n\r\n    <table class=\"table table-bordered detail-table\">\r\n      <thead>\r\n        <tr>\r\n          <th>{{'inboundAndOutbound.index' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.receiver' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.productName' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.specificat' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.model' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.origin' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.number' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.itemUnit' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.price' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.sum' | translate}}</th>\r\n          <th>{{'inboundAndOutbound.cellNo' | translate}}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of outboundDetail.items\">\r\n          <th scope=\"row\">{{item.index}}</th>\r\n          <td>{{item.receiver}}</td>\r\n          <td>{{item.itemName}}</td>\r\n          <td>{{item.spec}}</td>\r\n          <td>{{item.model}}</td>\r\n          <td>{{item.producerLocation}}</td>\r\n          <td>{{item.num}}</td>\r\n          <td>{{item.unit}}</td>\r\n          <td>{{item.price}}</td>\r\n          <td>{{item.sum}}</td>\r\n          <td>{{item.storeCell}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"12\">{{'inboundAndOutbound.totalNum' | translate}}：{{outboundDetail.totalNum}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.handlerName' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{outboundDetail.handlerName}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.acceptor' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{outboundDetail.acceptor}}</label>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\">\r\n        <label>{{'inboundAndOutbound.deliveryman' | translate}}：</label>\r\n        <label class=\"form-control-static\">{{outboundDetail.deliveryman}}</label>\r\n      </div>\r\n    </form>\r\n\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group col-xs-12\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"returnToTable()\">{{'return' | translate}}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-table {\n  margin: 15px; }\n  .detail-table th,\n  .detail-table td {\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvb3V0Ym91bmQtcmVjZWlwdC1kZXRhaWwvRTpcXGdpdGh1Yi1teVxcT3BlbldNU1xcT3BlbldNUy1Gcm9udGVuZC9zcmNcXGFwcFxcYnotbW9kdWxlc1xcaW52ZW50b3J5XFxvdXRib3VuZC1yZWNlaXB0LWRldGFpbFxcb3V0Ym91bmQtcmVjZWlwdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBS2I7RUFORDs7SUFJSSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9iei1tb2R1bGVzL2ludmVudG9yeS9vdXRib3VuZC1yZWNlaXB0LWRldGFpbC9vdXRib3VuZC1yZWNlaXB0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtdGFibGUge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB0aCxcclxuICB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OutboundReceiptDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundReceiptDetailComponent", function() { return OutboundReceiptDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_outbound_receipt_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/outbound-receipt-detail.service */ "./src/app/common/services/outbound-receipt-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutboundReceiptDetailComponent = /** @class */ (function () {
    function OutboundReceiptDetailComponent(router, outboundReceiptDetailService) {
        this.router = router;
        this.outboundReceiptDetailService = outboundReceiptDetailService;
    }
    OutboundReceiptDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outboundReceiptDetailService.getOutboundDetail().subscribe(function (outboundDetail) {
            _this.outboundDetail = outboundDetail;
        });
    };
    OutboundReceiptDetailComponent.prototype.returnToTable = function () {
        this.router.navigateByUrl("/workspace/inventory/outbound-receipt-table/page/1");
    };
    OutboundReceiptDetailComponent.prototype.printReceipt = function () {
        window.print();
    };
    OutboundReceiptDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "outbound-receipt-detail",
            template: __webpack_require__(/*! ./outbound-receipt-detail.component.html */ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.html"),
            styles: [__webpack_require__(/*! ./outbound-receipt-detail.component.scss */ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_services_outbound_receipt_detail_service__WEBPACK_IMPORTED_MODULE_2__["OutboundReceiptDetailService"]])
    ], OutboundReceiptDetailComponent);
    return OutboundReceiptDetailComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\r\n  <h3 class=\"header-no-margin\">{{'inboundAndOutbound.outboundControl' | translate}}</h3>\r\n  <form class=\"form-inline top-filter-form form-bgcolor\" role=\"form\">\r\n    <div class=\"form-group btn-margin-1rem\">\r\n      <label>{{'inboundAndOutbound.selectedInventory' | translate}}：</label>\r\n      <p-dropdown [options]=\"warehouses\" optionLabel=\"name\" [(ngModel)]=\"selectedInbentory\" name=\"warehouse\" [style]=\"{'width':'150px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"form-group btn-margin-1rem\">\r\n      <label>{{'inboundAndOutbound.startDate' | translate}}：</label>\r\n      <p-calendar [(ngModel)]=\"startDate\" dateFormat=\"yy-mm-dd\" hourFormat=\"24\" name=\"startDate\"></p-calendar>\r\n    </div>\r\n    <div class=\"form-group btn-margin-1rem\">\r\n      <label>{{'inboundAndOutbound.endDate' | translate}}：</label>\r\n      <p-calendar [(ngModel)]=\"endDate\" dateFormat=\"yy-mm-dd\" hourFormat=\"24\" name=\"endDate\"></p-calendar>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"newReceipt()\">\r\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{'inboundAndOutbound.newOutbound' | translate}}\r\n      </button>\r\n    </div>\r\n  </form>\r\n  <div class=\"row no-margin\">\r\n    <div class=\"col-xs-12 form-bgcolor col-padding \">\r\n      <div class=\"user-item-container\">\r\n        <p-dataTable [value]=\"items\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"index\">\r\n          <p-column field=\"index\" header=\"{{'inboundAndOutbound.index' | translate}}\" [sortable]=\"true\" [style]=\"{'width':'80px'}\"></p-column>\r\n          <p-column field=\"warehouseName\" header=\"{{'inboundAndOutbound.warehouseName' | translate}}\"></p-column>\r\n          <p-column field=\"receiptNo\" header=\"{{'inboundAndOutbound.outReceiptNo' | translate}}\" [sortable]=\"true\"></p-column>\r\n          <p-column field=\"waybillNo\" header=\"{{'inboundAndOutbound.waybillNo' | translate}}\" [sortable]=\"true\"></p-column>\r\n          <p-column field=\"enterDate\" header=\"{{'inboundAndOutbound.outDate' | translate}}\" [sortable]=\"true\"></p-column>\r\n          <p-column header=\"{{'operate' | translate}}\">\r\n            <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"receiptDetail()\">{{'editItem' | translate}}</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L291dGJvdW5kLXJlY2VpcHQtdGFibGUvb3V0Ym91bmQtcmVjZWlwdC10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: OutboundReceiptTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundReceiptTableComponent", function() { return OutboundReceiptTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.0.4@@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/warehouse.service */ "./src/app/common/services/warehouse.service.ts");
/* harmony import */ var _common_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/category.service */ "./src/app/common/services/category.service.ts");
/* harmony import */ var _common_services_outbound_receipt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/outbound-receipt.service */ "./src/app/common/services/outbound-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OutboundReceiptTableComponent = /** @class */ (function () {
    function OutboundReceiptTableComponent(router, activeRoute, warehouseService, categoryService, outboundReceiptService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.warehouseService = warehouseService;
        this.categoryService = categoryService;
        this.outboundReceiptService = outboundReceiptService;
    }
    OutboundReceiptTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date();
        this.endDate = new Date();
        this.warehouseService.getWarehouses().subscribe(function (warehouses) {
            _this.warehouses = warehouses;
        });
        this.outboundReceiptService.getOutboundRecords().subscribe(function (items) {
            _this.items = items;
        });
    };
    OutboundReceiptTableComponent.prototype.newReceipt = function () {
        this.router.navigateByUrl('/workspace/inventory/new-outbound-receipt/receipt-no/IN-1-2222222');
    };
    OutboundReceiptTableComponent.prototype.receiptDetail = function () {
        this.router.navigateByUrl('/workspace/inventory/outbound-receipt-detail/receipt-no/IN-1-2222222');
    };
    OutboundReceiptTableComponent.prototype.printReceipt = function () {
        window.print();
    };
    OutboundReceiptTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outbound-receipt-table',
            template: __webpack_require__(/*! ./outbound-receipt-table.component.html */ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.html"),
            styles: [__webpack_require__(/*! ./outbound-receipt-table.component.scss */ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseService"],
            _common_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _common_services_outbound_receipt_service__WEBPACK_IMPORTED_MODULE_4__["OutboundReceiptService"]])
    ], OutboundReceiptTableComponent);
    return OutboundReceiptTableComponent;
}());



/***/ }),

/***/ "./src/app/common/services/inventory.service.ts":
/*!******************************************************!*\
  !*** ./src/app/common/services/inventory.service.ts ***!
  \******************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.0.4@@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-service */ "./src/app/common/services/common-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InventoryService = /** @class */ (function (_super) {
    __extends(InventoryService, _super);
    function InventoryService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InventoryService.prototype.getInventories = function (warehouseId) {
        return this.hc.get(this.apiURL.inventories);
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], InventoryService);
    return InventoryService;
}(_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]));



/***/ })

}]);
//# sourceMappingURL=bz-modules-inventory-inventory-module.js.map