import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InfoModal from './InfoModal';
import SettingsModal from './SettingsModal';
import { Title } from './Title';

export const Header = (props) => (
    <View>
      <InfoModal />
      <Title /> 
      <SettingsModal />
      <Image 
      source={require('../../assets/dashes.png')}
      style={{margin:15, alignSelf: 'center'}} />
    </View>
)

