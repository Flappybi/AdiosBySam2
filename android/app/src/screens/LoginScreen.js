
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { CustomHeader } from '../components/Header';
import Colors from '../constants/Colors';
import { LargeText, MediumText, SmallText } from '../components/Text';
import { Icon } from '@rneui/themed';
import { CustomButton } from '../components/Button';
import *as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import registerScreen from './registerScreen';

const LoginScreen = () => {
    const navigation = useNavigation();
    const validateLoginForm = yup.object().shappe({
        email: yup.strong()
            .email('please entervalid email!')
            .required('email is requaired'),
        password: yup.string()
            .required('password is requaired')
    });
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <MediumText
                    textToShow='register'
                    textCustomStyle={styles.registerText}
                />
            </TouchableOpacity>
            <View style={styles.mainContainer}>
                <CustomHeader
                    textToShow='Login'
                    isStackScreen
                    headerCustomStyle={{ backgroundColor: Colors.WHITE }}
                />
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched
                    }) => (
                        <View style={styles.contentContainer}>
                            <LargeText textToShow='Login to your account' />
                            <SmallText textToShow='Please fill out the form below!' />
                            <SmallText textToShow='Email' />
                            <View style={styles.input}>
                                <Icon
                                    name='email'
                                    type='material-community'
                                    color={Colors.GRAY}
                                />
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    placeholder='Email'
                                    style={styles.innerInput}
                                />
                            </View>
                            {
                                errors.email && touched.email ?
                                    <SmallText
                                        textToShow={errors.email}
                                        textCustomStyle={styles.errorMessage}
                                    />
                                    :
                                    null
                            }
                            <View style={styles.bottomContentContainer}>
                                <CustomButton
                                    textToShow='Login'
                                    buttonCustomStyle={styles.loginButton}
                                />
                                <MediumText textToShow='Or' />
                                <View style={styles.questionContainer}>
                                    <MediumText textToShow="Don't have an account? " />
                                    <TouchableOpacity>
                                        <MediumText textToShow='Register' textCustomStyle={styles.registerText} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        padding: 8,
        paddingHorizontal: 16,
    },
    input: {
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginTop: 0,
        fontSize: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    innerInput: {
        flex: 1,
    },
    errorMessage: {
        color: 'red',
        marginTop: 0,
    },
    loginButton: {
        marginTop: 16,
    },
    loginText: {
        color: Colors.WHITE,
    },
    bottomContentContainer: {
        alignItems: 'center',
    },
    questionContainer: {
        flexDirection: 'row',
    },
    registerText: {
        color: Colors.PRIMARY,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;