import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'warehouse-form',
  templateUrl: './warehouse-form.component.html',
  styleUrls: ['./warehouse-form.component.scss']
})
export class WarehouseFormComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public backToTable() {
    this.router.navigateByUrl('/workspace/basic-data/warehouse-table/page/1');
  }
}
