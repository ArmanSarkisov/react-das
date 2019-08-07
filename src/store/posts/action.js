export const types = {
    SET_FETCHED_POST: "SET_FETCHED_POST",
}

export const setPost = (post) => {
    return {
        type: types.SET_FETCHED_POST,
        
        payload: {
            post,
        }
    }
}
