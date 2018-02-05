import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OutboundReceiptService {
  public outboundRecords: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getOutboundRecords() {
    var items = [
      { index: 1, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 2, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 3, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 4, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 5, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 6, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 7, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 8, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 9, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' },
      { index: 10, id: '-1', warehouseName: '京东南京一号库', receiptNo: 'IN-1-222222', waybillNo: '201801211319', enterDate: '2018-01-14', receiver: '二号库' }
    ];
    this.outboundRecords.next(items);
  }
}
