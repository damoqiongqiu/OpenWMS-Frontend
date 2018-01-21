import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'outbound-receipt-detail',
  templateUrl: './outbound-receipt-detail.component.html',
  styleUrls: ['./outbound-receipt-detail.component.scss']
})
export class OutboundReceiptDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public returnToTable() {
    this.router.navigateByUrl('/workspace/inventory/outbound-receipt-table/page/1');
  }

  public printReceipt() {
    window.print();
  }
}
