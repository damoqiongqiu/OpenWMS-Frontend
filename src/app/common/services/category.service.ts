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
      { id: '-1', index: 1, name: '消费电子产品', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 2, name: '服装鞋帽', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 3, name: '美妆个护', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 4, name: '图书音像', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 5, name: '医药保健', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 6, name: '房产汽车', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 7, name: '保险理财', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 8, name: '运动户外', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 9, name: '食品', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' },
      { id: '-1', index: 10, name: '酒类', creator: '大漠穷秋', createTime: new Date(), remark: '商品的品类真不少' }
    ]);
  }
}
