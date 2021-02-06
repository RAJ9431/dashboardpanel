import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
HC_map(Highcharts);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor() { }

  // tslint:disable-next-line:member-ordering
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Random DATA'
    },
    subtitle: {
      text: 'Demo'
    },
    tooltip: {
      split: true,
      valueSuffix: ' millions'
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false,
    },
    series: [
      {
        type: 'line',
        data: [105, 2089, 356, 400, 534]
      }
    ]
  };

  ngOnInit(): void {
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize'));
    }, 300);
  }

}
