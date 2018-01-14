import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { StaffService } from '../../../common/services/staff.service';

@Component({
  selector: 'staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.scss']
})
export class StaffTableComponent implements OnInit {
  public staffs: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private staffService: StaffService) { }

  ngOnInit() {
    this.staffService.staffs.subscribe((staffs) => {
      this.staffs = staffs;
    });
    this.staffService.getStaffs();
  }

  public newStaffForm() {
    this.router.navigateByUrl('/workspace/basic-data/staff-form');
  }
}
