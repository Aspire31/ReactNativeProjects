import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import style from '../../Components/style'
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage';

export default class showingData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.navigation.state.params.userData,
      logged: this.props.navigation.state.params.logged,
      num: this.props.navigation.state.params.num,
      age: this.props.navigation.state.params.age,
      birth: this.props.navigation.state.params.birth,
    };
  }

  signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        // this.setState({ userInfo: '', logged: false });
        AsyncStorage.clear();
        this.props.navigation.navigate('google')
    } catch (error) {
        console.error(error);
    }
};

  render() {
    return (
      <View style={styles.mainView} >
        <Image
          style={styles.profileView}
          source={{ uri: this.state.userInfo.user.photo }}
        />
        <Text style={[style.text, { marginTop: 10 }]}> {this.state.userInfo.user.name} </Text>
        <Text style={[style.text, { marginTop: 10 }]}  > {this.state.userInfo.user.email} </Text>
        <Text style={[style.text, { marginTop: 10 }]}> {this.state.num} </Text>
        <Text style={[style.text, { marginTop: 10 }]}  > {this.state.age} </Text>
        <Text style={[style.text, { marginTop: 10 }]}> {this.state.birth} </Text>

        <TouchableOpacity style={style.buttonContainer} onPress={this.signOut} >
          <Text style={style.buttonStyles}>
            Log Out
           </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  google: {
    height: 60,
    width: 200,
    margin: 30,
    marginTop: 250,
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileView: {
    margin: 20,
    marginTop: 30,
    height: 120,
    width: 120,
    borderRadius: 200,
  },
  fieldText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  }
})