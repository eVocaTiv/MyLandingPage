import { combineReducers } from 'redux';
import initReducer from './initReducer';
const rootReducer = combineReducers({
    appStartInfo: initReducer,
});

export default rootReducer;