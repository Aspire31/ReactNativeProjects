import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image,Alert,Linking, Platform } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import {} from 'react-native';

import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';

export default class EditScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_Name: this.props.navigation.state.params.firstName,
            last_Name: this.props.navigation.state.params.lastName,
            url: this.props.navigation.state.params.image
        };
    }
    //   componentWillMount(){
    //       console.log('data',this.props)
    //   }

    handleImageRequest = () => {
        const permission = Platform.OS == 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        check(permission)
          .then(result => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                console.log(
                  'This feature is not available (on this device / in this context)',
                );
                break;
              case RESULTS.DENIED:
                console.log(
                  'The permission has not been requested / is denied but requestable',
                );
                request(permission).then(result =>{
                    this.handlePicker();
                })
                break;
              case RESULTS.GRANTED:
                  this.handlePicker();
                console.log('The permission is granted');
                break;
              case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                Alert.alert('Permission to access the photo library has been denied, please allow it from settings.', null,
                [
                    {
                        text: 'OK',
                        onPress: () => { Linking.openSettings}
                    },
                    {
                        text: 'Cancel',
                        onPress:() => {console.log('Denied request')}
                    }
                ])
                break;
            }
          })
          .catch(error => {
            console.log("error", error)
          });
      }

    goBack = () => {
        return (
            this.props.navigation.state.params.update(this.state.first_Name, this.state.last_Name, this.state.url),
            this.props.navigation.goBack()
        )
    }
    submitInput = (type) => {
        switch (type) {
            case 1:
                this.input2.focus();
                break;
            case 2:
                this.goBack();
                break;
        }
    }

    handlePicker = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            // console.log(image);
            this.setState({
                url: image.path
            })
        });
    }

    render() {
        const { firstName, lastName } = this.props.navigation.state.params;
        return (
            <KeyboardAwareScrollView
                // style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <View style={{ flexDirection: 'column' }} >

                    <TouchableOpacity style={styles.imageButton} onPress={this.handleImageRequest} >
                        <Text style={styles.imageText} >
                            Select Image
                        </Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={{ height: 200, width: 200, borderRadius: 20, marginBottom: 20 }}
                            source={{ uri: this.state.url }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <Text style={styles.text} > First Name </Text>
                        <TextInput
                            defaultValue={firstName}
                            clearButtonMode='while-editing'
                            onChangeText={(text) => this.setState({ first_Name: text })}
                            style={styles.textInput}
                            ref={ref => this.input1 = ref} //in input1, we get ref
                            onSubmitEditing={() => this.submitInput(1)}
                            returnKeyType='next'
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <Text style={styles.text} > Last Name </Text>
                        <TextInput
                            defaultValue={lastName}
                            clearButtonMode='while-editing'
                            onChangeText={(text) => this.setState({ last_Name: text })}
                            ref={ref => this.input2 = ref}
                            onSubmitEditing={() => this.submitInput(2)}
                            style={styles.textInput}
                            returnKeyType='done'
                        // autoCorrect= {false}
                        />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button} onPress={this.goBack} >
                            <Text style={styles.buttontext} >
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        color: 'powderblue'
    },
    button: {
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
    textInput: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        paddingLeft: 10,
        height: 45,
        marginTop: 10,
        width: 200,
        fontSize: 20
    },
    imageButton: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        margin: 20
    },
    imageText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        color: 'powderblue'
    },
    container: {

    }

})