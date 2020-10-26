import { REGISTER } from "redux-persist";
import types from "../util/types";

const initialState = {
    weather: {},
    loading:false
}

// homeReducer toggles loading variable when fetching api, and stores WEATHER list.

export const weatherReducer = (state = initialState, action ) => {
    switch(action.type) {
        case types.GET_WEATHER : 
            return {
                ...state,
                loading:true
            }
        case types.GET_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                weather: action.data
            }
        case types.GET_WEATHER_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}