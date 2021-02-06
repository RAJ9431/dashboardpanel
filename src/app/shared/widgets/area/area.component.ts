import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
HC_map(Highcharts);

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent {

  constructor() { }
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: [1, 2, 3, 4, 5]
      }
    ]
  };
}
