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
              { "label": "秦淮区", "icon": "fa-file-word-o", "data": "秦淮区" },
              { "label": "江宁区", "icon": "fa-file-word-o", "data": "江宁区" },
              { "label": "建邺区", "icon": "fa-file-word-o", "data": "江宁区" },
              { "label": "鼓楼区", "icon": "fa-file-word-o", "data": "江宁区" },
              { "label": "下关区", "icon": "fa-file-word-o", "data": "江宁区" },
              { "label": "六合区", "icon": "fa-file-word-o", "data": "江宁区" }
            ]
          },
          {
            label: "南通市",
            data: "南通市",
            expandedIcon: "fa-folder-open",
            collapsedIcon: "fa-folder",
            expanded:true,
            children: [
              { "label": "如皋市", "icon": "fa-file-word-o", "data": "如皋市" },
              { "label": "海安市", "icon": "fa-file-word-o", "data": "海安市" },
              { "label": "启东市", "icon": "fa-file-word-o", "data": "启东市" },
              { "label": "如东市", "icon": "fa-file-word-o", "data": "如东市" }
            ]
          }
        ]
      }
    ]);
  }
}
