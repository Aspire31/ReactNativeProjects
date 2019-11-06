import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class LoginDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            birthday: '',
            state: '',
            country: ''
        };
    }

    componentDidMount() {
        AsyncStorage.multiGet(['firstName', 'lastName', 'email2', 'birthday', 'state', 'country'], (err, results) => {
            this.setState({
                firstName: results[0][1],
                lastName: results[1][1],
                email: results[2][1],
                birthday: results[3][1],
                state: results[4][1],
                country: results[5][1]
            })
        })
    }
    handleEdit = () => {
        AsyncStorage.clear()
        this.props.navigation.push('splash')
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ flex: 2, backgroundColor: 'powderblue' }} >
                    <Image
                        style={{ height: '100%', width: '100%' }}
                        source={{ uri: 'https://image.shutterstock.com/image-photo/west-lake-scenery-260nw-361286843.jpg' }}
                    />
                    <Image
                        style={styles.profileView}
                        source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/138985/person-icon-138985-5252262.png' }}
                    />
                </View>

                <View style={{ flex: 6 }} >

                    <View style={{ alignItems: 'center' }} >
                        <Text style={styles.welcome} >
                            Hurray! You have been Registered!
                        </Text>
                        <Text style={styles.details}>
                            Your Details {this.state.firstName} {this.state.lastName}
                        </Text>
                    </View>


                    <View style={{ flexDirection: 'column' }} >
                        <ScrollView>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    First Name:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.firstName}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    Last Name:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.lastName}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    Email:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.email}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    Birthday:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.firstName}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    Your State:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.firstName}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    Your Country:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.firstName}
                                </Text>
                            </View>

                            <TouchableOpacity style={styles.button} onPress={() => this.handleEdit()} >
                                <Text style={[styles.editText, { color: '#9d9dff' }]} >
                                    Edit your details
                            </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    profileView: {
        position: 'absolute',
        height: 120,
        width: 120,
        borderRadius: 200,
        top: 120,
        left: '33%',
    },
    welcome: {
        marginTop: 80,
        fontSize: 20,
        color: '#205c64',
        fontWeight: 'bold',
    },
    details: {
        marginTop: 20,
        fontSize: 20,
        color: '#205c64',
        fontWeight: 'bold',
    },
    detailed: {
        fontSize: 20,
        color: '#205c64',
        fontWeight: 'bold',
        padding: 10,
    },
    detailView: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 30,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    editText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#205c64'
    },
    button: {
        justifyContent: 'center',
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
    }
})
