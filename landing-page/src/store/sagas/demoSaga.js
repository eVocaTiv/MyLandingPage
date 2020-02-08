import { call } from 'redux-saga/effects';
import { dispatchReducerAction, handleError } from '@sagas/commonSagas';
import ActionTypes from '@actions/types';
import createAction from '@actions';

function* demoSaga(action) {
  try {
    // yield* updateInFlightFlag(true);
    console.log('in demo saga..');

    // perform api call to fetch data..
    const payload = {
      appStartInfo: 'dummyAppStartInfo',
    };

    // call STORE_.. action to update data in store.
    yield* dispatchReducerAction(
      createAction(ActionTypes.STORE_UPDATE_INIT_INFO, payload),
    );
    // yield* updateInFlightFlag(false);
  } catch (error) {
    yield call(handleError, error);
  }
}

export { demoSaga };
