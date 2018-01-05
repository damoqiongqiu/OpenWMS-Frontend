import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { roleRoutes } from './role.routes';
import { RoleTableComponent } from './role-table/role-table.component';
import { RoleComponent } from './role.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(roleRoutes)
  ],
  declarations: [
    RoleComponent,
    RoleTableComponent
  ]
})
export class RoleModule { }
