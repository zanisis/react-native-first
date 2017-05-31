import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Icon, Container, Item, Input, Button, Right, Body, Title, Header, View } from 'native-base';

import { Link } from 'react-router-native'

import {fetchSongs,emptySongs} from '../actions'
import MainBar from './Main'



class HeaderBar extends Component {
    constructor(props){
      super(props)
    }

    componentDidMount(){
      this.props.fetchSongs()
    }

    render() {
      console.log('header',this.props)
      const {navigation, emptySongs, fetchSongs} = this.props
        return (
          <Container>
            <Header searchBar>
              <Title style={{margin:14}}>SingSong</Title>
              <Right>
                  <Button transparent onPress={()=>{emptySongs(); navigation.navigate('Search')}}>
                    <Icon name='search' />
                  </Button>
              </Right>
            </Header>
            <MainBar mode={'home'}/>
          </Container>
        );
    }
}

const dispatchToState = dispatch=>({
  emptySongs : ()=> dispatch(emptySongs()),
  fetchSongs : ()=> dispatch(fetchSongs())
})

export default connect(null, dispatchToState)(HeaderBar)