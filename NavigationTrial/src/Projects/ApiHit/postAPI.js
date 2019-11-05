
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import axios from 'axios';

export default class postAPI extends Component {
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
            </View>
        );
    }
}
