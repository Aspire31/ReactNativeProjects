import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { RNS3 } from 'react-native-aws3';



const options = {
  keyPrefix: "uploads/",
  bucket: "appinventiv-development",
  region: "us-east-1",
  accessKey: "AKIAJ3UHQTWRRT2AH3RA",
  secretKey: "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",
  successActionStatus: 201
}

uploadImage = (file, options) => {
  RNS3.put(file, options).then(response => {
    if (response.status !== 201)
      throw new Error("Failed to upload image to S3");
    console.log(response.body);
    console.log('uploaded file')
    /**
     * {
     *     postResponse: {
     *     bucket: "your-bucket",
     *     etag : "9f620878e06d28774406017480a59fd4",
     *     key: "uploads/image.png",
     *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
     *   }
     * }
     */
  })
    .progress((e) =>
      console.log(e.loaded / e.total)
      (
          <ActivityIndicator
              size="large"
          />
      )
  );
}

export default class ImagePickerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageKey: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    };
  }

  handlePicker = () => {
    ImagePicker.openPicker({
      width: 900,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({
        imageKey: image.path
      })
      const file = {
        uri: 'file://' + image.path,
        name: 'image.png',
        type: 'image/png'
      }
      uploadImage(file, options);
    });
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 200 }} >
        <TouchableOpacity onPress={this.handlePicker} >
          <Image
            style={{ height: 200, width: 350 }}
            source={{ uri: this.state.imageKey }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}