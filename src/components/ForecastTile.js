import React from 'react'
import { Text, View, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import commonStyles from '../util/commonStyles';
import { connect } from 'react-redux'
import Colors from '../util/colors';
import Config from '../APIs/ApiConfig';
import * as Animatable from 'react-native-animatable';
import Utils from '../util/Utils';

dp = (size) => EStyleSheet.value(size+'rem')

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


const Tile = (props) => {

    const {tempType, index} = props

    const {dt, temp, weather} = props.forecast

    let day = days[new Date(dt*1000).getDay()]

    let {getTemp, formatText} = Utils

    const imageIcon = Config.iconApi + weather[0].icon + '@2x.png'
    
    return (
        // Animated View Tiles with Day Weather icon and Min/Max Temp for the day
        <Animatable.View style={[styles.container]} animation='fadeInLeft' delay={250*(index+1)} >
            <Text style={[commonStyles.fontRegular, styles.day]} >{day}</Text>

            <Image source={{uri: imageIcon}} style={styles.weatherIcon} />

            <View style={styles.tempDetails} >
                <Text style={[commonStyles.fontXSmall, styles.tempText]} >{getTemp(temp.min, tempType)}/{getTemp(temp.max, tempType)}</Text>
                <Text style={[commonStyles.fontXSmall, styles.tempText]} >{formatText(weather[0].description)}</Text>
            </View>
        </Animatable.View>
    )
}

const styles = EStyleSheet.create({
    container: {
        padding: '10rem',
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
    },
    day: {
        flex: 3,
        fontWeight: 'bold'
    },
    tempDetails: {
        flex:2,
        alignItems: 'flex-end',
        alignItems: 'center'
    },
    weatherIcon: {
        width: '22rem', 
        height: '22rem'
    },
    tempText: {
        textAlign: 'center'
    }
})


const mapStateToProps = (state) => ({
    tempType: state.weatherReducer.tempType
})

const mapDispatchToProps = (dispatch) => ({

})
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Tile)