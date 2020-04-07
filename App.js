import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, ListItem} from 'react-native-elements';
import RangeSlider from 'react-native-range-slider';

export default function App() {
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]
    
  return (
            <View >
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
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
