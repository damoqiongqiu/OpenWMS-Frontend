import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../shared/services/warehouse.service";
import { CategoryService } from "../../../shared/services/category.service";
import { OutboundReceiptService } from '../../../shared/services/outbound-receipt.service';

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

    this.warehouseService.getWarehouses().subscribe(warehouses => {
      this.warehouses = warehouses;
    });

    this.outboundReceiptService.getOutboundRecords().subscribe((items) => {
      this.items = items;
    });
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
