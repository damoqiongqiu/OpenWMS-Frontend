import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class VendorService {
  public vendors: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getVendors() {
    var vendors = [
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' },
      { id: '-1', vendorCode: '1-0001', vendorName: '一号供应商', shortName: '一号', vendorAddress: '南京市江宁镇', postcode: '200008', telephone: '12345678900', fax: '123456', email: 'damoqiongqiu@126.com', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345678900', remarks: '这是最重要的一个供应商' }
    ];
    this.vendors.next(vendors);
  }
}
