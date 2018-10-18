export default store => next => action => {
   console.log('----- currStateBefore:', store.getState());
   next(action);
   console.log('----- currStateAfter:', store.getState());
};