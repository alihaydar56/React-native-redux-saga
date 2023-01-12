import {AppDispatch} from '../store';

export const GET_ALL_POSTS_REQUEST = 'GET_ALL_POSTS_REQUEST';
export const GET_ALL_POSTS_REQUEST_SUCCESS = 'GET_ALL_POSTS_REQUEST_SUCCESS';
export const GET_ALL_POSTS_REQUEST_FAIL = 'GET_ALL_POSTS_REQUEST_FAIL';

export const GET_POST_BY_ID_REQUEST = 'GET_POST_BY_ID_REQUEST';
export const SET_POST_BY_ID_SUCCESS = 'SET_POST_BY_ID_SUCCESS';
export const SET_POST_BY_ID_FAIL = 'SET_POST_BY_ID_FAIL';

//GET ALL POSTS
export const get_posts_actions = () => ({
  type: GET_ALL_POSTS_REQUEST,
});

export const get_post_success_action = (response: any) => ({
  type: GET_ALL_POSTS_REQUEST_SUCCESS,
  payload: response,
});

export const get_post_error_action = (error: any) => ({
  type: GET_ALL_POSTS_REQUEST_FAIL,
  payload: error,
});

// GET POST BY ID
export const get_post_by_id_action = (id: string) => ({
  type: GET_POST_BY_ID_REQUEST,
  postId: id,
});

export const get_post_by_id_success_action = (response: any) => ({
  type: SET_POST_BY_ID_SUCCESS,
  payload: response,
});

export const get_post_by_id_error_action = (error: any) => ({
  type: SET_POST_BY_ID_FAIL,
  payload: error,
});
