import { combineReducers } from 'redux';
import postReducer from './post.reducers';

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer