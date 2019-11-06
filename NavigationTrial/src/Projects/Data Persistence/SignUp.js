import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import style from '../../Components/style'
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    storeData = async (value) => {
        await AsyncStorage.setItem('email', value)
    }

    handleSubmit = () => {
        if (this.state.data !== null) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.data)) {
                this.props.navigation.navigate('signDashboard')
                this.storeData(this.state.data)
            } else {
                Alert.alert('Invalid Email', null,
                    [
                        {
                            text: 'OK',
                            onPress: () => { console.log('OK Pressed Validation') },
                        }

                    ])
            }
        } else {
            Alert.alert('Please enter your email!', null,
                [
                    {
                        text: 'OK',
                        onPress: () => { console.log('OK Pressed Validation') },
                    }

                ])
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={style.text} > Your Email: </Text>
                    <TextInput
                        style={style.textInput}
                        value={this.state.data}
                        placeholder='Enter Your Email'
                        onChangeText={(text) => this.setState({ data: text })}
                        onSubmitEditing={() => this.storeData(this.state.data)}
                    />
                </View>
                <TouchableOpacity
                    style={[style.buttonContainer, styles.button]}
                    onPress={() => this.handleSubmit()}
                >
                    <Text style={style.buttonStyles} >
                        Submit
              </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }} >
                    <Text style={styles.buttonStyles} >
                        Already Signed Up?
                    </Text>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('login')}
                    >
                        <Text style={[styles.buttonStyles,{padding:0, color: '#9d9dff'}]} >
                            Login Then!
                        </Text>
                    </TouchableOpacity>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        width: 200
    },
    buttonStyles: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop:20,
        paddingRight:5,
        color: '#205c64'
    },
})