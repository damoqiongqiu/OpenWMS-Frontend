import { Component, OnInit } from '@angular/core';
import { WorkspaceComponent } from '../workspace/workspace.component'
@Component({
    selector: 'topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

    constructor(public app: WorkspaceComponent) { }

    ngOnInit() {
    }

}
