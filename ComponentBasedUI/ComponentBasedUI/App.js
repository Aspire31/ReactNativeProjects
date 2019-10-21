import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import TopView from './topView'
import ImageList from './imagesList'
import Icon from 'react-native-vector-icons/Ionicons'
// import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();


export default class ComponentsBasedUI extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <TopView />
        </View>

        <View style={styles.midView}>
          <ImageList />
        </View>

        <View style={styles.footerView}>
          <TouchableOpacity>
            <Icon name="md-home" size={40} color="#D3D3D3" />

          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ios-search" size={40} color="#D3D3D3" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="md-person" size={40} color="#D3D3D3" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="ios-notifications" size={40} color="#D3D3D3" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="md-settings" size={40} color="#D3D3D3" />
          </TouchableOpacity>
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
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
    paddingTop: 5
  }
});
