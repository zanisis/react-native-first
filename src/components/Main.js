import React, { Component } from 'react';
import {ScrollView, StyleSheet, View, ListView} from 'react-native'
import { List,Content, ListItem, Thumbnail, Text, Body, Icon, Spinner } from 'native-base';

import Song from './Song'

export default class MainBar extends Component {
    constructor(props){
      super(props)
      this.state = {
        listSong : []
      }
    }

    componentDidMount(){
      fetch('https://api.soundcloud.com/tracks?client_id=f4323c6f7c0cd73d2d786a2b1cdae80c&limit=5')
      .then(res => res.json())
      .then(json => this.setState({listSong: json}))
      .catch(err => console.log(err))
    }

    render() {
      console.log(this.state.listSong, 'di state')
      let data = this.state.listSong
        return (
          <View style={{marginTop: 70}}>
            { data.length === 0 ?
              <Spinner color='blue'/>
              :
              <ListView
                dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data)}
                renderRow={(rowData) => <Song song={rowData} />}
              />
            }
          </View>
        )
    }
}
