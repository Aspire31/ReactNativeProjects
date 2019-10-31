/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class MultiPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            source: [],
            imageKey: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        };
    }

    handlePicker = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            var data = [];
            images.forEach((item) => {
                data.push(item.sourceURL);
            });
            this.setState({source : data});
            data = [];
            // this.setState({
            //     source: images
            // })

            // this.setState({
            //     source: images.map(i => {
            //         console.log('source', i);
            //         return (
            //             console.log('path', i.path),
            //             this.setState({
            //                 data: this.state.data.concat(i.path)
            //             })
            //         )
            //     })
            // })


        });
    }
    // renderData = (rowData) =>{
    //     let { item, index } = rowData;
    //     return(
    //         <View style={{margin:10}}>
    //             <Image 
    //             style={{ height: 200, width: 200, borderRadius:15 }}
    //             source={{ uri: item.path }}
    //             />
    //         </View>
    //     )
    // }

    render() {
        var sources = this.state.source;
        return (
            <View style={{ padding: 100 }} >
                <TouchableOpacity onPress={this.handlePicker} >
                    <Image
                        style={{ height: 200, width: 200, backgroundColor: 'red' }}
                        source={{ uri: this.state.imageKey }}
                    />
                </TouchableOpacity>
                <FlatList
                    data={sources}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        return(<Image style = {{width : 200, height : 200 }} source = {{uri : item}} />)
                    } }
                />
            </View>
        );
    }
}