import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Title = (props) => (
    <View>
      <Text style={styles.title}>tipit</Text> 
    </View>
)

const styles = StyleSheet.create({
    title:{
      fontFamily: 'JetBrainsMono-Bold',
      fontSize: 24,
      textAlign: 'center',
      lineHeight: 27,
      alignSelf: 'center'
    }
  });