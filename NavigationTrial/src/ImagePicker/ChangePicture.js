import React, { Component } from 'react';
import { View,Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class ImagePickerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageKey:'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    };
  }

  handlePicker = () =>{
    ImagePicker.openPicker({
      width: 900,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({
        imageKey: image.path
      })
    });
  }

  render() {
    return (
      <View style={{justifyContent: 'center',alignItems:'center', paddingTop:200}} >
        <TouchableOpacity onPress = {this.handlePicker} >
        <Image 
        style={{height: 200, width: 350 }}
        source = {{uri: this.state.imageKey }}
        />
        </TouchableOpacity>
      </View>
    );
  }
}