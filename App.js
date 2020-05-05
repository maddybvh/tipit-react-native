import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, AsyncStorage } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { Header } from './src/components/Header';
import { Calculator } from './src/components/Calculator';
import { Footer } from './src/components/Footer';
import AppContext, { useTheme } from './src/components/AppContext';
import { themedColors } from './src/theme/index'

export default function App () {
  const _storeData = async () => {
    try {
      await AsyncStorage.removeItem('@store:appContext')
      settingsToSave = {
        defaultTipLow: userSettings.defaultTipLow,
        defaultTipHigh: userSettings.defaultTipHigh,
        theme: userSettings.theme,
      }
      await AsyncStorage.setItem('@store:appContext', JSON.stringify(settingsToSave));
    } catch (error) {
      console.log('Error saving user settings.')
    }
  };
  
  const [initialAppLoad, setInitialAppLoad] = useState(true);

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@store:appContext');
      const savedSettings = JSON.parse(value)
      
      if (savedSettings !== null) {
        setDefaultTipLow(savedSettings.defaultTipLow)
        setDefaultTipHigh(savedSettings.defaultTipHigh)
        setTheme(savedSettings.theme)
      }
    } catch (error) {
      console.log('No user setting data was retrieved');
    }
    setInitialAppLoad(false);
  };
  
  let [fontsLoaded] = useFonts({
    'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
    'JetBrainsMono-Bold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
    'JetBrainsMono-Italic': require('./assets/fonts/JetBrainsMono-Italic.ttf'),
  });

  const [defaultTipLow, setDefaultTipLow] = useState('18');
  const [defaultTipHigh, setDefaultTipHigh] = useState('25');
  const [theme, setTheme] = useState('light');

  const updateTipLowContext = (input) => {
    setDefaultTipLow(input);   
  }

  const updateTipHighContext = (input) => {
    setDefaultTipHigh(input);
  }

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
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
  
  //This is a repeat of useTheme() in /AppContext
  const colors = userSettings.theme ? themedColors[userSettings.theme] : themedColors.default

  useEffect(() => { initialAppLoad ? _retrieveData() : _storeData() })

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <AppContext.Provider value={userSettings}>
        <View style={{flex: 1, backgroundColor: colors.background}}>
          <SafeAreaView style={styles.container}>
            <Header />
            <Calculator />
            <Footer />
          </SafeAreaView>
        </View>
      </AppContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  }
});

