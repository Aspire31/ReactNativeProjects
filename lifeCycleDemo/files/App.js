import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Header from './header';

export default class App extends React.Component {

  newText() {
    return (
      <Text style={styles.textSTyle}>some text func</Text>
    );
  }

  render() {
    return (
      <View style={styles.conatiner}>
        <Header />
        <Text style={styles.textSTyle}>some text</Text>
        {
          this.newText()
        }
        <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.QswVhpC8_Y6Fu-rZ_4dZwQHaE8&pid=Api' }} style={styles.imgStyle} resizeMode="cover" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  textSTyle: {
    fontSize: 40,
    color: '#fff',
    fontStyle: 'italic'
  },
  imgStyle: {
    height: 50,
    width: 50
  }
});

