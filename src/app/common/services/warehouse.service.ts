import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WarehouseService {
  public warehouses: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getWarehouses() {
    //向后台发起请求加载仓库列表
    this.warehouses.next([
      {
        label: "江苏省",
        data: "江苏省",
        expandedIcon: "fa-folder-open",
        collapsedIcon: "fa-folder",
        expanded:true,
        children: [
          {
            label: "南京市",
            data: "南京市",
            expandedIcon: "fa-folder-open",
            collapsedIcon: "fa-folder",
            expanded:true,
            children: [
              { "label": "京东南京一号库", "icon": "fa-file-word-o", "data": "京东南京一号库" },
              { "label": "京东南京二号库", "icon": "fa-file-word-o", "data": "京东南京二号库" },
              { "label": "京东南京三号库", "icon": "fa-file-word-o", "data": "京东南京三号库" },
              { "label": "京东南京四号库", "icon": "fa-file-word-o", "data": "京东南京四号库" },
              { "label": "京东南京五号库", "icon": "fa-file-word-o", "data": "京东南京五号库" },
              { "label": "京东南京六号库", "icon": "fa-file-word-o", "data": "京东南京六号库" }
            ]
          }
        ]
      }
    ]);
  }
}
