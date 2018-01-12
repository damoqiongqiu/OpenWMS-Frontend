import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {
  //仓库
  public inventories: SelectItem[];
  //品类
  public categories: SelectItem[];
  //记录类型
  public recordTypes: SelectItem[];
  //时间范围
  public startDate: Date;
  public endDate: Date;
  //商品
  public items: Array<any>;

  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    private confirmationService: ConfirmationService) {
    this.inventories = [
      { label: '全部仓库', value: null },
      { label: '京东南京一号仓', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: '京东南京二号仓', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: '京东上海一号仓', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: '京东上海二号仓', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: '京东上海三号仓', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];

    this.categories = [
      { label: '手机', value: null },
      { label: '服装', value: null },
      { label: '日化', value: null },
      { label: '箱包', value: null },
      { label: '家电', value: null }
    ];

    this.recordTypes = [
      { label: '全部', value: 0 },
      { label: '入库', value: 1 },
      { label: '出库', value: 2 },
      { label: '退库', value: 4 },
      { label: '库损', value: 5 }
    ];

    this.startDate = new Date();
    this.endDate = new Date();

    this.items = [
      { index: 1, warehouseName: '京东南京一号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 2, warehouseName: '京东南京二号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 3, warehouseName: '京东南京三号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 4, warehouseName: '京东南京四号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 5, warehouseName: '京东南京五号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 6, warehouseName: '京东上海一号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 7, warehouseName: '京东上海二号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 8, warehouseName: '京东上海三号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 9, warehouseName: '京东上海四号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 10, warehouseName: '京东上海五号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' }
    ];
  }

  ngOnInit() {

  }

  public editItem(item: Object) {
    console.log(item);
    this.router.navigateByUrl('/workspace/inventory/inventory-item-form');
  }

  public delItem(item: Object) {
    console.log(item);
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }
}
