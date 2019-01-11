import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-rating',
  templateUrl: './article-rating.component.html',
  styleUrls: ['./article-rating.component.css']
})
export class ArticleRatingComponent implements OnInit {
  articleAuthors : {};
  constructor() {
    this.articleAuthors = {
      author_Articles: [
        {
          id: 1,
          author: "Someone",
          articles: [
             {
               name: "First Article",
               rating: 4,
             },
             {
               name: "Second Article",
               rating: 5,
             },
             {
               name: "Third Article",
               rating: 2,
             }
          ]
       },
       {
         id: 2,
         author: "Someone2",
         articles: [
            {
              name: "First Article",
              rating: 1,
            },
            {
              name: "Second Article",
              rating: 1,
            },
            {
              name: "Third Article",
              rating: 1,
            }
         ]
      },
      {
        id: 3,
        author: "Someon3",
        articles: [
           {
             name: "First Article",
             rating: 2,
           },
           {
             name: "Second Article",
             rating: 5,
           },
           {
             name: "Third Article",
             rating: 2,
           }
        ]
      }]
    }
  }

  ngOnInit(){

  }

  generateRating(rating){
    let ratingStr = '';

    for(let i=0; i<rating; i++){
      ratingStr += '*';
    }

    return ratingStr;
  }

}
