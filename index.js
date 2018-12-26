/** @format */
import React from 'react'
import { AppRegistry, View } from 'react-native'

import App from './App'

const MyApp = () => {
  return (
    <View>
      <App />
    </View>
  )
}

AppRegistry.registerComponent('ReactNativeMobx', () => MyApp)
