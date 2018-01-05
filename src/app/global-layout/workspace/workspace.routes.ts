import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
	{
		path: '',
		component: WorkspaceComponent,
		children: [
			{ path: '', redirectTo: 'sys', pathMatch: 'full' },
			{ path: 'post', loadChildren: '../../bz-modules/post/post.module#PostModule' },
			{ path: 'comment', loadChildren: '../../bz-modules/comment/comment.module#CommentModule' },
			{ path: 'org', loadChildren: '../../bz-modules/org/org.module#OrgModule' },
			{ path: 'user', loadChildren: '../../bz-modules/user/user.module#UserModule' },
			{ path: 'role', loadChildren: '../../bz-modules/role/role.module#RoleModule' },
			{ path: 'permission', loadChildren: '../../bz-modules/permission/permission.module#PermissionModule' },
			{ path: 'sys', loadChildren: '../../bz-modules/sys/sys.module#SysModule' },
			{ path: 'map', loadChildren: '../../bz-modules/map/map.module#MapModule' }
		]
	}
];
