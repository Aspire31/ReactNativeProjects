import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export const BottomView = React.memo(function pureFunction() {

    renderData = (rowData) => {
        // console.warn("rowData.item",rowData.item)
        let { item, index } = rowData;
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={item.image}
                        />
                        <View style={{ flexDirection: 'column' }} >
                            <Text style={styles.prizeText}>
                                {item.listing}
                            </Text>
                            <Text style={styles.dollarListings}>
                                {item.money}
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

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
                <FlatList
                    data={DATA}
                    numColumns={3}
                    renderItem={this.renderData}
                    keyExtractor={(index) => index.toString()}
                />
            </View>

            <View style={styles.description} >
                <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                    <Icon name="ios-paper" size={25} color="#d3d3d3" />
                    <Text style={styles.descriptionText} >
                        Description
                     </Text>
                </View>
                <Text numberOfLines = {4} style={styles.descriptionTextInfo} >
                    This challenge is all about uploading the posts bout your recent travels
                    to places that are usually less travelled. Post more of your travelling pictures
                    and get the chance to win.
                </Text>
            </View>

            <View style={styles.rules} >
                <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                    <Icon name="ios-checkbox" size={25} color="#d3d3d3" />
                    <Text style={styles.descriptionText} >
                        Rules
                     </Text>
                </View>

                <View style={{ flexDirection: 'column' , marginTop: 10}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="md-checkmark" size={20} color="#50c878" style={{ paddingLeft: 20, paddingTop: 10 }} />

                        <Text style={styles.rulesTextInfo} >
                            You need to travel to places where people have not visited much or is not
                            known by many people. Don't forget to keep your camera handy.
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="md-checkmark" size={20} color="#50c878" style={{ paddingLeft: 20, paddingTop: 10  }} />

                        <Text style={styles.rulesTextInfo} >
                            Click a picture of yours or of that place or whatever you feel, looks amazing and
                            prize worthy.
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="md-checkmark" size={20} color="#50c878" style={{ paddingLeft: 20, paddingTop: 10  }} />

                        <Text style={styles.rulesTextInfo} >
                            Upload directly from the camera or can choose from your gallery.
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="md-checkmark" size={20} color="#50c878" style={{ paddingLeft: 20, paddingTop: 10  }} />

                        <Text style={styles.rulesTextInfo} >
                            Do give the caption of the image uploaded by you.
                        </Text>
                    </View>
                    
                </View>
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
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    description: {
        flex: 1,
    },
    rules: {
        flex: 2,
        marginTop: 20
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
        color: '#ff7700',
        fontSize: 22
    },
    dollarStyle: {
        fontSize: 17,
        color: '#ff7700',
        paddingLeft: 75,
        paddingTop: 5
    },
    container: {
        borderRadius: 12,
        height: 70,
        width: 113,
        backgroundColor: 'white',
        marginLeft: 5,
        shadowColor: 'lightgray',
        shadowOpacity: 1,
        shadowOffset: { height: 10, width: 10 },
        marginRight: 5,
        marginTop: 20,
        marginBottom:20,
    },
    item: {
        paddingLeft: 0
    },
    prizeText: {
        fontSize: 12,
        color: 'lightgray',
        paddingTop: 10,
        paddingRight: 10
    },
    dollarListings: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3dc269'
    },
    descriptionText: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 22
    },
    descriptionTextInfo: {
        paddingLeft: 20,
        color: '#838383',
        fontSize: 14,
        flexShrink: 1,
    },
    rulesTextInfo: {
        paddingLeft: 10,
        paddingRight: 10,
        color: '#838383',
        fontSize: 13,
        flexShrink: 1,
        paddingTop: 10
    }
})

const DATA = [
    {
        image: require('./Images/first.png'),
        money: '$125',
        listing: '1st Prize'
    },
    {
        image: require('./Images/second.png'),
        money: '$60',
        listing: '2nd Prize'
    },
    {
        image: require('./Images/third.png'),
        money: '$35',
        listing: '3rd Prize'
    }
]