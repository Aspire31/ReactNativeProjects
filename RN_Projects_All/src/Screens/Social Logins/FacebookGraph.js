import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, Alert } from 'react-native'
import { FacebookService } from '../../ReusableComponents'

export default class FacebookGraph extends React.Component {

    state = {
        profile: null
    }

    async componentDidMount() {
        const profile = await FacebookService.fetchProfile()
        this.setState({
            profile: profile
        })
        console.log("Calling from ProfileView", this.state.profile)
    }

    render() {
        return (
            // console.log("calling from render", this.state.profile),
            <SafeAreaView>
                <View style={styles.mainContainer}>
                    <ProfileView profile={this.state.profile} />
                </View>
            </SafeAreaView>
        )
    }
}

export class ProfileView extends Component {
    render() {
        const profile = this.props.profile
        if (profile == null) {
            return (
                <View>
                    <Text> No data to view!!!</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image
                        source={{ uri: profile.avatar }}
                        style={{ height: 100, width: 100 }} />
                </View>
                <View style={styles.right}>
                    <Text style={styles.text}>{profile.email}</Text>
                    <Text style={styles.text}>{profile.name}</Text>
                    {/* {facebookService.makeLogoutButton(() => {
                        Alert.alert("You have been logged out!")
                    })} */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    left: {
        paddingRight: 10
    },
    avatar: {

    },
    text: {
        fontSize: 20
    },
    right: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})



