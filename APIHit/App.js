/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

export default class APIHit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      status: '',
      message: '',
      showLoader: true,
      name: '',
    };
  }


  // componentDidMount() {

  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => {
  //       const userData1 = response.data;
  //       this.setState({
  //         userData: userData1,
  //         showLoader: false
  //       });
  //     })
  // }

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
      {/* <View style={{ paddingTop: 50 }}>
        {this.state.showLoader && (
          <ActivityIndicator
            size="large"
          />
        )
        }
      </View> */}

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


      {/* <FlatList
        style={{ marginTop: 20 }}
        data={this.state.userData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.text}>Department ID - {item.userId} </Text>
            <Text style={styles.text}> ID : {item.id} </Text>
            <Text style={styles.text}> TITLE : {item.title}</Text>
            <Text style={styles.text}> COMPLETED : {`${item.completed}`}</Text>
          </View>
        )} /> */}
    </View>
  );
}
}

const styles = StyleSheet.create({
  text: {
    paddingBottom: 10,
    paddingLeft: 20,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 10
  },
  container: {
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'powderblue',
    shadowColor: 'black',
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.5
  }
})

// axios.get('https://dog.ceo/api/breeds/image/random')
//     .then(response => {
//         console.log(response);
//         this.setState({ message: response.data.message, status: response.data.status });
//     })
//     .catch(error => {
//         console.log(error);
//     });

// render() {
//     return (
//         <View>
//             <Text style={{ backgroundColor: 'powderblue', color: 'white', fontWeight: 'bold', paddingTop: 100 }}>
//                 Message: {this.state.message}
//             </Text>
//             <Text>
//                 {this.state.status}
//             </Text>
//         </View>
//     );
// }

// return fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((responseJson) => {
//         this.setState({
//             empdata: responseJson

//         })
//         //  console.warn(this.state.empdata.name)
//         // for (object in this.state.empdata) {
//         //    console.warn(object)
//         //  }
//         this.state.empdata.forEach(object => {
//             console.warn(object.name)

//         });
//     })

// axios.post('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         console.warn("resp", response)
//         const userData1 = response;
//         this.setState({
//             userData: userData1
//         });

//         console.warn(`Status code: ${response.status}`);
//         console.warn(`Status text: ${response.statusText}`);
//         console.warn(`Request method: ${response.request.method}`);
//         console.warn(`Path: ${response.request.path}`);
//         console.warn(`Date: ${response.headers.date}`);
//         console.warn(`Data: ${response.data}`);

//         Error
//     }).catch(err => {
//         console.warn("err", err)
//     })
