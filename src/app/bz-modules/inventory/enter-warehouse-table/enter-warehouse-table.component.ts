import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { EnterWarehouseService } from '../../../common/services/enter-warehouse.service';

@Component({
  selector: 'enter-warehouse-table',
  templateUrl: './enter-warehouse-table.component.html',
  styleUrls: ['./enter-warehouse-table.component.scss']
})
export class EnterWarehouseTableComponent implements OnInit {
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
    private enterWarehouseService:EnterWarehouseService) { }

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
    
    this.enterWarehouseService.enterWarehouseRecords.subscribe((items) => {
      this.items = items;
    });
    this.enterWarehouseService.getEnterWarehouseRecords();
  }

  public enterForm() {
    this.router.navigateByUrl('/workspace/inventory/enter-form');
  }
}
