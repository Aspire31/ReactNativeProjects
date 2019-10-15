import React,{Component} from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView} from 'react-native'

export default class Card extends Component{
    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {{ flexDirection: "row", justifyContent: 'space-around'}}>
                    <Image
                    style ={{height: 50, width: 50}}
                    source = {{uri: 'https://s1.piq.land/2013/08/13/WVhgNl0gqXjyFwKUlmqWoDkX_400x400.png'}}
                    />
                    <View style={{
                    flexDirection: 'column',
                    justifyContent: "center"}}>
                    <Text style={styles.userText}>
                        TruthDog29
                    </Text>
                    <Text style = {styles.descriptionText}>
                        User since 2016
                    </Text>
                    </View>
                    <Text style = {styles.descriptionText}>
                        2:58
                    </Text>  
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
userText: {
    fontWeight: 'bold',
    fontSize: 22
},
descriptionText: {
    fontSize: 18,
    color: 'lightgray'
}

});