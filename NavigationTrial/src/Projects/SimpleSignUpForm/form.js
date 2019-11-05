import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import Card from './Card'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Login Form",
            username: '',
            password: '',
            isLoggedIn: false,
            appText: 'Hello World'
        };
    }

    writeText = (text1, text2) => {
        this.setState({
            appText: text1 + '  ' + text2
        })
    }

    submitAndClear = () => {
        this.writeText(this.state.username, this.state.password)

        this.setState({
            username: '',
            password: ''
        })
    }

    login() {
        console.log(this.state.username);
        console.log(this.state.password);
        this.setState({ isLoggedIn: true });
    }

    onPressOfLogin = () => {
        Alert.alert('Let us Login',
            'Information is Saved',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <View style={{ flex: 5, backgroundColor: 'white' }}>

                    <View style={{
                        flexDirection: 'row',
                        paddingTop: 40,
                        alignItems: 'center'
                    }}>

                        <Text style={styles.baseText}> Name{'\t\t\t'}  </Text>
                        <TextInput placeholder="Enter Your Name Here."
                            onChangeText={(text) => this.setState({ username: text })}
                            value={this.state.username}
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                width: 180,
                                borderRadius: 15,
                                backgroundColor: '#f6f6f6',
                                textAlign: "center",
                            }} />
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 40 }}>
                        <Text style={styles.baseText}> Password{'\t '} </Text>
                        <TextInput
                            placeholder="••••••••"
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                width: 180,
                                borderRadius: 15,
                                backgroundColor: '#f6f6f6',
                                textAlign: "center"
                            }} />
                    </View>

                    <View style={{ flexDirection: 'column', paddingTop: 40, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{
                            backgroundColor: 'powderblue',
                            height: 50,
                            width: 300,
                            borderRadius: 30,
                            alignItems: "center",
                            justifyContent: "center"
                        }} onPress={this.submitAndClear}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Login
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 10 }}
                            onPress={this.login.bind(this)}>
                            <Text style={styles.titleText} >Show</Text>
                        </TouchableOpacity>
                        <View>
                            <Text>
                                {this.writeText}
                            </Text>
                        </View>


                        <Text>
                            {this.state.username}
                            {'\n'}{this.state.password}
                            {'\n'}{'\n'}{'\n'}
                            {this.state.appText}
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Card />
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Al Nile',
        fontSize: 26,
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
    }
});