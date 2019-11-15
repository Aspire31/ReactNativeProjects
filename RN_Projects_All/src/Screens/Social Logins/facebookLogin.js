import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import { facebookService } from '../../ReusableComponents'
import { vh } from '../../Constants';

export default class facebookLogin extends Component {

  login = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          this.props.navigation.navigate('fb2')
          // console.log(
          //   "Login success with permissions: " +
          //   result.grantedPermissions.toString(),
          //   console.log("hopefully with email", result.data),
          //   // 
          // );
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  }


  render() {
    return (
      <View style={styles.mainView} >
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                this.props.navigation.navigate('fb2')
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString()) 
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")} />

        <TouchableOpacity onPress={() => { this.login() }} >
          <Text>
            FB LOGIN
              </Text>
        </TouchableOpacity>


      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(300),
  }
})