import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export const ImageView = React.memo(function pureFunction() {
    return (
        <View>
            <Image
                style={{ height: 260, width: 375 }}
                source={{ uri: 'https://media.suara.com/pictures/480x260/2018/03/02/78948-travelling-murah.jpg' }}
            />
            <Icon name="md-arrow-back" size={35} color="#ffffff" style={styles.backIcon} />
        </View>
    )
})


const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 50,
        left: 20,
        fontWeight: 'bold'
    }
})