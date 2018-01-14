import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { WarehouseLossService } from '../../../common/services/warehouse-loss.service';

@Component({
  selector: 'loss-table',
  templateUrl: './loss-table.component.html',
  styleUrls: ['./loss-table.component.scss']
})
export class LossTableComponent implements OnInit {
  //仓库
  public warehouses: SelectItem[];
  //品类
  public categories: SelectItem[];
  public startDate: Date;
  public endDate: Date;
  public items: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService,
    private warehouseLossService: WarehouseLossService) { }

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

    this.warehouseLossService.lossRecords.subscribe((items) => {
      this.items = items;
    });
    this.warehouseLossService.getLossRecords();
  }

  public lossForm() {
    this.router.navigateByUrl('/workspace/inventory/loss-form');
  }
}
