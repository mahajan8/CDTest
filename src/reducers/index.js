import { combineReducers } from 'redux';

import * as weatherReducer from './weatherReducer'

export default combineReducers(Object.assign(
    weatherReducer
));