import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomerService {
  public customers: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getCustomers() {
    var customers = [
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerCode: '1-2222222', customerName: '一号客户', shortName: '一号', contact: '大漠穷秋', gender: '男', duty: '销售总监', cellphone: '12345789000' }
    ];
    this.customers.next(customers);
  }
}
