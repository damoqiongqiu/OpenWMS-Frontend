import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { TabViewModule } from 'primeng/components/tabview/tabview';

import { SharedModule } from '../../common/shared.module';
import { InventoryComponent } from './inventory.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InventoryItemDetailComponent } from './inventory-item-detail/inventory-item-detail.component';
import { InboundReceiptTableComponent } from './inbound-receipt-table/inbound-receipt-table.component';
import { InboundReceiptDetailComponent } from './inbound-receipt-detail/inbound-receipt-detail.component';
import { OutboundReceiptTableComponent } from './outbound-receipt-table/outbound-receipt-table.component';
import { OutboundReceiptDetailComponent } from './outbound-receipt-detail/outbound-receipt-detail.component';
import { NewInboundReceiptComponent } from './new-inbound-receipt/new-inbound-receipt.component';
import { InventoryService } from '../../common/services/inventory.service';
import { NewOutboundReceiptComponent } from './new-outbound-receipt/new-outbound-receipt.component';

import { inventoryRoutes } from './inventory.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    TabViewModule,
    RouterModule.forChild(inventoryRoutes)
  ],
  declarations: [
    InventoryComponent,
    InventoryTableComponent,
    InventoryItemDetailComponent,
    InboundReceiptTableComponent,
    InboundReceiptDetailComponent,
    OutboundReceiptTableComponent,
    OutboundReceiptDetailComponent,
    NewInboundReceiptComponent,
    NewOutboundReceiptComponent
  ],
  providers:[
    InventoryService
  ]
})
export class InventoryModule { 
  
}
