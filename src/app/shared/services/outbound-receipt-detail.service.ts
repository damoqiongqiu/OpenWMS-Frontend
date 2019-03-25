import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class OutboundReceiptDetailService extends CommonService {
  public getOutboundDetail(): Observable<any> {
    return this.hc.get(this.apiURL.outboundDetail);
  }
}
