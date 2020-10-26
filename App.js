
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Provider } from 'react-redux';
import Nav from './src/navigator'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/configureStore'

const height = Dimensions.get('window').height;

const { store, persistor } = configureStore()

export default App = () => {
  return (
    <SafeAreaView style={{heigh:height, flex:1, backgroundColor:'#FFF'}}>
        
      <Provider store={store} >
        <PersistGate loading={null}
          persistor={persistor}>

            <Nav/>
            
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}


