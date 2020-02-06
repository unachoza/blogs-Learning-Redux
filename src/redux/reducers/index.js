import { combineReducers } from 'redux';
import postReducer from './post.reducers';
import usersReducer from './user.reducer';

const rootReducer = combineReducers({
  posts: postReducer,
  users: usersReducer,
});

export default rootReducer;
