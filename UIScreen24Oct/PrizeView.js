import React from 'react';
import {  View, Text,Image, StyleSheet,FlatList } from 'react-native';

export const PrizeView = React.memo(function pureFunction() {

    return (
      <View style={styles.mainView} >
          <View style={styles.backgroundView} >

              <FlatList 
              
              />

          </View>
      </View>
    );
})

const styles = StyleSheet.create({
    mainView:{
        height: 250,
        backgroundColor: 'lightgray'
    },
    backgroundView:{
        height: 200,
        backgroundColor: '#ffd2b4',
        marginLeft:20,
        marginRight:20,
        borderRadius: 20
    }

})

const DATA = [
    {
        imageURL: require('./Images/hippo.jpg'),
        text: '1st Prize',
        badge: require('./Images/first.png')
    },
    {
        imageURL: require('./Images/fox.jpg'),
        text: '1st Prize',
        badge: require('./Images/second.png')
    },
    {
        imageURL: require('./Images/bird.jpg'),
        text: '1st Prize',
        badge: require('./Images/third.png')
    }
]




