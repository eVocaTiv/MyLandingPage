// import needed for '@babel/runtime'
import 'regenerator-runtime/runtime';
import ActionTypes from '@actions/types';
import { all, takeLatest } from 'redux-saga/effects';
import { demoSaga } from './demoSaga';

function* rootSaga() {
  yield all([takeLatest(ActionTypes.FETCH_INIT_INFO_SUCCESS, demoSaga)]);
}

export default rootSaga;
