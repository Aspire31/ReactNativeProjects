axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        console.log(response);
        this.setState({ message: response.data.message, status: response.data.status });
    })
    .catch(error => {
        console.log(error);
    });

render() {
    return (
        <View>
            <Text style={{ backgroundColor: 'powderblue', color: 'white', fontWeight: 'bold', paddingTop: 100 }}>
                Message: {this.state.message}
            </Text>
            <Text>
                {this.state.status}
            </Text>
        </View>
    );
}

return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            empdata: responseJson

        })
        //  console.warn(this.state.empdata.name)
        // for (object in this.state.empdata) {
        //    console.warn(object)
        //  }
        this.state.empdata.forEach(object => {
            console.warn(object.name)

        });
    })


POST request
axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.warn("resp", response)
        const userData1 = response;
        this.setState({
            userData: userData1
        });

        console.warn(`Status code: ${response.status}`);
        console.warn(`Status text: ${response.statusText}`);
        console.warn(`Request method: ${response.request.method}`);
        console.warn(`Path: ${response.request.path}`);
        console.warn(`Date: ${response.headers.date}`);
        console.warn(`Data: ${response.data}`);

        Error
    }).catch(err => {
        console.warn("err", err)
    })

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default class APIHit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            AuthToken: '',
            image: ''
        };
    }


    getFunction = () => {
        axios.get('https://abhiparker.herokuapp.com/user/',
            {
                headers: {
                    "Authorization": this.state.AuthToken
                }
            }
        )
            .then(response => {
                // <Text>
                //   {response.data.name}
                // </Text>

                this.setState({
                    image: response.data.data.profile_pic
                })
                console.warn("Data", response.data.data.name)
            })
    }

    postFunction = () => {
        axios.post('https://abhiparker.herokuapp.com/user/login',
            {
                "name": "Alisha",
                "email": "alisha.nagpal31@yahoo.inf",
                "password": "12345678"
            }
        )
            .then(response => {
                this.setState({
                    AuthToken: "Bearer " + response.data.data
                })
                console.warn(response)
                console.warn(response.data.data)
            })
    }


    render() {
        return (
            <View>

                <TouchableOpacity onPress={this.postFunction}
                    style={{ backgroundColor: 'powderblue', padding: 20, margin: 20, alignItems: 'center', marginTop: 100 }}
                >
                    <Text>
                        Send Data
                   </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.getFunction}
                    style={{ backgroundColor: 'powderblue', padding: 20, margin: 20, alignItems: 'center' }}
                >
                    <Text>
                        ShowData
            </Text>
                </TouchableOpacity>

                {/* <Image source={{ uri: this.state.image } }/> */}
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
