import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NewInboundReceiptService {
  public inboundDetail: Subject<Object> = new Subject<Object>();

  constructor() { }

  public getInboundDetail() {
    var item = {
      title: "京东南京一号库-入库单",
      receiptNo: "IN-1-2222222",
      waybillNo: "1111-1111",
      inboundTime: new Date(),
      items: [
      ],
      totalNum: '300万元',
      handlerName: "大漠穷秋",
      acceptor: "大漠穷秋",
      deliveryman: "大漠穷秋"
    };
    this.inboundDetail.next(item);
  }
}
