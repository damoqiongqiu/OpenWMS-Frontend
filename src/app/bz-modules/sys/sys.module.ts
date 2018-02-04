import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';
import { sysRoutes } from './sys.routes';
import { SysComponent } from './sys.component';
import { SysMonitorComponent } from './sys-monitor/sys-monitor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(sysRoutes)
  ],
  declarations: [
    SysComponent,
    SysMonitorComponent
  ]
})
export class SysModule { }
