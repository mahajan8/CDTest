import strings from "../util/strings";
import types from "../util/types";

const initialState = {
    current: {},
    daily: [],
    area: '',
    tempType: 0,
    loading: false,
    error: ''
}

// weatherReducer toggles loading variable when fetching api, and stores WEATHER list.

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_WEATHER:
        case types.GET_LOCATION:
            return {
                ...state,
                loading: true
            }
        case types.GET_WEATHER_SUCCESS:
            let { current, daily } = action.data
            daily.splice(0, 1)
            return {
                ...state,
                loading: false,
                current: current,
                daily: daily,
                error: ''
            }
        case types.GET_WEATHER_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case types.GET_AREA_SUCCESS:
            return {
                ...state,
                area: action.data
            }
        case types.GET_AREA_FAILED:
            return {
                ...state,
                area: strings.noCity
            }
        case types.CHANGE_TEMP_TYPE:
            return {
                ...state,
                tempType: state.tempType ? 0 : 1
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}