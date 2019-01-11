import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  providers:[ArticleComponent],
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Output() OnArticleListClick = new EventEmitter<boolean>();
  articlelist : {};
  constructor(private _article: ArticleComponent ) {
    this.articlelist = { Articles :
        [
            { id:1, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
            { id:2, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone2', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
            { id:3, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone3', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
            { id:4, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone4', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
            { id:5, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone5', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' }
        ]
    };
  }

  ngOnInit() {

  }

  onClick(article){
    console.log("article: ", article);
    this.OnArticleListClick.emit(article);

    // this._article = new ArticleComponent();
    this._article.setThumbnail(article.articleThumbnail);
    this._article.setTitle(article.title);
    this._article.ngOnInit();
  }

}
