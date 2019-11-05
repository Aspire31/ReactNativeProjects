import React, { Component } from 'react';
import { View, Text } from 'react-native';
import i18n from '../../utils/i18n'

export default class localeEG extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center', paddingTop:300}} >
        <Text> {i18n.t("hello")} </Text>
      </View>
    );
  }
}
