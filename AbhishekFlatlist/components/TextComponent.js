import React, { PureComponent } from 'react';
import { View,StyleSheet,Text } from 'react-native';

const TextComponent = props => {
    return(
        <Text style = {props.style}>{props.children}</Text>
    )
};

export default TextComponent;