import React, { useEffect } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import types from '../../util/types'
import { connect } from 'react-redux'

const Home = (props) => {

    const apiCall = () => {
        props.getWeather()
    }

    const {weather, loading} = props

    return (
        <View style={{flex:1}} >
        
            <TouchableOpacity style={{padding: 15, backgroundColor : 'red', alignItems: 'center', alignSelf: 'center', marginTop: 50}} 
            onPress={()=>apiCall()} >
                <Text>Press</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const mapStateToProps = (state) => ({
    loading: state.weatherReducer.loading,
    weather: state.weatherReducer.weather
})

const mapDispatchToProps = (dispatch) => ({
    // Action Dispatch to call api 
    getWeather: () => dispatch({
        type: types.GET_WEATHER,
        pars: {
            lat: '30.703845',
            lon: '76.750688'
        }
    })
})
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)