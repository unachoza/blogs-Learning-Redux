import PostActionTypes from '../types/index';
import jsonPlaceholder from '../../APIs/jsonPlaceholders';

export const fetchPosts = () => async dispatch => {
    const promise = await jsonPlaceholder.get('/posts');
    

  dispatch({ type: PostActionTypes.FETCH_POSTS, payload: promise });
};
