import {articles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, SET_DATE_RANGE} from "../AC/constants";

export default (articleState=defaultArticles, action) => {
   const {type, payload} = action;

   switch (type){

      case DELETE_ARTICLE: {
         return articleState.filter(article => article.id !== payload.id );
      }
      case SET_DATE_RANGE: {
         if ( payload && payload.to != null ) {
            return defaultArticles.filter(article =>
               (new Date(article.date).getTime() > new Date(payload.from).getTime())
               &&
               (new Date(article.date).getTime() < new Date(payload.to).getTime())
            );
         }else
            return defaultArticles;
      }
   }
   return articleState;
}