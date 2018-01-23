import { Component, OnInit } from '@angular/core';

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
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: "{b}月{a}:{c}"
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
        data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
      }
    ]
  };

  public lineChart = {
    title: {
      text: '库存量变化',
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
        formatter: '{value} 次'
      }
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
