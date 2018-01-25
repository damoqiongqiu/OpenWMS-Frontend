import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StaffService {
  public staffs: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getStaffs() {
    let staffs = [
      { id: '-1', index:1,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:2,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:3,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:4,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:5,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:6,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:7,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:8,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:9,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" },
      { id: '-1', index:10,staffCode: '9527', staffName: "大漠穷秋", gender: "男", cellphone: "12345678900", QQ: "123456789", email: 'damoqiongqiu@126.com', duty: "销售总监", remark: "我的编号是9527，就问你六不六？" }
    ];
    this.staffs.next(staffs);
  }
}
