import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Images, Colors, vh, vw } from '../../Constants';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import YouTube from 'react-native-youtube'
import YouTubeVideo from './YouTubeVideo'

import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { template } from 'handlebars';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
MaterialCommunityIcons.loadFont()
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
MaterialIcons.loadFont()

class mainYT extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: Colors.white,
            borderBottomWidth: 0,
        },
        headerLeft: (
            <>
                <Image source={Images.ytLogo} style={styles.logo} />
                <Text style={styles.logoText} > YouTube </Text>
            </>
        ),

        headerRight: (
            <View style={styles.headerRightView} >
                <TouchableOpacity>
                    <MaterialCommunityIcons name='cast-connected' size={vh(30)} color={Colors.darkGray} style={styles.connectedIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='video' size={vh(30)} color={Colors.darkGray} style={styles.connectedIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='ios-search' size={vh(30)} color={Colors.darkGray} style={styles.connectedIcon} />
                </TouchableOpacity>
                <Image source={Images.naruto} style={styles.logoImage} />
            </View>
        )
    })
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://www.googleapis.com/youtube/v3/search/?key=AIzaSyDP56i4BNIJi9pvs_xlJ3al4z728fIqwZ8&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30')
            .then(res => res.json())
            .then(res => {
                const videoId = []
                // console.log("second result ",res)
                res.items.forEach(item => {
                    videoId.push(item)
                });
                this.setState({
                    data: videoId
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.containerView}>
                <StatusBar barStyle='dark-content' />
                <ScrollView>
                    <View style={styles.body}>
                        {this.state.data.map((item, i) =>
                            <TouchableHighlight
                                key={item.id.videoId}
                                onPress={() => navigate('YouTubeVideo', { youtubeId: item.id.videoId })}
                            >
                                <View style={styles.vids}>
                                    <Image
                                        source={{ uri: template.snippet.thumbnails.medium.url }}
                                        style={{ width: vw(320), height: vh(180) }}
                                    />
                                    <View style={styles.vidItems}>
                                        <Image
                                            source={Images.nightKing}
                                            style = {{width: vh(40), height: vh(40), borderRadius: vh(20), marginRight: vw(5)}}
                                        />
                                        <Text style={styles.vidText}>{item.snippet.title}</Text>
                                        <MaterialIcons name = 'more-vert' size = {vh(20)} color = '#555'/>
                                    </View>
                                </View>
                            </TouchableHighlight>)}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        height: vh(30),
        width: vw(30),
        marginLeft: vw(10),
        marginBottom: vh(10),
    },
    logoText: {
        fontSize: vh(22),
        fontWeight: 'bold',
        fontFamily: 'AlNile-Bold'

    },
    connectedIcon: {
        marginLeft: vw(10)
    },
    headerRightView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: vw(10)
    },
    logoImage: {
        height: vh(30),
        width: vh(30),
        backgroundColor: Colors.white,
        borderRadius: vh(15),
        marginLeft: vw(10)
    },
    containerView: {
        flex: 1
    },
    body: {
        flex:1,
        backgroundColor: Colors.white,
        alignItems:'center',
        padding: vh(30)
    },
    vids: {
        paddingBottom: vh(30),
        width: vw(320),
        alignItems:'center',
        backgroundColor: '#fff',
        justifyContent:'center',
        borderBottomWidth: vh(0.6),
        borderColor: '#aaa'
    },
    vidItems: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        padding: vh(10)
    },
    vidText:{
        padding: vh(20),
        color: '#000'
    }

})


const Home = createStackNavigator(
    { Home: mainYT, },
    {
        defaultNavigationOptions: {
            title: '',
        },
    }
);

const Trending = createStackNavigator({
    Trending: mainYT,
});
const Subscriptions = createStackNavigator({
    Subscriptions: mainYT,
});

const Inbox = createStackNavigator({
    Inbox: mainYT,
});
const Library = createStackNavigator({
    Library: mainYT,
});


const TabNavigator = createAppContainer(
    createBottomTabNavigator(
        {
            Home: Home,
            Trending: Trending,
            Subscriptions: Subscriptions,
            Inbox: Inbox,
            Library: Library,
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                header: null,
                headerMode: 'none',
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let IconComponent = MaterialCommunityIcons;
                    let iconName;
                    if (routeName === 'Home') {
                        iconName = 'home';
                    } else if (routeName === 'Trending') {
                        iconName = `trending-up`;
                    } else if (routeName === 'Subscriptions') {
                        iconName = `youtube-subscription`;
                    } else if (routeName === 'Inbox') {
                        iconName = `email`;
                    } else if (routeName === 'Library') {
                        iconName = `library-video`;
                    }

                    // You can return any component that you like here!
                    return <IconComponent name={iconName} size={vh(30)} color={tintColor}
                        style={{ marginTop: 5 }} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
            },
        }
    )
);

TabNavigator.navigationOptions = {
    headerShown: false,
};

export default TabNavigator;