import { combineReducers } from 'redux';
import Browser from './Browser';
import Search from './Search';
import Favourites from './Favourites';

const rootReducer = combineReducers({
  Browser,
  Search,
  Favourites,
});

export default rootReducer;
