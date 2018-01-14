import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { ShiftWarehouseService } from '../../../common/services/shift-warehouse.service';

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
  public startDate: Date;
  public endDate: Date;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService,
    private shiftWarehouseService:ShiftWarehouseService) {


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

    this.startDate = new Date();
    this.endDate = new Date();

    this.shiftWarehouseService.shiftWarehouseRecords.subscribe((items) => {
      this.items = items;
    });
    this.shiftWarehouseService.getShiftWarehouseRecords();
  }

  public addShift(): void {
    this.router.navigateByUrl('/workspace/inventory/add-shift');
  }
}
