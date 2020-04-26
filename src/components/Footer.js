import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Dashes } from './Dashes';
import { useTheme } from '../theme/hooks';

const { colors } = useTheme()



export const Footer = () => (
    <View style = {styles.container}>
        <Dashes />
    </View>
    
)

const styles = StyleSheet.create ({
    container: {
        width: '100%', 
        height: 80, 
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        backgroundColor: colors.backgroundColor,
    },
})
