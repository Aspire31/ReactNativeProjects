import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

import MainScreen from './MainScreen.js'
import EditScreen from './EditScreen.js'

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
  })

  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity onPress={() => { this.props.navigation.push("editMain"); }}>
          <View style={styles.buttonContainer} >
            <Text style={styles.buttonStyles} >
              Edit Navigation Trial >
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
    justifyContent: 'center'
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
  },
  iconPos: {
    paddingRight: 20
  }
})


const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  editMain: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Main Screen',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <Icon name="md-home" size={30} color="white" style={styles.iconPos} />
        </TouchableOpacity>
      )
    })
  },
  editScreen: {
    screen: EditScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Screen',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <Icon name="md-home" size={30} color="white" style={styles.iconPos} />
        </TouchableOpacity>
      )
    })
  },
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
        fontSize: 22,
      },
      headerBackTitle: null,
    }
  }
);

export default createAppContainer(AppNavigator);