import {combineReducers} from 'redux';

const songsReducer =()=>{
 return [
  { title:'Chak de India',duration:'4:05'}, 
  { title:'Milkha song',duration:'3:05'},
  { title:'LOC kargil',duration:'6:07'},
  { title:'Shaheed 1931',duration:'5:00'}
 ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
if(action.type === 'SONG_SELECTED'){
    return action.payload;
}
 return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});
