import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public backToTable() {
    this.router.navigateByUrl('/workspace/basic-data/vendor-table/page/1');
  }
}
