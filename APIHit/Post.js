/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class APIHit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            AuthToken: '',
        };
    }


    getFunction = () => {
        axios.get('https://abhiparker.herokuapp.com/user/login',
            {
                headers: {
                    "name": "value"
                }
            }
        )
            .then(response => {
                console.warn("Data", response.data)
            })
    }

    postFunction = () => {

        const user = {
            name: this.state.name
        }
        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(response => {
                console.warn(response)
                console.warn(response.data)
            })
    }


    render() {
        return (
            <View>

                <TouchableOpacity onPress={this.getFunction}
                    style={{ backgroundColor: 'powderblue', padding: 20, margin: 20, alignItems: 'center' }}
                >
                    <Text>
                        Send Data
                   </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.postFunction}
                    style={{ backgroundColor: 'powderblue', padding: 20, margin: 20, alignItems: 'center' }}
                >
                    <Text>
                        ShowData
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

