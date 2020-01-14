import postsReducer from './postsReducer';
import usersReducer from './userReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer

});