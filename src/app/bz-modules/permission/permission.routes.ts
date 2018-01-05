import { PermissionComponent } from './permission.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';

export const permissionRoutes = [{
	path: '',
	component: PermissionComponent,
	children: [
		{ path: '', redirectTo: 'permissiontable/page/1', pathMatch: 'full' },
		{ path: 'permissiontable/page/:page', component: PermissionTableComponent }
	]
}];
