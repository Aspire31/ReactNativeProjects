import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export default class PrizeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        topics: ['Jungle Safari','Roads Travelled', 'History'],
        time: ['1st Jan 2018 - 20th Jan 2018','21st Jan 2018 - 10th Jan 2018','11th Feb 2018 - 10th Mar 2018']
    };
  }

  renderData = (rowData) => {
    let { item, index } = rowData;
    return (
        <View style={styles.container}>
            <Image
                source={item.imageURL}
                style={{ height: 90, width: 90, borderRadius: 10 }}
            />

            <View style={styles.badgeStyle}>
                <Image
                    style={{ height: 33, width: 33 }}
                    source={item.badge}
                />
                <Text style={styles.prizeText}>
                    {item.text}
                </Text>
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
                scrollEnabled = {false}
            />

            <View style={styles.whiteBase}>
                <Image
                    style={styles.ribbonImage}
                    source={require('./Images/WhiteBase.png')}
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
        top: 70,
        left: 15,
        backgroundColor: 'white',
        borderRadius: 10
    },
    prizeText: {
        fontSize: 12,
        color: 'gray',
        paddingTop: 10,
        paddingRight: 10
    },
    whiteBase: {
        position: 'absolute',
        top: 140,
        left: 40,
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
        top:10,
        left:40,
    },
    topicText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    timeText: {
        paddingLeft:5,
        fontSize: 11,
        color: 'gray'
    },
})

const DATA = [
    {
        imageURL: require('./Images/hippo.jpg'),
        text: '1st',
        badge: require('./Images/first.png')
    },
    {
        imageURL: require('./Images/fox.jpg'),
        text: '2nd',
        badge: require('./Images/second.png')
    },
    {
        imageURL: require('./Images/bird.jpg'),
        text: '3rd',
        badge: require('./Images/third.png')
    }
]




