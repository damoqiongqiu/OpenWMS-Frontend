import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {
  public categories: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getCategories() {
    //向后台发起请求加载类别列表
    this.categories.next([
      { id:'-1', name: '手机', value: null,creator:'大漠穷秋',createDate:'2018-01-14',remarks:'这是假的测试数据' },
      { id:'-1', name: '服装', value: null,creator:'大漠穷秋',createDate:'2018-01-14',remarks:'这是假的测试数据' },
      { id:'-1', name: '日化', value: null,creator:'大漠穷秋',createDate:'2018-01-14',remarks:'这是假的测试数据' },
      { id:'-1', name: '箱包', value: null,creator:'大漠穷秋',createDate:'2018-01-14',remarks:'这是假的测试数据' },
      { id:'-1', name: '家电', value: null,creator:'大漠穷秋',createDate:'2018-01-14',remarks:'这是假的测试数据' }
    ]);
  }
}
