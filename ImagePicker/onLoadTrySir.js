import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';

export default class onLoadTrySir extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
    };
  }

  render() {
    return (
      <React.Fragment>
          <Image 
          sourec = {{uri: this.props.imageUrl}}
          style={{position: 'absolute'}}
          onLoad = {() => this.setState({ isLoaded:true })}
          />
          {
              !this.state.isLoaded &&
              <View style={{position:'absolute'}}>

              </View>
          }
      </React.Fragment>
    );
  }
}
