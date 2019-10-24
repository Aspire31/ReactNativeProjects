
import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

Icon.loadFont();

function TopView() {
    return (
        <View style={styles.topView}>
            <StatusBar barStyle="light-content" />

            <View style={{ flex: 1, paddingLeft: 10 }}>
                <TouchableOpacity>
                <Icon name="arrowleft" size = {30} color = "#ffffff" />
                </TouchableOpacity>
                {/* <Image  
            style ={{height: 50, width: 50}}
            source = {{uri:'https://cdn.iconscout.com/icon/premium/png-512-thumb/left-arrow-back-vector-35872.png' }} 
             /> */}
            </View>

            <View style={{ flex: 1.7, alignItems: 'center' }}>
                <Text style={styles.TextView}> Hall Of Fame </Text>
            </View>

            <View style={styles.votesView}>
                <View style={styles.circleView}></View>
                <Text style={styles.votesText}>  7/16 Votes </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    topView: {
        flex: 1,
        backgroundColor: '#ff9900',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        flexDirection: "row"
    },
    TextView: {
        fontFamily: 'Al Nile',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    votesText: {
        color: 'black',
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },
    votesView: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        marginRight: 5
    },
    circleView: {
        borderRadius: 4,
        height: 10,
        width: 10,
        backgroundColor: "#ff9900"

    },
})

export default TopView;