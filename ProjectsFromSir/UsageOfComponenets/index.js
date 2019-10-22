import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Child from "./child";
import ChildFunction, { ChildPureFunction } from "./childFunction";
export default class Parrent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterChild: 0,
            counterFunctionChild: 0,
            counterFunctionPureChild: 0
        };
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>

                <Text> index </Text>

                <Child
                    counterChild={this.state.counterChild}
                />
                <TouchableOpacity onPress={() => {
                    this.setState({ counterChild: this.state.counterChild+1 })
                }}>
                    <Text> Click Class Child</Text>
                </TouchableOpacity>
                <ChildFunction
                    counterFunctionChild={this.state.counterFunctionChild}
                />
                <TouchableOpacity onPress={() => {
                    this.setState({ counterFunctionChild: this.state.counterFunctionChild+1 })
                }}>
                    <Text> Click Function Child</Text>
                </TouchableOpacity>
                <ChildPureFunction
                    counterFunctionPureChild={this.state.counterFunctionPureChild}
                />
                <TouchableOpacity onPress={() => {
                    this.setState({ counterFunctionPureChild: this.state.counterFunctionPureChild+1 })
                }}>
                    <Text> Click Pure Child</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
