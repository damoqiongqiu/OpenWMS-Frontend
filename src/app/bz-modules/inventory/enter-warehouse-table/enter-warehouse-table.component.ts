import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";

@Component({
  selector: 'enter-warehouse-table',
  templateUrl: './enter-warehouse-table.component.html',
  styleUrls: ['./enter-warehouse-table.component.scss']
})
export class EnterWarehouseTableComponent implements OnInit {
  public warehouses:SelectItem[];

  constructor(private router: Router,
      private activeRoute: ActivatedRoute,
      private warehouseService:WarehouseService) { }

  ngOnInit() {
    this.warehouseService.warehouses.subscribe(warehouses=>{
      this.warehouses=warehouses;
    });
    this.warehouseService.getWarehouses();
  }

  public enterForm(){
    this.router.navigateByUrl('/workspace/inventory/enter-form');
  }
}
