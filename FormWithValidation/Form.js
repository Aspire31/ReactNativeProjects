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

    // state = {
    //     val1: '',
    //     val2: '',
    //     val3: ''
    // }
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

//     handleOnUpdate = () => {
//          let st = this.state
//      if (st.name != '' && st.email != '' && st.designation != '' && st.company != '') {
//          let payLoad = {
//              id : st.id,
//              name : st.name,
//              email : st.email,
//              designation : st.designation,
//              company : st.company,
//          };
//          let userData = st.userData;
//          userData[currKey] = payLoad;
//          this.setState(
//              {
//              userData: userData,
//              }
//          );
//      }
//      this.setState({
//          isHidden : true,
//          name : '',
//          email : '',
//          designation : '',
//          company : '',
//      })
//  }
 

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


                            // temp.splice(indexToEdit, 1)
                            // this.setState({
                            //     empRecord: temp
                            // })
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
        // console.warn(id)
    }

    handleDelete = (id) => {
        // console.warn('id is',id)
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
                        }     //getting -1 as index, issue
                        //didnt catch the id at the bottom
                    },
                    style: 'default'
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancelling the delete!'),
                    style: 'cancel'
                },
            ])

        // let updatedArray = []
        // let temp = this.state.empRecord

        // let i = 0
        // for (i = 0; i < temp.length - 1; i++) {
        //     if (temp[i].id != id) {
        //         updatedArray.push(temp[i])
        //     }
        // }
        // this.setState({
        //     empRecord: updatedArray
        // })
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

                <View style={styles.topBar}>
                    <Text style={styles.titleText}>
                        {'\n'}{this.state.titleText}
                    </Text>
                </View>

                <View style={{ flex: 6, backgroundColor: 'white', paddingLeft: 20 }}>
                    <View style={styles.imputView}>
                        <Text style={styles.baseText}> First Name</Text>
                        <TextInput placeholder="First Name Over Here"
                            onChangeText={(text) => this.setState({ first_name: text})}
                            value={first_name}
                            clearButtonMode='while-editing'
                            ref={ref => this.input1 = ref} //in input1, we get ref
                            onSubmitEditing={() => this.submitInput(1)}
                            style={styles.textfield} />
                    </View>

                    <View style={styles.imputView}>
                        <Text style={styles.baseText}> Last Name</Text>
                        <TextInput placeholder="Last Name Over Here"
                            onChangeText={(text) => this.setState({ last_name: text})}
                            value={this.state.last_name}
                            clearButtonMode='while-editing'
                            ref={ref => this.input2 = ref}
                            onSubmitEditing={() => this.submitInput(2)}
                            style={styles.textfield} />
                    </View>

                    <View style={styles.imputView}>
                        <Text style={styles.baseText}> Email</Text>
                        <TextInput placeholder="Email Id Please"
                            onChangeText={(text) => this.setState({ email: text})}
                            value={this.state.email}
                            clearButtonMode='while-editing'
                            ref={ref => this.input3 = ref}
                            onSubmitEditing={() => this.submitInput(3)}
                            returnKeyType='done'
                            style={styles.textfield} />
                    </View>

                    {/* <View style = {styles.imputView}>
                               <Text style = {styles.baseText}> BirthDate</Text>
                               <TextInput placeholder = "Your Special Day" 
                                   onChangeText={(text) => this.setState({birthdate:text})}
                                   value = {this.state.birthdate}
                                   clearButtonMode = 'while-editing'
                                   style={styles.textfield} />
                            </View>

                            <View style = {styles.imputView}>
                               <Text style = {styles.baseText}> Password</Text>
                               <TextInput placeholder = "Please Enter The Password." 
                                   onChangeText={(text) => this.setState({password:text})}
                                   value = {this.state.password}
                                   clearButtonMode = 'while-editing'
                                   style={styles.textfield} />
                            </View> */}

                    <View style={styles.buttonView}>
                        <TouchableOpacity style={[styles.buttonBackground, { backgroundColor: buttonStateHolder ? 'lightgray' : 'powderblue' }]}
                            //   onPress = {this.submitAndClear}
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

                {/* <View style = {styles.DataView}>
                                <Text style = {styles.ViewedData}>
                                    {this.state.record}
                                </Text>    
                            </View>  */}
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