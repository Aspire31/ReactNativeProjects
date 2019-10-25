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
        {/* Top Bar  */}
       
        <View style={styles.topBar} >
          <TopView />
        </View>
       
        {/* Bottom Flatlist */}
       
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
    height: 60,
  },

})
