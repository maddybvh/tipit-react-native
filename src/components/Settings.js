import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeToggle from './ThemeToggle.js';
import UserContext from './UserContext';
import { PercentInput } from './PercentInput';
import { useTheme } from '../theme/hooks';

const { colors } = useTheme()

export default class Settings extends React.Component {
    static contextType = UserContext

    render () {
        return (
            <View>
                <Text style={styles.normalText}>Settings</Text>                          
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Low tip default:</Text>
                    <PercentInput 
                        defaultValue={this.context.defaultTipLow}
                        onChange={this.context.updateDefaultTipLow}                    
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>High tip default:</Text>
                    <PercentInput 
                        defaultValue={this.context.defaultTipHigh}
                        onChange={this.context.updateDefaultTipHigh} 
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Dark Mode:</Text>
                    <ThemeToggle />
                </View>
            </View>
        );
    }
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
      color: colors.text,
    },
    normalText: {
      fontFamily: 'JetBrainsMono-Bold', 
      fontSize: 14,
      lineHeight: 16,
      textAlign: 'center',
      color: colors.text,
    },
  });