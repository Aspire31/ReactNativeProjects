import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator,TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class getAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      status: '',
      message: '',
      showLoader: true,
    };
  }


  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const userData1 = response.data;
        this.setState({
          userData: userData1,
          showLoader: false
        });
      })
  }

  render() {
    return (
      <React.Fragment>

        <View style={styles.buttonViewStyle}>
        <TouchableOpacity onPress={() => { this.props.navigation.push("postAPI")}} >
        <View style={styles.buttonContainer} >
            <Text style={styles.buttonStyles} >
              Post Part1>
          </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.push("postAPI2")}} >
        <View style={styles.buttonContainer} >
            <Text style={styles.buttonStyles} >
              Post Part2>
          </Text>
          </View>
        </TouchableOpacity>
        </View>
        
        <React.Fragment>
          {this.state.showLoader && (
            <ActivityIndicator
              size="large"
            />
          )
          }
        </React.Fragment>

        <FlatList
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
          )} />

      </React.Fragment>

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
  },
  buttonStyles: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    color: '#205c64',
    margin:10
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#b0e0e6',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    margin: 10,
    alignItems: 'center',
  },
  buttonViewStyle:{
    marginLeft:5, 
    flexDirection:'row', 
    justifyContent:'center', 
    marginBottom:-15 
  }
})