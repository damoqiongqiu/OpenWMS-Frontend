import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { SharedModule } from '../../common/shared.module';
import { InventoryComponent } from './inventory.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InventoryItemFormComponent } from './inventory-item-form/inventory-item-form.component';
import { InventoryService } from '../../common/services/inventory.service';
import { InboundReceiptTableComponent } from './inbound-receipt-table/inbound-receipt-table.component';
import { InboundReceiptDetailComponent } from './inbound-receipt-detail/inbound-receipt-detail.component';
import { OutboundReceiptTableComponent } from './outbound-receipt-table/outbound-receipt-table.component';
import { OutboundReceiptDetailComponent } from './outbound-receipt-detail/outbound-receipt-detail.component';

import { inventoryRoutes } from './inventory.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    ConfirmDialogModule,
    RouterModule.forChild(inventoryRoutes)
  ],
  declarations: [
    InventoryComponent,
    InventoryTableComponent,
    InventoryItemFormComponent,
    InboundReceiptTableComponent,
    InboundReceiptDetailComponent,
    OutboundReceiptTableComponent,
    OutboundReceiptDetailComponent
  ],
  providers:[
    ConfirmationService,
    InventoryService
  ]
})
export class InventoryModule { 
  
}
