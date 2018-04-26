import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonService } from './common-service';

@Injectable()
export class CustomerService extends CommonService{
  public getCustomers():Observable<any> {
    return this.hc.get(this.baseURL+"my-test-data/customers.json");
  }
}
