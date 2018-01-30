import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InboundReceiptService {
  constructor(private hc: HttpClient) {

  }

  public getInboundRecords():Observable<any> {
    return this.hc.get("/my-test-data/inbound-records.json");
  }
}