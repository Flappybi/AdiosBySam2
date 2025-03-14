import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomHeader } from '../components/Header';
import Colors from '../constants/Colors';
import { MediumText, SmallText } from '../components/Text';
import { FeatureList } from '../components/FeatureList';
import { CustomButton } from '../components/Button';
import { Icon } from '@rneui/base';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import realm from '../store/realm';
import { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const onClickYes =() => {
    const dataToRemove = realm.objects('UserLoginId');
    // a

    // b

    // c
    navigation.replace('TabGroup');
};
const dispatch = useDispatch();
const navigation = useNavigation
const logoutRef = useRef(null);

const showLogoutConfirmation = () => {
    logoutRef.current?.open();
};
const userLoginId = useSelector((store) => store.userLoginId);
const [profile, setProfile] = useState ({});

const getProfile = () => {
    const data = realm.objects('User').filtered('id == ${userLoginId}')[0];
    console.log(data);
    setProfile(data);

};
useEffect(()=>{
    getProfile();
},[]);

const ProfileScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                textToShow='Profile'
                isShowRightIcon
                isWhiteTitle
            />
            <View style={styles.contentContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' }}
                    />
                    <View style={styles.detailContainer}>
                        <MediumText
                            textToShow='your name'
                            textCustomStyle={{ fontWeight: 'bold', marginBottom: 0 }}
                        />
                        <SmallText
                            textToShow='your phone number'
                        />
                    </View>
                </View>
                <MediumText textToShow='Account' textCustomStyle={styles.featureTitle} />
                <FeatureList>
                  <Icon 
                    name='account-edit'
                    type='material-community'>
                  </Icon>
                  <SmallText
                  textToShow='Change Profile'/>
                   <Icon 
                    name='shield-alert'
                    type='material-community'>
                  </Icon>
                  <SmallText
                  textToShow='Change Password'/>
                </FeatureList>

                <MediumText textToShow='General' textCustomStyle={[styles.featureTitle, { marginTop: 16 }]} />
                <FeatureList>
                  <Icon 
                    name='file'
                    type='material-community'>
                  </Icon>
                  <SmallText
                  textToShow='Term and Conditions'/>
                   <Icon 
                    name='file'
                    type='material-community'>
                  </Icon>
                  <SmallText
                  textToShow='Privacy Policy'/>
                   <Icon 
                    name='ribbon'
                    type='ionicon'>
                  </Icon>
                  <SmallText
                  textToShow='Give Rating'/>
                </FeatureList>

                <CustomButton
                    textToShow='Logout'
                    buttonCustomStyle={styles.button}
                />
            </View>
            <Portal>
            <Modalize ref={logoutRef} adjustToContentHeight>
              <View style = {styles.logoutContentContainer}>
                <MediumText textToShow='Are you sure want to logout?'/>
                <View style = {styles.lottieContainer}>
                    <LottieView
                        autoPlay
                        loop
                        source={require('../assets/lotties/logout-lottie.json')}
                    />   

                </View>
                <View style = {styles.logoutButtonContainer}>
                    <CustomButton
                        textToShow='NO'
                        buttonCustomStyle={styles.noButton}
                        textCustomStyle={styles.noText}
                    />
                    <CustomButton
                        textToShow='YES'
                        buttonCustomStyle={styles.yesButton}
                    />    
                </View>
                </View>
            </Modalize>
            </Portal>

        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        margin: 16,
    },
    profileContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
        borderColor: Colors.BORDER_COLOR,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    detailContainer: {
        marginLeft: 16,
    },
    featureTitle: {
        fontWeight: 'bold',
        marginBottom: 0
    },
    button: {
        marginTop: 16,
    },
    logoutContentContainer:{
        padding: 16,
        alignItems:'center',
    },
    logoutButtonContainer: {
        flexDirection:'row',
        flex: 1,
    },
    noButton:{
        flex: 1,
        margin:8,
        backgroundColor: colors.WHHITE,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
    },
    yesButton:{
        flex: 1,
        margin: 8,
    },
    noText:{
        color: Colors.BLACK,
    },
    lottieContainer:{
        width:'50%',
        height:150,
    },
});

export default ProfileScreen;