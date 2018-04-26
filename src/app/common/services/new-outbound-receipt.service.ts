import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonService } from './common-service';

@Injectable()
export class NewOutboundReceiptService extends CommonService{
  public getOutboundDetail():Observable<any> {
    return this.hc.get(this.baseURL+"my-test-data/out-receipt.json");
  }
}