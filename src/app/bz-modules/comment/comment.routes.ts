import { CommentComponent } from './comment.component';
import { CommentTableComponent } from './comment-table/comment-table.component';

export const commentRoutes = [{
	path: '',
	component: CommentComponent,
	children: [
		{ path: '', redirectTo: 'commenttable/page/1', pathMatch: 'full' },
		{ path: 'commenttable/page/:page', component: CommentTableComponent }
	]
}];
