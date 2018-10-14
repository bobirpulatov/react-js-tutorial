import React, {Component} from 'react';
import CommentList from './Comments/CommentList'
class Article extends Component{
   state = {
      isOpen: false
   };

   render(){
      const {title, date, text} = this.props.article;
      return (
         <div className="each-article-container">
            <h4>{title} &mdash; <small>{new Date(date).toLocaleTimeString()}</small></h4>
            <button className="article-toggler" onClick={ this.toggleArticle.bind(this) }>
               { (this.state.isOpen) ? 'Hide article' : 'Show article' }</button>
            {this.getBody()}
         </div>
      );
   }

   getBody(){
      const { text, comments } = this.props.article;
      return (this.state.isOpen)
         ?
         <section className="article-text-container">
            { text }
            <CommentList comments={ comments } />
         </section>
         : ''
   }

   toggleArticle(){
      this.setState({ isOpen: ! this.state.isOpen })
   }

}
export default Article;