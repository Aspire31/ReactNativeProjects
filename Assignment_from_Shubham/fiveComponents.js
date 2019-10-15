/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  Picker,

} from 'react-native';




export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "lightgreen", paddingTop: 50 }}>



        <Image
          style={{ width: 200, height: 200, marginBottom: 10, borderRadius: 200 }}
          source={{ uri: "data:image/png;base64,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" }}
        />

        <Text style={{ fontSize: 30, fontStyle: "italic" }}>
          Registration Form
        </Text>


        <TextInput
          style={{ height: 45, width: 300, borderColor: 'gray', marginBottom: 10, marginTop: 30, backgroundColor: "white", borderRadius: 15, paddingLeft: 20 }}
          placeholder={"Enter name"}

        />
        <TextInput
          style={{ height: 45, width: 300, borderColor: 'gray', marginBottom: 10, backgroundColor: "white", borderRadius: 15, paddingLeft: 20 }}
          placeholder={"Enter Email"}

        />

        <TextInput
          style={{ height: 45, width: 300, borderColor: 'gray', marginBottom: 30, backgroundColor: "white", borderRadius: 15, paddingLeft: 20 }}
          placeholder={"Enter Course"}
          

        />


        <Picker
          style={{ height: 10, width: 100,marginBottom:30 }}
        >
          <Picker.Item label="CSE" value="CSE" />
          <Picker.Item label="ME" value="ME" />
          <Picker.Item label="CE" value="CE" />
          <Picker.Item label="EEE" value="EEE" />
        </Picker>

        <Button style = {{marginTop:40}}
          title="Submit"
        />
      </View>
    );
  }
}

