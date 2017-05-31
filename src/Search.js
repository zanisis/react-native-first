import React, { Component } from 'react'
import {Provider, connect} from 'react-redux'
import {
  StyleSheet
} from 'react-native';

import {Container, View, Spinner} from 'native-base'
import store from './store'

import SearchBar from './components/Search'
class Search extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <Provider store={store}>
        <SearchBar navigation={this.props.navigation}/>
      </Provider>
    )
  }
}


export default Search