import { put, fork } from 'redux-saga/effects';
// import ActionTypes from "@actions/types"
// import createAction from "@actions"

function* dispatchReducerAction(action) {
  yield put(action);
}

// function* updateInFlightFlag(isInFlight) {
//     yield* dispatchReducerAction(createAction(
//         ActionTypes.STORE_IN_FLIGHT_SUCCESS, isInFlight,
//     ));
// }

function* handleError(error, errorHandlerAction = null) {
  // yield fork(updateInFlightFlag, false)

  if (errorHandlerAction !== null) {
    yield fork({
      ...errorHandlerAction,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.error(error);
  } else if (process.env.NODE_ENV === 'production') {
    console.error('An error occurred. Please contact kunalx011@gmail.com');
  }
}

export { handleError, dispatchReducerAction };
