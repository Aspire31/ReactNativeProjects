import React,{Component} from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native'

function Item({ username, description, image, time }) {
    return (
        <View style = {styles.container}>
        <View style = {styles.item}>
        <Image
        style ={{height: 50, width: 50}}
        source = {{uri: image}}
        />
        
        <View style={{
            flexDirection: 'column',
            justifyContent: "center"}}>
            <Text style={styles.userText}>
            {username}
            </Text>
            
            <Text style = {styles.descriptionText}>
            {description}
            </Text>
            </View>
            
            <Text style = {styles.descriptionText}>
            {time}
            </Text>  
            </View>
            </View>
            );
        }
        
        export default class Card extends Component{
            render(){
                return(
                    
                    <View>
                    <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item
                    username={item.username}
                    description={item.description}
                    image = {item.imageHere}
                    time = {item.time}
                    />}
                    keyExtractor={item => item.id}
                    />
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
                },
                container: {
                    borderColor: 'lightgray',
                    borderRadius: 10,
                    borderWidth: 1,
                },
                item: {
                    padding: 20,
                    marginVertical: 10,
                    marginHorizontal: 16,
                    flexDirection: "row", 
                    justifyContent: 'space-around'
                },
                title: {
                    fontSize: 32,
                },
            });
            
            const DATA = [
                {
                    username: 'TruthDog29',
                    description: 'User since 2018',
                    imageHere: 'https://s1.piq.land/2013/08/13/WVhgNl0gqXjyFwKUlmqWoDkX_400x400.png',
                    time: '3:25',
                    id: '1'
                },
                {
                    username: 'HelloKitty',
                    description: 'User since 2016',
                    imageHere: 'https://icon-library.net/images/50x50-icon/50x50-icon-27.jpg',
                    time: '3:09',
                    id: '2'
                },
                {
                    username: 'AspiringHeights89',
                    description: 'User since 2010',
                    imageHere: 'https://icon-library.net/images/icon-50x50/icon-50x50-22.jpg',
                    time: '4:16',
                    id: '3'
                },
                {
                    username: 'LoveOfGod',
                    description: 'User since 2019',
                    imageHere: 'http://clipart-library.com/images/yckAE9edi.png',
                    time: '9:24',
                    id: '4'
                },
                {
                    username: 'wanderlust',
                    description: 'User since 2014',
                    imageHere: 'https://s-media-cache-ak0.pinimg.com/736x/ed/a5/d5/eda5d54ab0a23440232ca68114645dce--tableau-design-roy-lichtenstein.jpg',
                    time: '10:16',
                    id: '5'
                }
            ] 