import React from 'react';
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'


const Stack = createStackNavigator()

const Nav = (props) => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
            
                <Stack.Screen name='Home' component={Home} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(Nav)