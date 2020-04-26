import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useTheme } from '../theme/hooks';

const { colors } = useTheme();

export const PercentInput = ({ defaultValue, onChange, ...props}) => (
    <View style={styles.container}>
        <TextInput 
            keyboardType={'numeric'}
            style={styles.input}
            defaultValue={defaultValue}
            onChangeText={onChange}
            />
        <Text style={styles.unit}>%</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        borderColor: colors.text,
        borderWidth: 1,
        borderRadius: 3,
        height: 43,
        minWidth: 60,
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center'
    },
    unit: {
        fontFamily: 'JetBrainsMono-Regular', 
        fontSize: 20,
        lineHeight: 20,
        color: colors.text,
        flex: 1,
    },
    input: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'right',
        color: colors.text,
        flex: 2,
        paddingRight: 5,
    },
  });