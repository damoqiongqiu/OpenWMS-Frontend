import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'enter-warehouse-table',
  templateUrl: './enter-warehouse-table.component.html',
  styleUrls: ['./enter-warehouse-table.component.scss']
})
export class EnterWarehouseTableComponent implements OnInit {

  constructor(public router: Router,public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public enterForm(){
    this.router.navigateByUrl('/workspace/inventory/enter-form');
  }
}
