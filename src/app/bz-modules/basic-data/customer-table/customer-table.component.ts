import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { CustomerService } from '../../../common/services/customer.service';

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  public customers: Array<any>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.customers.subscribe((customers) => {
      this.customers = customers;
    });
    this.customerService.getCustomers();
  }

  public newCustomerForm() {
    this.router.navigateByUrl('/workspace/basic-data/customer-form');
  }
}
