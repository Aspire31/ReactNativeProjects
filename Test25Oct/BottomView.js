import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons';

export default class BottomView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            showLoader: true,
            textShown: -1,
            searchKey: 'Noida'
        };
    }

    toggleNumberOfLines = (index) => {
        this.setState({
            textShown: this.state.textShown === index ? -1 : index,
        });
    }

    renderData = (rowData) => {
        let { item, index } = rowData;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imagestyle}
                    source={{ uri: item.urlToImage ? item.urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' }}
                />
                <Text style={styles.dateStyle}>
                    Date: {item.publishedAt}
                </Text>
                <Text style={styles.text}> Title : {item.title} </Text>
                <Text
                    numberOfLines={this.state.textShown === index ? null : 2}
                    ellipsizeMode='tail'
                    style={styles.text}>
                    Description : {item.content} {'\n\n\n'}
                    <Text style={styles.text}>
                        Link:{'  '}
                    </Text>
                    <Text
                        style={{ color: '#4e4eff', fontWeight: 'normal' }}
                        onPress={() => Linking.openURL('http://google.com')} >
                        {item.url}
                    </Text>
                </Text>

                <TouchableOpacity onPress={() => this.toggleNumberOfLines(index)} >
                    <Text style={styles.buttonTextStyle}>
                        {this.state.textShown === index ? 'Go Less' : "Read More"}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    getFunction = (key) => {
        axios.get('https://newsapi.org/v2/everything?q=' + key + '&apiKey=e8e7d159f006497db84fd2406a658249')
            .then(response => {
                // console.warn(response.data.articles)
                const userData1 = response.data.articles;
                this.setState({
                    userData: userData1,
                    showLoader: false
                });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <View style={{ flex: 1, marginBottom: 30 }} >
                <View>
                    <Icon name = 'search' size = {30} color = '#d3d3d3' />
                    <TextInput
                        placeholder="Search For City Related News!"
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({ searchKey: text })}
                        value={this.state.searchKey}
                        clearButtonMode='while-editing'
                        onPress={this.getFunction(this.state.searchKey)}
                        autoCorrect = {false}
                    />
                </View>

                <View style={{ paddingTop: 20 }}>
                    {this.state.showLoader && (
                        <ActivityIndicator
                            size="large"
                        />
                    )
                    }
                </View>
                <FlatList
                    data={this.state.userData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderData}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        // paddingBottom: 10,
        paddingLeft: 20,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 10
    },
    container: {
        marginTop: 40,
        borderWidth: 0.5,
        borderColor: 'lightgray',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: 'powderblue',
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.5,
        paddingRight: 10,
        paddingLeft: 100
    },
    buttonTextStyle: {
        color: '#1b4e55',
        height: 30,
        width: 100,
        fontSize: 20,
        borderRadius: 20,
        marginLeft: 110
    },
    textInputStyle: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        shadowOpacity: 0.5,
        shadowColor: 'lightgray',
        height: 50,
        paddingLeft: 10,
        marginTop: 30,
        backgroundColor: 'white',
        fontSize: 20,
    },
    imagestyle: {
        height: 100,
        width: 100,
        position: 'absolute',
        backgroundColor: 'white',
        top: -20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'darkgray'
    },
    dateStyle: {
        paddingLeft: 10,
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
    }
})

