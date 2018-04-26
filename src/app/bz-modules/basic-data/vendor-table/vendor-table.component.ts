import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { VendorService } from '../../../common/services/vendor.service';

@Component({
  selector: 'vendor-table',
  templateUrl: './vendor-table.component.html',
  styleUrls: ['./vendor-table.component.scss']
})
export class VendorTableComponent implements OnInit {
  public vendors: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private vendorService: VendorService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.vendorService.getVendors().subscribe((vendors) => {
      this.vendors = vendors;
    });
  }

  public newVendorForm(item?:{}) {
    this.router.navigateByUrl('/workspace/basic-data/vendor-form');
  }

  public editVendor(item) {
    this.newVendorForm(item);
  }

  public delVendor(item) {
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        console.log(item);
        this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
      }
    });
  }
}
