import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { CustomerService } from '../../../common/services/customer.service';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  public customers: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private customerService: CustomerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.customerService.customers.subscribe((customers) => {
      this.customers = customers;
    });
    this.customerService.getCustomers();
  }

  public newCustomerForm(item?: {}) {
    this.router.navigateByUrl('/workspace/basic-data/customer-form');
  }

  public delCustomer(item) {
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        console.log(item);
        this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
      }
    });
  }
}
