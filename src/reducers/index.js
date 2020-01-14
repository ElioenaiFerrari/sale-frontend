import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';

const reducers = combineReducers({
  users,
  posts
});

export default reducers;
