import React, {Component} from 'react';
import {articles} from './../fixtures';
import Article from './Article';
import Accordion from "../Decorators/Accordion";

class ArticleList extends Component{

   render(){
      const {openedArtID, toggleAccordion} = this.props;
      const articleComponents = articles.map( (article) =>
         <li key={article.id}><Article isOpen={openedArtID === article.id} article={article} toggleOpen={toggleAccordion}/></li>
      );
      return (
         <ol className="articles-container">
            {articleComponents}
         </ol>
      );
   }
}

export default Accordion(ArticleList);