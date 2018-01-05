import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { EventBusService } from '../../bz-modules/common/services/event-bus.service';
import { FooterInfoComponent } from '../footer-info/footer-info.component';
import { LeftNavComponent } from '../left-nav/left-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { UserTableComponent } from '../../bz-modules/user/user-table/user-table.component';

@Component({
	selector: 'workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
	public isCollapsed:boolean=false;

	constructor(private elementRef: ElementRef, private eventBusService: EventBusService) {

	}

	ngOnInit() {
		this.eventBusService.topToggleBtn.subscribe(value => {
			this.toggleMenuStatus(value);
		});
	}

	private toggleMenuStatus(isCollapse: boolean): void {
		this.isCollapsed=isCollapse;
	}
}
