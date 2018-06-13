import { combineReducers } from 'redux';
import games from './reducer_game';

const rootReducer = combineReducers({
  games,
});

export default rootReducer;
