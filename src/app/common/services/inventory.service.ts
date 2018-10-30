import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class InventoryService extends CommonService {
  public getInventories(warehouseId: string): Observable<any> {
    return this.hc.get(this.apiURL.inventories);
  }
}
