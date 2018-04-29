import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewInboundReceiptService } from '../../../common/services/new-inbound-receipt.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'new-inbound-receipt',
  templateUrl: './new-inbound-receipt.component.html',
  styleUrls: ['./new-inbound-receipt.component.scss']
})
export class NewInboundReceiptComponent implements OnInit {

  public inboundDetail=Observable.of({});

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