import { all, fork} from 'redux-saga/effects';

import { watchWeather, watchArea } from './weatherSaga';

export function* rootSaga () {
  yield all([
    fork(watchWeather),
    fork(watchArea),
  ]);
};