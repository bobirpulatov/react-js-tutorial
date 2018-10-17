import {DELETE_ARTICLE, INCREMENT, RESET, DECREMENT, SET_DATE_RANGE} from './constants';

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