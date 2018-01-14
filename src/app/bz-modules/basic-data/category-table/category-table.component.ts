import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { CategoryService } from '../../../common/services/category.service';

@Component({
  selector: 'category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  public categories: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.categories.subscribe((categories) => {
      this.categories = categories;
    });
    this.categoryService.getCategories();
  }

  public newCategoryForm() {
    this.router.navigateByUrl('/workspace/basic-data/category-form');
  }
}
