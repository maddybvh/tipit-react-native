import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserContext from './UserContext';

export const Title = (props) => {
  const context = useContext(UserContext)
  const { colors } = context.useTheme()
  return (
    <View>
      <Text style={[styles.title, {color: colors.text}]}>tipit</Text> 
    </View>
)}

const styles = StyleSheet.create({
    title:{
      fontFamily: 'JetBrainsMono-Bold',
      fontSize: 24,
      textAlign: 'center',
      lineHeight: 45,
    }
  });