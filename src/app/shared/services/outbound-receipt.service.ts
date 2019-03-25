import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class OutboundReceiptService extends CommonService {
  public getOutboundRecords(): Observable<any> {
    return this.hc.get(this.apiURL.outboundRecords);
  }
}
