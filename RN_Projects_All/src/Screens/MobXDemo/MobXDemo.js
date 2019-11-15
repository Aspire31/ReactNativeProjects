import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Alert, ImageBackground } from 'react-native';
import { observer } from 'mobx-react';

import {ToDoList} from '../../Store/';
import { vw, vh, Styles, Colors } from '../../Constants';

import Icons from 'react-native-vector-icons/Ionicons'
Icons.loadFont()
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons'
DeleteIcon.loadFont()

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
console.disableYellowBox = true


@observer
export default class MobXDemo extends Component {

  submit = () => {
    ToDoList.add(ToDoList.item)
    ToDoList.item = ''
    this.input.blur()
  }

  addingData = () => {
    if (ToDoList.item !== '') {
      this.submit()
    } else {
      Alert.alert("Please enter data!")
    }
  }

  handleDelete = (item) => {
    ToDoList.remove(item)
  }


  render() {
    return (
      <KeyboardAwareScrollView>
        <ImageBackground
          source={require('../../Assets/Images/todo.jpg')}
          style={{ height: vh(820), width: vw(375) }}
        >
          <View>
            <FlatList
              ref={ref => this.flatList = ref}
              onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
              // onLayout={() => this.flatList.scrollToEnd({ animated: true })}
              style={styles.flatList}
              data={ToDoList.Tasks.slice()}
              keyExtractor={(item, index) => Math.random().toString()}
              renderItem={({ item, index }) => (
                <View style={[Styles.container, { flexDirection: 'row', justifyContent: 'space-between', paddingRight: vw(15) }]}>
                  <Text style={Styles.text} > {item} </Text>
                  <TouchableOpacity onPress={() => this.handleDelete(item)} >
                    <Text>
                      <DeleteIcon name='delete-empty' size={30} color={Colors.white} />
                    </Text>
                  </TouchableOpacity>
                </View>
              )} />

            <View style={styles.showingData} >
              <TextInput
                numberOfLines={1}
                onChangeText={(text) => ToDoList.item = text}
                clearButtonMode='while-editing'
                placeholder="Enter Your New To Do Task"
                value={ToDoList.item}
                onSubmitEditing={() => this.submit()}
                style={styles.textInput}
                ref={ref => this.input = ref}
                returnKeyType={'done'}
              />
              <TouchableOpacity onPress={() => this.addingData()}
                style={styles.buttonStyles}>
                <Text> <Icons name='ios-add-circle' size={30} color={Colors.white} /> </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    margin: vh(20),
    height: vh(600)
  },
  showingData: {
    flexDirection: 'row'
  },
  buttonStyles: {
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
    borderRadius: vh(20),
    borderWidth: vw(0.5),
    borderColor: 'lightgray',
    marginLeft: vw(20),
    alignItems: 'center',
    padding: vh(15)
  },
  textInput: {
    marginLeft: vw(20),
    borderRadius: vh(20),
    borderColor: Colors.darkBlue,
    borderWidth: vw(0.7),
    width: vw(270),
    paddingLeft: vw(20),
    fontSize: vh(20)
  }
})