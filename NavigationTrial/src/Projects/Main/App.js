import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import style from '../../Components/style.js'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

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

import MainFile from '../ImagePicker/MainFile.js'
import ChangePicture from '../ImagePicker/ChangePicture.js'
import ImageOnLoad from '../ImagePicker/ImageOnLoad.js'
import MultiPick from '../ImagePicker/MultiPick.js'
import OnLoadFlatlist from '../ImagePicker/OnLoadFlatlist.js'

import MainScreen from '../EditNavigation/MainScreen.js'
import EditScreen from '../EditNavigation/EditScreen.js'
import localeEG from '../LocaleExample/localeEG.js'

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: () => (
      <TouchableOpacity onPress={() => alert('This is a button!')} >
        <Icon name="ios-information-circle-outline" size={30} color="white" style={styles.iconPos} />
      </TouchableOpacity>
    )
  })
  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.info}>
          Click Any Button To View Different Projects!
        </Text>
        <ScrollView style={{ margin: 15 }} >
          <TouchableOpacity onPress={() => { this.props.navigation.push("APIHit"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                API Trials >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("component"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Component Based UI >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("demo"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Simple Sign Up Form >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("detail"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Detail Form >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("validation"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Form With Validation >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("challenge"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Challenge Screen UI >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("fame"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Hall Of Fame UI >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("search"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                News Search API >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("picker"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Different Picker Projects >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("editMain"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Edit & Update (via Navigation) >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("local"); }}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                Example of Locale >
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
  iconPos: {
    paddingRight: 20
  }
})


const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  APIHit: {screen: getAPI,navigationOptions: { title: 'Axios API Hit' }},
  postAPI: { screen: postAPI, navigationOptions: { title: 'Sending Static Info' } },
  postAPI2: { screen: postAPI2, navigationOptions: { title: 'Sending Dynamic Info' } },
  component: { screen: ComponentsBasedUI, navigationOptions: { title: 'Gallery' } },
  demo: { screen: DemoSignUpForm, navigationOptions: { title: 'Sign Up Form' } },
  detail: { screen: DetailForm, navigationOptions: { title: 'Detail Form' } },
  validation: { screen: ValidationForm, navigationOptions: { title: 'Validation Form' } },
  challenge: { screen: ChallengeScreen, navigationOptions: { title: 'Challenges' } },
  fame: { screen: HallOfFame, navigationOptions: { title: 'Hall Of Fame' } },
  search: { screen: SearchAPI, navigationOptions: { title: 'News Data' } },
  picker: { screen: MainFile, navigationOptions: { title: 'Picker Projects' } },
  changePicture: { screen: ChangePicture, navigationOptions: { title: 'Upload Picture' } },
  imageOnLoad: { screen: ImageOnLoad, navigationOptions: { title: 'OnLoad Blur Focus' } },
  multiPick: { screen: MultiPick, navigationOptions: { title: 'Picking Multiple' } },
  onLoadFlatlist: { screen: OnLoadFlatlist, navigationOptions: { title: 'Image onLoad View' } },
  editMain: { screen: MainScreen, navigationOptions: { title: 'Main Screen' } },
  editScreen: { screen: EditScreen, navigationOptions: { title: 'Edit Screen' } },
  local: { screen: localeEG, navigationOptions: { title: 'Locale Example' } },
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#b0e0e6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
      headerBackTitle: null,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <Icon name="md-home" size={30} color="white" style={styles.iconPos} />
        </TouchableOpacity>
      )

    })
  }
);

export default createAppContainer(AppNavigator);