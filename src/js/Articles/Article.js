import React, {Component, PureComponent} from 'react';
import CommentList from './Comments/CommentList';
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux';
import {deleteArticle} from "../AC";

import './../../css/style.css';

class Article extends PureComponent{
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
      const {title, date} = article;

      return (
         <div className="each-article-container">
            <h4>{title} &mdash; <small>{new Date(date).toLocaleDateString()}</small></h4>
            <button className="article-toggler" onClick={ toggleOpen }>
               { (isOpen) ? 'Hide article' : 'Show article' }</button>&nbsp;
            <button className="article-remover" onClick={ this.handleDelete }>Delete me</button>
            <CSSTransition in={isOpen} timeout={2000} classNames="fade">
               {this.getBody()}
            </CSSTransition>
         </div>
      );
   }

   handleDelete = () => {
      const {deleteArticle, article} = this.props;
      deleteArticle(article.id)
   };

   getBody(){
      const {isOpen, article} = this.props;
      const { text, comments } = article;
      return (isOpen)
         ?
         <section>
            { text }
            <CommentList comments={ comments } />
         </section>
         : <section>&nbsp;</section>
   }

}
export default connect( (state) => ({
   articles: state.articles
}), {deleteArticle})(Article);