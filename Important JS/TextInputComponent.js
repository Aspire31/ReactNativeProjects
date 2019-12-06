import React from 'react'
import { TextInput, Text, Button, Alert, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
TextComponent = React.forwardRef((props, ref) => {
    console.warn("hello")
    // function modifyString(val, callBack) {

    //     if (val.length === 4) {
    //         return (val.concat("-"))
    //     }
    //     else if (val.length === 5) {
    //         console.warn("5 position vlue", val.substring(0, 2))
    //         return (val.substring(0, 3))
    //     } else if (val.length === 9) {
    //         return (val.substring(0, 6))
    //     }
    //     else if (val.length === 8) {

    //         return (val.concat("-"))
    //     } else {
    //         console.warn("else call")
    //         return (val)
    //     }
    // }

    // function callBack(response) {
    //     console.warn(response);
    // }

    return (
        <View>
            <TextInput
                ref={ref}
                secureTextEntry={props.param7}
                keyboardType={props.keyboardType}
                style={styles.textEmail}
                value={(props.param3)}
                // onChangeText={(val) => modifyString(val,(response) => {
                //     console.warn(response)
                //     props.parm1})}

                onChangeText={props.parm1}
                onBlur={props.param2}
                placeholder={props.param4}
                onSubmitEditing={() => props.onSubmitEditing()}           
            />
            {
                props.param5 && props.param6 &&
                <Text style={{ fontSize: 10, color: 'red' }}>{props.param6}</Text>
            }
        </View>


    )
});

const styles = StyleSheet.create({
    textEmail: {
        borderWidth: 1,
        borderColor: 'blue',
        width: 300,
        height: 40,
        padding: 10,
        marginTop: 20, borderRadius: 10
    }, fnameLayout: {
        flexDirection: 'row',
        marginTop: 100

    }, fnameLayoutname: {
        borderWidth: 1,
        width: 150,

        height: 35,
        padding: 10,

        borderColor: 'blue'
    }, parentStyle: {
        backgroundColor: 'white',
        height: 500,
        width: '80%',
        paddingHorizontal: 20,
        borderRadius: 20
    }
});
export default TextComponent