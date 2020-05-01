import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Dashes } from './Dashes';

export const Footer = () => (
    <View style = {styles.container}>
        <Dashes />
    </View>
    
)

const styles = StyleSheet.create ({
    container: {
        width: '100%', 
        height: 50, 
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
    },
})

