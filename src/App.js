import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import HeaderBar from './components/Header'
class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <View>
        <HeaderBar />
      </View>
    )
  }
}

export default App