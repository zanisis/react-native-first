import React, { Component } from 'react';
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View, ListView} from 'react-native'
import { List,Content, ListItem, Thumbnail, Text, Body, Icon, Spinner } from 'native-base';

import Song from './Song'

class MainBar extends Component {
    constructor(props){
      super(props)
    }

    render() {
      console.log('mainbar',this.props.getSongs)
      const data = this.props.getSongs
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

const stateToProps = state =>({
  getSongs : state.songList
})

export default connect(stateToProps,null)(MainBar)