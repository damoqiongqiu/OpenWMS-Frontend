import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'out-form',
  templateUrl: './out-form.component.html',
  styleUrls: ['./out-form.component.scss']
})
export class OutFormComponent implements OnInit {
    //仓库
    public inventories: SelectItem[];
    //品类
    public categories:SelectItem[];
  
    constructor(public router: Router,public activeRoute: ActivatedRoute) { 
      this.inventories = [
        {label:'京东南京一号仓', value:{id:1, name: 'New York', code: 'NY'}},
        {label:'京东南京二号仓', value:{id:2, name: 'Rome', code: 'RM'}},
        {label:'京东上海一号仓', value:{id:3, name: 'London', code: 'LDN'}},
        {label:'京东上海二号仓', value:{id:4, name: 'Istanbul', code: 'IST'}},
        {label:'京东上海三号仓', value:{id:5, name: 'Paris', code: 'PRS'}}
      ];
  
      this.categories=[
        {label:'手机',value:null},
        {label:'服装',value:null},
        {label:'日化',value:null},
        {label:'箱包',value:null},
        {label:'家电',value:null}
      ];
    }
  
    ngOnInit() {
    }
    
    public backToList():void {
      this.router.navigateByUrl('/workspace/inventory/out-table/page/1');
    }

}
