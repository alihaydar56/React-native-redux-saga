import {call, select} from 'redux-saga/effects';

import HttpService from '../services/httpService';




function* getApi(url:string,{ body = {}, headers = {}}) {
  console.log("url :",url);
  const state = yield select();
  const res = yield call(HttpService.get, url, body, headers);

  console.log('[RES GET APİ] :', res);
  return res?.data;
}




function* postApi(url:string,{ body = null, headers = null}) {

  const res = yield call(HttpService.post, url, body, headers);

  console.log('[RES POST APİ] :', res);
  return res;
}


export {postApi, getApi};
