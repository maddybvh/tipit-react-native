import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeToggle from './ThemeToggle.js';
import AppContext from './AppContext';
import { PercentInput } from './PercentInput';

export const Settings = () => {
    const context = useContext(AppContext)
    const { colors } = context.useTheme()

    const defaultTipLow = context.defaultTipLow
    const defaultTipHigh = context.defaultTipHigh

    return (
        <View>
            <Text style={[styles.normalText, {color: colors.text}]}>Settings</Text>                          
            <View style={styles.inputRow}>
                <Text style={[styles.label, {color: colors.text}]}>Low tip default:</Text>
                <PercentInput 
                    defaultValue={defaultTipLow}
                    onChange={context.updateTipLowContext}                  
                />
            </View>
            <View style={styles.inputRow}>
                <Text style={[styles.label, {color: colors.text}]}>High tip default:</Text>
                <PercentInput 
                    defaultValue={defaultTipHigh}
                    onChange={context.updateTipHighContext}
                />
            </View>
            <View style={styles.inputRow}>
                <Text style={[styles.label, {color: colors.text}]}>Dark Mode:</Text>
                <ThemeToggle />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginVertical: 12,
      },
    label: {
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 18,
      lineHeight: 24,
      alignSelf:'flex-start',
    },
    normalText: {
      fontFamily: 'JetBrainsMono-Bold', 
      fontSize: 14,
      lineHeight: 16,
      textAlign: 'center',
    },
})
