import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity,Alert, Button } from 'react-native';
import Card from './Card'
import ChangeText from './ChangeText'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Login Form",
      username: '',
      password: '',
      isLoggedIn : false,
      appText: 'Hello World'
    };
  }
  
  // state = { appText: 'Hello World' }
  
  writeText = text => {
    this.setState({
      appText: text
    })
  }
  
  login(){
    console.log(this.state.username);
    console.log(this.state.password);
    this.setState({isLoggedIn : true});
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
      <View style={{
        flex: 1
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <View style={{
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center'}}>
        
        <Text style = {styles.titleText}>
        {'\n'}{'\n'}{this.state.titleText}
        </Text>
        </View>
        
        <View style={{flex: 5, backgroundColor: 'white'}}>
        
        <View style = {{
          flexDirection: 'row',
          paddingTop: 40,
          alignItems: 'center'}}>
          
          <Text style = {styles.baseText}> Name{'\t\t\t'}  </Text>
          <TextInput placeholder = "Enter Your Name Here." 
          onChangeText = {(text) => this.setState({username:text})}
          style={{ 
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 180,
            borderRadius: 15,
            backgroundColor: '#DCDCDC',
            textAlign: "center",
          }} />
          </View>
          
          <View style = {{flexDirection: 'row', paddingTop: 40}}>
          <Text style = {styles.baseText}> Password{'\t '} </Text>
          <TextInput 
          placeholder = "••••••••" 
          onChangeText={(text) => this.setState({password:text})}
          style={{ 
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 180,
            borderRadius: 15,
            backgroundColor: '#DCDCDC',
            textAlign: "center"
          }} />
          </View>
          
          <View style = {{flexDirection: 'column', paddingTop: 40, justifyContent: "center", alignItems: "center"}}>
          <TouchableOpacity style = {{
            backgroundColor: 'green',
            height: 50,
            width: 300,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center"
          }} onPress = {this.onPressOfLogin}>
          <Text style = {{fontSize: 20, fontWeight: 'bold' }}>
          Login
          </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style = {{padding: 10}} 
          onPress={this.login.bind(this)}>
          <Text style={styles.titleText} >Show</Text>
          </TouchableOpacity>
          <Text>
          {this.state.username}
          {'\n'}{this.state.password}
          </Text>
          
          <View style = {{padding: 20}}>
          <Text>{this.state.appText}</Text>
          <ChangeText writeText={this.writeText} />
          </View>
          
          </View>       
          </View>
          
          <View style={{flex: 1, backgroundColor: 'white'}}>
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