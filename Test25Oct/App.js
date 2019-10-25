import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TopView} from './TopBar';
import BottomView from './BottomView';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{flex: 1}} >  
        <View style={styles.topBar} >
          <TopView />
        </View>
        <React.Fragment>
          <BottomView />
        </React.Fragment>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  topBar:{
    height: 100,
  },

})
