import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { SmallText } from './Text';
import Colors from '../constants/Colors';

export const CustomButton = (props) => {
    const { buttonCustomStyle } = props;
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, buttonCustomStyle]}
            {...props}
        >
            <SmallText textCustomStyle={styles.buttonText} {...props} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.PRIMARY,
        marginVertical: 8,
        padding: 8,
        borderRadius: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.WHITE,
    },
});