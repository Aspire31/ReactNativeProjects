import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Colors, vh, vw } from '../Constants';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {isCheck: this.props.isCheck};
  }

  checkClicked = async () => {
    await this.setState(prevState => ({
      isCheck: !prevState.isCheck,
    }))
    this.props.clicked && this.props.clicked(this.props.id,this.state.isCheck );
  }

  render() {
    return (
      <TouchableOpacity onPress={this.checkClicked} style={this.props.style}>
        <View style={{
          height: vh(24),
          width: vh(24),
          borderWidth: vw(2),
          borderRadius: vh(8),
          borderColor: Colors.softRed2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{
            height: vh(12),
            width: vh(12),
            backgroundColor: this.state.isCheck ? Colors.softRed2 : Colors.white,
          }} />
        </View>
      </TouchableOpacity>
    )
  }
}
