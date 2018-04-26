import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonService } from './common-service';

@Injectable()
export class InboundReceiptDetailService extends CommonService{
  public getInboundDetail():Observable<any> {
    return this.hc.get(this.baseURL+"my-test-data/inbound-details.json");
  }
}
