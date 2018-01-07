import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
	{
		path: '',
		component: WorkspaceComponent,
		children: [
			{ path: '', redirectTo: 'sys', pathMatch: 'full' },
			{ path: 'sys', loadChildren: '../../bz-modules/sys/sys.module#SysModule' },
			{ path: 'inventory', loadChildren: '../../bz-modules/inventory/inventory.module#InventoryModule' },
			{ path: 'basic-data', loadChildren: '../../bz-modules/basic-data/basic-data.module#BasicDataModule' }
		]
	}
];
