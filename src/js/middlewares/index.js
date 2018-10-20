import $ from 'jquery';
export const addComment = ({dispatch, getState}) => next => action => {
   const {normComments} = getState();
   if( action.type === "ADD_COMMENT"){
      let isConflict = false;
      let genKey = "";
      do{
         const keygen = "1324657890qwertyuiopasdfghjklzxcvbnm";
         for(let i=0; i<keygen.length; i++){
            let rand = Math.floor(Math.random() * (keygen.length - 0) + 0);
            genKey += keygen[rand];
         }
         for(let i=0; i<normComments.length; i++){
            if ( genKey === normComments[i]['id'])
               isConflict = true;
         }
      }while (isConflict);

      const newComment = {
         id: genKey,
         user: action.payload.user,
         text: action.payload.text
      };

      next( {...action, newComment, normComments} );
   }else
      next(action);
};

export const addArticle = store => next => action => {
   next(action);
};

export const getZipCode = store => next => action => {
   const zipCode = action.payload.zipCode;
   let city = "";
   next( {...action, city} );
   if ( action.type === "GET_ZIP_CODE") {
      $.get('http://ziptasticapi.com/' + zipCode)
         .done(function (data) {
            try{
               data = $.parseJSON(data);
               if( data.error ) city = 'Not found';
               else city = data.city + ", " + data.state;
               next({...action, city});
            }catch (e) {
               action.type = "ERROR";
               next({...action, city});
            }
         })
         .fail(function () {
            action.type = "ERROR";
            next({...action, city});
         });
   }
};