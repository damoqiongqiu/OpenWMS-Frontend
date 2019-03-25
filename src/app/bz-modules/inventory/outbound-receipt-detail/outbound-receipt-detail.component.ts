import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OutboundReceiptDetailService } from "../../../shared/services/outbound-receipt-detail.service";

@Component({
  selector: "outbound-receipt-detail",
  templateUrl: "./outbound-receipt-detail.component.html",
  styleUrls: ["./outbound-receipt-detail.component.scss"]
})
export class OutboundReceiptDetailComponent implements OnInit {
  public outboundDetail: { [key: string]: string };

  constructor(private router: Router, private outboundReceiptDetailService: OutboundReceiptDetailService) { }

  ngOnInit() {
    this.outboundReceiptDetailService.getOutboundDetail().subscribe(outboundDetail => {
      this.outboundDetail = outboundDetail;
    });
  }

  public returnToTable() {
    this.router.navigateByUrl("/workspace/inventory/outbound-receipt-table/page/1");
  }

  public printReceipt() {
    window.print();
  }
}
