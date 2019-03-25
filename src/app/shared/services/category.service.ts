import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";

@Injectable()
export class CategoryService extends CommonService {
  public getCategories(): Observable<any> {
    return this.hc.get(this.apiURL.categories);
  }
}
