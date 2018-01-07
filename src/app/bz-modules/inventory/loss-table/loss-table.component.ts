import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'loss-table',
  templateUrl: './loss-table.component.html',
  styleUrls: ['./loss-table.component.scss']
})
export class LossTableComponent implements OnInit {

  constructor(public router: Router,public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public lossForm(){
    this.router.navigateByUrl('/workspace/inventory/loss-form');
  }
}
