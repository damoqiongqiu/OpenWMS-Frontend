import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class StaffService extends CommonService {
  public getStaffs(): Observable<any> {
    return this.hc.get(this.apiURL.staffs);
  }
}
