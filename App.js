import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Input, ListItem} from 'react-native-elements';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';




export default function App () {
  let [fontsLoaded] = useFonts({
    'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
    'JetBrainsMono-Bold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
    'JetBrainsMono-Italic': require('./assets/fonts/JetBrainsMono-Italic.ttf'),
  });

    //Determine if a string is a palindrome
    function palindrome(str) {
      var re = '.';
      var lowRegStr = str.toLowerCase().replace(re, '');
      var reverseStr = lowRegStr
        .split('')
        .reverse()
        .join('');
      return reverseStr === lowRegStr;
    }
  
    // Returns an array of palindromes between numLow and numHigh
    function palindromeArray(numLow, numHigh) {
      var palindromeArray = [];
  
      for (let i = numLow; i <= numHigh; i += 0.01) {
        let n = i.toFixed(2);
        if (palindrome(n.toString())) {
          palindromeArray.push(parseFloat(n));
        }
      }
      return palindromeArray;
    }
  
    //Output all possible palindromic tips within the given parameters.
    function findPalTips(billAmount, tipPercentLow, tipPercentHigh) {
      const tipArray = palindromeArray(
        billAmount * tipPercentLow * 0.01,
        billAmount * tipPercentHigh * 0.01
      );
      return tipArray;
    }
  
    //Create an array with all totals with palindrome tips
    function arrayTipsAndTotals(billAmount, tipArray) {
      let i;
      var results = [];
      for (i of tipArray) {
        let total = Number(i) + Number(billAmount);
        let n = total.toFixed(2);
        var result = new Result (billAmount, i, n)
        results.push(result)
      }
  
      return results;
    }
  
    //Outputs an array of palindromic tips and their corresponding palindromic totals, if any exist.
    function findPalTotals(billAmount, tipArray) {
      let i;
      var results = [];
      for (i of tipArray) {
        let total = Number(billAmount) + Number(i);
        let n = total.toFixed(2);
        if (palindrome(n.toString())) {
          const result = new Result (billAmount, i, n)
          results.push(result)        
        }
      }
      return results
    }
  
  function Result (bill, tip, total) {
    this.bill = bill
    this.tip = tip
    this.total = total
  }

  class Tipit extends Component {
    state = {
      bill: '',
      tipLow: '18',
      tipHigh: '25',
      results: [],
      message: ''
    }
    handleBill = (text) => {
      this.setState({bill: parseFloat(text)}, function(){
        this.findResults()
      })
    }
    handleTipLow = (text) => {
      this.setState({tipLow: parseFloat(text)}, function(){
        this.findResults()
      })
    }
    handleTipHigh = (text) => {
      this.setState({tipHigh: parseFloat(text)}, function(){
        this.findResults()
      })
    }

    //Update the state based on the functions above
    findResults(){
      if (this.state.bill && this.state.tipLow && this. state.tipHigh && (this.state.tipLow <= this.state.tipHigh)){
        const bill = this.state.bill;
        const tipLow = this.state.tipLow;
        const tipHigh = this.state.tipHigh;
  
        const tipArray = findPalTips(bill, tipLow, tipHigh);
        const allTotalArray = arrayTipsAndTotals(bill, tipArray);
        const palTotalArray = findPalTotals(bill, tipArray);
          
        if (palTotalArray && palTotalArray.length) { //both tip & total are arrays
          this.setState({message: 'Woot! Both tip and total can be palidromes!'})
          this.setState({results: palTotalArray})
          return
        } else if (tipArray && tipArray.length) {
          this.setState({message: 'You can tip in palindrome!'})
          this.setState({results: allTotalArray})
          return
        }
      }
    }
    
    render (){
      return (
            <View>
              <Text style={{ fontFamily: 'JetBrainsMono-Bold', fontSize: 40 }}>tipit</Text>
                <Input
                  placeholder='Bill'
                  leftIcon={{ type: 'font-awesome', name: 'dollar' }}
                  onChangeText={this.handleBill}
                />
                <Input
                  placeholder='Tip low'
                  defaultValue='18'
                  rightIcon={{ type: 'font-awesome', name: 'percent' }}
                  onChangeText={this.handleTipLow}
                />
                <Input
                  placeholder='Tip high'
                  defaultValue='25'
                  rightIcon={{ type: 'font-awesome', name: 'percent' }}
                  onChangeText={this.handleTipHigh}
                />
                <Text>{this.state.message}</Text>
                <View>
                  {
                    this.state.results.map((l, i) => (
                      <ListItem
                        key={i}
                        leftElement={
                          <View>
                            <Text>${l.bill.toFixed(2)}</Text>
                          </View>
                          }
                        title={
                        <View>
                          <Text>${l.tip.toFixed(2)}</Text>
                        </View>}
                        rightElement={
                        <View>
                          <Text>${l.total}</Text>
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
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <View style={styles.container}>
        <Tipit />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
