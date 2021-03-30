export default function f(state=[],action){
 switch(action.type){
   case 'FETCH_USER':
       return [...state,action.payload];
    default:
       return state;   
 }
}