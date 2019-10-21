import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import TopView from './topView'
import ImageList from './imagesList'


export default class ComponentsBasedUI extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <TopView />
        </View>

        <View style={styles.midView}>
          <ImageList/>
        </View>
        
        <View style={styles.footerView}>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  headerView: {
    flex: 1
  },
  midView: {
    flex: 6,
  },
  footerView: {
    flex: 1,
  }
});
