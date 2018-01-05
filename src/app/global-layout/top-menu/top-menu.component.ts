import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { EventBusService } from '../../bz-modules/common/services/event-bus.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  private toggleBtnStatus:boolean=false;
  public showTopMenu:boolean=false;
  
  constructor(private elementRef:ElementRef, private eventBusService:EventBusService) { }

  ngOnInit() {
  }

  public onTogglerClick(event):void{
    this.toggleBtnStatus=!this.toggleBtnStatus;
    this.eventBusService.topToggleBtn.next(this.toggleBtnStatus);
  }
}
