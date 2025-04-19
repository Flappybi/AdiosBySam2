import React, { useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CustomHeader } from '../components/Header';
import { CustomButton } from '../components/Button';
import { SmallText } from '../components/Text';
import Colors from '../constants/Colors';
import { Icon } from '@rneui/themed';
import { Modalize } from 'react-native-modalize';

const EditProfileScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                textToShow='Edit Profile'
                isWhiteTitle
                isStackScreen
            />
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    profileImage: '',
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched,
                    values,
                }) => (
                    <View style={styles.contentContainer}>
                        <View style={styles.profileImageContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: 'https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' }}
                            />
                            <TouchableOpacity>
                                <SmallText
                                    textToShow='Add Profile Picture'
                                    textCustomStyle={styles.addProfileText}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* input name and error message codes */}

                        {/* input email and error message codes */}

                        {/* input phone and error message codes */}

                        <CustomButton
                            textToShow='Save Changes'
                            buttonCustomStyle={styles.saveButton}
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>

            {/* write your modalize code here */}
        </View >
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
    profileImageContainer: {
        alignItems: 'center',
        marginTop: 8,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    addProfileText: {
        color: Colors.PRIMARY,
        fontWeight: '500',
    },
    saveButton: {
        marginTop: 16,
    },
});

export default EditProfileScreen;