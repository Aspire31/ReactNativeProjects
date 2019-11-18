import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
  Text,
  Button
} from "react-native";

export default class HomeScreen extends Component {
  constructor() {
    super()
    this.animated = new Animated.Value(0);

    var snapshot = 50, radius = 150;
    /// translateX
    var inputRange = [], outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = Math.sin(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    this.translateX = this.animated.interpolate({ inputRange, outputRange });

    /// translateY
    var inputRange = [], outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = -Math.cos(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    this.translateY = this.animated.interpolate({ inputRange, outputRange });
  }

  animate() {
    this.animated.setValue(0)
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      this.animate()
    });
  }

  componentDidMount() {
    this.animate()
  }


  render() {
    const transform = [{ translateY: this.translateY }, { translateX: this.translateX }];
    return (
      <View style={styles.container}>
        <Animated.View style={[{ transform }]}>
          <TouchableOpacity style={styles.btn}>
            <Text></Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  btn: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    borderRadius: 9,
    margin: 5
  }
});