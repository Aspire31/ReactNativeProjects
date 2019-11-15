import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';


export default class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [{
                latlng: {
                    latitude: 28.7041, longitude: 77.1025
                },
                title: 'India',
                description: "Incredible India!"
            },
            {
                latlng: {
                    latitude: 20.5937, longitude: 78.9629
                },
                title: 'Delhi',
                description: "Very much a place of hub-hub"
            }],
        };
    }



    render() {
        return (
            <View style={{ flex: 1 }}>

                <MapView
                    provider={PROVIDER_GOOGLE} //getting google maps from this 
                    style={styles.mapStyle}
                    // zoomEnabled={true}
                    region={{
                        latitude: 28.7041,
                        longitude: 77.1025,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation={true}
                >

                    {/* {this.state.markers.map(marker => (
                        <Marker coordinate={marker.latlng}>
                            <MyCustomMarkerView {...marker} />
                            <Callout>
                                <MyCustomCalloutView {...marker} />
                            </Callout>
                        </Marker>
                        ))} */}

                    {this.state.markers.map(marker => (
                        <Marker
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}

                    {/* <Marker
                    coordinate={{ latitude: 22.258, longitude: 71.19 }}
                    title={"title"}
                    description={"test"}
                    // icon={image}
                /> */}
                    {/* <Callout>
                        <View style={styles.calloutView} >
                            <TextInput style={styles.calloutSearch}
                                placeholder={"Search"}
                            />
                        </View>
                    </Callout> */}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        ...StyleSheet.absoluteFillObject,
    },
    calloutView: {
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 10,
        width: "40%",
        marginLeft: "30%",
        marginRight: "30%",
        marginTop: 20
    },
    calloutSearch: {
        borderColor: "transparent",
        marginLeft: 10,
        width: "90%",
        marginRight: 10,
        height: 40,
        borderWidth: 0.0
    }

});

