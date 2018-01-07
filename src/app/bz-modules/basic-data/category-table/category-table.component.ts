import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  constructor(public router: Router,public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public newCategoryForm(){
    this.router.navigateByUrl('/workspace/basic-data/category-form');
  }
}
