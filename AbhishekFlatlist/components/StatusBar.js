import React from 'react';
import {View,StatusBar} from 'react-native';

const AppStatusBar = React.memo(function pureFunction(params) {
  console.log("AppStatusBar rendered")
    return (
        <View>
            <StatusBar {...params} />
        </View>
    )
})

export default AppStatusBar;