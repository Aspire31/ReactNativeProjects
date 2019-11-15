import React, { Component } from "react";
import {
    StyleSheet,
    Animated,
    Dimensions
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { Colors, Images, vh, vw} from "../../Constants";

const { width } = Dimensions.get("window");

export default class SplashToDoList extends Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.spring(this.animatedValue, {
            toValue: 1.5,
            friction: 7,
            delay: 1500
        }).start();

        Animated.timing(this.animatedValue2, {
            toValue: 1,
            delay: 200,
            duration: 2000
        }).start(() => {
            this.props.navigation.navigate('ToDo')
        });
    }

    render() {
        const welcomeStyle = {
            transform: [{ scale: this.animatedValue }]
        };

        const scaleText = {
            transform: [{ scale: this.animatedValue2 }]
        };

        return (
            <LinearGradient
                colors={[
                    Colors.paleOrange,
                    Colors.verySoftRed,
                    Colors.softRed,
                    '#FDC8D3',
                    Colors.softOrange,
                    '#FCBDA5',
                    Colors.softRed2,
                    '#DE91B9',
                    '#CE9FD1',
                    '#761E8A',

                ]}
                style={styles.container}
            >
                <Animated.View style={[styles.ring, welcomeStyle]}>
                    <Animated.Image
                        source={Images.welcome}
                        style={styles.imageStyle}
                    />
                </Animated.View>

                <Animated.View
                    style={[ styles.viewLine,scaleText ]}
                />
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ring: {
        backgroundColor: 'white',
        borderRadius: vh(150),
        borderWidth: vw(2),
        borderColor: "#FFF",
        padding: vh(7)
    },
    viewLine: {
        position: "absolute",
        bottom: vh(20),
        width: width / 2,
        height: vh(4),
        backgroundColor: "#fff",
        borderRadius: vh(2)
    },
    imageStyle: {
        resizeMode: "contain",
        width: vw(200),
        height: vh(200)
    }
});

