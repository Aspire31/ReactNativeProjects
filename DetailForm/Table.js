import React,{Component} from 'react';
import {View, Text, FlatList} from 'react-native'

export default class Table extends Component{

    renderItems(rowData){
        return(
            <View>
             <Text>{rowData.item.firstname}</Text>
             <Text>{rowData.item.last_name}</Text>
             <Text>{rowData.item.email}</Text>
             <Text>{rowData.item.birthdate}</Text>
             <Text>{rowData.item.password}</Text>
            </View>
           
        );
    }

    render(){
        return(
            <FlatList
            data={this.props.item}
            renderItem={this.renderItems}
            keyExtractor = {(index) => index.toString() }
            />
            )
        }
    }