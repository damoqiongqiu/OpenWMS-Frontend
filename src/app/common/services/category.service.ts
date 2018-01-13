import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {
  public categories:Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getCategories(){
    //向后台发起请求加载类别列表
    this.categories.next([
      { label: '手机', value: null },
      { label: '服装', value: null },
      { label: '日化', value: null },
      { label: '箱包', value: null },
      { label: '家电', value: null }
    ]);
  }
}
