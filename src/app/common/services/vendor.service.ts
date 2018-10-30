import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class VendorService extends CommonService {
  public getVendors(): Observable<any> {
    return this.hc.get(this.apiURL.vendors);
  }
}
