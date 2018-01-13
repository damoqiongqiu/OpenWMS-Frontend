import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { EventBusService } from './services/event-bus.service';
import { WarehouseService } from './services/warehouse.service';
import { VendorService } from './services/vendor.service';
import { StaffService } from './services/staff.service';
import { CustomerService } from './services/customer.service';
import { CategoryService } from './services/category.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [ ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [EventBusService,WarehouseService,VendorService,StaffService,CustomerService,CategoryService]
})

export class SharedModule { }
