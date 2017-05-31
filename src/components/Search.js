import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import { Text, Body, Icon, Spinner, View, Item, Input, Container, Header, Left, Right, Button, Title } from 'native-base';


export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword : ''
    }
  }

  handleChangeKeyword(data){
    this.setState({keyword: data})
  }

  handleSearch(){
    
  }

  render(){
    const {navigation}= this.props
    console.log('disearch',this.props.navigation)
    return(
        <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=> navigation.goBack()}>
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
                        />
                        <Icon name="ios-search" />
                      </Item>
                    </Body>
                </Header>
            </Container>
    )
  }
}