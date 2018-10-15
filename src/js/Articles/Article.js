import React, {Component} from 'react';
import CommentList from './Comments/CommentList';
import PropTypes from "prop-types";

class Article extends Component{
   static propTypes = {
      article: PropTypes.shape({
         id: PropTypes.string.isRequired,
         date: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         text: PropTypes.string.isRequired,
         comments: PropTypes.array
      }).isRequired,
      //from accordion
      openedArtID: PropTypes.string,
      toggleOpen: PropTypes.func.isRequired
   };

   render(){
      const {isOpen, toggleOpen, article} = this.props;
      const {id, title, date} = article;

      return (
         <div className="each-article-container">
            <h4>{title} &mdash; <small>{new Date(date).toLocaleTimeString()}</small></h4>
            <button className="article-toggler" onClick={ toggleOpen }>
               { (isOpen) ? 'Hide article' : 'Show article' }</button>
            {this.getBody()}
         </div>
      );
   }

   getBody(){
      const {isOpen, article} = this.props;
      const { text, comments } = article;
      return (isOpen)
         ?
         <section className="article-text-container">
            { text }
            <CommentList comments={ comments } />
         </section>
         : ''
   }

}
export default Article;