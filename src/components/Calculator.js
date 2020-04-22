import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ListItem} from 'react-native-elements';

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


export default class Caculator extends React.Component {
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
        this.setState({message: 'You can tip in ' + tipArray.length + ' palindromes!'})
        this.setState({results: allTotalArray})
        return
        }
    }
    }
    
    render (){
        return (
            <View>                          
                <Text style={styles.dashes}>---------------------------------------------</Text>
                <View>
                <Text style={styles.label}>Your Bill:</Text>
                <Text style={styles.helper}>Pre-tip amount</Text>
                <TextInput style={styles.input}
                onChangeText={this.handleBill}
                />
            </View>
            <View>
                <Text style={styles.label}>Tip Range:</Text>
                <Text style={styles.helper}>Low to high</Text>
                <View style={styles.inputGroup}>
                <TextInput style={styles.input}
                    defaultValue='18'
                    onChangeText={this.handleTipLow}
                />
                <Text style={styles.normalText, {margin:7}}>to</Text>
                <TextInput style={styles.input}
                    defaultValue='25'
                    onChangeText={this.handleTipHigh}
                />                
                </View>
                <Text style={styles.normalText}>{this.state.message}</Text>
                <Text style={styles.dashes}>---------------------------------------------</Text>
            </View>                            
            <View>
                {
                this.state.results.map((l, i) => (
                    <ListItem 
                    key={i}
                    leftElement={
                        <View>
                        <Text style={styles.results}>${l.bill.toFixed(2)} + </Text>
                        </View>
                        }
                    title={
                    <View>
                        <Text style={styles.results}>${l.tip.toFixed(2)}</Text>
                    </View>}
                    rightElement={
                    <View>
                        <Text style={styles.results}>${l.total}</Text>
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


const styles = StyleSheet.create({
    label: {
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 18,
      lineHeight: 24,
      marginTop: 20,
    },
    helper: {
      fontFamily: 'JetBrainsMono-Italic', 
      fontSize: 10,
      lineHeight: 14,
    },
    normalText: {
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 12,
      lineHeight: 20,
    },
    dashes: {
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: 12,
      lineHeight: 14,
      textAlign: 'center',
    },
    input: {
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 3,
      height: 43,
      minWidth: 60,
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: 18,
      lineHeight: 21,
      padding: 5,
      textAlign: 'right',
      marginRight: 10,
      alignSelf: 'flex-end',
      marginTop: -40   
    },
    inputGroup: {
      flexDirection: "row",
      alignSelf: 'flex-end',
      marginTop: -25,
    },
    results: {
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: 18
    }
  });