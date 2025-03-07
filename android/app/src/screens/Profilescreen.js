import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomHeader } from '../components/Header';
import Colors from '../constants/Colors';
import { MediumText, SmallText } from '../components/Text';
import { FeatureList } from '../components/FeatureList';
import { CustomButton } from '../components/Button';
import { Icon } from '@rneui/base';

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
    }
});

export default ProfileScreen;