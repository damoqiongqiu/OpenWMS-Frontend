import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as echarts from 'echarts';

@Component({
  selector: 'inventory-item-detail',
  templateUrl: './inventory-item-detail.component.html',
  styleUrls: ['./inventory-item-detail.component.scss']
})
export class InventoryItemDetailComponent implements OnInit {

  constructor(public router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public backToList(): void {
    this.router.navigateByUrl('/workspace/inventory/inventory-table/page/1');
  }

  public printBill() {
    window.print();
  }
}
