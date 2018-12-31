import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { WorkspaceComponent } from '../workspace/workspace.component';
import {ScrollPanel} from 'primeng/primeng';

@Component({
  selector: 'rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.scss']
})
export class RightpanelComponent implements AfterViewInit {

  @ViewChild('scrollRightPanel') rightPanelMenuScrollerViewChild: ScrollPanel;

  constructor(public app: WorkspaceComponent) {}

  ngAfterViewInit() {
    setTimeout(() => {this.rightPanelMenuScrollerViewChild.moveBar(); }, 100);
  }
}
