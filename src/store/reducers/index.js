import {combineReducers} from 'redux';
import characterReducer from './charactersReducer';
import episodeReducer from './episodesReduces';

const rootReducer = combineReducers({
  characters: characterReducer,
  episodes: episodeReducer,
});

export default rootReducer;
