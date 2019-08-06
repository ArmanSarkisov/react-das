export const types = {
    SET_FETCHED_POSTS: 'SET_FETCHED_POSTS'
}

export const setPosts = (posts) => {
    return {
        type: types.SET_FETCHED_POSTS,
        
        payload: {
            posts,
        }
    }
}
