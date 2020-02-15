import { take,takeEvery, call, put, select } from 'redux-saga/effects';
import {REQUEST_RSS} from './constants';
import { failRss,fullfillRss,successRss} from './actions';
import Feed from 'rss-to-json';

export function* rssRequestSaga(action){
    console.log('saga')
    let response 
      Feed.load(action.link, function(err, rss) {
      response = rss
      })
  console.log(response)
  yield put (successRss(response))
  yield put (fullfillRss())
 
}
// Individual exports for testing
export default function* homeSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(REQUEST_RSS,rssRequestSaga)
}
