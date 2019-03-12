import _ from 'lodash'
import {
  SIGNIN_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  header: {
    authorization: 'Bearer'
  },
  access_token: "",
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
      case SIGNIN_SUCCESS: 
        newState.access_token = action.response.data.id;
        newState.isLoggedIn = true;
        return newState
      default:
        return state;
    }
};

export default reducer;