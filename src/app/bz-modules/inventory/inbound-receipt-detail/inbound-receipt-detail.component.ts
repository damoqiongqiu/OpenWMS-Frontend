import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InboundReceiptDetailService } from '../../../common/services/inbound-receipt-detail.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'inbound-receipt-detail',
  templateUrl: './inbound-receipt-detail.component.html',
  styleUrls: ['./inbound-receipt-detail.component.scss']
})
export class InboundReceiptDetailComponent implements OnInit {
  //TODO:use async pipe replace this
  public inboundDetail:Observable<any>=Observable.of({});

  constructor(private router: Router,
    private inboundReceiptDetailService: InboundReceiptDetailService) { }

  ngOnInit() {
    this.inboundReceiptDetailService.getInboundDetail().subscribe((inboundDetail) => {
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
