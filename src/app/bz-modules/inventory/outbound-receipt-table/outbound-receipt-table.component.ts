import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { OutboundReceiptService } from '../../../common/services/outbound-receipt.service';

@Component({
  selector: 'outbound-receipt-table',
  templateUrl: './outbound-receipt-table.component.html',
  styleUrls: ['./outbound-receipt-table.component.scss']
})
export class OutboundReceiptTableComponent implements OnInit {
  //仓库
  public warehouses: SelectItem[];
  public startDate: Date;
  public endDate: Date;
  public items: Array<any>;
  public selectedInbentory;
  
  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService,
    private outboundReceiptService: OutboundReceiptService) { }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();

    this.warehouseService.warehouses.subscribe(warehouses => {
      this.warehouses = warehouses;
    });
    this.warehouseService.getWarehouses();

    this.outboundReceiptService.outboundRecords.subscribe((items) => {
      this.items = items;
    });
    this.outboundReceiptService.getOutboundRecords();
  }

  public newReceipt() {
    this.router.navigateByUrl('/workspace/inventory/new-outbound-receipt/receipt-no/IN-1-2222222');
  }

  public receiptDetail() {
    this.router.navigateByUrl('/workspace/inventory/outbound-receipt-detail/receipt-no/IN-1-2222222');
  }

  public printReceipt() {
    window.print();
  }
}
