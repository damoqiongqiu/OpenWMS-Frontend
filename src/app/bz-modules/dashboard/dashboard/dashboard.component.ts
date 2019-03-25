import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';
import Color from '../../../shared/color.util';
import * as echarts from 'echarts';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  @ViewChild('line') line: ElementRef;
  @ViewChild('bar') bar: ElementRef;
  lineEchart;
  barEchart;
  public barChart = {
    title: {
      text: '库存金额变化',
      subtext: '纯属虚构',
      x: 'center'
    },
    color: Color.baseColor,
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
    color: Color.baseColor,
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
        data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 39, 16, 199]
      },
      {
        name: '访问量',
        type: 'line',
        data: [21, 21, 25, 23, 22, 23, 20, 223, 200, 109, 26, 299]
      },
      {
        name: '访问量',
        type: 'line',
        data: [31, 31, 35, 33, 32, 33, 30, 323, 300, 209, 36, 399]
      },
      {
        name: '访问量1',
        type: 'line',
        data: [41, 41, 45, 43, 42, 43, 40, 423, 400, 309, 46, 499]
      },
      {
        name: '访问量2',
        type: 'line',
        data: [51, 51, 55, 53, 52, 53, 50, 523, 500, 409, 56, 599]
      },
      {
        name: '访问量3',
        type: 'line',
        data: [61, 61, 65, 63, 62, 63, 60, 623, 600, 509, 66, 699]
      },
      {
        name: '访问量4',
        type: 'line',
        data: [71, 71, 75, 73, 72, 73, 70, 723, 700, 609, 76, 799]
      },
      {
        name: '访问量5',
        type: 'line',
        data: [81, 81, 85, 83, 82, 83, 80, 823, 800, 709, 86, 899]
      },
      {
        name: '访问量6',
        type: 'line',
        data:  [91, 91, 95, 93, 92, 93, 90, 923, 900, 809, 96, 999]
      },
      {
        name: '访问量7',
        type: 'line',
        data:  [101, 101, 105, 103, 102, 103, 100, 1000, 1000, 909, 106, 1099]
      },
      {
        name: '访问量8',
        type: 'line',
        data: [111, 111, 115, 113, 112, 113, 110, 1100, 1100, 1009, 116, 1199]
      },
      {
        name: '访问量9',
        type: 'line',
        data: [121, 121, 125, 123, 122, 123, 120, 1200, 1200, 1109, 126, 1299]
      },
      {
        name: '访问量10',
        type: 'line',
        data: [131, 131, 135, 133, 132, 133, 130, 1300, 1300, 1209, 136, 1399]
      }
    ]
  };

  constructor() {}

  ngOnInit() {
   this.lineEchart = echarts.init(this.line.nativeElement);
   this.lineEchart.setOption(this.lineChart)
   this.barEchart = echarts.init(this.bar.nativeElement);
   this.barEchart.setOption(this.barChart)
  }
}
