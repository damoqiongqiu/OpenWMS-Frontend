import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: '../../bz-modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'inventory',
        loadChildren: '../../bz-modules/inventory/inventory.module#InventoryModule'
      },
      {
        path: 'basic-data',
        loadChildren: '../../bz-modules/basic-data/basic-data.module#BasicDataModule'
      },
      { path: 'sys', loadChildren: '../../bz-modules/sys/sys.module#SysModule' }
    ]
  }
];
