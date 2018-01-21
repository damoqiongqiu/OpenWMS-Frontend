import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { InboundReceiptService } from '../../../common/services/inbound-receipt.service';

@Component({
  selector: 'inbound-receipt-table',
  templateUrl: './inbound-receipt-table.component.html',
  styleUrls: ['./inbound-receipt-table.component.scss']
})
export class InboundReceiptTableComponent implements OnInit {
  //仓库
  public warehouses: SelectItem[];
  public startDate: Date;
  public endDate: Date;
  public items: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService,
    private inboundReceiptService: InboundReceiptService) { }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();

    this.warehouseService.warehouses.subscribe(warehouses => {
      this.warehouses = warehouses;
    });
    this.warehouseService.getWarehouses();

    this.inboundReceiptService.inboundRecords.subscribe((items) => {
      this.items = items;
    });
    this.inboundReceiptService.getInboundRecords();
  }

  public newReceipt(){
    this.router.navigateByUrl('/workspace/inventory/inbound-receipt-detail/receipt-no/IN-1-2222222');
  }

  public receiptDetail() {
    this.router.navigateByUrl('/workspace/inventory/inbound-receipt-detail/receipt-no/IN-1-2222222');
  }

  public printReceipt(){
    window.print();
  }
}
