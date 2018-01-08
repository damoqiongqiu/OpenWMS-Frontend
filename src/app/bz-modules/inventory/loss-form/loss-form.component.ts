import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'loss-form',
  templateUrl: './loss-form.component.html',
  styleUrls: ['./loss-form.component.scss']
})
export class LossFormComponent implements OnInit {

  constructor(public router: Router,public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public backToList():void {
    this.router.navigateByUrl('/workspace/inventory/loss-table/page/1');
  }
}
