import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'

import commonMethods from '../../Components/commonMethods.js';

export default class ImagePickerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageKey: 'https://www.clipartwiki.com/clipimg/detail/114-1141760_cute-kawaii-pikachu-ballon-pokemon-no-tiny.png',
      isLoaded: 0,
      toUpload: false
    };
  }

  uploadImage = () => {
    
    this.setState({
      toUpload: true
    });

    commonMethods.uploadImage(this.state.imageKey, (response) => {
      console.log(response)
      this.setState({
        isLoaded: 0,
        toUpload: false
      })
    }, (loadPercent) => {
      this.setState({
        isLoaded: loadPercent
      })
  })
}

handlePicker = () => {
  commonMethods.imagePicker((val) => {
    this.setState({
      imageKey: val
    })
  })
}

render() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }} >

      <View style={styles.container}>

        <TouchableOpacity onPress={this.handlePicker} style={styles.button} >
          <Text style={styles.buttontext} > Pick an Image </Text>
        </TouchableOpacity>

        <Image
          style={styles.image}
          source={{ uri: this.state.imageKey }}
        />
      </View>

      {(this.state.toUpload && this.state.imageKey != '') && (
        <ProgressBar progress={this.state.isLoaded} width={300} color={'powderblue'} />
      )}
      <TouchableOpacity style={styles.button} onPress={this.uploadImage} >
        <Text style={styles.buttontext} >
          Upload this picture
          </Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    color: 'white'
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    marginTop: 50,
    marginBottom: 50
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 40,
    margin: 15
  }
})

// RNS3.put(file, options).then(response => {
  //   if (response.status !== 201)
  //     throw new Error("Failed to upload image to S3");
  //   console.log(response.body);
  //   console.log("Image has been Uploaded")
  //   this.setState({
  //     isLoaded: 0,
  //     toUpload: false
  //   })
  // })
  //   .progress((e) =>
  //     // console.log(e.loaded / e.total)
  //     (console.log("percentage", e.percent),
  //       this.setState({
  //         isLoaded: e.percent
  //       }))
  //   );