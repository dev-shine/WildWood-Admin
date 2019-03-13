import _ from 'lodash'
import {
    FETCH_OFFERS,
    OFFERS_RECEIVED,
    DELETE_OFFER,
    OFFER_DELETED,
    INSERT_OFFER,
    OFFER_INSERTED,
} from '../../constants/actionTypes';

const initialState = {
    loading: false,
    offers: [],
    count: 0,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case FETCH_OFFERS:
            newState.loading = true
            return newState
        case OFFERS_RECEIVED:
            newState.offers = action.offers
            newState.loading = false
            return newState
        case DELETE_OFFER:
            newState.loading = true
            return newState
        case OFFER_DELETED:
            newState.count = action.count
            newState.loading = false
            return newState
        case INSERT_OFFER:
            newState.loading = true
            return newState
        case OFFER_INSERTED:
            newState.loading = false
            return newState
        default:
            return state;
    }
};

export default reducer;