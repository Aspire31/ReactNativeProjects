import React from "react";

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            childCounter: this.props.counter,
            name: "fsdfsdfs",
        }
        console.log("i am in constructor", this.props)
    }
    // componentWillMount() {
    //     console.log("i am in componentWillMount")
    // }

    static getDerivedStateFromProps(props, state) {
        console.log("i am in getDerivedStateFromProps", props);
        return {
            childCounter: props.counter,
        }
    }

    shouldComponentUpdate(nextProps, nextState){
       
        console.log("nextProps", nextProps);
        console.log("nextState", nextState);

        console.log("props", this.props);
        console.log("state", this.state);
        return false;
    }

    componentDidMount() {

        console.log("i am in componentDidMount")
    }
    render() {
        console.log("i am in render")
        return (
            <View>
            <Text>{this.state.name}</Text>
                <Text>{this.state.childCounter}</Text>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={() => this.props.handleCounter(this.props.counter)}
                >
                    <Text>Update</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        backgroundColor: '#ddd',
        color: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    }
})