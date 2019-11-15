import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

import { observer } from 'mobx-react';

import { Colors, vh, vw, Styles } from '../../Constants';
import { APIHitMobX } from '../../Store'
import { axiosMethods, apiPoints } from '../../ReusableComponents'

import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons'
DeleteIcon.loadFont()

import CheckBox from '../../ReusableComponents/CheckBox'


var id = Math.random().toString();

@observer
export default class MainAPIScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#8ab0d8',
        },
    })

    componentDidMount() {
        this.hitApi()
    }

    hitApi() {
        axiosMethods.getRequest(apiPoints.pagingURL1, (dataResponse) => {
            APIHitMobX.dataResponse = dataResponse.results
            console.log("bchkasdbc",dataResponse.results)
            APIHitMobX.loader = false
        })
    }

    handleLoadMore = () => {
        this.loadUsers();
    };

    loadUsers = () => {
        APIHitMobX.loader = true
        axiosMethods.getRequest(apiPoints.pagingURL2, (dataResponse) => {
            APIHitMobX.moreDataResponse = dataResponse.results
            APIHitMobX.dataResponse = APIHitMobX.dataResponse.concat(APIHitMobX.moreDataResponse)
            APIHitMobX.loader = false
        })
    }

    handleDelete = (item) => {
        let { checkSelected } = APIHitMobX;
        APIHitMobX.remove(item)
        checkSelected.remove(item) 
        //make it like the previous one that you wanted to do. 
    }

    toggleCheckBox = (id, isCheck) => {
        let { checkSelected } = APIHitMobX;
        if (isCheck) {
            checkSelected.push(id);
        } else { // remove element
            var index = checkSelected.indexOf(id);
            console.log("Akjsdbcj", checkSelected)
            if (index > -1) {
                checkSelected.splice(index, 1);
            }
        }
        // console.log("Data Selected", checkSelected)
        // alert(checkSelected); // logging
    }


    render() {

        return (
            <View>
                <TouchableOpacity
                    style={styles.buttonstyle}
                    onPress={() => { this.props.navigation.navigate('selected') }}>
                    <Text style={styles.buttonTextStyle} >
                        Show Selected
                    </Text>
                </TouchableOpacity>
                <FlatList
                    // style={{ marginTop: vh(20) }}
                    ListFooterComponent={
                        <ActivityIndicator size='large'
                            hidesWhenStopped='true'
                            color={Colors.darkBlue}
                            animating={APIHitMobX.loader}
                            style={{ margin: vh(20) }}
                        />
                    }
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.01}
                    data={APIHitMobX.dataResponse.slice()}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        // console.log(item.cell),
                        <View style={[Styles.container, styles.containerStyle]}>

                            <Image
                                source={{ uri: item.picture.thumbnail }}
                                style={styles.imageStyle}
                            />
                            <View style={{ flexDirection: 'column', marginLeft: vw(50), width: vw(250) }} >
                                <Text style={[Styles.text, { color: Colors.balanceText }]}> {item.name.title} {item.name.first} {item.name.last}</Text>
                                <Text style={[Styles.text, { color: Colors.balanceText }]}>{item.email} </Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }} >

                                <TouchableOpacity onPress={() => this.handleDelete(item)} >
                                    <Text>
                                        <DeleteIcon name='delete-empty' size={vh(30)} color={Colors.balanceText} />
                                    </Text>
                                </TouchableOpacity>
                                <CheckBox id={item} value={item} clicked={(id, isCheck) => this.toggleCheckBox(id, isCheck)}></CheckBox>
                            </View>
                        </View>
                    )} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.paleOrange,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vh(50),
    },
    imageStyle: {
        height: vh(70),
        width: vh(70),
        position: 'absolute',
        top: vh(-30),
        borderRadius: vh(20),

    },
    checkBoxView: {
        height: vh(20),
        width: vh(20)
    },
    imageCheckBox: {
        height: vh(16),
        width: vh(16),
        borderRadius: vh(8),
        borderWidth: 2,
        backgroundColor: Colors.leafyGreen
    },
    buttonstyle: {
        backgroundColor: Colors.verySoftRed,
        justifyContent: 'center',
        height: vh(40),
        width: vw(150),
        borderRadius: vh(15),
        padding: vh(5),
        alignItems: 'center',
        marginTop: vh(20),
        marginLeft: vh(210)
    },
    buttonTextStyle: {
        fontSize: 16,
        color: Colors.balanceText,
        fontWeight: 'bold'
    }
})
