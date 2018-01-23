import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class VendorService {
  public vendors: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getVendors() {
    var vendors = [
      { id: '-1', index: 1, vendorName: '安徽南澳地毯有限公司', addr: '安徽合肥', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 2, vendorName: '蚌埠市双环电子集团有限公司', addr: '安徽蚌埠', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 3, vendorName: '镁联科技（芜湖）有限公司', addr: '安徽芜湖', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 4, vendorName: '芜湖维丰塑料电器有限公司', addr: '安徽芜湖', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 5, vendorName: '福建振中电器制造有限公司', addr: '福建福州', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 6, vendorName: '佛山启新模具厂', addr: '广东佛山', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 7, vendorName: '光普司电子科技有限公司', addr: '广东惠州', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 8, vendorName: '广东大华仁盛科技有限公司', addr: '广东广州', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 9, vendorName: '广州彩虹五金弹簧有限公司', addr: '广东广州', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' },
      { id: '-1', index: 10, vendorName: '广州市华劲机械有限公司', addr: '广东广州', contact: '李伟建', duty: '销售总监', cellphone: '12345678900', fax: '00000000' }
    ];
    this.vendors.next(vendors);
  }
}
