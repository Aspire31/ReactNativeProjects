import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TopView from './TopView';
import BottomView from './BottomView';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let counter = -1;
    return (
        <View style={{ flex: 1 }}>
          <View style={styles.topView}>
            <TopView />
          </View>
          <ScrollView>
          <View style={styles.bottomView} >
            <BottomView counted={counter + 1} month='1' />
            <BottomView counted={counter + 2} month='2' />
          </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    height: 100
  },
  bottomView: {
    //flex: 6,
  }
})