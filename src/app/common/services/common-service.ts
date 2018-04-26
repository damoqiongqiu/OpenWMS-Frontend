import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {
    //baseURL from evn config located in src/environments
    protected baseURL:string="";
    protected dataURL:string="";
    
    constructor(protected hc: HttpClient) {
        this.baseURL=(<any>window).environment.apiBaseURL;
    }
}
