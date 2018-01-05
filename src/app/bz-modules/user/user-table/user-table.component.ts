import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserTableComponent implements OnInit {

  public userList:Array<any>=[
    {userId:1,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:2,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:3,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:4,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:5,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:6,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:7,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:8,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:9,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'},
    {userId:10,userName:'大漠穷秋',regTime:'2017-07-17', lastLogin:'2017-07-17'}
  ];

  constructor(public router: Router,
    public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getUsersByPage(params['page'])
    );
  }

  public getUsersByPage(page: Number): void {
    console.log('页码>' + page);
  }

  public pageChanged(event): void {
    this.router.navigateByUrl('/workspace/user/usertable/page/' + event.page);
  }

  public newUser(): void {
    this.router.navigateByUrl('/workspace/user/usertable/newuser');
  }

  public blockUser(userId: Number): void {
    console.log(userId);
  }

  public unBlockUser(userId: Number): void {
    console.log(userId);
  }

  public resetPwd(userId: Number): void {
    console.log(userId);
  }
}
