import { Component, OnInit } from '@angular/core';
import {WorkspaceComponent} from '../workspace/workspace.component';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('menu', [
        state('hidden', style({
            height: '0px'
        })),
        state('visible', style({
            height: '*'
        })),
        transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
        transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class ProfileComponent implements OnInit {

  active: boolean;

  constructor(public app: WorkspaceComponent) { }

  ngOnInit() {
  }
  onClick(event) {
    this.active = !this.active;
    setTimeout(() => {
      this.app.layoutMenuScrollerViewChild.moveBar();
    }, 450);
    event.preventDefault();
}
}
