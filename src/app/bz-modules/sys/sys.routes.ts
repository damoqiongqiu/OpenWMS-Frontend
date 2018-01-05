import { SysComponent } from './sys.component';
import { SysMonitorComponent } from './sys-monitor/sys-monitor.component';

export const sysRoutes = [{
	path: '',
	component: SysComponent,
	children: [
		{ path: '', redirectTo: 'sysmonitor', pathMatch: 'full' },
		{ path: 'sysmonitor', component: SysMonitorComponent },
	]
}];
