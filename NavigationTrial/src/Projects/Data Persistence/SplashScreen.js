import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  Dimensions
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.1);
    this.animatedValue2 = new Animated.Value(0);
  }

  componentDidMount() {

    setTimeout(()=>{
        Animated.spring(this.animatedValue, {
            toValue: 1.5,
            friction: 7,
            delay: 1500
          }).start();

          Animated.timing(this.animatedValue2, {
            toValue: 1,
            delay: 200,
            duration: 2000
          }).start();
        this.props.navigation.navigate('signUp')    
    },2500)

    Animated.spring(this.animatedValue, {
      toValue: 1.5,
      friction: 4,
      delay: 2000
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 2000
    }).start();
  }

  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };

    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };

    return (
      <LinearGradient
        colors={[
          "#00FFFF",
          "#17C8FF",
          "#329BFF",
          "#4C64FF",
          "#6536FF",
          "#8000FF",
          'powderblue',
        ]}
        style={styles.container}
      >
        <Animated.View style={[styles.ring, truckStyle]}>
          <Animated.Image
            source={require('/Users/appinventiv/Desktop/Alisha_RN/NavigationTrial/Images/welcome.png')}
            style={[
              {
                resizeMode: "contain",
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>

        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 20,
              width: width / 2,
              height: 4,
              backgroundColor: "#fff",
              borderRadius: 2
            },
            scaleText
          ]}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0277BD"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  ring: {
    backgroundColor: "white",
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 7
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  }
});
