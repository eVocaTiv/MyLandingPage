import ActionTypes from '@actions/types';
import { createReducer } from './helpers';
import appState from '@store/';

const updateIsVideoLoaded = (appState, action) => action.payload;

const videoLoadedReducer = createReducer(appState.isVideoLoaded, {
  [ActionTypes.STORE_UPDATE_IS_VIDEO_LOADED_SUCCESS]: updateIsVideoLoaded,
});

export default videoLoadedReducer;
