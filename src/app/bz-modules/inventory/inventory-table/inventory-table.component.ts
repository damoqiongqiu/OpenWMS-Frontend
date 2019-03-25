import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { WarehouseService } from "../../../shared/services/warehouse.service";
import { CategoryService } from "../../../shared/services/category.service";
import { InventoryService } from '../../../shared/services/inventory.service';

@Component({
  selector: 'inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {
  //仓库
  public warehouses: SelectItem[];
  //品类
  public categories: SelectItem[];
  //记录类型
  public recordTypes: SelectItem[];
  //时间范围
  public startDate: Date;
  public endDate: Date;
  //商品
  public items: Array<any>;
  public selectedInbentory;
  public selectedCategory;
  // cols
  public cols;
  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService,
    private inventoryService: InventoryService) {

  }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();
    this.cols = [
      { field: 'index', header: 'index' },
      { field: 'itemName', header: 'itemName' },
      { field: 'bookInventory', header: 'bookInventory' },
      { field: 'realInventory', header: 'realInventory' },
      { field: 'diffInventory', header: 'diffInventory' },
      { field: 'costPrice', header: 'costPrice' },
      { field: 'total', header: 'total' },
      { field: 'warehouseName', header: 'warehouseName' },
      { field: 'cellNo', header: 'cellNo' },
      { field: 'warehouseName', header: 'warehouseName' },
    ];
    this.warehouseService.getWarehouses().subscribe((warehouses) => {
      this.warehouses = warehouses;
    });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.inventoryService.getInventories("-1").subscribe((items) => {
      this.items = items;
    });
  }

  public editItem(item) {
    console.log(item);
    this.router.navigateByUrl('/workspace/inventory/inventory-item-detail/item-id/1111');
  }

  public delItem(item) {
    console.log(item);
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        console.log(item);
        this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
      }
    });
  }
}
