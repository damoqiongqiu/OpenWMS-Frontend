import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class InboundReceiptDetailService extends CommonService {
  public getInboundDetail(): Observable<any> {
    return this.hc.get(this.apiURL.inboundDetails);
  }
}
