import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button  title = "Move Over" onPress = {() => {
          this.props.navigation.push("Main");
        }}  />
      </View>
    );
  }
}

class MainScreen extends React.Component {

  // componentDidMount(){
  //   console.warn("props",this.props)
  // }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Button  title = "Go Back" onPress = {() => {
          this.props.navigation.goBack();
        }}  />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Main:{screen: MainScreen},
},
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);