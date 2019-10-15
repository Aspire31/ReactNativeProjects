import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native';
import Card from './Card'
import Login from './App';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Login Form",
    };
  }

  onPress = () => {
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
           <TextInput placeholder = "Enter Your Name Here." style={{ 
             height: 40,
             borderColor: 'gray',
             borderWidth: 1,
             width: 180,
             borderRadius: 15,
             backgroundColor: '#DCDCDC',
             textAlign: "center"
            }} />
            </View>
           
           <View style = {{flexDirection: 'row', paddingTop: 40}}>
             <Text style = {styles.baseText}> Password{'\t '} </Text>
             <TextInput placeholder = "••••••••" style={{ 
             height: 40,
             borderColor: 'gray',
             borderWidth: 1,
             width: 180,
             borderRadius: 15,
             backgroundColor: '#DCDCDC',
             textAlign: "center"
            }} />
            </View>
            
            <View style = {{flexDirection: 'row', paddingTop: 40, justifyContent: "center"}}>
             <TouchableOpacity style = {{
               backgroundColor: 'green',
               height: 50,
               width: 300,
               borderRadius: 30,
               alignItems: "center",
               justifyContent: "center"
             }} onPress = {this.onPress}>
               <Text style = {{fontSize: 20, fontWeight: 'bold' }}>
                 Login
               </Text>
             </TouchableOpacity>
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
  },
});