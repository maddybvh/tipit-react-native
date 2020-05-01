import React from 'react';
import { View } from 'react-native';
import InfoModal from './InfoModal';
import SettingsModal from './SettingsModal';
import { Title } from './Title';
import { Dashes } from './Dashes';

export const Header = () => (
  <View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
      <InfoModal />
      <Title /> 
      <SettingsModal />
    </View>
    <Dashes />
  </View>
)


