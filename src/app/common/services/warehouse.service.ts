import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WarehouseService {
  public warehouses:Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getWarehouses(){
    //向后台发起请求加载仓库列表
    this.warehouses.next([
      { label: '全部仓库', value: null },
      { label: '京东南京一号仓', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: '京东南京二号仓', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: '京东上海一号仓', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: '京东上海二号仓', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: '京东上海三号仓', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ]);
  }
}
