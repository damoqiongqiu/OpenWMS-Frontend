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
      { id: '-1', name: '全部仓库', value: "-1", managerName: '1号负责人', cellphone: '12345678900', telephone: '123456789', warehouseAddress: '南京市江宁镇', remarks: '1号仓是京东南京最大的仓库' },
      { id: '-1', name: '京东南京一号仓', value: "-1", managerName: '1号负责人', cellphone: '12345678900', telephone: '123456789', warehouseAddress: '南京市江宁镇', remarks: '1号仓是京东南京最大的仓库' },
      { id: '-1', name: '京东南京二号仓', value: "-1", managerName: '1号负责人', cellphone: '12345678900', telephone: '123456789', warehouseAddress: '南京市江宁镇', remarks: '1号仓是京东南京最大的仓库' },
      { id: '-1', name: '京东上海一号仓', value: "-1", managerName: '1号负责人', cellphone: '12345678900', telephone: '123456789', warehouseAddress: '南京市江宁镇', remarks: '1号仓是京东南京最大的仓库' },
      { id: '-1', name: '京东上海二号仓', value: "-1", managerName: '1号负责人', cellphone: '12345678900', telephone: '123456789', warehouseAddress: '南京市江宁镇', remarks: '1号仓是京东南京最大的仓库' },
      { id: '-1', name: '京东上海三号仓', value: "-1", managerName: '1号负责人', cellphone: '12345678900', telephone: '123456789', warehouseAddress: '南京市江宁镇', remarks: '1号仓是京东南京最大的仓库' }  
    ]);
  }
}
