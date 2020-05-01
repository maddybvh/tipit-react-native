import React, { useContext } from 'react';
import { Image } from 'react-native';
import UserContext from './UserContext';


export const Dashes = () => {
  const theme = useContext(UserContext).theme;
  return (
    <Image 
      source={
         (theme == 'light') ? require('../../assets/dashes.png') : require('../../assets/dashes-white.png')
      }
      style={{marginTop: 15, marginBottom: 15, width: '100%'}} />
  )
  }


