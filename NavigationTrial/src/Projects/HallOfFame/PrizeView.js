import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export default class PrizeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: ['Jungle Safari', 'Roads Travelled', 'History'],
            time: ['1st Jan 2018 - 20th Jan 2018', '21st Jan 2018 - 10th Jan 2018', '11th Feb 2018 - 10th Mar 2018']
        };
    }

    renderData = (rowData) => {
        let { item, index } = rowData;
        return (
            <View style={{ position: 'relative', alignItems: "center", height: 127 }}>
                <View style={styles.badgeStyle}>
                    <Image
                        style={{ height: 33, width: 33 }}
                        source={item.badge}
                    />
                    <Text style={styles.prizeText}>
                        {item.text}
                    </Text>
                </View>
                <View style={styles.container}>
                    <Image
                        source={item.imageURL[this.props.count]}
                        style={{ height: 90, width: 90, borderRadius: 10 }}
                    />


                </View>

            </View>
        )
    }

    render() {
        return (
            <View style={styles.mainView} >
                <View style={styles.backgroundView} >

                    <FlatList
                        data={DATA}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderData}
                        numColumns={3}
                        scrollEnabled={false}
                    />

                    <View style={styles.whiteBase}>
                        <Image
                            style={styles.ribbonImage}
                            source={require('/Users/appinventiv/Desktop/Alisha_RN/NavigationTrial/Images/WhiteBase.png')}
                        />

                        <View style={styles.ribbon}>
                            <Text style={styles.topicText}>
                                {this.state.topics[this.props.count]}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='ios-timer' size={13} color='gray' />
                                <Text style={styles.timeText} >
                                    {this.state.time[this.props.count]}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        height: 220,
        //backgroundColor: 'white'
    },
    backgroundView: {
        height: 170,
        backgroundColor: '#ffe5b4',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    container: {
        borderRadius: 10,
        backgroundColor: 'white',
        height: 90,
        width: 90,
        marginLeft: 10,
        marginTop: 20,
        marginRight: 10
    },
    badgeStyle: {
        flexDirection: 'row',
        position: 'absolute',
        top: 87,
        backgroundColor: 'white',
        borderRadius: 10,
        zIndex: 1000
    },
    prizeText: {
        fontSize: 12,
        color: 'gray',
        paddingTop: 10,
        paddingRight: 10
    },
    whiteBase: {
        position: 'absolute',
        top: '84.5%',
        left: '13.5%',
        justifyContent:'center',
        alignItems:'center'
    },
    ribbonImage: {
        height: 70,
        width: 260,
        shadowOpacity: 0.5,
        shadowColor: 'lightgray',
        shadowOffset: { height: 3, width: 3 }
    },
    ribbon: {
        flexDirection: 'column',
        position: 'absolute',
        top: 10,
        left: 40,
    },
    topicText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    timeText: {
        paddingLeft: 5,
        fontSize: 11,
        color: 'gray'
    },
})
const path = '/Users/appinventiv/Desktop/Alisha_RN/NavigationTrial/Images'

const DATA = [
    {
        imageURL: [require(path + '/hippo.jpg'), require(path + '/road1.jpg'), require(path + '/history1.jpg')],
        text: '1st',
        badge: require(path + '/first.png')
    },
    {
        imageURL: [require(path + '/fox.jpg'), require(path + '/road2.jpeg'), require(path + '/history2.jpg')],
        text: '2nd',
        badge: require(path + '/second.png')
    },
    {
        imageURL: [require(path + '/bird.jpg'), require(path + '/road3.jpeg'), require(path + '/history3.jpg')],
        text: '3rd',
        badge: require(path + '/third.png')
    }
]




