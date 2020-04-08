import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Input, ListItem} from 'react-native-elements';

export default function App() {

  class Tipit extends Component {
    state = {
      bill: '',
      tipLow: '18',
      tipHigh: '25',
      results: [
        {
          bill: '$200',
          tip: '$20',
          total: '$120',
        },
        {
          bill: '$200',
          tip: '$10',
          total: '$60',
        },
        {
          bill: '$200',
          tip: '$8',
          total: '$48',
        },
      ]
    }
    handleBill = (text) => {
      this.setState({bill: text})
    }
    handleTipLow = (text) => {
      this.setState({tipLow: text})
    }
    handleTipHigh = (text) => {
      this.setState({tipHigh: text})
    }
    
    render (){
      return (
            <View>
                <Input
                  placeholder='Bill'
                  leftIcon={{ type: 'font-awesome', name: 'dollar' }}
                  onChangeText={this.handleBill}
                />
                <Input
                  placeholder='Tip low'
                  rightIcon={{ type: 'font-awesome', name: 'percent' }}
                  onChangeText={this.handleTipLow}
                />
                <Input
                  placeholder='Tip high'
                  rightIcon={{ type: 'font-awesome', name: 'percent' }}
                  onChangeText={this.handleTipHigh}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                  {this.state.bill}
                </Text>
                <View>
                  {
                    this.state.results.map((l, i) => (
                      <ListItem
                        key={i}
                        leftElement={
                          <View>
                            <Text>{l.bill}</Text>
                          </View>
                          }
                        title={l.tip}
                        rightElement={
                        <View>
                          <Text>{l.total}</Text>
                        </View>
                        }
                        bottomDivider
                      />
                    ))
                  }
                </View>
            </View>
            );
          }
  }

  return (
    <View style={styles.container}>
      <Tipit />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
