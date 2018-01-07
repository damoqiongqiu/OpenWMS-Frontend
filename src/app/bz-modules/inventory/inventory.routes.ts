import { InventoryComponent } from './inventory.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { EnterFormComponent } from './enter-form/enter-form.component';
import { EnterWarehouseTableComponent } from './enter-warehouse-table/enter-warehouse-table.component';
import { OutFormComponent } from './out-form/out-form.component';
import { OutWarehouseTableComponent } from './out-warehouse-table/out-warehouse-table.component';
import { ShiftFormComponent } from './shift-form/shift-form.component';
import { ShiftWarehouseTableComponent } from './shift-warehouse-table/shift-warehouse-table.component';
import { LossTableComponent } from './loss-table/loss-table.component';
import { LossFormComponent } from './loss-form/loss-form.component';

export const inventoryRoutes = [{
	path: '',
	component: InventoryComponent,
	children: [
		{ path: '', redirectTo: 'inventorytable/page/1', pathMatch: 'full' },
		{ path: 'inventory-table/page/:page', component: InventoryTableComponent },
		{ path: 'enter-form', component: EnterFormComponent },
		{ path: 'enter-table/page/:page', component: EnterWarehouseTableComponent },
		{ path: 'out-form', component: OutFormComponent },
		{ path: 'out-table/page/:page', component: OutWarehouseTableComponent },
		{ path: 'shift-form', component: ShiftFormComponent },
		{ path: 'shift-table/page/:page', component: ShiftWarehouseTableComponent },
		{ path: 'loss-form', component: LossFormComponent },
		{ path: 'loss-table/page/:page', component: LossTableComponent }
	]
}];
