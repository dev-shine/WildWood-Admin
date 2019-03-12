import { combineReducers } from 'redux'
import offers from './offers';
import authentication from './authentication'

const RootReducer = combineReducers({
    offers,
    authentication
});

export default RootReducer;