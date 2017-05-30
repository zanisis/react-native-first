import React, { Component } from 'react';
import {View} from 'react-native'
import { List,Content, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
export default class MainBar extends Component {
    render() {
        return (
          <View style={{backgroundColor:'#b4b4b4', marginTop:60, marginLeft:10, marginRight:10 }}>
            <List>
              <ListItem>
                <Thumbnail source={require('./people1.jpg')} />
                <Body >
                  <Text>Sankhadeep</Text>
                  <Text note style={{color: 'white' }}> tittle song</Text>
                  <View style={{paddingTop: 10}}>
                    <Icon style={{ paddingLeft:13, fontSize: 20}} name="ios-headset-outline" />
                  </View>
                </Body>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Thumbnail source={require('./people1.jpg')} />
                <Body >
                  <Text>Sankhadeep</Text>
                  <Text note style={{color:'white'}}>Its time to build a difference . .</Text>
                </Body>
              </ListItem>
            </List>
          </View>
        );
    }
}
