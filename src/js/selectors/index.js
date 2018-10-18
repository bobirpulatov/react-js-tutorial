import {createSelector} from 'reselect'

const commentGetter = state => state.normComments;
const idGetter = (state, props) => props.id;


export const commentSelector = createSelector(commentGetter, idGetter, (comments, id) => {
   return comments.find(comment => {

   });
});