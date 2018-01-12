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
import { EnterFormComponent } from './enter-form/enter-form.component';
import { OutFormComponent } from './out-form/out-form.component';
import { ShiftWarehouseTableComponent } from './shift-warehouse-table/shift-warehouse-table.component';
import { ShiftFormComponent } from './shift-form/shift-form.component';
import { EnterWarehouseTableComponent } from './enter-warehouse-table/enter-warehouse-table.component';
import { OutWarehouseTableComponent } from './out-warehouse-table/out-warehouse-table.component';
import { LossTableComponent } from './loss-table/loss-table.component';
import { LossFormComponent } from './loss-form/loss-form.component';
import { InventoryItemFormComponent } from './inventory-item-form/inventory-item-form.component';

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
    EnterFormComponent,
    OutFormComponent,
    ShiftWarehouseTableComponent,
    ShiftFormComponent,
    EnterWarehouseTableComponent,
    OutWarehouseTableComponent,
    LossTableComponent,
    LossFormComponent,
    InventoryItemFormComponent
  ],
  providers:[ConfirmationService]
})
export class InventoryModule { 
  
}
