import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, FlatList, PermissionsAndroid, Platform, Image } from 'react-native'
import types from '../../util/types'
import { connect } from 'react-redux'
import Loader from '../../components/Loader'
import ForecastTile from '../../components/ForecastTile'
import Geolocation from '@react-native-community/geolocation';
import strings from '../../util/strings'
import Styles from './Styles'
import Utils from '../../util/Utils'
import Config from '../../APIs/ApiConfig'
import Images from '../../util/images'

const Home = (props) => {

    useEffect(() => {
        if(Platform.OS=='ios')
            getLocation()
        else 
            getPermission()
    }, [])

    const [error, setError] = useState('')
    const [date, setDate] = useState('')


    // Get Location Permission For Android 
    const getPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                getLocation();
            } else {
                setError(strings.permissionDenied)
            }
        } catch (err) {
            console.warn(err);
        }
    }

    // Get Geolocation 
    const getLocation = () => {
        
        Geolocation.getCurrentPosition(position => {
            let { latitude, longitude } = position.coords
            setError('')
            props.getArea('30.703845','76.750688')
            props.getWeather(latitude, longitude)
            setDate(new Date().toString())
        },
        err=>setError(err.message),
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 1000
        },);
        
    }

    const { current, daily, loading, area, tempType } = props

    const {getTemp} = Utils

    
    if(error) 
        return (
            <View style={{flex:1}} >
                <Text>{error}</Text>
            </View>
        )
    else {
        const {temp, wind_speed, humidity} = current

        const imageIcon = current.weather ? Config.iconApi + current.weather[0].icon + '@2x.png' : null

        return (
            <View style={Styles.container} >

                {/* Current Weather Details  */}
                <View style={Styles.currentView} >
                    {/* Area and Date/Time when weather data collected.  */}
                    <View>
                        <Text style={Styles.areaTitle} >{area}</Text>
                        <Text style={Styles.dateText} > {date} </Text>
                    </View>
                    
                    {/* Current Temperature and Weather icon from OpenWeather */}
                    <View style={Styles.currentTempView} >
                        <Text style={Styles.currentTempText} >{getTemp(temp, tempType)}</Text>
                        <Image style={Styles.currentIcon} source={{uri: imageIcon}} />
                    </View>

                    <View style={Styles.detailsOuterView} >

                        {/* Wind and Humidity information and icons  */}
                        <View style={Styles.detailsView} >
                            <Image source={Images.wind} style={Styles.detailsIcons} />
                            <Text style={Styles.detailsText}>{wind_speed}</Text>
                            <Image source={Images.drop} style={Styles.detailsIcons} />
                            <Text style={Styles.detailsText}>{humidity}</Text>
                        </View>

                        {/* Change Temperature Units (Celcius or Farenheit)  */}
                        <TouchableOpacity style={Styles.detailsView} onPress={()=>props.changeType()} >
                            <Text style={[Styles.detailsText, !tempType && Styles.selectedText]} >{strings.celcius}</Text>
                            <Image source={Images.change} style={Styles.detailsIcons} />
                            <Text style={[Styles.detailsText, tempType && Styles.selectedText]} >{strings.farenheit}</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                {/* Forecast for 7 days Listing */}
                <FlatList
                    data={daily}
                    renderItem={({ item, index }) =>
                        // Custom component to render forecast details 
                        <ForecastTile
                            forecast={item}
                            index={index}
                        />
                    }
                    // ItemSeparatorComponent={() => <View style={commonStyles.seperator} />}
                    contentContainerStyle={Styles.list}
                    keyExtractor={(item, index)=>`weatherTile${index}`}
                />

                {/* Lottie Loader while fetching data from api  */}
                <Loader show={loading} />

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.weatherReducer.loading,
    current: state.weatherReducer.current,
    daily: state.weatherReducer.daily,
    area: state.weatherReducer.area,
    tempType: state.weatherReducer.tempType
})

const mapDispatchToProps = (dispatch) => ({
    // Action Dispatch to call api 
    getWeather: (lat, lon) => dispatch({
        type: types.GET_WEATHER,
        pars: {
            lat,
            lon
        }
    }),
    getArea: (lat, lon) => dispatch({
        type: types.GET_AREA,
        pars: {
            lat,
            lon
        }
    }),
    changeType: () => dispatch({
        type: types.CHANGE_TEMP_TYPE
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)