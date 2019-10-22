import React, { } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ChildFunction = () => {

    const [myCounter, setCounter] = React.useState()
    console.log("ChildFunction re render")
    return (
        <View>
            <Text>
                I am in ChildFunction {myCounter}
        </Text>
            <TouchableOpacity onPress={() => {
                setCounter(myCounter+1)
            }}>
                <Text> Update Child Counter</Text>
            </TouchableOpacity>
        </View>
    )
}

export const ChildPureFunction = React.memo(function pureFunction() {
    console.log("ChildPureFunction re render")
    return (
        <View>
            <Text>
                I am in ChildPureFunction
        </Text>
        </View>
    )
})

export default ChildFunction
