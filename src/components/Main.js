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
      console.log('Mainbar', this.props.getSongs)
      const data = this.props.getSongs
      console.log('mainbar', data.hasOwnProperty('listSong') ? true : false);
        return (
          <View>
        {this.props.mode === 'home' ?
          <View style={{marginTop: 20}}>
            { !data.hasOwnProperty('listSong')?
              <Spinner color='blue'/>
              :
              <ListView
                dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data.listSong)}
                renderRow={(rowData) => <Song song={rowData} />}
              />
            }
          </View>
          :
          <View style={{marginTop: 20}}>
            { !data.hasOwnProperty('listSong')?
              <View></View>
              :
              <ListView
                dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data.listSong)}
                renderRow={(rowData) => <Song song={rowData} />}
              />
            }
          </View>
        }
      </View>

        )
    }
}

const stateToProps = state =>({
  getSongs : state.songList
})

export default connect(stateToProps,null)(MainBar)