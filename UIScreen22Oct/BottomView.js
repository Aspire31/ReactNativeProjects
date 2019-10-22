import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export const BottomView = React.memo(function pureFunction() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.heading}>
                <View style={styles.headingViews}>
                    <Text style={styles.roads} >
                        Roads Less Travelled
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='md-time' size={18} color='lightgray' style={styles.timerStyle} />
                        <Text style={styles.belowRoads} >
                            1day left
                       </Text>
                    </View>

                </View>
                <View style={styles.headingViews}>
                    <Text style={styles.prizeTotal}>
                        Total Prize
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.dollarStyle} >
                            $
                        </Text>
                        <Text style={styles.totalDollar} >
                            220
                        </Text>
                    </View>
                </View>

            </View>

            <View style={styles.prizeListing}>
                

            </View>
            <View style={styles.description} >

            </View>
            <View style={styles.rules} >

            </View>

        </View>
    );
})

const styles = StyleSheet.create({
    heading: {
        flex: 1,
        flexDirection: 'row'
    },
    prizeListing: {
        flex: 1,
    },
    description: {
        flex: 1,
    },
    rules: {
        flex: 2,
    },
    headingViews: {
        flexDirection: 'column',
    },
    roads: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 10,
    },
    belowRoads: {
        paddingTop: 8,
        color: 'lightgray',
        fontSize: 16
    },
    timerStyle: {
        paddingLeft: 20,
        paddingTop: 8,
        paddingRight: 3
    },
    prizeTotal: {
        paddingTop: 23,
        fontSize: 18,
        color: 'lightgray',
        paddingLeft: 40
    },
    totalDollar: {
        color: '#fad25a',
        fontSize: 22
    },
    dollarStyle: {
        fontSize: 17,
        color: '#fad25a',
        paddingLeft: 75,
        paddingTop: 5
    },
})