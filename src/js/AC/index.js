import {DELETE_ARTICLE, INCREMENT, RESET, DECREMENT, SET_DATE_RANGE} from './constants';
import $ from "jquery";
import {push} from 'react-router-redux'

export function increment() {
   return {
      type: INCREMENT
   }
}
export function decrement() {
   return {
      type: DECREMENT
   }
}
export function reset() {
   return {
      type: RESET
   }
}
export function deleteArticle(id) {
   return {
      type: DELETE_ARTICLE,
      payload: { id }
   }
}

export function setDateRange(from=null, to=null) {
   return {
      type: SET_DATE_RANGE,
      payload: { from, to }
   }
}

export function getCityByZip(zipCode) {
   return (dispatch) => {
      let city = "";
      dispatch({ type: 'LOADING', payload : { city } });

      $.get('http://ziptasticapi.com/' + zipCode)
         .done(function (data) {
            try{
               data = $.parseJSON(data);
               if( data.error ) {
                  city = 'Not found';
                  dispatch(push('/zipCode'));
               }else
                  city = data.city + ", " + data.state;
               dispatch({type: 'GET_ZIP_CODE', city});

            }catch (e) { dispatch({type: 'ERROR', city}); }
         })
         .fail(function () { dispatch({type: 'ERROR', city}); });
   };
}