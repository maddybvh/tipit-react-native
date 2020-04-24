import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InfoModal from './InfoModal';
import { Title } from './Title';

export const Header = (props) => (
    <View>
      <InfoModal />
      <Title /> 
    </View>
)

