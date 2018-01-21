import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'inbound-receipt-detail',
  templateUrl: './inbound-receipt-detail.component.html',
  styleUrls: ['./inbound-receipt-detail.component.scss']
})
export class InboundReceiptDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public returnToTable() {
    this.router.navigateByUrl('/workspace/inventory/inbound-receipt-table/page/1');
  }

  public printReceipt() {
    window.print();
  }
}
