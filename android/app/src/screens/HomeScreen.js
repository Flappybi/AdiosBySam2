import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';
import { LargeText, SmallText } from '../components/Text';
import Color from '../constants/Color';
import { MediumText } from '../components/Text';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { brandData } from '../data/brandDummyData';
import { Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CustomButton } from '../components/Button';
import { ProductList } from '../components/ProductList';
import { useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();
const {userLoginId} = useSelector((store)=>store.userLoginIdreducer); 
  if(userLoginId == 0) {
    const product = realm.object('Product').filtered(`id == ${productId}`)[0];
    realm.write(() => {
      product.islike = !currentLikeStatus;
    });
    collectData();
    const favoriteList = realm.object('FavoriteProduct').filtered(`id == ${userLoginId}`)[0];
    if (favoriteList) {
      const isProductExist = favoriteList.productId.includes(productId);
        realm.write(() => {
          if (isProductExist) {
            favoriteList.productId = favoriteList.productId.filter(id => id !== productId);
          } else {
            favoriteList.productId.push(productId);
          }
        });
      } else {
        realm.write(() => {
          const newId= realm.objects('FavoriteProduct').length + 1;
          const newFavoriteList = realm.create('FavoriteProduct', {
            id:newId,
            idUser: userLoginId,
            productId: [productId],
          });
        });
      };
    
  }else{
    navigation.navigate('LoginScreen');
  }
  
const { width } = Dimensions.get('window');
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const collectData = () => {
    const productDB = realm.object('Product');
    const fiveProducts = productDB.slice(0, 5);
    setProducts(fiveProducts);

  };
  return (
    // <View style={styles.mainContainer}>
    //   <Icon
    //     name='music'
    //     type='font-awesome'
    //     size={40}
    //     color='green'
    //     />
    //     <Text style ={styles.text}>
    //       music
    //     </Text>
    //     </View>

    <View>
      <CustomButton
        textToShow='adios'
        isShowLogo
        isShowRightIcon
      />
      <SwiperFlatList
        data={brandData}
        autoplay
        autoplayDelay={3}
        autoplayLoop
        showPagination
        paginationStyleItem={{ marginHorizontal: 4, width: 4, height: 10 }}
        paginationActiveColor={'blue'}
        renderAll
        renderItem={({ item, index }) => (
          <View style={{ width: width, height: 280 }}>
            <ImageBackground
              style={{ width: width, height: 250, alignItems: 'center' }}
              // source={{uri: item.thumbnail}}
              source={{ uri: 'https://s0.bukalapak.com/img/579720444/w-1000/Sepatu_running___sepatu_lari___sepatu_sport_adidas_running_i.jpg' }}
            >
              <Text>{item.brandName} Sam </Text>
            </ImageBackground>

          </View>
        )}
      />
      <MediumText
        textToShow='WEEKLY POPULAR'
        textCustomStyle={styles.title} />
      <FlatList
        data={products}
        contentContainerStyle={{ padding: 8 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <ProductList
              productName={item.name}
              productPrice={item.price}
              source={{uri:item.images[0].link}}
              onPressHeart={() => onclickHeart(item.id,itemm.islike)}
            />
                
            <TouchableOpacity style={styles.productItemContainer}>
              <Image
                style={styles.productImage}
                source={{ uri: item.images[0].link }}
              />
            <TouchableOpacity
                  style={styles.heartIconContainer}>
                    <Icon
                        name= 'cards-heart-outline'
                        type='material-communinity'
                        />
                  </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
      />


    </View>
  );
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
  },
  heartIconContainer:{
    width:40,
    height:40,
    borderColor:Colors.BORDER_COLOR,
    borderWidth:100,
    justifyContent:'center',
    alignItems:'center', 
  },
 
});