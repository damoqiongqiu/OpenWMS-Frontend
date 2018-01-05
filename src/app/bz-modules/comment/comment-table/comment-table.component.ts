import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class CommentTableComponent implements OnInit {
    public numPages: number = 3;
  	public maxSize: number = 5;
  	public itemsPerPage: number = 5;
  	public totalItems: number = 15;
  	public currentPage: number = 1;

  	constructor() { }

  	ngOnInit() {
  		
  	}

    public pageChanged(event:any):void {
    	console.log("加载下一页数据...");
    }
    delComment(id: number){

    }
}
