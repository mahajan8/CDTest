import PropTypes from 'prop-types';
import {View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import LottieView from 'lottie-react-native';
import Images from '../util/images';

const Loader = (props) => {

const { show } = props;
    if (show) {
      return (
        <View style={styles.loading}>
          <LottieView source={Images.loader} autoPlay loop style={styles.lottieLoader} />
        </View>
      );
    } else {
      return null;
    }
};

const styles = EStyleSheet.create({
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex:50,
      elevation: 0,
      // backgroundColor: 'rgba(0,0,0,0.3)'
    },
    lottieLoader: {
      width: '200rem',
      height: '200rem'
    }
})

Loader.propTypes = {
 show: PropTypes.bool,
};

export default Loader;