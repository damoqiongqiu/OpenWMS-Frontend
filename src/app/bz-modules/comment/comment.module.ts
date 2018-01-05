import { CommentTableComponent } from './comment-table/comment-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { commentRoutes } from './comment.routes';
import { CommentComponent } from './comment.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(commentRoutes)
  ],
  declarations: [
    CommentComponent,
    CommentTableComponent
  ]
})
export class CommentModule { }
