import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleServiceService } from '../article-service.service';
// import { BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() summary: string;
  @Input() publishedDate: string;
  @Input() thumbnail: string;
  @Input() link: string;
  @Input() author: string;

  default = { id:1, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' }

  _thumbnail: string;
  _title: string;
  _summary: string;
  _author: string;
  _publishedDate: string;
  _link: string;

  message: any;
  subscription: Subscription;
  // private _someVal = new BehaviorSubject<boolean>(false);

  constructor(private messageService: ArticleServiceService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; this.updateObject();});
      console.log(this.message);
  }

  public getThumbnail(){
    return this._thumbnail;
  }

  public getTitle(){
    return this._title;
  }

  public getSummary(){
    return this._summary;
  }

  public getAuthor(){
    return this._author;
  }

  public getPublishedDate(){
    return this._publishedDate;
  }

  public getLink(){
    return this._link;
  }

  public setThumbnail(article){
    this._thumbnail = article;
    console.log("this._thumbnail: ",this._thumbnail);
  }

  public setTitle(article){
    this._title = article;
    console.log("this._title: ",this._title);
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  ngOnInit() {
    this._thumbnail = this.default.articleThumbnail;
    this._summary = this.default.summary;
    this._author = this.default.author;
    this._title = this.default.title;
    this._publishedDate = this.default.publishedDate;
    this._link = this.default.link;
  }

  updateObject() {
    console.log("updateObject: ",this.message.any);
    this._thumbnail = this.message.any.articleThumbnail;
    this._summary = this.message.any.summary;
    this._author = this.message.any.author;
    this._title = this.message.any.title;
    this._publishedDate = this.message.any.publishedDate;
    this._link = this.message.any.link;
  }

}
