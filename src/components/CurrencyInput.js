import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useTheme } from '../theme/hooks';

const { colors } = useTheme();

export const CurrencyInput = ({ value, onChange, ...props}) => (
    <View style={styles.container}>
        <Text style={styles.unit}>$</Text>
        <TextInput 
            keyboardType={'decimal-pad'}
            style={styles.input}
            value={value}
            onChangeText={onChange}
            />
    </View>
  )

  const styles = StyleSheet.create({
    container: {
        borderColor: colors.text,
        borderWidth: 1,
        borderRadius: 3,
        height: 43,
        minWidth: 100,
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center'
    },
    unit: {
        fontFamily: 'JetBrainsMono-Regular', 
        fontSize: 20,
        lineHeight: 20,
        color: colors.text,
        marginLeft: 5,
        flex: 1,
    },
    input: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'right',
        color: colors.text,
        flex: 4,
        paddingRight: 5,
    },
  });