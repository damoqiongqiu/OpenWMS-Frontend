import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { OutWarehouseService } from '../../../common/services/out-warehouse.service';

@Component({
  selector: 'out-warehouse-table',
  templateUrl: './out-warehouse-table.component.html',
  styleUrls: ['./out-warehouse-table.component.scss']
})
export class OutWarehouseTableComponent implements OnInit {
  //仓库
  public warehouses: SelectItem[];
  //品类
  public categories: SelectItem[];
  public startDate: Date;
  public endDate: Date;
  public items:Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService,
    private outWarehouseService: OutWarehouseService) { }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();

    this.warehouseService.warehouses.subscribe(warehouses => {
      this.warehouses = warehouses;
    });
    this.warehouseService.getWarehouses();

    this.categoryService.categories.subscribe((categories) => {
      this.categories = categories;
    });
    this.categoryService.getCategories();

    this.outWarehouseService.outWarehouseRecords.subscribe((items) => {
      this.items = items;
    });
    this.outWarehouseService.getOutWarehouseRecords();
  }

  public outForm() {
    this.router.navigateByUrl('/workspace/inventory/out-form');
  }
}