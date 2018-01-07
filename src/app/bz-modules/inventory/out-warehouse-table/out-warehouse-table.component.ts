import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'out-warehouse-table',
  templateUrl: './out-warehouse-table.component.html',
  styleUrls: ['./out-warehouse-table.component.scss']
})
export class OutWarehouseTableComponent implements OnInit {

  constructor(public router: Router,public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public outForm(){
    this.router.navigateByUrl('/workspace/inventory/out-form');
  }
}
