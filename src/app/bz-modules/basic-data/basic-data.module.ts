import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/primeng';

import { SharedModule } from '../../common/shared.module';
import { BasicDataComponent } from './basic-data.component';

import { WarehouseTableComponent } from './warehouse-table/warehouse-table.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { VendorTableComponent } from './vendor-table/vendor-table.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { StaffTableComponent } from './staff-table/staff-table.component';
import { StaffFormComponent } from './staff-form/staff-form.component';

import { basicDataRoutes } from './basic-data.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    RouterModule.forChild(basicDataRoutes)
  ],
  declarations: [
    BasicDataComponent,
    WarehouseTableComponent,
    WarehouseFormComponent,
    CategoryTableComponent,
    CategoryFormComponent,
    VendorTableComponent,
    VendorFormComponent,
    CustomerTableComponent,
    CustomerFormComponent,
    StaffTableComponent,
    StaffFormComponent
  ]
})
export class BasicDataModule { 
  
}
