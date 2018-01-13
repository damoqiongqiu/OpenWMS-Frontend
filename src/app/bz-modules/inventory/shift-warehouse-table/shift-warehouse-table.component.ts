import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";

@Component({
  selector: 'shift-warehouse-table',
  templateUrl: './shift-warehouse-table.component.html',
  styleUrls: ['./shift-warehouse-table.component.scss']
})
export class ShiftWarehouseTableComponent implements OnInit {
  public inWarehouses: SelectItem[];
  public outWarehouses: SelectItem[];
  //品类
  public categories: SelectItem[];
  //记录类型
  public recordTypes: SelectItem[];
  //商品
  public items: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService) {


  }

  ngOnInit() {
    this.warehouseService.warehouses.subscribe(warehouses => {
      this.inWarehouses = warehouses;
      this.outWarehouses = warehouses;
    });
    this.warehouseService.getWarehouses();
    
    this.categoryService.categories.subscribe((categories) => {
      this.categories = categories;
    });
    this.categoryService.getCategories();

    this.items = [
      { index: 1, inventoryName: '京东南京一号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 2, inventoryName: '京东南京二号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 3, inventoryName: '京东南京三号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 4, inventoryName: '京东南京四号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 5, inventoryName: '京东南京五号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 6, inventoryName: '京东上海一号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 7, inventoryName: '京东上海二号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 8, inventoryName: '京东上海三号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 9, inventoryName: '京东上海四号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' },
      { index: 10, inventoryName: '京东上海五号库', category: '手机', serialNum: '1-222222', itemName: 'iPhone X', itemUnit: '个', spec: '商品规格', costPrice: '2000', stocks: '65535', maxStocks: '65536', minStocks: '1' }
    ];
  }

  public addShift(): void {
    this.router.navigateByUrl('/workspace/inventory/add-shift');
  }
}
