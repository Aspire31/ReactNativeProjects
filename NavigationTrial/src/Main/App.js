import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import getAPI from '../ApiHit/Get.js'
import postAPI from '../ApiHit/postAPI.js'
import postAPI2 from '../ApiHit/postAPI2.js'

import ComponentsBasedUI from '../ComponentBasedUI/mainComponent.js'

class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
      title: 'Home',
      // headerStyle: {
      //   backgroundColor: '#b0e0e6',
      // },
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      //   color:'white',
      //   fontSize:22
      // },
  })


  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.info}>
          Click Any Button To View Different Projects!
        </Text>

        <TouchableOpacity onPress={() => { this.props.navigation.push("APIHit"); }}>
          <View style={styles.buttonContainer} >
            <Text style={styles.buttonStyles} >
              API Trials >
          </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.push("component"); }}>
          <View style={styles.buttonContainer} >
            <Text style={styles.buttonStyles} >
            Component Based UI >
          </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
    flex: 1,
  },
  info: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  buttonStyles: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    color: '#205c64'
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#b0e0e6',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    margin: 10,
    alignItems: 'center',
  }
})

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  APIHit: { screen: getAPI },
  postAPI: { screen: postAPI },
  postAPI2: { screen: postAPI2 },
  component: {screen: ComponentsBasedUI},
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#b0e0e6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:22,
      },
    }
  }
);

export default createAppContainer(AppNavigator);