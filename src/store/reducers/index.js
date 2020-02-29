import { combineReducers } from 'redux';
import initReducer from './initReducer';
import videoLoadedReducer from './videoLoadedReducer';

const rootReducer = combineReducers({
    appStartInfo: initReducer,
    isVideoLoaded: videoLoadedReducer,
});

export default rootReducer;