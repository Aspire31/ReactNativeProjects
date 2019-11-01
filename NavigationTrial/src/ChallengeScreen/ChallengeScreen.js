/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import { ImageView } from './ImageView';
import { BottomView } from './BottomView';
import Footer from './Footer';



export default class ChallengeScreen extends React.PureComponent {
  render() {
    return (
      <ScrollView
        style={{height: 500, width: "100%"}}
      >

        <StatusBar barStyle='light-content' />
        <View style={styles.topView} >
          <ImageView />
        </View>

        <View style={styles.bottomView} >
          <BottomView />
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    flex: 2
  },
  bottomView: {
    flex: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white'
  },
  footer: {
    flex: 1
  },
});
