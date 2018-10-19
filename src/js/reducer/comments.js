import {normalizedComments as defaultComments} from '../fixtures';

export default (commentState=defaultComments, action) => {
   const {type, payload} = action;
   switch (type){
      case 'GET_KEYS':
         if( payload && payload.keys ){
            let filteredComments = [];
            for (let j=0; j< defaultComments.length; j++){
               for (let i=0; i<payload.keys.length; i++){
                  if(defaultComments[j]['id'] === payload.keys[i])
                     filteredComments = [...filteredComments, defaultComments[j]];
               }
            }
            return filteredComments;
         }else {
            return '';
         }
   }
   return '';

}
