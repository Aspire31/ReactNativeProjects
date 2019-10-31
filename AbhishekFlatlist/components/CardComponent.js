import React, {useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const CardComponent = props => {

    //initilize the hook
    const [readMore,setReadMore] = useState(-1);

    
    let textViewItem;
  
    const showMore = (index,newsContent) => {
        
        if (newsContent == null) {
            return null;
        }

        else if (readMore == index) {
             textViewItem = (<Text style={styles.contentStyles} >{newsContent}</Text>)
        } else {
            //textViewItem = (<Text style={styles.contentStyles} numberOfLines={2} ellipsizeMode="tail">{newsContent}</Text>)
            textViewItem = null;
        }

        return textViewItem;
    }

    //Collapase Down image
    let loadMoreImg = (<Text style = {styles.collapse} ></Text> )

    //Collapase Up Image
    let loadLessImg = (<Text style = {styles.collapse} ></Text>  )

    
    const showLess = () => {
        if (readMore === props.index) {
            setReadMore(-1);
        } else {
            setReadMore(props.index);
        }
    }

    const strToDate = (dtStr) => {
        var str =new Date(dtStr);
        return (str.getDate()+ "-"+str.getMonth()+"-"+str.getFullYear());
    }

    const loadMoreOption = (content) => {
        if(content==null){
            return (
                <TouchableOpacity style={{...styles.loadMoreStyle}} >
                    <Text style={{ ...styles.textReadMoreStyle, color: Colors.darkGray }}>Read Less </Text>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity onPress={showLess} style={styles.loadMoreStyle} >
                <Text style={styles.textReadMoreStyle} >{readMore == props.index ? <Text style={{ ...styles.textReadMoreStyle, color: Colors.darkGray }}>Read Less </Text> : <Text style={{ ...styles.textReadMoreStyle, color: Colors.liteGreen }}>Read More</Text>}</Text>
            </TouchableOpacity>
        )
        
    }

    return(
        <View style = {styles.container}>

            <View style = {styles.newsImgStyle}>
                {/* <Image source = {{uri : props.news.urlToImage === null ? "https://images.indianexpress.com/2019/10/Gold-LIVE.jpg?w=759" : props.news.urlToImage}}style = {styles.imageStyle} /> */}
                <Image source = {{uri : props.news.avatar === null ? "https://images.indianexpress.com/2019/10/Gold-LIVE.jpg?w=759" : props.news.avatar}}style = {styles.imageStyle} />
            </View>

            <View style = {styles.childContainer}>

                <Text numberOfLines = {1} ellipsizeMode = "tail" style = {styles.titleStyle} >{props.news.first_name+ " " + props.news.last_name}</Text>
                
                <View style = {styles.publistTimeStyle}>
                    <EvilIcons name = "user" size = {25} color = {Colors.liteGreen}/>
                    <Text numberOfLines = {1} ellipsizeMode = "tail" style = {styles.publishedAt} >Music Arts</Text>
                </View>

                <View style = {styles.detailStyle}>

                    <View style={styles.publistTimeStyle2}>
                        {/* <Image source = {require('../assets/images/time.png')} style={{width : 20,height : 20,marginLeft : 10}}/> */}
                        <EvilIcons name = "calendar" size ={25} color = {Colors.liteGreen} />
                        <Text numberOfLines = {1} ellipsizeMode = "tail" style = {styles.publishedAt} >{strToDate(props.news.publishedAt)}</Text>
                    </View>

                    <View style={{flex : 0.5,justifyContent : "flex-end", alignItems : "flex-end"}}>
                        {loadMoreOption(props.news.content)}
                    </View>
                    
                </View>

                {showMore(props.index,props.news.content)}

                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container : {
        flexDirection : "row",
        flex : 2,
        shadowColor:"black",
        shadowOffset:{width:0,height:3},
        shadowRadius:3,
        shadowOpacity:0.26,
        elevation:1,
        backgroundColor : Colors.whiteColor,
        borderRadius : 10,
        marginBottom:  0,
        marginHorizontal : 15   ,
        marginTop : 20
    },

    textReadMoreStyle : { 
        paddingVertical : 5,
        alignSelf : "center",
        fontFamily : "Acme-Regular"
    },

    publistTimeStyle : {
        flexDirection : "row",
        flex : 1,
        alignItems : "center",
        marginTop : 5,
        marginLeft : 10
    },

    detailStyle : {
        flexDirection : "row",
        flex : 1,
        alignItems : "center",
    },

    publistTimeStyle2 : {
        flexDirection : "row",
        flex : 0.5,
        marginLeft : 10
    },

    collapse : {
        width: 30, 
        height: 30, 
        borderRadius: 5,    
    },

    newsImgStyle : {
        flexDirection : "row",
        width : 90,
        height : 90,
    },

    loadMoreStyle : {
       alignItems:'center',
       alignSelf : "flex-end",
       width : Dimensions.get('window').width/4,
       borderRadius : 5,
       borderWidth : 1,
       borderColor : Colors.liteGreen,
       marginBottom : 10,
       marginHorizontal : 10,
    },

    contentStyles : {
        color : Colors.liteBlackColor,
        fontSize : 13,
        marginTop : 2,
        marginLeft : 10,
        paddingBottom: 10,
        fontFamily : "Acme-Regular"
    },

    showLoad : {
        color : "red",
        marginLeft: 10,
        marginTop : 2,
    
    },
    titleStyle : {
        fontSize : 14,
        color : Colors.black,
        flexShrink : 1,
        marginTop : 5,
        marginLeft : 15,
        fontFamily : "Acme-Regular"
    },

    publishedAt : {
        fontSize : 14,
        color : Colors.liteBlackColor,
        marginLeft : 2,
        fontFamily : "Acme-Regular"
    },

    childContainer : {
        flexDirection : "column",
        flexShrink : 1,
        flex : 1
    },

    imageStyle : { 
        width: 80,
        position: 'absolute',
        bottom: 25,
        right: 0,
        height: 80,
        left : 10,
        justifyContent : "flex-start",
        alignItems : "flex-start",
        borderRadius: 10,
    }
});

export default CardComponent;