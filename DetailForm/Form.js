import React, { Component } from 'react';
import {
    View,
    StatusBar, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    Alert, 
    SafeAreaView,
    ScrollView } from 'react-native';

    import Table from './Table'
    
    
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
                isFocused: false
            };
        }

        handleChange() {
            let payload = {
                firstname: this.state.first_name,
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
                },
                () => {
                    console.log(this.state.empRecord)
                },
            );
            
        }

        writeText = (first_name,last_name,email,birthdate,password) => {
            this.setState({
              record: 'First Name: '  + first_name  +' \n\n ' +
                      'Last Name:  '  + last_name   +' \n\n ' + 
                      'Your Email: '  + email       +' \n\n ' +
                      'Birthdate:  '  + birthdate   +' \n\n ' +
                      'Password:   '  + password    +' \n\n '
            })
        }

        submitAndClear = () => {
            this.writeText(this.state.first_name, this.state.last_name,this.state.email, this.state.birthdate,this.state.password)
            console.log(this.state.first_name, this.state.last_name,this.state.email, this.state.birthdate,this.state.password)
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                birthdate: '',
                password: ''
            })
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
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ])
        }
        
        render() {
            return (
            <SafeAreaView>
                <ScrollView>
                   <View style={{flex: 6}}>
                      <StatusBar backgroundColor="black" barStyle="light-content"/>
                
                        <View style={styles.topBar}>
                            <Text style = {styles.titleText}>
                              {'\n'}{'\n'}{this.state.titleText}
                            </Text>
                        </View>
                
                        <View style={{flex: 6, backgroundColor: 'white', paddingLeft: 20}}>
                            <View style = {styles.imputView}>
                               <Text style = {styles.baseText}> First Name</Text>
                               <TextInput placeholder = "First Name Over Here" 
                                   onChangeText = {(text) => this.setState({first_name:text})}
                                   value = {this.state.first_name}
                                   clearButtonMode = 'while-editing'
                                   style={styles.textfield} />
                            </View>
                
                            <View style = {styles.imputView}>
                               <Text style = {styles.baseText}> Last Name</Text>
                               <TextInput placeholder = "Last Name Over Here" 
                                   onChangeText={(text) => this.setState({last_name:text})}
                                   value = {this.state.last_name}
                                   clearButtonMode = 'while-editing'
                                   style={styles.textfield} />
                            </View>

                            <View style = {styles.imputView}>
                               <Text style = {styles.baseText}> Email</Text>
                               <TextInput placeholder = "Email Id Please" 
                                   onChangeText={(text) => this.setState({email:text})}
                                   value = {this.state.email}
                                   clearButtonMode = 'while-editing'
                                   style={styles.textfield} />
                            </View>

                            <View style = {styles.imputView}>
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
                            </View>
                
                            <View style = {styles.buttonView}>
                                <TouchableOpacity style = { styles.buttonBackground} 
                                //   onPress = {this.submitAndClear}
                                onPress = {() => this.handleChange()}
                                  >
                                   <Text style = {{fontSize: 20, fontWeight: 'bold' }}>
                                      Login
                                   </Text>
                                </TouchableOpacity>
                            </View>      
                        </View>
                        <View style = {styles.DataView}> 
                                <Table item = {this.state.empRecord} />
                             </View> 
                        {/* <View style = {styles.DataView}>
                                <Text style = {styles.ViewedData}>
                                    {this.state.record}
                                </Text>    
                            </View>  */}
                    </View>
                </ScrollView>
             </SafeAreaView>
                
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
            },
            buttonBackground: {
                backgroundColor: 'green',
                height: 50,
                width: 300,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center"
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
                justifyContent: "center", 
                alignItems: "center"
            },
            topBar:{
                flex: 1,
                backgroundColor: 'powderblue',
                alignItems: 'center',
                justifyContent: 'center',
                height: 100 
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
                paddingTop: 40,
                paddingLeft: 30,
                justifyContent: "center"
            },
            ViewedData: {
                fontSize: 18,
                fontWeight: 'bold',
            }
        });