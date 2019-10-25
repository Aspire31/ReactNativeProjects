import React, { Component } from 'react';
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native';

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTruncated: true,
      lines: 0,
      bodyText: 'bsvhabvhabdskcccccccdsdjkbcvskjdbcjksdbcjksbdcjkbsdckjbscdjksjjjjjjjjjjjjvjdvbjadfbvjkadbvjkabsvdkjasdbvkjadsvbjasdbvjksadvbkvhenslvsdavbabdjsvjkadvsbdbckjsbdcjksdcjksbckjbsckjsdbckjsdbckjsdbckjsbckjscbkjsdckjscsbjkc'
    };//216 for a full width of 4 lines 
  }

  render() {
    // console.warn(this.state.bodyText.length)
    return (
      <View  >
              
       
        <Text numberOfLines={this.state.isTruncated ? 4 : 0} ellipsizeMode = 'tail' >
          {this.state.bodyText}
        </Text>
        <TouchableOpacity onPress = {() => this.setState({ isTruncated: !this.state.isTruncated})}>
          <Text style={{color: 'blue', fontSize:30}}>
            {this.state.isTruncated ? 'Read More' : "Go Less"}
          </Text>
        </TouchableOpacity>
        
        
     

      </View>

    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});