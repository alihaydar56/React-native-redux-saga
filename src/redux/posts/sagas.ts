import {call, put, takeEvery} from 'redux-saga/effects';
import {getApi} from '../query-api';
import {
  GET_ALL_POSTS_REQUEST,
  GET_POST_BY_ID_REQUEST,
  get_post_by_id_success_action,
  get_post_error_action,
  get_post_success_action,
} from './actions';

function* handler() {
  yield takeEvery(GET_ALL_POSTS_REQUEST, getAllPosts);
  yield takeEvery(GET_POST_BY_ID_REQUEST, getPostById);
}

function* getAllPosts(action: any) {
  try {
    //API CALL
    const posts = yield call(getApi, '/', {});

    // AFTER GET RESPONSE THEN SET THE DATA TO STORE
    yield put(get_post_success_action(posts));
  } catch (error: any) {
    console.log('GET POSTS ERRORRR :', error.message);
    yield put(get_post_error_action(error));
  }
}

function* getPostById(action: any) {
  try {
    //API CALL
    const url = '/' + action.postId;
    const post = yield call(getApi, url, {});
    // AFTER GET RESPONSE THEN SET THE DATA TO STORE
    yield put(get_post_by_id_success_action(post));
  } catch (error: any) {
    console.log('GET POST BY ID ERROR :', error.message);
    yield put(get_post_error_action(error.message));
  }
}

export {handler};
