import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: 'Alisha',
            last_name: 'Nagpal',
            url: 'https://www.qoo10.sg/gmkt.inc/Img/noImage.png'

        };
    }

    handleOnPress = () => {
        return (
            this.props.navigation.push('editScreen', {
                firstName: this.state.first_name,
                lastName: this.state.last_name,
                update: this.handleUpdate.bind(this),
                image: this.state.url
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
                    <View style={{flexDirection: 'row' }} >
                        <Text style={styles.text} numberOfLines = {null} >
                            {this.state.first_name}
                        </Text>
                        <Text style={styles.text2} numberOfLines = {null} >
                            {this.state.last_name}
                        </Text>
                    </View>

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
        fontSize: 22,
        fontWeight: 'bold',
        // paddingLeft:40,
        paddingTop:20,
        color: 'white',
        width:100
    },
    text2:{
        fontSize: 22,
        fontWeight: 'bold',
        // paddingLeft:10,
        paddingTop:20,
        color: 'white',
        // flexWrap: 'wrap',
        // flexShrink:1,
        width:100
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
        backgroundColor: 'white',
        height: 30,
        width: 80,
        marginLeft: 135
    },
    imageStyle: {
        height: 100,
        width: 100,
        position: 'absolute',
        top: -30,
        borderRadius: 30
    }
})