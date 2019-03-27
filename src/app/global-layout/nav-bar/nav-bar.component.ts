import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor() { }

  ngOnInit() {
  }

  public toogleLeftSideBar(): void {
    document.body.classList.toggle("sidebar-collapse");
  }
}
