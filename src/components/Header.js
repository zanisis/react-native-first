import React, { Component } from 'react';

import { Icon, Container, Item, Input, Button, Right, Body, Title, Header } from 'native-base';
export default class HeaderBar extends Component {
    constructor(props){
      super(props){
      this.state ={
        searchSong: ''
        }
      }
    }
    render() {
        return (
          <Container>
            <Header>
              <Title style={{margin:14}}>SingSong</Title>
              <Item>
                 <Icon name="ios-search" />
                 <Input
                  placeholder="Search"
                  name="keyword"
                  onChangeText={(text) => this.setState({keyword:text})}
                  onSubmitEditing={() => this.searchNow()}
                  value={this.state.keyword}
                 />
              </Item>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
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