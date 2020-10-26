/**
 * @format
 */

import {AppRegistry, Dimensions} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import EStyleSheet from 'react-native-extended-stylesheet';

let {width, height} = Dimensions.get('window')

let [trueWidth, trueHeight] = width > height ? [height, width] : [width, height]

EStyleSheet.build({
    $rem: trueWidth/360,
    $vrem: trueHeight/700
})


AppRegistry.registerComponent(appName, () => App);
