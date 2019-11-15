import React, { Component } from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import { Images } from '../../Constants';


export default class splashYT extends Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(1);
    }

    componentDidMount() {
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 10,
            delay: 1000
        }).start(() => {
            this.props.navigation.navigate('mainYT')
        });
    }

    render() {
        const scaleText = {
            transform: [{ scale: this.animatedValue }]
        };

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
                <Animated.View style={[styles.ring, scaleText]}>
                    <Animated.Image
                        source={Images.yt}
                        style={styles.imageStyle}
                    />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ring: {
        backgroundColor: 'white',
        borderRadius: 150,
        borderWidth: 2,
        borderColor: "#FFF",
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        resizeMode: "contain",
        width: 200,
        height: 200
    }
});


