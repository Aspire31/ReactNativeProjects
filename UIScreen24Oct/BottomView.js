import React from 'react';
import {  View, Text,StyleSheet } from 'react-native';
import {PrizeView} from './PrizeView';

export const BottomView = React.memo(function pureFunction() {

    return (
      <View style = {{flex: 1}} >
          <View style = {styles.monthView} >
              <Text style = {styles.monthText} >
                  January
              </Text>
              <Text style = {styles.challengeNumberText} >
                  2 Challenges
              </Text>
          </View>
          <View style = {styles.firstPrizeView} >
              <PrizeView />
          </View>
        
      </View>
    );
})

const styles = StyleSheet.create({
    monthView:{
        flexDirection: 'row',
        height:60
    },
    monthText:{
        fontSize:20,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft:20
    },
    challengeNumberText:{
        fontSize: 17,
        fontWeight: 'normal',
        paddingTop: 22,
        paddingLeft:160
    },
    firstPrizeView:{
        height:300
    }
})

