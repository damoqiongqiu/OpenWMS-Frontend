import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OutboundReceiptDetailService } from '../../../common/services/outbound-receipt-detail.service';

@Component({
  selector: 'outbound-receipt-detail',
  templateUrl: './outbound-receipt-detail.component.html',
  styleUrls: ['./outbound-receipt-detail.component.scss']
})
export class OutboundReceiptDetailComponent implements OnInit {
  public outboundDetail;

  constructor(private router: Router,
    private outboundReceiptDetailService: OutboundReceiptDetailService) { }

  ngOnInit() {
    this.outboundReceiptDetailService.outboundDetail.subscribe((outboundDetail) => {
      this.outboundDetail = outboundDetail;
    });
    this.outboundReceiptDetailService.getOutboundDetail();
  }

  public returnToTable() {
    this.router.navigateByUrl('/workspace/inventory/outbound-receipt-table/page/1');
  }

  public printReceipt() {
    window.print();
  }
}
