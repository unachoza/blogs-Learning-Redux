import PostActionTypes from '../types/index';

const INITIAL_STATE = {
  posts: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload.data
      };
    default:
      return state;
  }
};

export default postReducer;
