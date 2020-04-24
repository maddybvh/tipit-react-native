import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ThemeToggle from './ThemeToggle.js';

let tipLowContext = React.createContext('18');
export const tipLowContextProvider = tipLowContext.Provider
export const tipLowContextConsumer = tipLowContext.Consumer


export let tipHighContext = React.createContext('25');

export default class Settings extends React.Component {
    updateTipLowContext = (text) => {
        tipLowContext = React.createContext(text)
    }

    updateTipHighContext = (text) => {
        tipHighContext = React.createContext(text)
    }

    render (){
        return (
            <View>
                <Text style={styles.normalText}>Settings</Text>                          
                <View>
                    <Text style={styles.label}>Low tip default</Text>
                    <TextInput style={styles.input}
                        onChangeText={this.updateTipLowContext}
                    />
                </View>
                <View>
                    <Text style={styles.label}>High tip default</Text>
                    <TextInput style={styles.input}
                        onChangeText={this.updateTipHighContext}
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
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 12,
      lineHeight: 20,
      marginTop: 10,
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