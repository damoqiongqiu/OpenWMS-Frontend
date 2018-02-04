import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorModel } from '../../../common/model/vendor-model';

@Component({
  selector: 'vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {
  public vendor: VendorModel=new VendorModel();

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }

  public backToTable() {
    this.router.navigateByUrl('/workspace/basic-data/vendor-table/page/1');
  }
}
