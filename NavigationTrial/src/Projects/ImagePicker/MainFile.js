import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MainFile extends Component {
  render() {
    return (
       <View style={styles.mainView}>
        <Text style={styles.info}>
          Click Any Button To View Different Projects!
        </Text>
          <TouchableOpacity onPress={() => { this.props.navigation.push("changePicture"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Upload Picture to S3 >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("imageOnLoad"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Image With Blurred Focus >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push("multiPick"); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Pick Out Multiple Images >
          </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.push('onLoadFlatlist'); }}>
            <View style={styles.buttonContainer} >
              <Text style={styles.buttonStyles} >
                Images onLoad >
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