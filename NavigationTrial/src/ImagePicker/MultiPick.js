import React, { Component } from 'react';
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class MultiPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: [],
            imageKey: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        };
    }

    handlePicker = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            var data = [];
            images.forEach((item) => {
                data.push(item.sourceURL);
            });
            this.setState({ source: data });
            data = [];
        });
    }

    render() {
        var sources = this.state.source;
        return (
            <View>
                <TouchableOpacity onPress={this.handlePicker} style={styles.buttonContainer} >
                    <Text style={styles.buttonStyles} >
                        Pick Multiple Images
                    </Text>
                </TouchableOpacity>
                <FlatList
                    data={sources}
                    numColumns = {2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Image style={styles.imageStyle}
                                source={{ uri: item }} />
                        )
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyles: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
        color: '#205c64'
    },
    buttonContainer: {
        justifyContent: 'center',
        backgroundColor: '#b0e0e6',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'lightgray',
        margin: 10,
        alignItems: 'center',
    },
    imageStyle: {
        margin:15,
        width: 150,
        height: 150,
        borderRadius:10,
    }
})