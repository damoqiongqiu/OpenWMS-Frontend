import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShiftWarehouseService {
  public shiftWarehouseRecords: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getShiftWarehouseRecords() {
    var items = [
      { fromWarehouse: '京东南京一号库', toWarehouse: '京东南京一号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东南京二号库', toWarehouse: '京东南京二号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东南京三号库', toWarehouse: '京东南京三号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东南京四号库', toWarehouse: '京东南京四号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东南京五号库', toWarehouse: '京东南京五号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东上海一号库', toWarehouse: '京东上海一号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东上海二号库', toWarehouse: '京东上海二号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东上海三号库', toWarehouse: '京东上海三号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东上海四号库', toWarehouse: '京东上海四号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' },
      { fromWarehouse: '京东上海五号库', toWarehouse: '京东上海五号库', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', num: '1000只', price: '2000元', sum: '200万元', shiftDate: '2018-01-14', operator: '大漠穷秋' }
    ];
    this.shiftWarehouseRecords.next(items);
  }
}
