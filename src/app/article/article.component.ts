import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  @Input() author: string;
  @Input() publishedDate: string;
  @Input() thumbnail: string;
  @Input() link: string;

  _thumbnail: string;
  _title: string;
  _summary: string;
  _author: string;
  _publishedDate: string;
  _link: string;

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
  //
  // public setSummary(article){
  //   return this._summary;
  // }
  //
  // public setAuthor(article){
  //   this._author = article.author;
  // }
  //
  // public setPublishedDate(article){
  //   return this._publishedDate;
  // }
  //
  // public setLink(article){
  //   return this._link;
  // }

  constructor() { }

  ngOnInit() {
    this._thumbnail = this.thumbnail;
    this._summary = this.summary;
    this._author = this.author;
    this._title = this.title;
    this._publishedDate = this.publishedDate;
    this._link = this.link;
  }

}
