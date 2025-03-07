import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Color';

export const TinyText = (props) => {
    const { textToShow, textCustomStyle } = props;
    return (
        <Text style={[styles.tiny, textCustomStyle]} allowFontScaling={false}>{textToShow}</Text>
    )
};

export const SmallText = (props) => {
    const { textToShow, textCustomStyle } = props;
    return (
        <Text style={[styles.small, textCustomStyle]} allowFontScaling={false}>{textToShow}</Text>
    )
};
export const MediumText = (props) => {
    const { textToShow, textCustomStyle } = props;
    return (
        <Text style={[styles.medium, textCustomStyle]} allowFontScaling={false}>{textToShow}</Text>
    )
};
export const LargeText = (props) => {
    const { textToShow, textCustomStyle } = props;
    return (
        <Text style={[styles.large, textCustomStyle]} allowFontScaling={false}>{textToShow}</Text>
    )
};
// here is MediumText

// here is LargeText

const styles = StyleSheet.create({
    tiny: {
        fontSize: 10,
        color: Colors.BLACK,
    },
    small: {
        fontSize: 14,
        color: Colors.BLACK,
        marginVertical: 8
    },
  medium:{
    fontSize: 16,
    color:Colors.BLACK,
    marginVertical:7
  },
    large: {
        fontSize: 20,
        Color: Colors.BLACK,
    },
    // here is medium style
    
    // here is large style
});