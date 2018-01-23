import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard.routes';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {
    
}