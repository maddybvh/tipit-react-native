import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AppContext from './AppContext';

export const PercentInput = ({ defaultValue, onChange, ...props}) => {
    const context = useContext(AppContext)
    const { colors } = context.useTheme()
    return (
        <View style={[styles.container, {borderColor: colors.inputBorder}]}>
            <TextInput 
                keyboardType={'numeric'}
                style={[styles.input, {color: colors.text}]}
                defaultValue={defaultValue}
                onChangeText={onChange}
                />
            <Text style={[styles.unit, {color: colors.text}]}>%</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        flex: 1,
    },
    input: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'right',
        flex: 2,
        paddingRight: 5,
    },
});
