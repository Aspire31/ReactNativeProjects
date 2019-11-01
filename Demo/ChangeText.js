import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'

export default class ChangeText extends Component {
  constructor (props) {
    super(props)
    this.state = { text: '' }
  }

  submitAndClear = () => {
    this.props.writeText(this.state.text)

    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder='Enter text...'
          clearButtonMode='always'
        />
        <Button
          onPress={this.submitAndClear}
          title='Submit'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    width: '90%'
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 20,
    margin: 10,
    borderRadius: 20
  }
})
