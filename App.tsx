import React, { Component } from 'react'
import List from './src/components/List'

import { store } from './src/store/'

class App extends Component {
  render() {
    return <List store={store} />
  }
}

export default App
