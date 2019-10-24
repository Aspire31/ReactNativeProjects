import React from 'react';
import {  View, Text } from 'react-native';

export const BottomView = React.memo(function pureFunction() {

    return (
      <View>
        <Text> componentText </Text>
      </View>
    );
})
