import React, { Component } from 'react';
import {
 Text,
 View,
 TextInput,
 TouchableOpacity,
 Dimensions
} from 'react-native';

import { Form, FormItem } from 'react-native-form-validation';

const width = Dimensions.get('window').width;

class ComponentWithValue extends Component{
 constructor(props){
  super(props);
 }
 
 render(){
  return (
  <View style={this.props.style}>
  <TextInput
  style={styles.flex}
  value={this.props.value}
  onChange={this.props.onChange}/>
  </View>
  );
 }
}
class FormTest extends Component {
 constructor(props){
  super(props);
  this.state = {
   textInput1:'1',
   textInput2:'2',
   textInput3:'3',
   textInput4:'4',
   view1:'1'
  };
 }
textInput1Change(event){
 this.setState({
 textInput1:event.nativeEvent.text
 });
}
textInput2Change(event){
 this.setState({
  textInput2:event.nativeEvent.text
 });
}
textInput3Change(event){
 this.setState({
  textInput3:event.nativeEvent.text
 });
}
textInput4Change(event){
 this.setState({
 textInput4:event.nativeEvent.text
 });
}
submit(){
 let submitResults = this.refs.form.validate();
}
customValidation(){
 return true;
}
render(){
 return (
  <View style={styles.container}>
  <Form
  ref="form"
  shouldValidate={true}
  style={styles.flex}>
  <FormItem
   isRequired={true}
   regExp={/^\d+$/}
   style={styles.formInput}>
   <TextInput
    style={styles.firstInput}
    value={this.state.textInput1}
    onChange={this.textInput1Change.bind(this)}/>
  </FormItem>
 <FormItem
  isRequired={false}
  style={styles.formInput}>
  <View style={styles.flex}>
  <View
   style={styles.secondInputWrapper}>
   <TextInput
    style={styles.flex}
    value={this.state.textInput2}
    onChange={this.textInput2Change.bind(this)}/>
  </View>
  </View>
 </FormItem>
 <FormItem
  isRequired={true}
  validationFunction={this.customValidation.bind(this)}>
  <View style={styles.formItem}>
  <View style={styles.flex}>
  <View style={styles.flex}>
  <TextInput
   style={styles.flex}
   value={this.state.textInput3}
   onChange={this.textInput3Change.bind(this)}/>
  </View>
  <View />
  </View>
  </View>
 </FormItem>
 <FormItem isRequired={true}>
  <ComponentWithValue
   style={styles.formItem}
   value={this.state.textInput4}
   onChange={this.textInput4Change.bind(this)}/>
 </FormItem>
 <FormItem
  isRequired={true}
  fieldToBeValidated={'test'}>
  <View
   style={styles.formItem}
   test={this.state.view1}>
   <Text> {this.state.view1}</Text>
  </View>
 </FormItem>
</Form>
<TouchableOpacity
 style={styles.submitBtn}
 onPress={this.submit.bind(this)}>
 <Text>Submit</Text>
</TouchableOpacity>
</View>
);
}
}
class SmartForm extends Component {
 render() {
  return (
  <FormTest />
  );
 }
}
const styles = {
 container:{
  alignItems:'center',
  justifyContent:'center',
  width,
  flex:1
 },
 flex:{
 flex:1
},
formItem:{
 width:300,
 height:50
},
formInput:{
 width:300,
 height:50
},
firstInput:{
 width:300,
 height:60
},
secondInputWrapper:{
 width:300,
 height:50,
},
submitBtn:{
 height:100,
 width:100
}
};