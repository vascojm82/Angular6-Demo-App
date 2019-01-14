import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.css']
})

export class ChartComponent implements OnInit {
  ctx: any;
  chart: any;
  ngOnInit(){
    this.ctx = document.getElementById("canvas");
    console.log(this.ctx);
    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          label: 'Article1',
          data: [12, 19, 3, 17, 28, 24, 7],
          backgroundColor: "rgba(153,255,51,1)"
        }, {
          label: 'Article2',
          data: [30, 29, 5, 5, 20, 3, 10],
          backgroundColor: "rgba(255,153,0,1)"
        }]
      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]}
      }
    });
  }
}
