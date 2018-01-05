import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class RoleTableComponent implements OnInit {
	  public maxSize:number = 5;
    public itemsPerPage:number=5;
    public totalItems:number = 15;
    public currentPage:number = 1;
  constructor() { }

  ngOnInit() {
  }
blockUser(id: number){

  }
  unBlockUser(id: number){

  }
  resetPwd(id: number){

  }
}
