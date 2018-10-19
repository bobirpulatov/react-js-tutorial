import React, {Component} from 'react';
import Article from './Article';
import accordion from "../Decorators/Accordion";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Counter from './../Counter';

class ArticleList extends Component{

   static propTypes = {
      //from accordion
      openedArtID: PropTypes.string,
      toggleAccordion: PropTypes.func.isRequired
   };

   render(){
      console.log('upd-art-list');
      const {openedArtID, toggleAccordion, articles} = this.props;
      const articleComponents = articles.map( (article) =>
         <li key={article.id}>
            <Article
               isOpen={openedArtID === article.id}
               article={article}
               toggleOpen={toggleAccordion(article.id) }/>
         </li>
      );
      return (
         <div className="all-blocks">
            <ol className="articles-container">
               {articleComponents}
            </ol>
         </div>

      );
   }
}

export default connect( ({articles}) => ({
   articles
}))(accordion(ArticleList));