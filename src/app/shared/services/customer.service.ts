import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class CustomerService extends CommonService {
  public getCustomers(): Observable<any> {
    return this.hc.get(this.apiURL.customers);
  }
}
