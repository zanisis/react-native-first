import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {Container, View, Spinner} from 'native-base'


import HeaderBar from './components/Header'
import MainBar from './components/Main'
class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <View>
        <HeaderBar />
        <MainBar />
      </View>
    )
  }
}

export default App