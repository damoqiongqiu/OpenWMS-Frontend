import { PostTableComponent } from '../post/post-table/post-table.component';
import { WritePostComponent } from '../post/write-post/write-post.component';
import { PostComponent } from './post.component';

export const postRoutes = [{
	path: '',
	component: PostComponent,
	children: [
		{ path: '', redirectTo: 'posttable/page/1', pathMatch: 'full' },
		{ path: 'posttable/page/:page', component: PostTableComponent },
		{ path: 'writepost', component: WritePostComponent },
	]
}];
