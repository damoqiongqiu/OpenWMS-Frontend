import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'shift-warehouse-table',
  templateUrl: './shift-warehouse-table.component.html',
  styleUrls: ['./shift-warehouse-table.component.scss']
})
export class ShiftWarehouseTableComponent implements OnInit {
  //品类
  public categories:SelectItem[];
  //记录类型
  public recordTypes:SelectItem[];
  //商品
  public items:Array<any>;

  constructor(public router: Router,public activeRoute: ActivatedRoute) {

      this.categories=[
        {label:'手机',value:null},
        {label:'服装',value:null},
        {label:'日化',value:null},
        {label:'箱包',value:null},
        {label:'家电',value:null}
      ];

      this.recordTypes=[
        {label:'全部',value:0},
        {label:'入库',value:1},
        {label:'出库',value:2},
        {label:'调库',value:3},
        {label:'退库',value:4},
        {label:'库损',value:5}
      ];

      this.items=[
        {index:1,inventoryName:'京东南京一号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:2,inventoryName:'京东南京二号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:3,inventoryName:'京东南京三号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:4,inventoryName:'京东南京四号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:5,inventoryName:'京东南京五号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:6,inventoryName:'京东上海一号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:7,inventoryName:'京东上海二号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:8,inventoryName:'京东上海三号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:9,inventoryName:'京东上海四号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'},
        {index:10,inventoryName:'京东上海五号库',category:'手机',serialNum:'1-222222',itemName:'iPhone X',itemUnit:'个',spec:'商品规格',costPrice:'2000',stocks:'65535',maxStocks:'65536',minStocks:'1'}
      ];
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
    );
  }

  public addShift(): void {
    this.router.navigateByUrl('/workspace/inventory/add-shift');
  }
}
