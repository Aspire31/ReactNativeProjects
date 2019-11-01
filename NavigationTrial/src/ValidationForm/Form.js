import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    Keyboard
} from 'react-native';

import Table from './Table'

const isInvalid = (val) => {
    return val.length == 0;
}


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Login Form",
            first_name: '',
            last_name: '',
            email: '',
            birthdate: '',
            password: '',
            record: '',
            empRecord: [],
            buttonTitle: 'Save',
        };
    }

    handleChange() {
        if (this.state.first_name == '' || this.state.last_name == '' || this.state.email == '') {
            Alert.alert('All the fields are compulsory!', null,
                [
                    {
                        text: 'OK',
                        onPress: () => { console.log('OK Pressed Validation') },
                    }
                ])
        } else {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
                Keyboard.dismiss();
                let payload = {
                    id: new Date().getUTCMilliseconds(),
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    birthdate: this.state.birthdate,
                    password: this.state.password
                };

                let empRecord = this.state.empRecord;
                console.log('empRecord', empRecord);
                empRecord.push(payload);
                this.setState(
                    {
                        empRecord: empRecord,
                        first_name: '',
                        last_name: '',
                        email: '',
                        birthdate: '',
                        password: '',
                    },
                    () => {
                        console.log(this.state.empRecord)
                    },
                );
            } else {
                Alert.alert('Invalid Email', null,
                    [
                        {
                            text: 'OK',
                            onPress: () => { console.log('OK Pressed Validation') },
                        }

                    ])
            }
        }
    }

    writeText = (first_name, last_name, email, birthdate, password) => {
        this.setState({
            record: 'First Name: ' + first_name + ' \n\n ' +
                'Last Name:  ' + last_name + ' \n\n ' +
                'Your Email: ' + email + ' \n\n ' +
                'Birthdate:  ' + birthdate + ' \n\n ' +
                'Password:   ' + password + ' \n\n '
        })
    }

    clearText = () => {
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            birthdate: '',
            password: ''
        })
    }

    submitAndClear = () => {
        this.writeText(this.state.first_name, this.state.last_name, this.state.email, this.state.birthdate, this.state.password)
        console.log(this.state.first_name, this.state.last_name, this.state.email, this.state.birthdate, this.state.password)
        this.clearText()
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

    handleEdit = (id) => {
        Alert.alert('Are you sure you want to edit?',
            null,
            [
                {
                    text: 'Continue',
                    onPress: () => {
                        let temp = this.state.empRecord
                        let indexToEdit = temp.findIndex(item => item.id === id)
                        if (indexToEdit != -1) {
                            this.setState({
                                first_name: temp[indexToEdit].first_name,
                                last_name: temp[indexToEdit].last_name,
                                email: temp[indexToEdit].email
                            })
                            temp.splice(indexToEdit, 1)
                            this.setState({
                                empRecord: temp
                            })
                        }
                    },
                    style: 'default'
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancelling the edit!'),
                    style: 'cancel'
                },
            ])
    }

    handleDelete = (id) => {
        Alert.alert('Are you sure you want to delete?',
            null,
            [
                {
                    text: 'Continue',
                    onPress: () => {
                        let emptyArray = this.state.empRecord;

                        let indexToDelete = emptyArray.findIndex(item => item.id === id)
                        if (indexToDelete != -1) {
                            emptyArray.splice(indexToDelete, 1)
                            this.setState({
                                empRecord: emptyArray
                            })
                        } 
                    },
                    style: 'default'
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancelling the delete!'),
                    style: 'cancel'
                },
            ])
    }

    submitInput = (type) => {
        switch (type) {
            case 1:
                this.input2.focus();
                break;
            case 2:
                this.input3.focus();
                break;
            case 3:
                this.handleChange();
                break;
        }
    }


    render() {
        const { first_name, last_name, email } = this.state; //object destructor, direct use

        const isButtonDisabled = isInvalid(first_name) || isInvalid(last_name) || isInvalid(email)
        const buttonStateHolder = isButtonDisabled ? true : false

        return (
            <View style={{ flex: 6 }}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <View style={{ flex: 6, backgroundColor: 'white', paddingLeft: 20 }}>
                    <View style={styles.imputView}>
                        <Text style={styles.baseText}> First Name</Text>
                        <TextInput placeholder="First Name Over Here"
                            onChangeText={(text) => this.setState({ first_name: text })}
                            value={first_name}
                            clearButtonMode='while-editing'
                            ref={ref => this.input1 = ref}
                            onSubmitEditing={() => this.submitInput(1)}
                            style={styles.textfield} />
                    </View>

                    <View style={styles.imputView}>
                        <Text style={styles.baseText}> Last Name</Text>
                        <TextInput placeholder="Last Name Over Here"
                            onChangeText={(text) => this.setState({ last_name: text })}
                            value={this.state.last_name}
                            clearButtonMode='while-editing'
                            ref={ref => this.input2 = ref}
                            onSubmitEditing={() => this.submitInput(2)}
                            style={styles.textfield} />
                    </View>

                    <View style={styles.imputView}>
                        <Text style={styles.baseText}> Email</Text>
                        <TextInput placeholder="Email Id Please"
                            onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email}
                            clearButtonMode='while-editing'
                            ref={ref => this.input3 = ref}
                            onSubmitEditing={() => this.submitInput(3)}
                            returnKeyType='done'
                            style={styles.textfield} />
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity style={[styles.buttonBackground, { backgroundColor: buttonStateHolder ? 'lightgray' : 'powderblue' }]}
                            onPress={() => this.handleChange()}
                            disabled={isButtonDisabled}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                {this.state.buttonTitle}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.DataView}>
                    <Table
                        item={this.state.empRecord}
                        delete={(id) => this.handleDelete(id)}
                        edit={(id) => this.handleEdit(id)}
                    />
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
        fontSize: 26,
        fontWeight: 'bold',
    },
    buttonBackground: {
        backgroundColor: 'powderblue',
        height: 50,
        width: 300,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    textfield: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '90%',
        borderRadius: 15,
        backgroundColor: 'white',
        textAlign: "center"
    },
    buttonView: {
        flexDirection: 'column',
        paddingTop: 40,
        // justifyContent: "center",
        // alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    topBar: {
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 100
    },
    imputView: {
        flexDirection: 'column',
        paddingTop: 40,
        // alignItems: 'center',
        justifyContent: "center"
    },
    DataView: {
        flex: 2,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        shadowOpacity: 1,
        shadowColor: 'powderblue'
    },
    ViewedData: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});