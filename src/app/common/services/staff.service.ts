import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StaffService {
  public staffs: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getStaffs() {
    let staffs = [
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" },
      { id: '-1', name: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remarks: "一号员工" }
    ];
    this.staffs.next(staffs);
  }
}
