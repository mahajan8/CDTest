
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import Api from '../APIs/Api'
import Config from '../APIs/ApiConfig'
import types from '../util/types';

function* getWeather(action) {

    const {lat, lon} = action.pars

    let params = {
        lat,
        lon,
        exclude: 'hourly,minutely,alerts',
        appid: Config.apiKey
    }

    var data = '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');

    try {
        // Calling weather Api
        
        const response = yield call(Api.getJSON, Config.onecall + data )
        console.log(response)
        yield put({type: types.GET_WEATHER_SUCCESS, data: response})
        
    } catch (err) {
        alert(err.message)
        yield put({type: types.GET_WEATHER_FAILED})
    }
}

// Watcher for GET_WEATHER, calls getWeather function
export function* watchWeather() {
    yield takeLatest(types.GET_WEATHER, getWeather)
}

