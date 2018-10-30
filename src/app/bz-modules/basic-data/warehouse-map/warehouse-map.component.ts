import { Component, OnInit } from "@angular/core";

@Component({
  selector: "warehouse-map",
  templateUrl: "./warehouse-map.component.html",
  styleUrls: ["./warehouse-map.component.scss"]
})
export class WarehouseMapComponent implements OnInit {
  public echartInstance;
  public options = {}; //不可设置为null，设置为null会导致图表不能渲染

  constructor() {}

  ngOnInit() {}

  public onChartInit(ec) {
    this.echartInstance = ec;
    this.options = {
      title: [
        {
          textStyle: {
            color: "#000",
            fontSize: 18
          },
          subtext: "",
          text: "仓库分布图",
          top: "auto",
          subtextStyle: {
            color: "#333",
            fontSize: 12
          },
          left: "auto"
        }
      ],
      legend: [
        {
          selectedMode: "multiple",
          top: "top",
          orient: "horizontal",
          data: [""],
          left: "center",
          show: true
        }
      ],
      backgroundColor: "#fff",
      series: [
        {
          mapType: "中国",
          data: [],
          name: "",
          symbol: "circle",
          type: "map",
          roam: true
        }
      ]
    };
  }

  public onChartClick($event) {
    console.log($event);
  }
}
