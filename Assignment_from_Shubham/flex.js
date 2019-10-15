import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class Home extends Component {
name = "Shubham Singh";
  render() {
    return (
      <View  style={{ flex: 1, backgroundColor: "green", flexDirection: "column" }}>

        <View style={{ backgroundColor: "blue", flex: 1 }} />

        <View style={{ backgroundColor: "white", flex: 1, justifyContent: "space-around" }} >
          <View style={{ flex: 0.60, backgroundColor: "white", flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ flex: 0.60, backgroundColor: "pink" }} >
              <Text>{this.name}</Text>
              </View>
          </View>
        </View>

        <View style={{ backgroundColor: "red", flex: 1 }}></View>
        
      </View>
    );
  }
}