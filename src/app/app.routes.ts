import { LoginComponent } from './login/login.component';
/**
 * 这里是全局路由配置，全局路由只有2个，login和workspace，用户从login登录之后跳转到workspace
 */
export const appRoutes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'workspace',
		loadChildren: './global-layout/workspace/workspace.module#WorkspaceModule'
	},
	{
		path: '**', // fallback router must in the last
		component: LoginComponent
	}
];
