import * as yup from 'yup'
import { Formik, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { saveFormData } from '../Action/action';
import { db } from '../config';
import { Dialog } from 'react-native-simple-dialogs'

import React, { Component } from 'react';
import { TextInput, Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import TextInputComponent from './TextInputComponent'
import PhoneNoComponent from './PhoneNoComponent'

class UserForm extends Component {
    // phoneref 
    // emailref 

    constructor(props) {
        super(props);
        this.phoneref = React.createRef();
        this.emailref = React.createRef();
        this.landlineref = React.createRef();
        this.passwordref = React.createRef();
        

    }

    componentDidMount() {
        this.phoneref
        debugger
    }

    goToFormData = () => {
        this.props.navigation.navigate('List')
    }

    GetCongratulationDialog = () => {
        return (
            <Dialog
                visible={this.state.dialogVisible}
                title="Custom Dialog"
                onTouchOutside={() => this.setState({ dialogVisible: false })} >
                <View>
                    <Text>hello </Text>
                </View>
            </Dialog>
        )
    }
    handelMyCHnage = (val, handleChange) => {
        if (val.length === 3) {
            handleChange
        }
        else if (val.length === 7) {

        }

    }
    removeNonNumber = (str) => str.replace(/[^\d]/g, '');

    limitLength = (str, maxLength) =>
        str.substr(0, maxLength);

    formatNumber = (str) => {
        const numberSanitized = this.removeNonNumber(str);
        const maxLength = 13;
        const lengthSanitized = this.limitLength(numberSanitized, maxLength);
        console.warn("format no", numberSanitized)
        const formatted = this.addGaps(lengthSanitized, [4, 7]);
        return formatted;
    };
    addGaps = (str, gaps) => {
        console.warn("incoming=>", str, gaps)
        const offsets = [0].concat(gaps).concat([str.length]);
        console.warn("val=>", offsets)
        return offsets
            .map((end, index) => {
                console.warn("index=>", end)
                if (index === 0) {
                    console.warn("call")
                    return '';
                }
                const start = offsets[index - 1];
                console.warn("start=>", start, end)
                let s = str.substr(start, end - start);
                console.warn("after=>", s)
                return (s)
            })
            .filter(part => part !== '')
            .join(' ');
    };
    removeEmojis = (str) => {
        const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
        return str.replace(regex, '');
    };

    addDataToFirebase = (values, callback) => {

        db.ref('/userDetail').push(values, (val) => {
            if (val === null) {

                callback()

            }
        });
    }

    render() {
        console.disableYellowBox = false;
        return (
            <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'blue' }}>
                <Formik enableReinitialize={false}

                    initialValues={{ email: '', password: '', phone_no: '', f_name: '', l_name: '', landLine: '' }}
                    onSubmit={(values, { resetForm }) => {
                        console.warn("handle submit call")
                        this.props.addUser(values)
                        this.addDataToFirebase(values, () => {
                            console.warn("callback call")
                            resetForm();

                        })

                    }}
                    validationSchema={yup.object().shape({
                        email: yup
                            .string()
                            .email()
                            .required(),
                        password: yup
                            .string()
                            .min(6)
                            .required(),
                        f_name: yup
                            .string().matches(/^[a-zA-Z ]+$/, "invalid Name")
                            .min(3, "please enter valid name")
                            .trim()
                            .required("please enter first name"),
                        l_name: yup
                            .string().matches(/^[a-zA-Z ]+$/, "invalid Name")
                            .trim()
                            .min(2, "please enter valid name")
                            .required("please enter last name"),
                        phone_no:
                            yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "invalid no")
                                .length(10, "Phone No should be 10 length").required("please enter phone no"),
                        landLine:
                            yup.string().matches(/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "invalid no")
                                .length(13, "Phone No should be 13 length").required("please fill landline")
                        // const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (

                        <View style={styles.parentStyle}>
                            <View style={styles.fnameLayout}>
                                <View>
                                    <TextInput style={{ ...styles.fnameLayoutname, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                                        value={values.f_name.replace(' ', '')}
                                        onChangeText={handleChange('f_name')}
                                        onBlur={() => setFieldTouched('f_name')}
                                        placeholder="first"
                                        onSubmitEditing={() => this.lastnam.focus()}
                                    />
                                    <ErrorMessage name="f_name">{(msg) => <Text style={{ fontSize: 10, color: 'red' }}>{msg}</Text>}</ErrorMessage>
                                </View>
                                <View>
                                    <TextInput style={{ ...styles.fnameLayoutname, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                                        value={values.l_name.replace(' ', '')}
                                        onChangeText={handleChange('l_name')}
                                        onBlur={() => setFieldTouched('l_name')}
                                        placeholder="Last"
                                        ref={(name) => { this.lastnam = name }}
                                        onSubmitEditing={() => this.phoneref.current.focus()}

                                    />
                                    <ErrorMessage name="l_name">{(msg) => <Text style={{ fontSize: 10, color: 'red' }}>{msg}</Text>}</ErrorMessage>

                                </View>
                            </View>
                            <TextInputComponent
                                ref={this.phoneref}
                                keyboardType={"number-pad"}
                                parm1={handleChange('phone_no')}
                                param2={() => setFieldTouched('phone_no')}
                                param3={this.limitLength(values.phone_no, 10)}
                                param4={"Phone no"}
                                param5={touched.phone_no}
                                param6={errors.phone_no}
                                param7={false}
                                onSubmitEditing={() => { this.landlineref.current.focus()}}

                            />
                            <PhoneNoComponent
                                ref={this.landlineref}
                                keyboardType={"number-pad"}
                                parm1={handleChange('landLine')}
                                param2={() => setFieldTouched('landLine')}
                                param3={this.formatNumber(values.landLine)}
                                param4={"landLine"}
                                param5={touched.landLine}
                                param6={errors.landLine}
                                param7={false}
                                onSubmitEditing={() => { this.emailref.current.focus() }}


                            />


                            <TextInputComponent
                                ref={this.emailref}
                                keyboardType={"email-address"}
                                parm1={handleChange('email')}
                                param2={() => setFieldTouched('email')}
                                param3={values.email}
                                param4={"Email Id"}
                                param5={touched.email}
                                param6={errors.email}
                                param7={false}
                                onSubmitEditing={() => console.warn("Email warn")
                                }
                                onSubmitEditing={() => { this.passwordref.current.focus() }}


                            />


                            <TextInputComponent
                             ref={this.passwordref}
                                keyboardType={"default"}
                                parm1={handleChange('password')}
                                param2={() => setFieldTouched('password')}
                                param3={this.removeEmojis(values.password)}
                                param4={"Password"}
                                param5={touched.password}
                                param6={errors.password}
                                param7={true}
                                onSubmitEditing={() => { console.warn(" Password warn") }}
                            />
                            <TouchableOpacity

                                onPress={handleSubmit}
                                disabled={!isValid}
                                style={{ width: '100%', backgroundColor: 'blue', marginTop: 20, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                <Text style={{ color: 'white' }}>
                                    Sign Up
                              </Text>
                            </TouchableOpacity>

                        </View>
                    )}
                </Formik>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    const { f_name } = state.SaveFormDataReducer;
    return {
        f_name
    }
};

const mapDispatchToProps = dispatch => ({

    addUser: (payload) => dispatch(saveFormData(payload)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);
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
        height: 40,
        padding: 10,

        borderColor: 'blue'
    }, parentStyle: {
        backgroundColor: 'white',
        height: 600,
        width: '80%',
        paddingHorizontal: 20,
        borderRadius: 20
    }
});