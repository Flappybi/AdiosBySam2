import React from "react";
import { StyleSheet } from "react-native";

const { width } = Dimensions.get('window');
const itemWidth = (width-(16*3))/2;
const imageWidth = itemWidth -(16*2);

export const ProductList = (props) =>{
    const{ productName , productPrice } =props;
    return(
        <TouchableOpacity style={styles.productItemContainer}>
                    <Image
                      style={styles.productImage}
                      source={{ uri: item.images[0].link }}
                      {...props}
                    />
                     <SmallText textToShow={productName} textCustomStyle={{ fontWeight: 'bold' }} />
                    <SmallText textToShow={'$' + productName} textCustomStyle={{ marginBottom: 0 }} /> 
                  <TouchableOpacity
                         style={styles.heartIconContainer}>
                          <Icon
                              name= 'cards-heart-outline'
                              type='material-communinity'
                              />
                         </TouchableOpacity>
                  </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

});