import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';

import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTableComponent } from './user-table/user-table.component';
import { FormControlComponent } from './user-profile/dynamic-form/form-control.component';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    CalendarModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserComponent,
    UserProfileComponent,
    UserTableComponent,
    FormControlComponent
  ]
})
export class UserModule { }
