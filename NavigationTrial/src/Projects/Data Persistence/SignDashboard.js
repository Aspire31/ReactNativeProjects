import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import style from '../../Components/style'
import AsyncStorage from '@react-native-community/async-storage';


export default class SignDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('email', (err, result) => {
            this.setState({ result: result })
        })
    }

    handleEdit = () => {
        AsyncStorage.clear()
        this.props.navigation.push('splash')
    }

    render() {
        return (
            <ImageBackground style={{ height: '100%', width: '100%' }}
                source={require('../../../Images/leaf.jpg')}>

                <View style={styles.mainView} >
                    <Text style={[style.text, styles.text]}>
                        Hurray You Have Signed Up!
                    </Text>

                    <View style={styles.emailView} >
                        <Text style={[style.text, styles.text]} >
                            Your Email:
                        </Text>
                        <Text style={[style.text, styles.emailText]} numberOfLines={null} >
                            {this.state.result}
                        </Text>
                    </View>

                    <Text style={[style.buttonStyles]} >
                        Something Wrong?
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={() => this.handleEdit()} >
                        <Text style={[styles.editText, { color: '#770e0e' }]} >
                            Edit your details
                            </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    emailView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        padding: 10,
        flexWrap: 'wrap'
    },
    emailText: {
        padding: 10,
        flexWrap: 'wrap',
        width: 300
    },
    mainView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    editText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#770e0e'
    },
    button: {
        justifyContent: 'center',
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
    }
})
