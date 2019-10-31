import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import Colors from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons'

const Toolbar = props => {
    return (
        <View style={styles.container} >
            <MaterialIcons name = "sort" size = {30} color = {Colors.black}/>
            <Text style = {styles.textStyle} >Shembe</Text>
            <Octicons name = "settings" size = {30} color = {Colors.black}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.whiteColor,
        justifyContent: "space-between",
        flexDirection : "row",
        padding: 10
    },
    textStyle: {
        fontSize: 25,
        color: Colors.liteGreen,
        fontFamily : "Acme-Regular"
    }
});

export default Toolbar;
