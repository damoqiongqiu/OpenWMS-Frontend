import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonService } from './common-service';

@Injectable()
export class OutboundReceiptService extends CommonService{
  public getOutboundRecords():Observable<any> {
    return this.hc.get(this.baseURL+"my-test-data/outbound-records.json");
  }
}
