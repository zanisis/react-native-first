import React, { Component } from 'react';
import {ScrollView, StyleSheet, View, ListView} from 'react-native'
import { List,Content, ListItem, Thumbnail, Text, Body, Icon, Spinner } from 'native-base';

export default class Song extends Component  {
  constructor(props) {
    super(props)
  }

  render(){
    let {song} = this.props
    return(
      <View style={{backgroundColor:'#b4b4b4', marginTop:1, marginLeft:10, marginRight:10 }}>
          <List>
            <ListItem>
              <Thumbnail source={{uri : song.user.avatar_url}} />
              <Body >
                <Text>{song.user.username}</Text>
                <Text note style={{color: 'white' }}>{song.title}</Text>
                <View style={{paddingTop: 10}}>
                  <Icon style={{ paddingLeft:13, fontSize: 20}} name="ios-headset-outline" />
                </View>
              </Body>
            </ListItem>
          </List>
      </View>
    )
  }
}