import React, {Component} from 'react';
import Article from './Article';
import accordion from "../Decorators/Accordion";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class ArticleList extends Component{

   static propTypes = {
      //from accordion
      openedArtID: PropTypes.string,
      toggleAccordion: PropTypes.func.isRequired
   };

   render(){
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
         <ol className="articles-container">
            {articleComponents}
         </ol>
      );
   }
}

export default connect( ({articles}) => ({
   articles
}))(accordion(ArticleList));