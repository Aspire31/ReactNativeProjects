import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Colors, vh, vw} from '../../Constants'


export const MidView = React.memo(function pureFunction() {

    balanceComponent = (key, value) => {
        return (
            <View style={{ flexDirection: 'column', paddingRight: vw(30) }} >
                <Text style={styles.componentText} >
                    {key}
                </Text>
                <Text style={styles.componentText2} >
                    {value}
                </Text>

            </View>
        )
    }

    relativeComponent = (image1, image2, text) => {
        return (
            <View style={{ flexDirection: 'column', top: vh(70), paddingLeft: vw(30) }}>
                <Image
                    source={image1}
                    style={{ height: vh(30), width: vw(30), alignSelf: 'center', borderRadius: vw(20) }}
                />
                <Image
                    source={image2}
                    style={{ height: vh(15), width: vw(15), position: 'absolute', top: vh(20), left: vw(38) }}
                />
                <Text style={{ top: vh(10), color: Colors.grayishBlue, fontSize: vw(12) }} >
                    {text}
                </Text>
            </View>
        )
    }

    addData = (date) => {
        return (
            <View style={styles.addDataView} >
                <View style={{ flexDirection: 'column' }} >
                    <Text style={{fontSize:vw(14)}} >
                        Add Relative
                    </Text>
                    <Text style={{fontSize:vw(12), color: Colors.darkGray}} >
                        {date}
                    </Text>
                </View>
                <Text style={{fontSize:vw(14), color: Colors.red}} >
                    4,000,000 VND
                </Text>
            </View>
        )
    }

    return (
        <View style={{ flexDirection: 'column' }} >
            <View style={{ flexDirection: 'row' }} >
                <Text style={styles.headerText} >
                    Health Insurance
                </Text>
                <TouchableOpacity style={styles.buttonStyle} >
                    <Text style={styles.buttonTextStyle} >
                        Card Details >
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', top: vh(50) }} >
                {this.balanceComponent('Balance', '2,000,000VND')}
                {this.balanceComponent('Balance Used', '4,320,000VND')}
            </View>
            <Text style={[styles.componentText, { top: vh(70) }]} >
                Relatives
                </Text>
            <View style={{ flexDirection: 'row' }} >
                {this.relativeComponent(require('../../Assets/Images/wife.jpeg'), require('../../Assets/Images/ic_accept.png'), 'Wife')}
                {this.relativeComponent(require('../../Assets/Images/child.jpg'), require('../../Assets/Images/ic_accept.png'), 'Child')}
                {this.relativeComponent(require('../../Assets/Images/ic-more.png'), null, 'add')}
                {this.relativeComponent(require('../../Assets/Images/ic-more.png'), null, 'add')}
                <View style={styles.cylindricalView} />
                {this.relativeComponent(require('../../Assets/Images/ic-transfer.png'), null, 'Benefits Transfer')}
            </View>

            <View style={styles.seeAllStyle} >
                <Text style={[styles.componentText,{top:vh(10)}]} > History</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllButton} >
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{top:vh(50)}}>
            {this.addData('13/06/2019')}
            {this.addData('11/06/2019')}
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    headerText: {
        color: Colors.darkBlueText,
        fontSize: vw(22),
        fontWeight: 'bold',
        top: vh(30),
        left: vw(20)
    },
    buttonStyle: {
        backgroundColor: Colors.darkGreenCyan,
        borderRadius: vw(20),
        justifyContent: 'center',
        alignItems: 'center',
        top: vh(30),
        left: vw(80),
        padding: vh(5)
    },
    buttonTextStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.white,
        fontSize: vw(14),
        fontWeight: 'bold',
    },
    componentText: {
        color: Colors.balanceText,
        fontSize: vw(12),
        fontWeight: 'bold',
        paddingBottom: vh(10),
        paddingLeft: vw(20)
    },
    componentText2: {
        color: Colors.darkGreenCyan,
        fontSize: vh(20),
        fontWeight: 'bold',
        paddingLeft: vw(20)
    },
    cylindricalView: {
        height: vh(80),
        width: vw(2),
        backgroundColor: Colors.darkGray,
        top: vh(55),
        left: vw(20)
    },
    seeAllStyle: {
        flexDirection: 'row',
        top: vh(60),
        justifyContent: 'space-between',
        paddingRight: vw(20),
        alignItems: 'center'
    },
    seeAllButton: {
        color: Colors.black,
        textDecorationLine: 'underline'
    },
    addDataView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: vw(20),
        marginRight: vw(20),
        marginBottom:vh(10),
        top:vh(20)
    }
})
