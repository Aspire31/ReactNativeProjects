
import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

//Main Function

export const TopView = React.memo(function pureFunction() {
    return (
        <View style={styles.topView}>
            <StatusBar barStyle="light-content" />
             <View style={{ flex: 1.7, alignItems: 'center' }}>
                <Text style={styles.TextView}> UserData </Text>
            </View>
        </View>
    );
})

//Styles


const styles = StyleSheet.create({
    topView: {
        flex: 1,
        backgroundColor: '#1b4e55',
        // '#66b3cc',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
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
        borderRadius: 7,
        height: 15,
        width: 15,
        backgroundColor: "#ff9900",
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusText:{
        color: 'white',
        paddingLeft:3,
        fontWeight: 'bold',
        marginRight:4,
        paddingBottom:18
    }
})

export default TopView;