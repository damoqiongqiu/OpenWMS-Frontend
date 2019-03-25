import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewOutboundReceiptService } from '../../../shared/services/new-outbound-receipt.service';

@Component({
  selector: 'new-outbound-receipt',
  templateUrl: './new-outbound-receipt.component.html',
  styleUrls: ['./new-outbound-receipt.component.scss']
})
export class NewOutboundReceiptComponent implements OnInit {

  public outboundDetail;

  constructor(private router: Router,
    private newOutboundReceiptService: NewOutboundReceiptService) { }

  ngOnInit() {
    this.newOutboundReceiptService.getOutboundDetail().subscribe((outboundDetail) => {
      this.outboundDetail = outboundDetail;
    });
  }

  public returnToTable() {
    this.router.navigateByUrl('/workspace/inventory/outbound-receipt-table/page/1');
  }

  public printReceipt() {
    window.print();
  }
}
