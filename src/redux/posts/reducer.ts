import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_REQUEST_SUCCESS,
  SET_POST_BY_ID_FAIL,
  SET_POST_BY_ID_SUCCESS,
} from './actions';

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_POSTS_REQUEST:
      return {...state, loading: true};
    case GET_ALL_POSTS_REQUEST_SUCCESS:
      return {...state, posts: action.payload, loading: false};
    case SET_POST_BY_ID_SUCCESS:
      return {...state, postDetail: action.payload, loading: false};
    case SET_POST_BY_ID_FAIL:
      return {...state, error: action.payload};

    default:
      return state;
  }
};

export {reducer};
