import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();

function TopView() {
    return (
        <View style={styles.topView}>
            <StatusBar barStyle="light-content" />
            
            <View style={{flex: 1}}>
                {/* <Icon name = "search" /> */}
            
            <Image  
            style ={{height: 50, width: 50,backgroundColor:'red'}}
            source = {{uri:'https://image.flaticon.com/icons/svg/61/61752.svg' }} 
             />
            </View>

            <View style={{flex: 1.7, alignItems: 'center'}}>
            <Text style={styles.TextView}> Gallery </Text>
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
        backgroundColor: '#ff6a00',
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
        backgroundColor: "#ff6a00"

    },
})

export default TopView;