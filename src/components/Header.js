import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InfoModal from './InfoModal';
import SettingsModal from './SettingsModal';
import { Title } from './Title';

export const Header = (props) => (
  <View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
      <InfoModal />
      <Title /> 
      <SettingsModal />
    </View>
    <Image 
      source={require('../../assets/dashes.png')}
      style={{margin:15, alignSelf: 'center'}} />
  </View>
)

