import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Icon, Container, Item, Input, Button, Right, Body, Title, Header, View } from 'native-base';

import { Link } from 'react-router-native'

import {fetchSongs} from '../actions'


class HeaderBar extends Component {
    constructor(props){
      super(props)
    }

    componentDidMount(){
      this.props.fetchSongs()
    }

    render() {
      console.log('header',this.props)
      const {navigate} = this.props.navigation
        return (
          <Container>
            <Header searchBar>
              <Title style={{margin:14}}>SingSong</Title>

              <Right>
                  <Button transparent onPress={()=>navigate('Search')}>
                    <Icon name='search' />
                  </Button>
              </Right>
            </Header>
            <MainBar />
          </Container>
        );
    }
}

const dispatchToProps = dispatch=>({
  fetchSongs : ()=> dispatch(fetchSongs())
})

const styles = {
  toolbar:{
    backgroundColor: 'white',
    color: 'white',
    height: 56,
    elevation: 5,
  },
};

export default connect(null,dispatchToProps)(HeaderBar)