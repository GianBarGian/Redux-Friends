import * as types from './actionTypes';

export function friends(state = [], action) {
    switch (action.type) {
        case types.GET_FRIENDS:
            return action.payload;
        default:
            return state;
    }
}