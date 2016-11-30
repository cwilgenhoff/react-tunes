import { combineReducers } from 'redux';
import Browser from './Browser';
import Search from './Search';

const rootReducer = combineReducers({
  Browser,
  Search,
});

export default rootReducer;
