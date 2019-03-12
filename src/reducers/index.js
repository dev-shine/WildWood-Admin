import { combineReducers } from 'redux'
import offers from './offers';
import authentication from './authentication'
import users from './users'

const RootReducer = combineReducers({
    offers,
    authentication,
    users
});

export default RootReducer;