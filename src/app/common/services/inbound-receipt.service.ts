import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CommonService } from "./common-service";

@Injectable()
export class InboundReceiptService extends CommonService {
  public getInboundRecords(): Observable<any> {
    return this.hc.get(this.apiURL.inboundRecords);
  }
}
