import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InboundReceiptDetailService {
  public inboundDetail: Subject<Object> = new Subject<Object>();

  constructor() { }

  public getInboundDetail() {
    var item = {
      title: "京东南京一号库-入库单",
      receiptNo: "IN-1-2222222",
      waybillNo: "1111-1111",
      inboundTime: new Date(),
      items: [
        { index: '1', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '2', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '3', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '4', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '5', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '6', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '7', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '8', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '9', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' },
        { index: '10', vendor: 'Apple', itemName: 'iPhone-X', spec: '全面屏 长宽高 重量', model: 'A1661', producerLocation: '富士康深圳南山区工厂', num: '1000', unit: '个', price: '3000元', sum: '30万元', warehouse: '京东南京一号仓', storeCell: 'A1001' }
      ],
      totalNum: '300万元',
      handlerName: "大漠穷秋",
      acceptor: "大漠穷秋",
      deliveryman: "大漠穷秋"
    };
    this.inboundDetail.next(item);
  }
}
