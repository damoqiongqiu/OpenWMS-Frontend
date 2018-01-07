import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'vendor-table',
  templateUrl: './vendor-table.component.html',
  styleUrls: ['./vendor-table.component.scss']
})
export class VendorTableComponent implements OnInit {

  constructor(public router: Router,public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public newVendorForm(){
    this.router.navigateByUrl('/workspace/basic-data/vendor-form');
  }
}
