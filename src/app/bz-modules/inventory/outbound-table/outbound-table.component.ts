import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { OutboundService } from '../../../common/services/outbound.service';

@Component({
  selector: 'outbound-table',
  templateUrl: './outbound-table.component.html',
  styleUrls: ['./outbound-table.component.scss']
})
export class OutboundTableComponent implements OnInit {
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
    private outboundService: OutboundService) { }

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

    this.outboundService.outboundRecords.subscribe((items) => {
      this.items = items;
    });
    this.outboundService.getOutboundRecords();
  }

  public outForm() {
    this.router.navigateByUrl('/workspace/inventory/out-form');
  }
}