import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { postRoutes } from './post.routes';
import { PostTableComponent } from './post-table/post-table.component';
import { WritePostComponent } from './write-post/write-post.component';
import { PostTableService } from './post-table/services/post-table.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [
    PostComponent,
    PostTableComponent,
    WritePostComponent
  ],
  providers: [
    PostTableService
  ]
})
export class PostModule { }
