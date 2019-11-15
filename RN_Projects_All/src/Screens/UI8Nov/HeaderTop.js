import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Colors, vw, vh} from '../../Constants'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

export default class HeaderTop extends React.PureComponent {
  render(){
    return (
      <View>
        <View style={{flexDirection:"row"}} >
        {/* <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}} >
          <Icon name="ios-arrow-back" size={30} color="white" style={styles.iconPos} />
        </TouchableOpacity> */}
  
          <View style={styles.imageView} >
            <Image
              source={{ uri: 'https://previews.123rf.com/images/westend61/westend611802/westend61180230132/94949108-back-view-of-mature-man-standing-on-his-sailing-boat-looking-at-distance.jpg' }}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.textView}>
            <Text style={{color: Colors.white, fontSize:vh(16), fontWeight:'bold'}} >
              Marcus Hoang
            </Text>
            <Text style={{color: Colors.veryLightGray, fontSize:vh(12), fontWeight:'bold'}} >
              Level 3
            </Text>
          </View>
        </View>
        <Image 
          source = {require('../../Assets/Images/ic_cloud.png')}
          style={styles.cloudImage}
          resizeMode = 'contain'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: vw(40),
    width: vw(40),
    borderRadius: vw(20),
  },
  imageView: {
    backgroundColor: Colors.darkGreenCyan,
    borderColor: Colors.white,
    borderRadius: vw(25),
    borderWidth: vw(2),
    height: vw(50),
    width: vw(50),
    top: vh(40),
    left: vw(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {
    flexDirection: 'column',
    marginTop:vh(50),
    marginLeft: vw(40)
  },
  cloudImage:{
    height:vh(60), 
    width:vw(120), 
    top:vh(40),
    left:vw(260), 
    position:'absolute'
  },
  iconPos:{
    top:50,
    left:20
  }
})
