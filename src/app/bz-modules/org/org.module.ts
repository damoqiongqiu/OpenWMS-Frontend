import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TreeModule, TreeNode } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';

import { RouterModule } from '@angular/router';
import { orgRoutes } from './org.routes';
import { OrgMngComponent } from './org-mng/org-mng.component';
import { OrgComponent } from './org.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TreeModule,
    InputTextModule, 
    RouterModule.forChild(orgRoutes)
  ],
  declarations: [
    OrgComponent,
    OrgMngComponent
  ],
  providers: [
    
  ]
})
export class OrgModule { }
