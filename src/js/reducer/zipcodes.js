
const defCity = 'Loading...';
export default (city = defCity, action) => {
   console.log(action);
   if( action.city && action.city.length > 0)
      city = action.city;
   else city = defCity;
   return city;
}
