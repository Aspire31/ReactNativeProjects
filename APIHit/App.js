/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';

export default class APIHit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      status: '',
      message: '',
    };
  }

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const userData1 = response.data;
        this.setState({
          userData: userData1
        });
      })
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          <FlatList
          style={{marginTop: 20}}
            data={this.state.userData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Text style={styles.text}>Department ID - {item.userId} </Text>
                <Text style={styles.text}> ID : {item.id} </Text>
                <Text style={styles.text}> TITLE : {item.title}</Text>
                <Text style={styles.text}> COMPLETED : {`${item.completed}`}</Text>
              </View>
            )} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    paddingBottom: 10, 
    paddingLeft: 20, 
    fontSize: 16, 
    color: 'white', 
    fontWeight: 'bold',
     paddingTop: 10 
  },
  container:{
    marginTop: 20, 
    borderWidth: 0.5, 
    borderColor: 'lightgray', 
    marginLeft: 20, 
    marginRight: 20,
    borderRadius: 20, 
    alignItems: 'center',
    backgroundColor: 'powderblue',
    shadowColor: 'black',
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 0.5
  }
})


// axios.get('https://dog.ceo/api/breeds/image/random')
//   .then(response => {
//     console.log(response);
//     this.setState({ message: response.data.message, status: response.data.status });
//   })
//   .catch(error => {
//     console.log(error);
//   });

// render() {
//   return (
//     <View>
//       <Text style={{ backgroundColor: 'powderblue', color: 'white', fontWeight: 'bold', paddingTop: 100 }}>
//         Message: {this.state.message}
//       </Text>
//       <Text>
//         {this.state.status}
//       </Text>
//     </View>
//   );
// }

// return fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((responseJson) => {
//     this.setState({
//       empdata: responseJson

//     })
//     //  console.warn(this.state.empdata.name)
//     // for (object in this.state.empdata) {
//     //    console.warn(object)
//     //  }
//     this.state.empdata.forEach(object => {
//       console.warn(object.name)

//     });
//   })
