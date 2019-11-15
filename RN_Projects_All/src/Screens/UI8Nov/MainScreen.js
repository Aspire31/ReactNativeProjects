import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()

import HeaderTop  from './HeaderTop'
import { MidView } from './MidView'
import { Colors, vh,vw } from '../../Constants';


class MainScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainView} >
                <View style={styles.header}>
                    <HeaderTop />
                </View>
                <View style={{ flex: 4 }}>
                    <View style={styles.openedTab} >
                        <MidView />
                    </View>
                </View>

                <View style={{ flex: 0.7 }}>
                    <View style={styles.lowerTab1} >
                        <View style={styles.tabView}>
                            <Text style={{ fontSize: vw(16), fontWeight: '500' }} >
                                Health and Beauty
                            </Text>
                            <Text style={{ fontSize: vw(15), fontWeight: '400' }} >
                                5,000,000 VND
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 0.7 }}>
                    <View style={styles.lowerTab2} >

                        <View style={styles.tabView}>
                            <Text style={{ fontSize: vw(16), fontWeight: '600', color: Colors.white }} >
                                Course and Training
                            </Text>
                            <Text style={{ fontSize: vw(15), fontWeight: '400', color: Colors.white }} >
                                2,000,000 VND
                            </Text>
                        </View>

                    </View>
                </View>

                <View style={{ flex: 0.7 }}>
                    <View style={styles.lowerTab3} >
                        <View style={styles.tabView}>
                            <Text style={{ fontSize: vw(16), fontWeight: '600' }} >
                                Buisness Trip Cost
                            </Text>
                        </View>
                    </View>
                </View>

                {/* <View style={{ flex: 1, backgroundColor:'white' }}>
                   
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.darkGreenCyan
    },
    header: {
        flex: 1,
        backgroundColor: Colors.darkGreenCyan
    },
    openedTab: {
        backgroundColor: Colors.paleOrange,
        borderRadius: vw(20),
        height: vh(450),
    },
    lowerTab1: {
        height: vh(100),
        borderRadius: vw(20),
        backgroundColor: Colors.softRed,
    },
    lowerTab2: {
        height: vh(100),
        borderRadius: vw(20),
        backgroundColor: Colors.veryDarkBlue
    },
    lowerTab3: {
        height: vh(100),
        borderRadius: vw(20),
        backgroundColor: Colors.grayishOrange
    },
    tabView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: vw(18),
        alignItems: 'center'
    }
})


export default createBottomTabNavigator(
    {
        Home: MainScreen,
        mid: MidView,
        top: HeaderTop,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'ios-home';
                } else if (routeName === 'mid' || routeName === 'top') {
                    iconName = `ios-options`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={vh(30)} color={tintColor}
                style={{marginTop:5}} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);