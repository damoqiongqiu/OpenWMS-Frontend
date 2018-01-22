import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InventoryService {
  public inventories: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getInventories(warehouseId: string) {
    var items = [
      { index: 1, warehouseName: '京东南京一号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'iPhone-X', itemUnit: '个', spec: '商品规格', costPrice: '2000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 2, warehouseName: '京东南京二号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'iPad', itemUnit: '个', spec: '商品规格', costPrice: '1000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 3, warehouseName: '京东南京三号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'iPod', itemUnit: '个', spec: '商品规格', costPrice: '1000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 4, warehouseName: '京东南京四号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'Apple Watch', itemUnit: '个', spec: '商品规格', costPrice: '7000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 5, warehouseName: '京东南京五号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'Mac', itemUnit: '个', spec: '商品规格', costPrice: '2000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 6, warehouseName: '京东上海一号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'Mac Pro', itemUnit: '台', spec: '商品规格', costPrice: '5000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 7, warehouseName: '京东上海二号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'Mac Pro', itemUnit: '台', spec: '商品规格', costPrice: '5000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 8, warehouseName: '京东上海三号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'Mac Pro', itemUnit: '台', spec: '商品规格', costPrice: '5000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 9, warehouseName: '京东上海四号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'Mac Pro', itemUnit: '台', spec: '商品规格', costPrice: '5000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' },
      { index: 10, warehouseName: '京东上海五号库', category: '消费电子产品', cellNo: 'A1001、A1002', serialNum: '1-222222', itemName: 'Mac Pro', itemUnit: '台', spec: '商品规格', costPrice: '5000', bookInventory: '1000', realInventory: '999', diffInventory: '-1' }
    ];
    this.inventories.next(items);
  }
}