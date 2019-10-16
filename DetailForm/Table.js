import React,{Component} from 'react';
import {View, Text, FlatList} from 'react-native'

export default class Table extends Component{

    renderItems(rowData){
        console.warn("item", rowData)
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
        // console.warn("data", this.props.item)
        return(
            
            // <View style = {{justifyContent: "center", flexDirection: 'column', height: 200, width: '90%'}}>
            <FlatList
                // style={{height: 200, width: 200, backgroundColor: '#ccc'}}
            data={this.props.item}
            renderItem={this.renderItems}
            keyExtractor = {(item,index) => index.toString() }
            />
            //  </View>
            )
        }
    }