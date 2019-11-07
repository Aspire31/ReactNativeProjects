import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import style from '../../Components/style'
import AsyncStorage from '@react-native-community/async-storage';

GoogleSignin.configure();

export default class mainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: '',
            isLogged: false,
            phoneNumber: '',
            age:'',
            birthday:''
        };
    }

    componentDidMount() {
        AsyncStorage.getItem("myData", (err, result) => {
            if (result) {
                let data = JSON.parse(result)
                this.setState({
                    isLogged: data.log,
                    userInfo: data.user
                })
            }
        })
    }

    data = () => {
        return (
            <View style={styles.mainView} >
                <Image
                    style={styles.profileView}
                    source={{ uri: this.state.userInfo.user.photo }}
                />
                <Text style={[style.text, { marginTop: 10 }]}> {this.state.userInfo.user.name} </Text>
                <Text style={[style.text, { marginTop: 10 }]}  > {this.state.userInfo.user.email} </Text>
                <Text style={[style.text, { marginTop: 10 }]}  > Please add the rest of your details! </Text>
                
                <View style={{flexDirection:'column'}} >
                    <View style={styles.fieldText} >
                        <Text style={[style.text, { marginTop: 10, marginRight:20 }]}>
                            Number: 
                        </Text>
                        <TextInput 
                        style={[style.textInput]}
                        placeholder = "Your Response"
                        onChangeText = {(text)=> {this.setState({phoneNumber:text})}}
                        />
                    </View>
                    <View style={styles.fieldText} >
                        <Text style={[style.text, { marginTop: 10, marginRight:20 }]}>
                            Age: 
                        </Text>
                        <TextInput 
                        style={[style.textInput]}
                        placeholder = "Your Response"
                        onChangeText = {(text)=> {this.setState({age:text})}}
                        />
                    </View>
                    <View style={styles.fieldText} >
                        <Text style={[style.text, { marginTop: 10, marginRight:20 }]}>
                            Birthday: 
                        </Text>
                        <TextInput 
                        style={[style.textInput]}
                        placeholder = "Your Response"
                        onChangeText = {(text)=> {this.setState({birthday:text})}}
                        />
                    </View>
                </View>

                <TouchableOpacity style={style.buttonContainer} onPress={()=>this.storeRestOfData(this.state.phoneNumber,this.state.age,this.state.birthday)} >
                    <Text style={style.buttonStyles}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    storeRestOfData = (num,age,birth) =>{
        var obj = {
            number: num,
            ageYour:age,
            birthday:birth 
        }
        AsyncStorage.setItem("restOfData", JSON.stringify(obj))
        this.props.navigation.navigate('showingData',{
            userData: this.state.userInfo,
            logged:this.state.isLogged,
            num:this.state.phoneNumber,
            age:this.state.age,
            birth:this.state.birthday
        })
    }

    googleButton = () => {
        return (

            <GoogleSigninButton
                style={styles.google}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={this.signIn}
                disabled={this.state.isSigninInProgress} />

        )
    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo: userInfo, isLogged: true });
            this.storeData(this.state.userInfo, this.state.isLogged);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    storeData = (name, loggedState) => {
        var obj = {
            user: name,
            log: loggedState
        }
        AsyncStorage.setItem("myData", JSON.stringify(obj))
    }

    // signOut = async () => {
    //     try {
    //         await GoogleSignin.revokeAccess();
    //         await GoogleSignin.signOut();
    //         this.setState({ userInfo: '', isLogged: false });
    //         AsyncStorage.clear();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    render() {
        return (
            <View style={styles.mainView} >
                {!this.state.isLogged && (
                    this.googleButton()
                )}
                {this.state.isLogged && (
                    this.data()
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    google: {
        height: 60,
        width: 200,
        margin: 30,
        marginTop: 250,
    },
    mainView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileView: {
        margin: 20,
        marginTop: 30,
        height: 120,
        width: 120,
        borderRadius: 200,
    },
    fieldText:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20
    }
})
