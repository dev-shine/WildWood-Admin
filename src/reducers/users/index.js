import _ from 'lodash'
import {
    FETCH_USERS,
    USERS_RECEIVED
} from '../../constants/actionTypes';

const initialState = {
    loading: false,
    users: []
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case FETCH_USERS:
            newState.loading = true
            return newState
        case USERS_RECEIVED:
            newState.users = action.users
            newState.loading = false
            return newState
        default:
            return state;
    }
};

export default reducer;