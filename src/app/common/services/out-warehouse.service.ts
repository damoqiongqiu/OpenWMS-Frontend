import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OutWarehouseService {
  public outWarehouseRecords: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getOutWarehouseRecords() {
    var items = [
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { id: '-1', serialNum: '1-222222', name: 'iPhone X', spec: 'OLED全面屏', outDate: '2018-01-14', outNum: '10000只', price: '2000元', sum: '200万元', paid: '100万元', nonPayment: '100万元', stocks: '65535', maxStocks: '65536', minStocks: '1' }
    ];
    this.outWarehouseRecords.next(items);
  }
}
