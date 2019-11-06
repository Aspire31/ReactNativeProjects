import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import style from '../../Components/style'
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    storeData = async () => {
        try {
            await AsyncStorage.setItem('email', this.state.data)
        } catch (e) {
            console.log("Error in Storage", e)
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
                        onSubmitEditing={() => this.storeData()}
                    />
                </View>
                <TouchableOpacity 
                style={[style.buttonContainer, styles.button]} 
                onPress = {() => this.props.navigation.navigate('signDashboard')}
                >
                    <Text style={style.buttonStyles} >
                        Submit
              </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        marginTop:20,
        width:200
    }
})