import React, { Component,  } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Child from "./demo/child";

export default class App extends Component {

constructor(){
  super();
  this.state = {
      firstName: "",
      lastName: "",
      counter: 1,
  }
 
}


handleCounter =(counter)=> {
  this.setState({counter: counter+1},()=>{
    
  });
  
}

render() {
    return (
      <View style={Styles.container}>
        
        <Child 
          counter ={this.state.counter}
          handleCounter={this.handleCounter}
        />
        
        
      </View>
    )
  }
}


const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width: 100,
    height: 30,
    backgroundColor: '#ddd',
    color: "#000",
    justifyContent: 'center',
    alignItems: 'center',
   marginTop: 10,

  }
})






