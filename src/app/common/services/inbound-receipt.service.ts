import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InboundReceiptService {
  public inboundRecords: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getInboundRecords() {
    var items = [
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'},
      { id: '-1', warehouseName:'京东南京一号库',receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14'}
    ];
    this.inboundRecords.next(items);
  }
}
