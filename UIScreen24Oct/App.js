import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import TopView from './TopView';
import {BottomView} from './BottomView';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{flex: 1}}>
        <View style = {styles.topView}>
        <TopView />
        </View>

        <View style = {styles.bottomView} >
          <BottomView />
        </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topView:{
    flex: 1
  },
  bottomView:{
    flex: 6
  }
})