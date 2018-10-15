import React, {Component} from 'react';
import CommentList from './Comments/CommentList';
import ToggleOpen from './../Decorators/ToggleOpen';


class Article extends Component{

   render(){
      const {title, date, text} = this.props.article;
      const {isOpen, toggleOpen} = this.props;

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
      const { text, comments } = this.props.article;
      return (this.props.isOpen)
         ?
         <section className="article-text-container">
            { text }
            <CommentList comments={ comments } />
         </section>
         : ''
   }

}
export default ToggleOpen(Article);