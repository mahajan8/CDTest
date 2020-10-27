
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import Api from '../APIs/Api'
import Config from '../APIs/ApiConfig'
import strings from '../util/strings';
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
        // console.log(response)
        yield put({type: types.GET_WEATHER_SUCCESS, data: response})
        
    } catch (err) {
        alert(err.message)
        yield put({type: types.GET_WEATHER_FAILED})
    }
}

function* getArea(action) {

    const {lat, lon} = action.pars

    let params = {
        latlng: lat+','+lon,
        result_type: 'locality|route',
        key: Config.mapsApiKey
    }

    var data = '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');

    try {
        // Calling weather Api

        const response = yield call(Api.getJSON, '', Config.maps + data)

        if(response.results.length) {

            let address = response.results[0].address_components
            let cityIndex = address.findIndex(item=>item.types.includes('locality'||'route'))
            let countryIndex = address.findIndex(item=>item.types.includes('country'))

            let name = (cityIndex!=-1? address[cityIndex].long_name: strings.unknown) + ', ' + (countryIndex!=-1? address[countryIndex].long_name: strings.unknown)
            
            yield put({type: types.GET_AREA_SUCCESS, data: name})
        } else {
            yield put({type: types.GET_AREA_FAILED})
        }
        
    } catch (err) {
        alert(err.message)
        yield put({type: types.GET_AREA_FAILED})
    }
}

// Watcher for GET_AREA, calls getArea function
export function* watchArea() {
    yield takeLatest(types.GET_AREA, getArea)
}


// Watcher for GET_WEATHER, calls getWeather function
export function* watchWeather() {
    yield takeLatest(types.GET_WEATHER, getWeather)
}

