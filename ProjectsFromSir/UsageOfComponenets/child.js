import React, { Component, PureComponent } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empData: [{
                id: 1,
                name: 'x',
                age: 30,
            }, {
                id: 2,
                name: 'y',
                age: 40,
            }, {
                id: 3,
                name: 'z',
                age: 50,
            }]
        };
    }
    

    render() {
        console.log("child re render", this.props)
        return (
            <View>
                <Text>
                    I am in child class {this.props.counterChild}
                </Text>
                {/* 
               <FlatList
                    data={this.state.empData}
                    renderItem={(rowData) => {
                        console.log(rowData)
                        return (
                            <React.Fragment>
                                <Text>
                                    {rowData.item.name}
                                </Text>
                                <Text>
                                    {rowData.item.age}
                                </Text>
                                <TouchableOpacity onPress={() => {
                                    let empData = this.state.empData;
                                    empData[rowData.index].age = empData[rowData.index].age+10;
                                    empData = empData.concat([]);
                                    this.setState({empData: empData},()=>{
                                        console.log("empData", this.state.empData)
                                    })
                                }}>
                                    <Text> Click Me</Text>
                                </TouchableOpacity>
                            </React.Fragment>
                        )
                    }}
                />
                */}

            </View>
        );
    }
}
