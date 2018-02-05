import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class VendorService {
  public vendors: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getVendors() {
    var vendors = [
      { id: '-1', index: 1, vendorName: '安徽南澳地毯有限公司', addr: '安徽省淮南市八公山区毕家岗火车站对面', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 2, vendorName: '蚌埠市双环电子集团有限公司', addr: '安徽省蚌埠市禹会区兴中路818号', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 3, vendorName: '镁联科技（芜湖）有限公司', addr: '安徽省芜湖市马塘区高新技术产业区', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 4, vendorName: '芜湖维丰塑料电器有限公司', addr: '安徽省芜湖市高新技术开发区汽配路中段', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 5, vendorName: '福建振中电器制造有限公司', addr: '福州市台江区苍霞新城嘉盛苑2号楼三层', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 6, vendorName: '佛山启新模具厂', addr: ' 广东省佛山市南海区里水镇布新开发区(里官路和佛山一环交叉处)', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 7, vendorName: '光普司电子科技有限公司', addr: '广州市白云大道南金钟横路旧机场东门18号雅艺大厦B座702', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 8, vendorName: '广东大华仁盛科技有限公司', addr: '广州市白云区北太路1633号民营科技园科盛路1号863大厦', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 9, vendorName: '广州彩虹五金弹簧有限公司', addr: '黄埔区夏园中路工业区第六栋', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() },
      { id: '-1', index: 10, vendorName: '广州市华劲机械有限公司', addr: '广州市增城区永宁街翟洞村新屋社', contact: '李伟建', duty: '销售总监', cellphone: '15922097425', telephone: '025-95555', fax: '00000000', postCode: '200008', email: '15922097425@139.com', remark: '这是一条备注，可以写长一点。', createTime: new Date() }
    ];
    this.vendors.next(vendors);
  }
}
