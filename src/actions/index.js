import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// use async await syntax to fetch data / posts from api
// asynchronous action creator - takes some amount of 
// time for it to get its data ready to go
// - we use a middleware to make the requests
// action must be an object or a function
// https://github.com/reduxjs/redux-thunk
// redux-thunk allows us to return a function as an action

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // call fetchPosts action creator - returns the inner function
  // and dispatch it
  // we use await to make sure the posts are fetched
  await dispatch(fetchPosts());
  // use lodash map to get userId s
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // console.log(userIds);
  // await is not needed in front of dispatch(fetchUser(id)))
  // since we don't have any logic after it
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data});
// });

