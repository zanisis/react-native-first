/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ToolbarAndroid
} from 'react-native';

import {Icon} from 'native-base'

import {Provider} from 'react-redux'

import MainContainer from './src/MainContainer'

export default class ReactNativeFirst extends Component {

  onActionSelected(){
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View>
        <ToolbarAndroid
          title="AwesomeApp"
          actions={[{title: 'Search', icon: require('./search.png'), show: 'always', color:'white'}]}
          onActionSelected={this.onActionSelected} >
          <Icon style={{paddingLeft: 10}}/>
        </ToolbarAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#073059',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeFirst', () => ReactNativeFirst);
