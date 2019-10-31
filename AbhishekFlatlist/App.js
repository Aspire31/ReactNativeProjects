import React from 'react';
import {StyleSheet,View,Text,FlatList,TextInput,SafeAreaView,TouchableOpacity,ActivityIndicator} from 'react-native';
import APIServiceMethods from './axiosApi/ApiServiceMethos'
import CardComponent from './components/CardComponent';
import Colors from './constants/Colors';
import AppStatusBar from './components/StatusBar';
import Toolbar from './components/Toolbar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwasome from 'react-native-vector-icons/FontAwesome'

export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      isShowing : true,
      enteredText : "Noida"
    }
  }

  componentDidMount() {
    obj = new APIServiceMethods();
    this.apiObje =obj;
    this.getNews(this.state.enteredText, obj);
  }

  clearPreviousRecord() {
    this.setState({newsList:[],isShowing : true});
  }

  //Async call for newsfeed
  async getNews(endPoint, instance) {
    try {
      var parmas = {
        params: {
          apiKey: "192627a9083c41bbb03d709ed73e41a4",
          q:endPoint
        }
      }
      const response = await instance.getRequest("",parmas);
      this.setState({newsList : response.data.articles, isShowing : false})
      console.log(response.data)
    }catch (error) {
      console.log("Error occur " + error);
    }
  }

  onChangeText = text => {
    this.setState({enteredText : text,isShowing :false})
  }

  callApiForSearch(){
    this.clearPreviousRecord();
    this.getNews(this.state.enteredText, this.apiObje);
  }
  
  //showing indicator
  isIndicatorShowing = () => {

    if (this.state.isShowing) {
        return( 
            <ActivityIndicator style={styles.indicStyle}  size = {60} color = {Colors.liteBlackColor} />
        )
    }else{
        return null;
    }
    
}

showingList = () => {
    return (
      <FlatList
        data={this.state.newsList}
        contentContainerStyle={{ paddingBottom: 20}}
        keyExtractor={(item) => (item.publishedAt+Math.random())}
        showsVerticalScrollIndicator = {false}
        initialNumToRender = {2}
        renderItem={({ item, index,separators }) => (
          <TouchableOpacity >
            <CardComponent news={item} index={index} />
          </TouchableOpacity>
        )}
      />
    );
}
  render() {
    return(
      <SafeAreaView style={styles.container}>

        <AppStatusBar backgroundColor={Colors.whiteColor} barStyle="light-content" hidden={false} translucent={false} networkActivityIndicatorVisible={true} />

        <Toolbar  />

        <Text style = {styles.homeStyle} >Home</Text>

        <View style={styles.container2}>
          <View style={styles.SectionStyle}>
          <AntDesign style = {{paddingLeft : 10}} name = "search1" size = {20} color = {Colors.darkGray}/>
            <TextInput
              style={{ flex: 1,paddingLeft : 10, }}
              placeholderTextColor = {Colors.liteBlackColor}
              placeholder="Search for events,promotion,members"
              onChangeText={text => this.onChangeText(text)} 
              value = {this.state.enteredText} 
              underlineColorAndroid="transparent"/>
          <FontAwasome onPress = {() => this.callApiForSearch()} style = {{paddingRight : 10}} name = "barcode" size = {30} color = {Colors.liteGreen}/>
          </View>
        </View>


        {this.isIndicatorShowing()}

        {this.showingList()}

      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({

  container : {
    flexDirection : "column",
    flex : 2,
    backgroundColor : Colors.bgColorGray
  },

  container2: {
    justifyContent: 'space-between',
    backgroundColor : Colors.whiteColor
  },

  homeStyle : {
    fontSize : 25,
    padding : 10,
    color : Colors.black,
    backgroundColor : Colors.whiteColor,
    fontFamily : "Acme-Regular"

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

  toolbarStyles : {
    backgroundColor : Colors.whiteColor,
    padding : 10,
  },

  dataStyle: {
    flex : 1,
  },
  searchStyle : {
    backgroundColor : Colors.darkGray,
    borderRadius : 10,
    flexDirection :"row",
    justifyContent : "space-between",
    alignItems : "center",
  },
  searchSty : {
    backgroundColor: Colors.coldPrimaryDark,
  },
  flatlistStyle : {
    marginTop : 20
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