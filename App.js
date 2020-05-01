import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { Header } from './src/components/Header';
import { Calculator } from './src/components/Calculator';
import { Footer } from './src/components/Footer';
import AppContext, { useTheme } from './src/components/AppContext';
import { themedColors } from './src/theme/index'

export default function App () {
  
  let [fontsLoaded] = useFonts({
    'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
    'JetBrainsMono-Bold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
    'JetBrainsMono-Italic': require('./assets/fonts/JetBrainsMono-Italic.ttf'),
  });

  const [defaultTipLow, setDefaultTipLow] = useState('18');
  const [defaultTipHigh, setDefaultTipHigh] = useState('25');
  const [theme, setTheme] = useState('light');

  const updateTipLowContext = (input) => {
    setDefaultTipLow(input)
  }

  const updateTipHighContext = (input) => {
    setDefaultTipHigh(input)
  }

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }



  const userSettings = { 
    defaultTipLow: defaultTipLow, 
    defaultTipHigh: defaultTipHigh, 
    theme: theme, 
    useTheme, 
    toggleTheme, 
    updateTipLowContext, 
    updateTipHighContext, 
  }
  
  //this is a repeat of useTheme in /AppContext and should be refactored
  const colors = userSettings.theme ? themedColors[userSettings.theme] : themedColors.default


  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <AppContext.Provider value={userSettings}>
        <View style={[styles.container, {backgroundColor: colors.background}]}>
          <Header />
          <Calculator />
          <Footer />
        </View>
      </AppContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 10,
    display: 'flex',
  }
});
