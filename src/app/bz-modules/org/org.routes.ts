import { OrgComponent } from './org.component';
import { OrgMngComponent } from './org-mng/org-mng.component';

export const orgRoutes = [{
	path: '',
	component: OrgComponent,
	children: [
		{ path: '', redirectTo: 'orgmng', pathMatch: 'full' },
		{ path: 'orgmng', component: OrgMngComponent }
	]
}];
