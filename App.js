import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, ListItem} from 'react-native-elements';
import RangeSlider from 'react-native-range-slider';

export default function App() {
  return (
            <View style={styles.container}>
                <Input
                  placeholder='Bill'
                  leftIcon={{ type: 'font-awesome', name: 'dollar' }}
                />
                <Input
                  placeholder='Tip low'
                  rightIcon={{ type: 'font-awesome', name: 'percent' }}
                />
                <Input
                  placeholder='Tip high'
                  rightIcon={{ type: 'font-awesome', name: 'percent' }}
                />
            </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
