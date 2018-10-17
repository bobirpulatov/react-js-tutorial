import {INCREMENT, DECREMENT, RESET} from "../AC/constants";

export default (count=0, action) => {
   const {type} = action;
   switch (type){
      case INCREMENT: return count + 1;
      case DECREMENT: return count - 1;
      case RESET: return 0;
   }
   return count;
}