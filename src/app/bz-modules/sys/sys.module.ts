import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { sysRoutes } from './sys.routes';
import { SysComponent } from './sys.component';
import { SysMonitorComponent } from './sys-monitor/sys-monitor.component';
import { EChartOptionDirective1 } from './sys-monitor/echart-option.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(sysRoutes)
  ],
  declarations: [
    EChartOptionDirective1,
    SysComponent,
    SysMonitorComponent
  ]
})
export class SysModule { }
