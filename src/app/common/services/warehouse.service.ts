import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class WarehouseService extends CommonService {
  public getWarehouses(): Observable<any> {
    return this.hc.get(this.apiURL.warehouses);
  }
}
