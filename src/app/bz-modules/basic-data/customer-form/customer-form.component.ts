import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public backToTable(){
    this.router.navigateByUrl('/workspace/basic-data/customer-table/page/1');
  }
}
