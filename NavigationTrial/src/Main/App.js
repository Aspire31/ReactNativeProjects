import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import getAPI from '../ApiHit/Get.js'
import postAPI from '../ApiHit/postAPI.js'
import postAPI2 from '../ApiHit/postAPI2.js'

import ComponentsBasedUI from '../ComponentBasedUI/mainComponent.js'
import DemoSignUpForm from '../SimpleSignUpForm/DemoSignUpForm.js'
import DetailForm from '../DetailForm/DetailForm.js'
import ValidationForm from '../ValidationForm/ValidationForm.js'
import ChallengeScreen from '../ChallengeScreen/ChallengeScreen.js'
import HallOfFame from '../HallOfFame/HallOfFame.js'
import SearchAPI from '../NewsAPIHIT/SearchAPI.js'

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
        <ScrollView>
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

          <TouchableOpacity onPress={() => { this.props.navigation.push("demo"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Simple Sign Up Form >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("detail"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Detail Form >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("validation"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Form With Validation >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("challenge"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Challenge Screen UI >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("fame"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Hall Of Fame UI >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("search"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                News Search API >
          </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  APIHit: { screen: getAPI, navigationOptions: { title: 'Axios API Hit' } },
  postAPI: { screen: postAPI, navigationOptions: { title: 'Sending Static Info' } },
  postAPI2: { screen: postAPI2, navigationOptions: { title: 'Sending Dynamic Info' } },
  component: { screen: ComponentsBasedUI, navigationOptions: { title: 'Gallery' } },
  demo: { screen: DemoSignUpForm, navigationOptions: { title: 'Sign Up Form' } },
  detail: { screen: DetailForm, navigationOptions: { title: 'Detail Form' } },
  validation: { screen: ValidationForm, navigationOptions: { title: 'Validation Form' } },
  challenge: { screen: ChallengeScreen, navigationOptions: { title: 'Challenges' } },
  fame: { screen: HallOfFame, navigationOptions: { title: 'Hall Of Fame' } },
  search: { screen: SearchAPI, navigationOptions: { title: 'News Data' } }
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
    }
  }
);

export default createAppContainer(AppNavigator);