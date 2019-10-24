import React from 'react';
import {  View, Text,Image, StyleSheet,FlatList } from 'react-native';

export const PrizeView = React.memo(function pureFunction() {

    return (
      <View style={styles.mainView} >
          <View style={styles.backgroundView} >

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
        imageURL = 'https://ichef.bbci.co.uk/news/660/cpsprodpb/F76F/production/_101934336_hi001487062.jpg',
        text = '1st Prize',
        badge = require('./Images/first.png')
    },
    {
        imageURL = 'https://www.asiaone.com/sites/default/files/original_images/Oct2019/20191003_foxes_pixabay.jpg',
        text = '1st Prize',
        badge = require('./Images/second.png')
    },
    {
        imageURL = 'https://media.wired.com/photos/5d3646cc65c5e400082d459a/master/w_2560%2Cc_limit/Sceince_Adaptation-130859883.jpg',
        text = '1st Prize',
        badge = require('./Images/third.png')
    }
]
