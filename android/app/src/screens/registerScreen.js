import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CustomButton } from '../components/Button';
import { CustomHeader } from '../components/Header';
import Colors from '../constants/Colors';
import { LargeText, MediumText, SmallText } from '../components/Text';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import realm from '../store/realm';
import { generateId } from '../utils/generateId';
import { useDispatch } from 'react-redux';
import { UserLoginId } from '../store/realm/models/User';
const onClickRegister = (data)=>{
    const allUser = realm.objects('User');
    const userAmount = allUser.length;

    let isAlreadyRegistered = false;
    if (userAmount !==0) {
        const isEmailExist = allUser.some ((item) => item.email === data.email);
        if (isEmailExist){
            alert ('Email has already been taken!');
            isAlreadyRegistered = true;
            if(!isAlreadyRegistered) {
                const UserLoginId = generateId ('User');
                realm.write(() =>{
                    realm.create('User',{
                    id: newUserId,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    profileImage:'',
             })
             realm.create('UserLoginId',{
                userId: newUserId,
                
             });
             navigation.popToTop();
         })
        
      }

  }
        
    }
    
 }

const RegisterScreen = () => {
    const navigation = useNavigation();
    const dispatch =useDispatch();
    const onClickRegister =(data)=>{

    

    const validateRegisterForm = yup.object().shape({
        name: yup.string()
            .required('Name is required'),
        email: yup.string()
            .email('Please enter valid email!')
            .required('Email is required'),
        phone: yup.string()
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Invalid phone number!')
            .required('Phone is required'),
        password: yup.string()
            .required('Password is required'),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('password')], "Password didn't match!")
            .required('Password confirmation is required'),
    
    });
};

    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                textToShow='Create Account'
                isStackScreen
                headerCustomStyle={{ backgroundColor: Colors.WHITE }}
            />
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    passwordConfirmation: '',
                   
                }}
                validationSchema={validateRegisterForm}
                onSubmit={(data) => onClickRegister(data)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched,
                }) => (
                    <ScrollView style={styles.contentContainer}>
                        <LargeText textToShow='Register now at Adios' />
                        <SmallText textToShow='Please fill out the form below!' />

                        <SmallText textToShow='Name' />
                        <View style={styles.input}>
                            <Icon
                                name='account'
                                type='material-community'
                                color={Colors.GRAY}
                            />
                            <TextInput
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                placeholder='Name'
                                style={styles.innerInput}
                            />
                        </View>
                        {
                            errors.name && touched.name ?
                                <SmallText
                                    textToShow={errors.name}
                                    textCustomStyle={styles.errorMessage}
                                />
                                :
                                null
                        }

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
                        <SmallText textToShow='Phone' />
                        <View style={styles.input}>
                            <Icon
                                name='phone'
                                type='material-community'
                                color={Colors.GRAY}
                            />
                            <TextInput
                                onChangeText={handleChange('Phone')}
                                onBlur={handleBlur('Phone')}
                                placeholder='Phone'
                                style={styles.innerInput}
                            />
                        </View>
                        {
                            errors.phone && touched.phone ?
                                <SmallText
                                    textToShow={errors.phone}
                                    textCustomStyle={styles.errorMessage}
                                />
                                :
                                null
                        }
                         <SmallText textToShow='Password' />
                        <View style={styles.input}>
                            <Icon
                                name='password'
                                type='material-community'
                                color={Colors.GRAY}
                            />
                            <TextInput
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                placeholder='password'
                                style={styles.innerInput}
                            />
                        </View>
                        {
                            errors.password && touched.password ?
                                <SmallText
                                    textToShow={errors.password}
                                    textCustomStyle={styles.errorMessage}
                                />
                                :
                                null
                        }
                        <SmallText textToShow='Confirm Password' />
                        <View style={styles.input}>
                            <Icon
                                name='password'
                                type='material-community'
                                color={Colors.GRAY}
                            />
                            <TextInput
                                onChangeText={handleChange('passwordConfirmation')}
                                onBlur={handleBlur('passwordConfirmation')}
                                placeholder='passwordConfirmation'
                                style={styles.innerInput}
                            />
                        </View>
                        {
                            errors.passwordConfirmation && touched.passwordConfirmation ?
                                <SmallText
                                    textToShow={errors.passwordConfirmation}
                                    textCustomStyle={styles.errorMessage}
                                />
                                :
                                null
                        }       
                            


                        <View style={styles.bottomContentContainer}>
                            <CustomButton
                                textToShow='Register'
                                buttonCustomStyle={styles.registerButton}
                            />
                            <MediumText textToShow='Or' />
                            <View style={styles.questionContainer}>
                                <MediumText textToShow='Already have an account? ' />
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <MediumText
                                        textToShow='Login'
                                        textCustomStyle={styles.loginText}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Formik>
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
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    registerButton: {
        marginTop: 16,
    },
    bottomContentContainer: {
        alignItems: 'center',
    },
    questionContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    loginText: {
        color: Colors.PRIMARY,
        textDecorationLine: 'underline',
    },
});

export default RegisterScreen;      