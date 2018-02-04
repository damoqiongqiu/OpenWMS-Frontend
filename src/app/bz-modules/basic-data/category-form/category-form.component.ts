import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  public createTime = new Date();

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }

  public saveCategory() {

  }

  public backToTable() {
    this.router.navigateByUrl('/workspace/basic-data/category-table/page/1');
  }
}
