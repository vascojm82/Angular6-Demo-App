import { Component, Input } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LSEG';
}
