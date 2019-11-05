import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

export default class Table extends Component {

    renderItems = (rowData) => {
        // console.warn("item", rowData)
        // console.warn(rowData.item.id)
        return (
            <View style={styles.cardView}>
                <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                    <View style={styles.buttonDeletePosition}>
                        <TouchableOpacity style={styles.buttonBackground}
                            onPress={() => this.props.delete(rowData.item.id)}
                        >
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonEditPosition}>
                        <TouchableOpacity style={styles.buttonBackground}
                            onPress={() => {
                                // console.warn("rowData.item.id",rowData.item.id)
                                this.props.edit(rowData.item.id)
                            }}
                        >
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.imputView}>
                    <Text style={styles.baseText}> First Name:  </Text>
                    <Text>{rowData.item.first_name}</Text>
                </View>

                <View style={styles.imputView}>
                    <Text style={styles.baseText}> Last Name:  </Text>
                    <Text>{rowData.item.last_name}</Text>
                </View>

                <View style={styles.imputView}>
                    <Text style={styles.baseText}> Email:  </Text>
                    <Text>{rowData.item.email}</Text>
                </View>

                {/* <View style={styles.imputView}>
                    <Text style={styles.baseText}> BirthDate:  </Text>
                    <Text>{rowData.item.birthdate}</Text>
                </View>
                <View style={styles.imputView}>
                    <Text style={styles.baseText}> Password:  </Text>
                    <Text>{rowData.item.password}</Text>
                </View> */}
            </View>
        );
    }

    // FlatListItemSeparator = () => {
    //     return (
    //         <View
    //             style={{
    //                 height: 30,
    //                 // width: "100%",
    //                 backgroundColor: "white",
    //             }}
    //         />
    //     );
    // }

    render() {
        // console.warn("data", this.props.item)
        return (
            <FlatList
                // ItemSeparatorComponent={this.FlatListItemSeparator}
                data={this.props.item}
                renderItem={this.renderItems}
                // keyExtractor = {(item,index) => item.id}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

const styles = StyleSheet.create({
    imputView: {
        flexDirection: 'row',
        // paddingTop: 40,
        // justifyContent: "center",
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10
    },
    baseText: {
        fontFamily: 'Al Nile',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardView: {
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 2,
        // paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 20
        // paddingRight:5
    },

    buttonDeletePosition: {
        alignItems: 'flex-end',
    },
    buttonEditPosition: {
        alignItems: 'flex-start',
    },
    buttonBackground: {
        backgroundColor: 'powderblue',
        height: 30,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },

})