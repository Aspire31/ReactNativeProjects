import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, FlatList, TextInput, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import APIServiceMethods from './axiosApi/ApiServiceMethos'
import CardComponent from './components/CardComponent';
import Colors from './constants/Colors';
import AppStatusBar from './components/StatusBar';
import Toolbar from './components/Toolbar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwasome from 'react-native-vector-icons/FontAwesome'

export default class FlatListTutorial extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            isLoading: false,
            fatchingStatus: false,
            isrefreshing: true,
        }
        this.page = 0;
    }

    componentDidMount() {
        obj = new APIServiceMethods();
        this.apiObje = obj;
        this.getNews(" ", obj);
    }

    //Async call for newsfeed
    async getNews(endPoint, instance) {
        try {
            this.page = this.page + 1;
            this.setState({ fatchingStatus: true });
            console.log("getNews called ");
            var paraMeter = { params: { page: this.page } };

            var res = await this.apiObje.getRequest("", paraMeter)
            var responseArr = [];

            await res.data.data.forEach((item) => {
                let { id, first_name, last_name, email, avatar } = item;
                responseArr.push(new Model(id, first_name, last_name, email, avatar));
            });

            if (responseArr.length === 0) {
                this.page = -1;
                this.setState({ fatchingStatus: false });
            } else if (responseArr.length > 0) {
                this.setState({ newsList: [...this.state.newsList, ...responseArr], isLoading: false });
            }
        } catch (error) {
            console.log("Error occur " + error);
        }
    }

    renderSeprator = () => {
        return (
            <View
                style={{
                    height: 5,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    }

    renderHeader = () => {
        if (this.state.fatchingStatus) {
            return (
                <ActivityIndicator size="large" color={Colors.liteGreen} />
            )
        } else {
            return null;
        }
    }

    btnScrollToEnd = () => {
        this.flatListRef.scrollToEnd({ animated: true });
        //this.flatListRef.scrollToIndex({index : 4});
    }

    btnScrollToTop = () => {
        this.flatListRef.scrollToOffset({ animated: true, offset: 0 })
    }

    handleRefresh = () => {
        console.log("handleRefresh")
        this.page = 0;
        var preArray = []
        this.setState({ newsList: preArray, isrefreshing: true, isLoading: false, fatchingStatus: false }, () => { this.getNews(null, null) })
    }

    showingList = () => {
        return (
            <View style={{ flex: 3 }}>
                <FlatList
                    data={this.state.newsList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => (item.id)}
                    renderItem={({ item, index, separators }) => (
                        <CardComponent news={item} index={index} />
                    )}
                    
                    onEndReached={({ end }) => { if (this.page != -1) { this.getNews(null, null) } }}
                    onEndReachedThreshold={0.005}
                    ListFooterComponent={this.renderHeader}
                    ref={(ref) => { this.flatListRef = ref; }}
                    //contentContainerStyle={{ paddingBottom: 10 }}
                    refreshing={!this.state.isrefreshing}
                    onRefresh={this.handleRefresh}
                    //ItemSeparatorComponent = {this.renderSeprator}
                    //initialNumToRender={3}
                    //inverted={true}
                    //horizontal={false}
                    //pagingEnabled = {true}
                    //ListHeaderComponent={this.renderHeader}
                    
                    onScroll = {(event) => {console.log(event.nativeEvent.contentOffset)}}
                />
                <TouchableOpacity style={styles.scrollToDown} onPress={this.btnScrollToEnd}>
                    <AntDesign name="downcircle" color={Colors.liteGreen} size={30} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.scrollToTop} onPress={this.btnScrollToTop}>
                    <AntDesign name="upcircle" color={Colors.liteGreen} size={30} />
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        console.log("render called");
        return (
            <SafeAreaView style={styles.container}>

                <AppStatusBar backgroundColor={Colors.whiteColor} barStyle="light-content" hidden={false} translucent={false} networkActivityIndicatorVisible={true} />

                <Toolbar />

                <Text style={styles.homeStyle} >Home</Text>

                <View style={styles.container2}>
                    <View style={styles.SectionStyle}>
                        <AntDesign style={{ paddingLeft: 10 }} name="search1" size={20} color={Colors.darkGray} />
                        <TextInput
                            style={{ flex: 1, paddingLeft: 10, }}
                            placeholderTextColor={Colors.liteBlackColor}
                            placeholder="Search for events,promotion,members"
                            onChangeText={text => this.onChangeText(text)}
                            value={this.state.enteredText}
                            underlineColorAndroid="transparent" />
                        <FontAwasome onPress={() => this.callApiForSearch()} style={{ paddingRight: 10 }} name="barcode" size={30} color={Colors.liteGreen} />
                    </View>
                </View>
                {this.showingList()}

            </SafeAreaView>
        );
    }

}

class Model {
    constructor(id, first_name, last_name, email, avatar) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.avatar = avatar;
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        flex: 2,
        backgroundColor: Colors.bgColorGray
    },

    scrollToDown: {
        position: "absolute",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        right: 10,
        bottom: 20
    },

    scrollToTop: {
        position: "absolute",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        right: 10,
        top: 0
    },

    container2: {
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor
    },

    homeStyle: {
        fontSize: 25,
        padding: 10,
        color: Colors.black,
        backgroundColor: Colors.whiteColor,
        fontFamily: "Acme-Regular"

    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.graylite,
        borderWidth: .5,
        borderColor: Colors.gray,
        height: 40,
        borderRadius: 5,
        margin: 10
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },

    toolbarStyles: {
        backgroundColor: Colors.whiteColor,
        padding: 10,
    },

    dataStyle: {
        flex: 1,
    },
    searchStyle: {
        backgroundColor: Colors.darkGray,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchSty: {
        backgroundColor: Colors.coldPrimaryDark,
    },
    flatlistStyle: {
        marginTop: 20
    },
    indicStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'

    },
    indicatorBg: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: Colors.whiteColor,
        shadowColor: Colors.black,
        shadowRadius: 10,
        shadowOpacity: 0.26,
        elevation: 5,
        shadowOffset: { width: 0, height: 3 },
        justifyContent: "center",
        alignItems: "center"
    }
});