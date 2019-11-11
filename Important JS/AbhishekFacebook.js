import React from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import {
    View,
    TextInput,
    TouchableOpacity,
    TouchableNativeFeedback,
    Text, Image,
    StyleSheet,
    Platform
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../../../constants/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import placeholder from '../constants/placeholder';
import { LoginButton, AccessToken,LoginManager } from 'react-native-fbsdk';
import Firebase from 'react-native-firebase';

class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            userInfo: "",
            isSigninInProgress: false
        }
    }

    userSignUp = async () => {
        try {
            AsyncStorage.clear();
            const data = [["name", this.state.userEmail], ["loginStatus", "true"]];
            AsyncStorage.multiSet(data);
            await AsyncStorage.setItem("loginStatus", "true");
            this.setState({ userEmail: "" }, () => { this.props.navigation.navigate("dashBoardScreen"); });
        } catch (error) {
            // Error saving data
        }
    }

    signUpWithGoogle = async (userInfo) => {
        if (userInfo != null) {
            AsyncStorage.multiSet(userInfo);
        }
        await AsyncStorage.setItem("loginStatus", "true");
        this.setState({ userEmail: "" }, () => { this.props.navigation.navigate("dashBoardScreen") });
    }

    componentDidMount() {
        GoogleSignin.configure({
            //It is mandatory to call this method before attempting to call signIn()
            scopes: ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/user.phonenumbers.read'],
            // Repleace with your webClientId generated from Firebase console
            webClientId: '90111369457-v74g4cqunfu7r26bv073a8aknogdvi8d.apps.googleusercontent.com',
        });

        //Check if user is already signed in
        this._isSignedIn();
    }

    _getCurrentUserInfo = async () => {
        try {
            this.signUpWithGoogle(null);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                alert('User has not signed in yet');
            } else {
                alert("Something went wrong. Unable to get user's info");
            }
        }
    };

    _isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            this._getCurrentUserInfo();
        } else {
            console.log('Please Login');
        }
    };

    signUpWithFb = async (userInfo) => {
        if (userInfo != null) {
            AsyncStorage.multiSet(userInfo);
        }
        await AsyncStorage.setItem("loginStatus", "true");
        this.props.navigation.navigate("dashBoardScreen");
    }

    loginWithGoogle = () => {
        GoogleSignin.signIn()
            .then(async (data) => {
                // Create a new Firebase credential with the token
                console.warn("data", data);
                const credential = Firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                // Login with the credential
                console.warn("credential", credential);
                const firebase = await Firebase.auth().signInWithCredential(credential);
                console.warn(JSON.stringify(firebase.user.toJSON()));
                console.warn(JSON.stringify(firebase.toJSON()));
                //return firebase.auth().signInWithCredential(credential);
            })
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .catch((error) => {
                const { code, message } = error;
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });
    }
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });
            this.loginWithGoogle();
            /* const userInfo = await GoogleSignin.signIn();
             const {name,email,photo} = userInfo.user;
             console.warn(userInfo);
             if(email){
               const userInfoData = [ ["name",name], ["email",email], ["photo",photo] ]
               this.signUpWithGoogle(userInfoData);
             }else{
               this.props.navigation.navigate("dashBoardScreen");
             }*/
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.warn("canceled");
            } else if (error.code === statusCodes.IN_PROGRESS) {
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert("Please Update google play services from setting");
            }
        }
    };

    loginWithFacebook = async () => {
        try{
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            throw new Error('User cancelled request'); 
          }
        console.warn(`Login success with permissions: ${result.grantedPermissions.toString()}`);
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            throw new Error('Something went wrong obtaining the users access token');
          }
        const credential = Firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        const firebaseUserCredential = await Firebase.auth().signInWithCredential(credential);
        console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
        }catch(Error){
            console.error(Error);
        }
        
    }

    render() {
        let TouchComonent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
        return (
            <KeyboardAwareScrollView style={styles.container}>

                <View style={styles.parent}>
                    <Image style={styles.loginImg} source={placeholder.loginLogo} />
                </View>

                <View style={styles.loginStyle}>
                    <Text style={styles.loginText}>REGISTER NOW</Text>
                    <TextInput style={styles.textInput} placeholder="Enter Email" value={this.state.userEmail} onChangeText={(email) => { this.setState({ userEmail: email }) }} />

                    <TouchComonent style={styles.touchStyle} onPress={this.userSignUp}>
                        <Text style={styles.submitStyles} >REGISTER</Text>
                    </TouchComonent>

                    <TouchComonent onPress={() => { this.props.navigation.navigate("loginScreen") }}>
                        <Text style={styles.alreadyAccount}>Already Account!</Text>
                    </TouchComonent>

                    <Text style={styles.alreadyAccount}>----OR----</Text>
                    <GoogleSigninButton
                        style={styles.googleSignin}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn} />

                    <LoginButton
                    style={styles.fbLogin}
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    console.log("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    console.log("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            const token = data.accessToken
                                            fetch('https://graph.facebook.com/v2.8/me?fields=id,first_name,last_name,gender,birthday&access_token=' + token)
                                            .then((response) => response.json())
                                            .then((json) => {
                                              const {first_name, last_name} = json;
                                              const imageSize = 120
                                              const facebookID = json.id
                                              const fbImage = "https://graph.facebook.com/" + facebookID+ "/picture?height="+ imageSize ;
                                              const userInfoData = [ ["name",first_name], ["email",last_name], ["photo",fbImage] ];
                                              this.signUpWithFb(userInfoData);
                                            // this.authenticate(data.accessToken)
                                            //   .then(function(result){
                                            //       console.warn("Result",result);
                                            //     const { uid } = result        
                                            //     console.warn(uid,json,token,fbImage);       
                                            //     //_this.createUser(uid,json,token,fbImage)
                                            //   })
                                            })
                                            .catch(function(err) {
                                                  console.log(err);
                                            });
                                        }
                                    )
                                }
                            }
                        }
                        onLogoutFinished={(btnProps) => {alert("Log out")}} />

                    <TouchComonent onPress={this.loginWithFacebook}>
                        <Text style={styles.alreadyAccount}>Login With Fb</Text>
                    </TouchComonent>
                </View>

            </KeyboardAwareScrollView>
        );
    }
}


SignUpScreen.navigationOptions = navData => {
    return ({
        headerTitle: "Sign Up Portal",
        headerLeft: (
            null
        )
    });
}

const styles = StyleSheet.create({
    loginImg: {
        width: "80%",
        height: 200
    },

    googleSignin: {
        width: "100%",
        alignSelf: "center",
        height: 50
    },
    loginText: {
        fontSize: 22,
        textAlign: "center",
        color: Colors.black,
        alignSelf: "center",
        fontWeight: "800",
        marginVertical: 10
    },
    submitStyles: {
        color: Colors.whiteColor,
        fontSize: 16,
        fontWeight: "700",

        alignSelf: "center"
    },
    loginStyle: {
        margin: 15,
        flex: 0.5
    },
    
    fbLogin : {
        width: "100%",
        alignSelf: "center",
        height: 50,
        marginVertical : 20
    },
    textInput: {
        padding: 15,
        borderRadius: 5,
        borderColor: Colors.liteBlackColor,
        borderWidth: 1,
        marginVertical: 10
    },

    touchStyle: {
        backgroundColor: Colors.skyColor,
        padding: 15,
        marginTop: 10,
        borderRadius: 5,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.whiteColor
    },
    parent: {
        flex: 0.5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    alreadyAccount: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: "800",
        textAlign: "center",
        marginVertical: 20
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default SignUpScreen;