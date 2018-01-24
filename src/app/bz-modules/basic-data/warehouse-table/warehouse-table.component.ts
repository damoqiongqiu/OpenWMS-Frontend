import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from '../../../common/services/warehouse.service';
import { TreeNode } from 'primeng/components/common/api';

@Component({
  selector: 'warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.scss']
})
export class WarehouseTableComponent implements OnInit {
  public warehouses: TreeNode[];
  public selected: TreeNode;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService) { }

  ngOnInit() {
    this.warehouseService.warehouses.subscribe((warehouses) => {
      this.warehouses = warehouses;
    });
    this.warehouseService.getWarehouses();
  }

  public newWarehouse() {
    this.router.navigateByUrl('/workspace/basic-data/warehouse-form');
  }

  public editWarehouse() {
    this.newWarehouse();
  }
}