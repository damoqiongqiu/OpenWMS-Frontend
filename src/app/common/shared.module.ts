import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxEchartsModule } from 'ngx-echarts';
import { ConfirmDialogModule, ConfirmationService, ScrollPanelModule, InputTextModule} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { EventBusService } from './services/event-bus.service';
import { WarehouseService } from './services/warehouse.service';
import { VendorService } from './services/vendor.service';
import { StaffService } from './services/staff.service';
import { CustomerService } from './services/customer.service';
import { CategoryService } from './services/category.service';
import { InboundReceiptService } from './services/inbound-receipt.service';
import { OutboundReceiptService } from './services/outbound-receipt.service';
import { InboundReceiptDetailService } from './services/inbound-receipt-detail.service';
import { NewInboundReceiptService } from './services/new-inbound-receipt.service';
import { OutboundReceiptDetailService } from './services/outbound-receipt-detail.service';
import { NewOutboundReceiptService } from './services/new-outbound-receipt.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ConfirmDialogModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxEchartsModule,
    TableModule,
    PaginatorModule,
    ScrollPanelModule,
    ConfirmDialogModule,
    InputTextModule
  ],
  providers: [
    EventBusService,
    WarehouseService,
    VendorService,
    StaffService,
    CustomerService,
    CategoryService,
    InboundReceiptService,
    InboundReceiptDetailService,
    NewInboundReceiptService,
    OutboundReceiptService,
    OutboundReceiptDetailService,
    NewOutboundReceiptService,
    ConfirmationService
  ]
})

export class SharedModule { }
