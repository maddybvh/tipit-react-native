import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { Header } from './src/components/Header';
import Calculator from './src/components/Calculator';
import { UserProvider } from './src/components/UserContext';
import { useTheme } from './src/theme/hooks';



export default function App () {
  const { colors } = useTheme()
  console.log(colors.background)
  let [fontsLoaded] = useFonts({
    'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
    'JetBrainsMono-Bold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
    'JetBrainsMono-Italic': require('./assets/fonts/JetBrainsMono-Italic.ttf'),
  });

  const userSettings = { defaultTipLow: '18', defaultTipHigh: '25', theme: 'light'}

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <UserProvider value={userSettings}>
        <View style={[styles.container, {backgroundColor: colors.background}]}>
          <Header />
          <Calculator />
        </View>
      </UserProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20,
    display: 'flex',
  }
});
