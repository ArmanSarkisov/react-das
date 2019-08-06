import { types } from './actions';

const initialState = {
    posts: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_FETCHED_POSTS:
            return {
                ...state,
                posts: [...action.payload.posts],
            };
        default:
            return state;
    }
}