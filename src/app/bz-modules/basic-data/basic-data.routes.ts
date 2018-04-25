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

export const basicDataRoutes = [{
	path: '',
	component: BasicDataComponent,
	children: [
		{ path: '', redirectTo: 'warehouse-table/page/1', pathMatch: 'full' },
		{ path: 'warehouse-table/page/:page', component: WarehouseTableComponent },
		{ path: 'category-table/page/:page', component: CategoryTableComponent },
		{ path: 'vendor-table/page/:page', component: VendorTableComponent },
		{ path: 'customer-table/page/:page', component: CustomerTableComponent },
		{ path: 'staff-table/page/:page', component: StaffTableComponent },
		{ path: 'warehouse-form', component: WarehouseFormComponent },
		{ path: 'category-form', component: CategoryFormComponent },
		{ path: 'vendor-form', component: VendorFormComponent },
		{ path: 'customer-form', component: CustomerFormComponent },
		{ path: 'staff-form', component: StaffFormComponent }
	]
}];