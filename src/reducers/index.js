import { combineReducers } from 'redux';
import games from './reducer_game';

const rootReducer = combineReducers({
  games: games
});

export default rootReducer;