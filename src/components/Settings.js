import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ThemeToggle from './ThemeToggle.js';
import UserContext from './UserContext';

export default class Settings extends React.Component {
    static contextType = UserContext

    handleTipLow = (text) => {

        }

    handleTipHigh = (text) => {

    }

    render () {
        return (
            <View>
                <Text style={styles.normalText}>Settings</Text>                          
                <View>
                    <Text style={styles.label}>Low tip default</Text>
                    <TextInput style={styles.input}
                        defaultValue={this.context.defaultTipLow}
                        onChangeText={this.handleTipLow}                    
                    />
                </View>
                <View>
                    <Text style={styles.label}>High tip default</Text>
                    <TextInput style={styles.input}
                        defaultValue={this.context.defaultTipHigh}
                        onChangeText={this.handleTipHigh} 
                    />
                </View>
                <View>
                    <Text style={styles.label}>Dark Mode</Text>
                    <ThemeToggle />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    label: {
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 18,
      lineHeight: 24,
      marginTop: 20,
      alignSelf:'flex-start'
    },
    normalText: {
      fontFamily: 'JetBrainsMono-Bold', 
      fontSize: 14,
      lineHeight: 16,
      marginTop: 10,
      textAlign: 'center'
    },
    input: {
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 3,
      height: 43,
      minWidth: 60,
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: 18,
      lineHeight: 21,
      padding: 5,
      textAlign: 'right',
      marginRight: 10,
      alignSelf: 'flex-end',
      marginTop: -40   
    },
    toggleContainer: {
        padding: 5,
        textAlign: 'right',
        marginRight: 10,
        alignSelf: 'flex-end',
        marginTop: -40 
    },
  });

