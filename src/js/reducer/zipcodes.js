const defCity = '';

export default (city = defCity, action) => {
   switch (action.type){
      case 'GET_ZIP_CODE': city = action.city; break;
      case 'ERROR':        city = 'Cannot find a place'; break;
      case 'LOADING':      city = "Loading..."; break;
   }
   return city;
}
