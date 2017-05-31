import React, { Component } from 'react'
import {Provider, connect} from 'react-redux'
import {
  StyleSheet
} from 'react-native';

import {Container, View, Spinner} from 'native-base'
import store from './store'
import {fetchSongs} from './actions'

import HeaderBar from './components/Header'
import MainBar from './components/Main'
class App extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    return(
      <Provider store={store}>
        <View>
          <HeaderBar navigation={this.props.navigation}/>
        </View>
      </Provider>
    )
  }
}


export default App