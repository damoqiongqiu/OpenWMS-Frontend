import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { InboundService } from '../../../common/services/inbound.service';

@Component({
  selector: 'inbound-table',
  templateUrl: './inbound-table.component.html',
  styleUrls: ['./inbound-table.component.scss']
})
export class InboundTableComponent implements OnInit {
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
    private inboundService:InboundService) { }

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
    
    this.inboundService.inboundRecords.subscribe((items) => {
      this.items = items;
    });
    this.inboundService.getInboundRecords();
  }

  public enterForm() {
    this.router.navigateByUrl('/workspace/inventory/enter-form');
  }
}
