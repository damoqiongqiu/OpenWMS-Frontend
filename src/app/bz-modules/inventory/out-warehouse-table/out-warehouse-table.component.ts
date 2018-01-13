import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";

@Component({
  selector: 'out-warehouse-table',
  templateUrl: './out-warehouse-table.component.html',
  styleUrls: ['./out-warehouse-table.component.scss']
})
export class OutWarehouseTableComponent implements OnInit {
  public warehouses: SelectItem[];

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService) { }

  ngOnInit() {
    this.warehouseService.warehouses.subscribe(warehouses => {
      this.warehouses = warehouses;
    });
    this.warehouseService.getWarehouses();
  }

  public outForm() {
    this.router.navigateByUrl('/workspace/inventory/out-form');
  }
}
