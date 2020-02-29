import ActionTypes from '@actions/types';
import { createReducer } from './helpers';
import appState from '@store/';

const updateInitInfo = (appState, action) => action.payload;

const initReducer = createReducer(appState.appStartInfo, {
  [ActionTypes.STORE_UPDATE_INIT_INFO]: updateInitInfo,
});

export default initReducer;
