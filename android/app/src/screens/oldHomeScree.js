import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';
import { insertDummyData } from '../utils/insertDummyData';
import realm from '../store/realm';
import { CustomButton } from '../components/Button';
import { LargeText, SmallText } from '../components/Text';
import Color from '../constants/Color';
import { MediumText } from '../components/Text';
{/* <MediumText
  textToShow='WEEKLY POPULAR'
  textCustomStyle={styles.title}
/> */}
const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const colletData = () => {
    const productDB = realm.objects('Product');
    console.log('productDB:', productDB);
    console.log('product amount:', productDB.length);
  };
  useEffect(() => {
    console.log('hai');
    insertDummyData();
    colletData();
  }, []);

  const onClickLogin = () => {
    console.log('login')

  }
  const onClickLogout = () => {
    console.log('logout')
  }

  return (
    <View style={styles.mainContainer}>
      {/* <CustomButton
        textToShow='Login'
        customStyle={{ backgroundColor: 'green' }}
        onPress={() => onClickLogin()} />
      <CustomButton
        textToShow='Logout'
        customStyle={{ backgroundColor: 'red' }}
        onPress={() => onClickLogout()} /> */}
      
      <LargeText
        textToShow='text'
        textCustomStyle={styles.tagline} />



    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  tagline: {
    color: Color.BLACK,
    fontWeight: 'bold',

  }, mainContainer: {
    backgroundColor: 'white'
  }
  , title: {
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 0,
  }
});