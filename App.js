/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import {createStore,applyMiddleware} from 'redux'
import {Provider,connect} from 'react-redux'
import Thunk from 'redux-thunk'
import reducers from './src/redux/reducers'
import {NavigationContainer} from '@react-navigation/native'

import {
  ThemeContext,
  getTheme,
  COLOR
} from 'react-native-material-ui'

import { View, Text } from 'react-native'
import Home from './src/screens/Home'
import Cover from './src/screens/Cover'
import HomeStack from './src/navigations/HomeStack'



//////////////////////////////////
// STEP BY STEP TO CREATE APK FILE
//////////////////////////////////

// // ref
// // https://stackoverflow.com/questions/35283959/build-and-install-unsigned-apk-on-device-without-the-development-server/35286546



// react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

// cd android

// gradlew assembleDebug

// gradlew assembleRelease



const theme={
  palette: {
    primaryColor: COLOR.orange500,
    accentColor: COLOR.blueGrey400
  },
  fontFamily: 'serif',
  button: {
    container: {
      // height:50
      borderRadius: 3
    },
    text: {
      fontFamily: 'Ubuntu-Light'
      // color: 'rgba(0,0,0,.75)' // if primary is true, then this has no effect
    }
  }
}


const store=createStore(reducers,{},applyMiddleware(Thunk))

const App = () => {

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={getTheme(theme)}>
        <NavigationContainer>
          <HomeStack/>
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
};



export default App;
