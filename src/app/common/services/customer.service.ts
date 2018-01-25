import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomerService {
  public customers: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() { }

  public getCustomers() {
    var customers = [
      { id: '-1', customerName: 'Agnès B. ', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Agnona', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Bang&Qlufsen ', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Cartier', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Cerruti 1881', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Chanel Fine Jewelry', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Christian Louboutin', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Comme des GarÇons', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Corneliani', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' },
      { id: '-1', customerName: 'Corneliani', addr: '北京市朝阳区金融街购物中心', contact: '倪建伟', gender: '男', duty: '销售总监', cellphone: '12345789000' }
    ];
    this.customers.next(customers);
  }
}
