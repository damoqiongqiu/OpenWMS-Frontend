import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OutboundReceiptDetailService {
  public outboundDetail: Subject<Object> = new Subject<Object>();

  constructor() { }

  public getOutboundDetail() {
    var item = {
      title: "京东南京一号库-出库单",
      warehouseName: "京东南京一号库",
      receiptNo: "OUT-1-2222222",
      waybillNo: "1111-1111",
      outboundTime: "2018-01-21 14:14",
      items: [
        { index: '1', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '2', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '3', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '4', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '5', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '6', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '7', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '8', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '9', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '10', receiver: '二号库', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' }
      ],
      totalNum: '300万元',
      handlerName: "大漠穷秋",
      acceptor: "大漠穷秋",
      deliveryman: "大漠穷秋"
    };
    this.outboundDetail.next(item);
  }
}
