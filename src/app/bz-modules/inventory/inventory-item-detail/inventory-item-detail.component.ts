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
      color: [
        '#25859e',
        '#6acece',
        '#e78816',
        '#eabc7f',
        '#12619d',
        '#ad2532',
        '#15938d',
        '#b3aa9b',
        '#042d4c'
      ],
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
        },
        {
          name: '进库',
          type: 'line',
          data: [210, 310, 250, 230, 220, 230, 200, 230, 1500, 990, 660, 590]
        },
        {
          name: '库1',
          type: 'line',
          data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
        },
        {
          name: '库2',
          type: 'line',
          data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
        },
        {
          name: '库3',
          type: 'line',
          data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
        },
        {
          name: '库4',
          type: 'line',
          data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
        },
        {
          name: '库5',
          type: 'line',
          data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
        },
        {
          name: '库6',
          type: 'line',
          data: [510, 370, 290, 390, 420, 230, 300, 830, 600, 590, 760, 1590]
        }

      ]
    };
    setTimeout(() => {
      this.echartInstance.setOption(this.options);
    }, 500);
  }
}
