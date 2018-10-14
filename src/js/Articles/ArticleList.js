import React, {Component} from 'react';
import {articles} from './../fixtures';
import Article from './Article';

function ArticleList(){
   const articleComponents = articles.map( (article) => (<li key={article.id}><Article article={article} /></li>) );
   return (
      <ol className="articles-container">
         {articleComponents}
      </ol>
   );
}

export default ArticleList;