import React, { Component } from 'react'
import {Provider, connect} from 'react-redux'
import {
  StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import {Container, View, Spinner} from 'native-base'
import store from './store'
import {fetchSongs} from './actions'

import HeaderBar from './components/Header'
import SearchBar from './components/Search'
import SearchContaints from './components/Search'


const App = StackNavigator({
  Main: {screen: HeaderBar},
  Search: {screen: SearchContaints}
},{
  headerMode : 'none'
});

// class App extends Component {
//   constructor(props) {
//     super(props)
//   }
//
//
//   render(){
//     return(
//       <Provider store={store}>
//           <HeaderBar navigation={this.props.navigation} />
//       </Provider>
//     )
//   }
// }


export default App