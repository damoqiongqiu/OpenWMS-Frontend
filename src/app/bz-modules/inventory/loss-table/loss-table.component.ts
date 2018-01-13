import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";

@Component({
  selector: 'loss-table',
  templateUrl: './loss-table.component.html',
  styleUrls: ['./loss-table.component.scss']
})
export class LossTableComponent implements OnInit {

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

  public lossForm(){
    this.router.navigateByUrl('/workspace/inventory/loss-form');
  }
}
