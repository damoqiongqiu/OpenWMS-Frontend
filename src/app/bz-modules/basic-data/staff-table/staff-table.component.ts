import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { StaffService } from '../../../common/services/staff.service';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.scss']
})
export class StaffTableComponent implements OnInit {
  public staffs: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private staffService: StaffService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.staffService.staffs.subscribe((staffs) => {
      this.staffs = staffs;
    });
    this.staffService.getStaffs();
  }

  public newStaffForm(item?:{}) {
    this.router.navigateByUrl('/workspace/basic-data/staff-form');
  }

  public editStaff(item) {
    this.newStaffForm(item);
  }

  public delStaff(item) {
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        console.log(item);
        this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
      }
    });
  }
}