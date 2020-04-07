import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, ListItem} from 'react-native-elements';
import RangeSlider from 'react-native-range-slider';

export default function App() {
    const list = [
      {
        bill: '$100',
        tip: '$20',
        total: '$120',
      },
      {
        bill: '$50',
        tip: '$10',
        total: '$60',
      },
    ]
    
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
                <View>
                  {
                    list.map((l, i) => (
                      <ListItem
                        key={i}
                        leftElement={l.bill}
                        title={l.tip}
                        rightElement={l.total}
                        bottomDivider
                      />
                    ))
                  }
                </View>

            </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
