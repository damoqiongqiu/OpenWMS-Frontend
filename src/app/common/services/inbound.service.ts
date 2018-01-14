import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InboundService {
  public inboundRecords: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getInboundRecords() {
    var items = [
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', vendorName:'苹果',serialNum: '1-222222', itemName: 'iPhone X', spec: 'OLED全面屏', enterDate: '2018-01-14', incomeNum: '10000只', costPrice: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' }
    ];
    this.inboundRecords.next(items);
  }
}
