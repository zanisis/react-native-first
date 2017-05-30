import React, { Component } from 'react';
import {View} from 'react-native'
import { List,Content, ListItem, Thumbnail, Text, Body, Icon, Spinner } from 'native-base';
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
    }

    render() {
      console.log(this.state.listSong, 'di state')
      let data = this.state.listSong
        return (
          <View>
            { data.length === 0 ?
              <Spinner style={{marginTop:60}} color='blue' />
              :
              data.map(item =>(
                <View key={item.id} style={{backgroundColor:'#b4b4b4', marginTop:1, marginLeft:10, marginRight:10 }}>
                    <List>
                      <ListItem>
                        <Thumbnail source={require('./people1.jpg')} />
                        <Body >
                          <Text>{item.user.username}</Text>
                          <Text note style={{color: 'white' }}>{item.title}</Text>
                          <View style={{paddingTop: 10}}>
                            <Icon style={{ paddingLeft:13, fontSize: 20}} name="ios-headset-outline" />
                          </View>
                        </Body>
                      </ListItem>
                    </List>
                </View>
              ))

            }
          </View>

        )
    }
}
