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
        name: 'demo1',
        type: 'line',
        data: [31, 31, 45, 53, 62, 73, 108, 523, 500, 199, 56, 299]
      },
      {
        name: 'demo2',
        type: 'line',
        data: [51, 51, 65, 63, 32, 53, 130, 423, 500, 599, 656, 199]
      },
      {
        name: 'demo3',
        type: 'line',
        data: [61, 35, 46, 589, 627, 730, 188, 343, 550, 699, 556, 269]
      },
      {
        name: 'demo4',
        type: 'line',
        data: [31, 31, 45, 53, 62, 73, 108, 523, 500, 199, 56, 299]
      },
      {
        name: 'demo5',
        type: 'line',
        data: [51, 51, 65, 63, 32, 53, 130, 423, 500, 599, 656, 199]
      },
      {
        name: 'demo6',
        type: 'line',
        data: [61, 35, 46, 589, 627, 730, 188, 343, 550, 699, 556, 269]
      },
      {
        name: 'demo7',
        type: 'line',
        data: [51, 51, 65, 63, 32, 53, 130, 423, 500, 599, 656, 199]
      },
      {
        name: '邮件营销',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210, 63, 32, 53, 130, 423]
      },
      {
        name: '联盟广告',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310, 589, 627, 730, 188, 343]
      },
      {
        name: '视频广告',
        type: 'line',
        data: [150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310 ]
      },
      {
        name: '直接访问',
        type: 'line',
        data: [320, 332, 301, 334, 390, 330, 320 , 154, 190, 330, 410, 191 ]
      },
      {
        name: '搜索引擎',
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 334, 390, 330, 320 , 154]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
