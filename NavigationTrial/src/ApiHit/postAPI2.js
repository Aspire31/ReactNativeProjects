import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

export default class postAPI2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  postFunction = () => {

    const user = {
      name: this.state.name
    }
    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(response => {
        console.warn(response)
        console.warn(response.data)
        console.warn('data', response.data.user.name)
      })
  }


render() {
  return (
    <View>

      <TextInput
      style={{marginTop: 100, marginLeft: 50, backgroundColor: 'lightgray', padding: 20, marginRight: 50}}
      placeholder='Enter Name'
      value={this.state.name}
      onChangeText={(text) => this.setState({ name: text })}
      />
      <TouchableOpacity onPress = {this.postFunction}
      style={{backgroundColor: 'powderblue', padding: 20, margin: 20, alignItems: 'center'}}
      >
        <Text>
          Submit
       </Text>
      </TouchableOpacity>
    </View>
  );
}
}