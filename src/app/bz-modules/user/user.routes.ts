import { UserComponent } from './user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const userRoutes = [{
	path: '',
	component: UserComponent,
	children: [
		{ path: '', redirectTo: 'usertable/page/1', pathMatch: 'full' },
		{ path: 'usertable/page/:page', component: UserTableComponent },
        { path: 'usertable/edituser/:id', component: UserProfileComponent },
        { path: 'usertable/newuser', component: UserProfileComponent },
	]
}];
