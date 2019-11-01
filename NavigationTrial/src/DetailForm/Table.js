import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'

export default class Table extends Component {

    renderItems(rowData) {
        return (
            <View style={styles.cardView} >
                <Text style = {styles.textStyle} > First Name: {rowData.item.firstname}</Text>
                <Text style = {styles.textStyle} > Last Name : {rowData.item.last_name}</Text>
                <Text style = {styles.textStyle} > Email     : {rowData.item.email}</Text>
            </View>

        );
    }

    render() {
        return (
            <FlatList
                data={this.props.item}
                renderItem={this.renderItems}
                keyExtractor={(index) => index.toString()}
            />
        )
    }
}

const styles = StyleSheet.create({
    cardView:{
        backgroundColor:'powderblue',
        padding:20,
        margin:20,
        marginLeft:-22,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:18,
        color:'white'
    }
})

