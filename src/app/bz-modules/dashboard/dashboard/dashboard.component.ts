import { Component, OnInit } from '@angular/core';
import Color from '../../../utils/color.util';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public barChart = {
    title: {
      text: '库存金额变化',
      subtext: '纯属虚构',
      x: 'center'
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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{b}月{a}:{c}'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '访问量',
        type: 'bar',
        barWidth: '60%',
        itemStyle: {
          normal: {
            color: params => {
              const color = Color.genColor(this.barChart.series[0].data);
              return color[params.dataIndex];
            }
          }
        },
        data: [100, 520, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 110]
      }
    ]
  };

  public lineChart = {
    title: {
      text: '库存量变化',
      subtext: '纯属虚构',
      x: 'center'
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
        formatter: '{value} 次'
      }
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
      },
      {
        name: '访问量',
        type: 'line',
        data: [21, 21, 25, 23, 22, 23, 20, 223, 200, 109, 26, 299]
      },
      {
        name: '访问量',
        type: 'line',
        data: [31, 31, 35, 33, 32, 33, 30, 323, 300, 309, 36, 399]
      },
      {
        name: '访问量1',
        type: 'line',
        data: [41, 41, 45, 43, 42, 43, 40, 423, 400, 409, 46, 499]
      },
      {
        name: '访问量2',
        type: 'line',
        data: [51, 51, 55, 53, 52, 53, 50, 523, 500, 509, 56, 599]
      },
      {
        name: '访问量3',
        type: 'line',
        data: [61, 61, 65, 63, 62, 63, 60, 623, 600, 609, 66, 699]
      },
      {
        name: '访问量4',
        type: 'line',
        data: [71, 71, 75, 73, 72, 73, 70, 723, 700, 709, 76, 799]
      },
      {
        name: '访问量5',
        type: 'line',
        data: [81, 81, 85, 83, 82, 83, 80, 823, 800, 809, 86, 899]
      },
      {
        name: '访问量6',
        type: 'line',
        data:  [91, 91, 95, 93, 92, 93, 90, 923, 900, 909, 96, 999]
      },
      {
        name: '访问量7',
        type: 'line',
        data:  [101, 101, 105, 103, 102, 103, 100, 1023, 1000, 1009, 106, 1099]
      },
      {
        name: '访问量8',
        type: 'line',
        data: [111, 111, 115, 113, 112, 113, 110, 1123, 1100, 1109, 116, 1199]
      },
      {
        name: '访问量9',
        type: 'line',
        data: [121, 121, 125, 123, 122, 123, 120, 1223, 1200, 1209, 126, 1299]
      },
      {
        name: '访问量10',
        type: 'line',
        data: [131, 131, 135, 133, 132, 133, 130, 1323, 1300, 1309, 136, 1399]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
