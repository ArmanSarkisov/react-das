import { types } from './action';

const initialState = {
    post: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_FETCHED_POST:
            return {
                ...state,
                post: [...action.payload.post],
            };
        default:
            return state;
    }
}