import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import i18n from '../../utils/i18n'
import style from '../../Components/style'

export default class localeEG extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center', paddingTop:300}} >
        <Text style={style.text} > {i18n.t("hello")} </Text>
        <Text style={style.text} > {i18n.t("quote")} </Text>
        <TouchableOpacity style={style.buttonContainer} onPress = {Linking.openSettings} > 
        {/* Linking.openURL('app-settings:{3}') */}
          <Text style={style.buttonStyles} >
            Change the language
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
