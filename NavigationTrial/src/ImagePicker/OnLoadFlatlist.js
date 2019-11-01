import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export default class OnLoadFlatlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            showLoader: true,
            searchKey: 'Noida',
            isLoaded: false,
        };
    }
    //Flatlist Function

    renderData = (rowData) => {
        let { item } = rowData;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imagestyle}
                    source={item.urlToImage == null ? require('/Users/appinventiv/Desktop/Alisha_RN/NavigationTrial/Images/none.jpeg') : { uri: item.urlToImage }}
                    onLoad={() => this.setState({ isLoaded: true })}
                />
                {
                    !this.state.isLoaded &&
                    <View style={{ position: 'absolute' }}>
                        <Image 
                        style={{height:100, width:100}}
                        source={{ uri: '/Users/appinventiv/Desktop/Alisha_RN/NavigationTrial/Images/grey.jpg' }}    
                        />
                    </View>
                }
                <Text style={styles.text}> Title : {item.title} </Text>
            </View>
        )
    }

    //API Hit Function

    getFunction = (key) => {
        axios.get('https://newsapi.org/v2/everything?q=' + key + '&apiKey=87c107dbf1f54871b7e6bfe0ef95b307')
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

    //Main Render Function

    render() {
        return (
            <View style={{ flex: 1, marginBottom: 30 }} >
                <View>
                    <Icon name="md-search" size={30} color='#d3d3d3' style={styles.iconPos} />
                    <TextInput
                        placeholder="Search For City Related News!"
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({ searchKey: text })}
                        clearButtonMode='while-editing'
                        onPress={this.getFunction(this.state.searchKey)}
                        autoCorrect={false}
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

//Styles

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
        paddingLeft: 100,
        paddingBottom: 30
    },
    textInputStyle: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        shadowOpacity: 0.3,
        shadowColor: 'lightgray',
        height: 50,
        paddingLeft: 40,
        marginTop: 30,
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
    iconPos: {
        position: 'absolute',
        top: 38,
        left: 30
    }
})

