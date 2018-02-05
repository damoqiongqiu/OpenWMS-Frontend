import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NewOutboundReceiptService {
  public outboundDetail: Subject<Object> = new Subject<Object>();

  constructor() { }

  public getOutboundDetail() {
    var item = {
      title: "京东南京一号库-出库单",
      warehouseName: "京东南京一号库",
      receiptNo: "OUT-1-2222222",
      waybillNo: "1111-1111",
      outboundTime: new Date(),
      items: [],
      totalNum: '300万元',
      handlerName: "大漠穷秋",
      acceptor: "大漠穷秋",
      deliveryman: "大漠穷秋"
    };
    this.outboundDetail.next(item);
  }
}
