/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import axios from 'axios';

export default class APIHit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [],
    };
  }

  componentDidMount(){
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      // console.log(response)
      console.log(response.data);
      this.setState({ imageUrl: response.data["status"] });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
         <Text style={{paddingTop: 100, paddingLeft: 100}}>
         {this.state.imageUrl}
         </Text>
      </View>
    );
  }
}
