import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AppContext from './AppContext';

export const CurrencyInput = ({ value, onChange, ...props}) => {
    const context = useContext(AppContext);
    const { colors } = context.useTheme();

    return (
    <View style={[styles.container, {borderColor: colors.inputBorder}]}>
        <Text style={[styles.unit, {color: colors.text}]}>$</Text>
        <TextInput 
            keyboardType={'decimal-pad'}
            style={[styles.input, {color: colors.text}]}
            value={value}
            onChangeText={onChange}
            />
    </View>
  )}

  const styles = StyleSheet.create({
    container: {
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
        marginLeft: 5,
        flex: 1,
    },
    input: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'right',
        flex: 4,
        paddingRight: 5,
    },
  });
  