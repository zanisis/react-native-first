import React, { Component } from 'react';

import { Icon, Container, Item, Input, Button, Right, Body, Title, Header } from 'native-base';
export default class HeaderBar extends Component {
    constructor(props){
      super(props)
      this.state ={
        searchSong: '',
        }

    }
    render() {
        return (
          <Container>
            <Header searchBar>
              <Title style={{margin:14}}>SingSong</Title>
              <Body style={{
                backgroundColor:'white',
                height: 40
              }}>
                <Item>
                  <Input
                    placeholder="Search"
                    name="keyword"
                    value={this.state.keyword}
                  />
                  <Icon name="ios-search" />
                </Item>
              </Body>
            </Header>
          </Container>
        );
    }
}


const styles = {
  toolbar:{
    backgroundColor: 'white',
    color: 'white',
    height: 56,
    elevation: 5,
  },
};