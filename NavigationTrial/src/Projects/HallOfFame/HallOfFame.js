import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity,Image } from 'react-native';
import BottomView from './BottomView';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export default class HallOfFame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let counter = -1;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <React.Fragment>
            <BottomView counted={counter + 1} month='1' />
            <BottomView counted={counter + 2} month='2' />
          </React.Fragment>
        </ScrollView>
       
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
        <View style={styles.bottomScroll} >
              <Image 
              source = {require('/Users/appinventiv/Desktop/Alisha_RN/NavigationTrial/Images/floatButtonImage.png')}
              style = {{height: 25, width: 25}}
              />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
    paddingTop: 5
  },
  bottomScroll: {
    position: 'absolute',
    top: '80%',
    left: '80%',
    backgroundColor: 'powderblue',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  }
})

