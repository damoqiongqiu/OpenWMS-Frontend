import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";

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

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.warehouseService.warehouses.subscribe(warehouses => {
      this.warehouses = warehouses;
    });
    this.warehouseService.getWarehouses();

    this.categoryService.categories.subscribe((categories) => {
      this.categories = categories;
    });
    this.categoryService.getCategories();
  }

  public enterForm() {
    this.router.navigateByUrl('/workspace/inventory/enter-form');
  }
}
