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
import { InboundFormComponent } from './inbound-form/inbound-form.component';
import { OutFormComponent } from './out-form/out-form.component';
import { ShiftWarehouseTableComponent } from './shift-warehouse-table/shift-warehouse-table.component';
import { ShiftFormComponent } from './shift-form/shift-form.component';
import { InboundTableComponent } from './inbound-table/inbound-table.component';
import { OutboundTableComponent } from './outbound-table/outbound-table.component';
import { LossTableComponent } from './loss-table/loss-table.component';
import { LossFormComponent } from './loss-form/loss-form.component';
import { InventoryItemFormComponent } from './inventory-item-form/inventory-item-form.component';
import { InventoryService } from '../../common/services/inventory.service';
import { InboundService } from '../../common/services/inbound.service';
import { OutboundService } from '../../common/services/outbound.service';
import { ShiftWarehouseService } from '../../common/services/shift-warehouse.service';
import { WarehouseLossService } from '../../common/services/warehouse-loss.service';

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
    InboundFormComponent,
    OutFormComponent,
    ShiftWarehouseTableComponent,
    ShiftFormComponent,
    InboundTableComponent,
    OutboundTableComponent,
    LossTableComponent,
    LossFormComponent,
    InventoryItemFormComponent
  ],
  providers:[
    ConfirmationService,
    InventoryService,
    InboundService,
    OutboundService,
    ShiftWarehouseService,
    WarehouseLossService
  ]
})
export class InventoryModule { 
  
}
