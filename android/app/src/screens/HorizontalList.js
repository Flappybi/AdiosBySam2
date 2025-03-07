import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react';
import { LargeText, SmallText } from '../components/Text';
import Color from '../constants/Color';
import { MediumText } from '../components/Text';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { brandData } from '../data/brandDummyData';
import { Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import realm from '../store/realm';


const { width } = Dimensions.get('window');
const itemWidth = (width -(16*3))/2;
const imageWidth = itemWidth -(16*2);
const HomeScreen = () => {
    // ProductItemButton: {
    //     borderWidth:1,
    //     borderColor: Colors.BORDER_COLOR,
    // }
  const [products, setProducts] = useState([]);
  const collectData = () => {
    const productDB = realm.objects('Product');
    const fiveProducts = productDB.slice(0, 5);
    setProducts(fiveProducts);

  };
// const colletData = () => {
//     const productDB = realm.objects('Product');
//     console.log('productDB:', productDB);
//     console.log('product amount:', productDB.length);
//   };
  useEffect(() => {
    collectData();
    console.log(products)
  })
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
        <ScrollView>
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
                horizontal
                data={products}
                contentContainerStyle={{ padding: 8 }}
                keyExtractor={(item) => item.id}
               
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.productItemContainer}>
                    <Image
                      style={styles.productImage}
                      source={{ uri: item.images[0].link }}
                    />
                    {/* <SmallText textToShow={item.name} textCustomStyle={{ fontWeight: 'bold' }} />
                    <SmallText textToShow={'$' + item.price} textCustomStyle={{ marginBottom: 0 }} /> */}
        
                  </TouchableOpacity>
        
                )}
              />
              </ScrollView>
      


    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  productItemContainer:{
    borderWidth:1,
    borderColor: Colors.BORDER_COLOR,
    width: itemWidth,
    padding:16,
    margin:8,
    borderRadius:5

    },
    productImage:{
        width:imageWidth,
        height:imageWidth,
        resizeMode:'contain'
    },
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