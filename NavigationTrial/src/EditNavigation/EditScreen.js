import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class EditScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_Name: '',
            last_Name: ''
        };
    }
    //   componentWillMount(){
    //       console.log('data',this.props)
    //   }

    goBack = () => {
        return (
            this.props.navigation.state.params.update(this.state.first_Name, this.state.last_Name),
            this.props.navigation.goBack()
        )
    }

    render() {
        const { firstName, lastName } = this.props.navigation.state.params;
        return (
            <View style={styles.mainView} >
                <View style={{ flexDirection: 'column' }} >
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={styles.text} > First Name </Text>
                        <TextInput
                            defaultValue ={firstName}
                            clearButtonMode = 'while-editing'
                            onChangeText={(text) => this.setState({ first_Name: text })}
                            style={styles.textInput} />
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <Text style={styles.text} > Last Name </Text>
                        <TextInput
                            defaultValue ={lastName}
                            clearButtonMode = 'while-editing'
                            onChangeText={(text) => this.setState({ last_Name: text })}
                            style={styles.textInput} />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button} onPress={this.goBack} >
                            <Text style={styles.buttontext} >
                                Save
                    </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200
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
    }

})
