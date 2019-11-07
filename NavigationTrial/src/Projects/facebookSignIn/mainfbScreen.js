import React, { Component } from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from "react-native-fbsdk";

export default class Login extends Component {

    login = () =>{
        console.log("vjvjhv")
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function(result) {
              if (result.isCancelled) {
                console.log("Login cancelled");
              } else {
                console.log(
                  "Login success with permissions: " +
                    result.grantedPermissions.toString()
                );
              }
            },
            function(error) {
              console.log("Login fail with error: " + error);
            }
          );
    }
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>

          <TouchableOpacity onPress = {() => {this.login()}} >
              <Text>
                  FB LOGIN
              </Text>
          </TouchableOpacity>


      </View>
    );
  }
};