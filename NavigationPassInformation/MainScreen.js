import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: 'Alisha',
            last_name: 'Nagpal',
            url: 'https://www.freeiconspng.com/uploads/person-icon-8.png'

        };
    }

    handleOnPress = () => {
        return (
            this.props.navigation.push('editScreen', {
                firstName: this.state.first_name,
                lastName: this.state.last_name,
                update: this.handleUpdate.bind(this)
            })
        )
    }

    handleUpdate = (fn, ln, url) => {
        return (
            this.setState({
                first_name: fn,
                last_name: ln,
                url: url
            })
        )
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: this.state.url }}
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={this.handleOnPress}>
                        <Text style={styles.buttonText} >
                            Edit
                        </Text>
                    </TouchableOpacity>
                   
                    <Text style={styles.text} >
                        First Name: {this.state.first_name}
                    </Text>
                    <Text style={styles.text} >
                        Last Name: {this.state.last_name}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        color: 'white'
    },
    container: {
        backgroundColor: 'powderblue',
        padding: 30,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        height:30,
        width:80,
        marginLeft:135
    },
    imageStyle: {
        height: 100,
        width: 100,
        position: 'absolute',
        top:-30,
        borderRadius:30
    }
})