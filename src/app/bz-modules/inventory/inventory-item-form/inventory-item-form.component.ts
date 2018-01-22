import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'inventory-item-form',
  templateUrl: './inventory-item-form.component.html',
  styleUrls: ['./inventory-item-form.component.scss']
})
export class InventoryItemFormComponent implements OnInit {

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
