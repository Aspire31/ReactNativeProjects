import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import style from '../../Components/style'
import AsyncStorage from '@react-native-community/async-storage';
import { RESULTS } from 'react-native-permissions';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            birthday: '',
            state: '',
            country: ''
        };
    }

    submitInput = (type) => {
        // this //gives access to all the method in it via ref
        // debugger
        switch (type) {
            case 1:
                this.input2.focus();
                break;
            case 2:
                this.input3.focus();
                break;
            case 3:
                this.input4.focus();
                break;
            case 4:
                this.input5.focus();
                break;
            case 5:
                this.input6.focus();
                break;
            case 6:
                this.handleSubmit();
                break;
        }
    }

    handleSubmit = () => {
        if (this.state.email != '' && this.state.firstName != '' && this.state.lastName != '' && this.state.birthday != '' && this.state.state != '' && this.state.country != '') {
            // [["firstName", this.state.firstName],["lastName", this.state.lastName],["email", this.state.email],["birthday", this.state.birthday],["state", this.state.state],["country", this.state.country]]
            
            const firstName = ["firstName", this.state.firstName]
                const lastName = ["lastName", this.state.lastName]
                const email = ["email2", this.state.email]
                const birthday = ["birthday", this.state.birthday]
                const state = ["state", this.state.state]
                const country = ["country", this.state.country]
                
                AsyncStorage.multiSet([firstName, lastName, email, birthday, state, country],() =>{
                    this.props.navigation.push('loginDashboard')
                })
        }
        else {
            Alert.alert('All Fields are necessary', null, [
                {
                    text: 'OK',
                    onPress: () => { console.log('Ok has been pressed') }
                }
            ])
        }
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }} >
                <View style={styles.viewStyle} >
                    <Text style={style.text} > First Name: </Text>
                    <TextInput
                        style={style.textInput}
                        value={this.state.data}
                        placeholder='Enter Your First Name'
                        onChangeText={(text) => this.setState({ firstName: text })}
                        ref={ref => this.input1 = ref} //in input1, we get ref
                        onSubmitEditing={() => this.submitInput(1)}
                    />
                </View>
                <View style={styles.viewStyle} >
                    <Text style={style.text} > Last Name: </Text>
                    <TextInput
                        style={style.textInput}
                        value={this.state.data}
                        placeholder='Enter Your Last Name'
                        onChangeText={(text) => this.setState({ lastName: text })}
                        ref={ref => this.input2 = ref} //in input1, we get ref
                        onSubmitEditing={() => this.submitInput(2)}
                    />
                </View>
                <View style={styles.viewStyle} >
                    <Text style={style.text} > Your Email: </Text>
                    <TextInput
                        style={style.textInput}
                        value={this.state.data}
                        placeholder='Enter Your Email'
                        onChangeText={(text) => this.setState({ email: text })}
                        ref={ref => this.input3 = ref} //in input1, we get ref
                        onSubmitEditing={() => this.submitInput(3)}
                    />
                </View>
                <View style={styles.viewStyle} >
                    <Text style={style.text} > Birthday:    </Text>
                    <TextInput
                        style={style.textInput}
                        value={this.state.data}
                        placeholder='Enter Your Birthday'
                        onChangeText={(text) => this.setState({ birthday: text })}
                        ref={ref => this.input4 = ref} //in input1, we get ref
                        onSubmitEditing={() => this.submitInput(4)}
                    />
                </View>
                <View style={styles.viewStyle} >
                    <Text style={style.text} > Your State: </Text>
                    <TextInput
                        style={style.textInput}
                        value={this.state.data}
                        placeholder='Enter Your State'
                        onChangeText={(text) => this.setState({ state: text })}
                        ref={ref => this.input5 = ref} //in input1, we get ref
                        onSubmitEditing={() => this.submitInput(5)}
                    />
                </View>
                <View style={styles.viewStyle} >
                    <Text style={style.text} > Country:     </Text>
                    <TextInput
                        style={style.textInput}
                        value={this.state.data}
                        placeholder='Enter Your Country'
                        onChangeText={(text) => this.setState({ country: text })}
                        ref={ref => this.input6 = ref} //in input1, we get ref
                        onSubmitEditing={() => this.submitInput(6)}
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
        paddingTop: 20,
        paddingRight: 5,
        color: '#205c64'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        flexDirection: 'row'
    }
})