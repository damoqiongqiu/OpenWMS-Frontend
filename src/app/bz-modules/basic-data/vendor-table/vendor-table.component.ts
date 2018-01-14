import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
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
    private vendorService: VendorService) { }

  ngOnInit() {
    this.vendorService.vendors.subscribe((vendors) => {
      this.vendors = vendors;
    });
    this.vendorService.getVendors();
  }

  public newVendorForm() {
    this.router.navigateByUrl('/workspace/basic-data/vendor-form');
  }
}
