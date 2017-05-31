import React, { Component } from 'react';
import {connect} from 'react-redux'

import { NavigationActions } from 'react-navigation'

import {
  StyleSheet
} from 'react-native';

import { Text, Body, Icon, Spinner, View, Item, Input, Container, Header, Left, Right, Button, Title } from 'native-base';
import {fetchSongs, searchSong, emptySongs} from '../actions'

import MainBar from './Main'
import store from '../store'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Profile'})
  ]
})

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword : ''
    }
  }

  handleChangeKeyword(data){
    this.setState({keyword: data})
  }

  handleSearch(value){
    console.log('ini apa',value);
    this.props.searchSong(value)
  }

  render(){
    // console.log('disearch',this.props.navigation)
    const {navigation, fetchSongs, emptySongs}= this.props
    return(
        <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=> {emptySongs(); fetchSongs(); navigation.goBack()}}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{
                      backgroundColor:'white',
                      height: 40
                    }}>

                      <Item>
                        <Input
                          placeholder="Search"
                          name="keyword"
                          value={this.state.keyword}
                          onChangeText={(text) => this.handleChangeKeyword(text)}
                          onSubmitEditing={()=>this.handleSearch(this.state.keyword)}
                        />
                        <Icon name="ios-search" />
                      </Item>
                    </Body>
                </Header>
                <MainBar mode={'search'}/>
            </Container>
    )
  }
}

const dispatchToState = dispatch =>({
  emptySongs : ()=> dispatch(emptySongs()),
  fetchSongs : ()=> dispatch(fetchSongs()),
  searchSong : (data) => dispatch(searchSong(data))
})

export default connect(null, dispatchToState)(Search)