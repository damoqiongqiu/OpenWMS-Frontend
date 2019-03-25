import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewInboundReceiptService } from '../../../shared/services/new-inbound-receipt.service';

@Component({
  selector: 'new-inbound-receipt',
  templateUrl: './new-inbound-receipt.component.html',
  styleUrls: ['./new-inbound-receipt.component.scss']
})
export class NewInboundReceiptComponent implements OnInit {
  public inboundDetail;

  constructor(private router: Router,
    private newInboundReceiptService: NewInboundReceiptService) { }

  ngOnInit() {
    this.newInboundReceiptService.getInboundDetail().subscribe((inboundDetail) => {
      this.inboundDetail = inboundDetail;
    });
  }

  public returnToTable() {
    this.router.navigateByUrl('/workspace/inventory/inbound-receipt-table/page/1');
  }

  public printReceipt() {
    window.print();
  }
}