import jsonPlaceholder from '../apis/jsonPlaceholder';

// use async await syntax to fetch data / posts from api
// asynchronous action creator - takes some amount of 
// time for it to get its data ready to go
// - we use a middleware to make the requests
// action must be an object or a function
// https://github.com/reduxjs/redux-thunk
// redux-thunk allows us to return a function as an action


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
  
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};