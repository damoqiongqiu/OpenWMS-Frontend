import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'inventory-item-detail',
  templateUrl: './inventory-item-detail.component.html',
  styleUrls: ['./inventory-item-detail.component.scss']
})
export class InventoryItemDetailComponent implements OnInit {
  public echartInstance;

  public options = {};

  constructor(public router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public backToList(): void {
    this.router.navigateByUrl('/workspace/inventory/inventory-table/page/1');
  }

  public printBill() {
    window.print();
  }

  public onChartInit(ec) {
    this.echartInstance = ec;
    this.options = {
      title: {
        text: '库存变化曲线',
        subtext: '纯属虚构',
        x: "center"
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} 个'
        }
      },
      series: [
        {
          name: '入库',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
        },
        {
          name: '出库',
          type: 'line',
          data: [110, 110, 150, 130, 120, 130, 100, 1230, 1000, 990, 660, 1990]
        }
      ]
    };
    setTimeout(() => {
      this.echartInstance.setOption(this.options);
    }, 500);
  }
}
