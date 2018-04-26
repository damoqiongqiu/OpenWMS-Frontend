import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonService } from './common-service';

@Injectable()
export class StaffService extends CommonService{
  public getStaffs():Observable<any> {
    return this.hc.get(this.baseURL+"my-test-data/staffs.json");
  }
}
