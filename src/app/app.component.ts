import { Component, Input } from '@angular/core';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LSEG';

  articleComponent: ArticleComponent;
  constructor(){
    this.articleComponent = new ArticleComponent();

  }
  onUpdate(obj){

    console.log("Obj: ", obj);
    this.articleComponent.thumbnail= obj.thumbnail;
    this.articleComponent.title = obj.title;
    this.articleComponent.ngOnInit();
    console.log("this.articleComponent: ",this);
  }
}
