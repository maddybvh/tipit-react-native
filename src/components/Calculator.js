import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { CurrencyInput } from './CurrencyInput';
import { PercentInput } from './PercentInput';
import Results from './Results';
import UserContext from './UserContext';
import { useTheme } from '../theme/hooks';

let resultID = 0;
const { colors } = useTheme()

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
    let stringBill = billAmount.toFixed(2).toString();
    for (i of tipArray) {
      let total = Number(i) + Number(billAmount);
      let stringTip = i.toFixed(2).toString();
      let stringTotal = total.toFixed(2).toString();
      var result = new Result (resultID.toString(), stringBill, stringTip, stringTotal)
      results.push(result)
      resultID += 1;
    }
    return results;
  }

  //Outputs an array of palindromic tips and their corresponding palindromic totals, if any exist.
  function findPalTotals(billAmount, tipArray) {
    let i;
    var results = [];
    let stringBill = billAmount.toFixed(2).toString()
    for (i of tipArray) {
        let total = Number(billAmount) + Number(i);
        let stringTotal = total.toFixed(2).toString()
        let stringTip = i.toFixed(2).toString();
        if (palindrome(stringTotal)) {
            const result = new Result (resultID.toString(), stringBill, stringTip, stringTotal)
            results.push(result)
        }
        resultID += 1;
    }
    return results
  }

function Result (id, bill, tip, total) {
    this.id = id
    this.bill = bill
    this.tip = tip
    this.total = total
}


export default class Caculator extends React.Component {
  static contextType = UserContext
  
  componentDidMount() {
    this.setState({tipLow: this.context.defaultTipLow, tipHigh: this.context.defaultTipHigh})
  }
  
  state = {
        bill: '',
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
    clearTable = () => {
        this.setState({results: []});
        this.setState({message: ''});
    }
    clearAll = () => {
      this.clearTable();
      this.setState({bill: ''})
    }
    //Update the state based on the functions above
    findResults(){
        this.clearTable();
    if (this.state.bill && this.state.tipLow && this. state.tipHigh && (this.state.tipLow <= this.state.tipHigh)){
        const bill = this.state.bill;
        const tipLow = this.state.tipLow;
        const tipHigh = this.state.tipHigh;

        const tipArray = findPalTips(bill, tipLow, tipHigh);
        const allTotalArray = arrayTipsAndTotals(bill, tipArray);
        const palTotalArray = findPalTotals(bill, tipArray);
        
        if (palTotalArray && palTotalArray.length) { //both tip & total are arrays
            this.setState({message: 'Woot! There are ' + palTotalArray.length + ' ways for the tip AND total to be palindromes!'})
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
                <View style={styles.inputRow}>
                  <View style={{flex: 1}}>
                    <Text style={styles.label}>Your Bill:</Text>
                    <Text style={styles.helper}>Pre-tip amount</Text>
                  </View>
                  <CurrencyInput style={{flex: 2}}
                    label='Bill'
                    value={this.state.bill}
                    onChange={this.handleBill}
                  />
                </View>
                <View style={styles.inputRow}>
                    <View>
                      <Text style={styles.label}>Tip Range:</Text>
                      <Text style={styles.helper}>Low to high</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <PercentInput
                            defaultValue={this.context.defaultTipLow}
                            onChange={this.handleTipLow}
                        />
                        <Text style={[styles.normalText, {margin:7}]}>to</Text>
                        <PercentInput
                            defaultValue={this.context.defaultTipHigh}
                            onChange={this.handleTipHigh}
                        />                
                    </View>
                  </View>
                  <View style={{minHeight: 50}}>
                    {/* If there are results, print the message and clear button. */}
                    {this.state.results.length > 0 &&
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.normalText, {flex: 3}]}>{this.state.message}</Text>
                            <TouchableOpacity onPress={this.clearAll} style={{flex: 1, justifyContent: 'flex-start'}}>
                                <Text style={styles.clearButton}>X Clear</Text>
                            </TouchableOpacity>
                        </View>
                        }
                </View>
                <View >
                  <Image 
                    source={require('../../assets/dashes.png')}
                    style={{marginVertical: 15, alignSelf: 'center'}} />
                  <Results results={this.state.results}/>
                </View>
                                            
            </View>
            );
        }

}


const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginVertical: 12,
  }, 
  label: {
    fontFamily: 'JetBrainsMono-Regular', 
    fontSize: 18,
    lineHeight: 24,
    color: colors.text,
  },
  helper: {
    fontFamily: 'JetBrainsMono-Italic', 
    fontSize: 10,
    lineHeight: 14,
    color: colors.text,
  },
  normalText: {
    fontFamily: 'JetBrainsMono-Regular', 
    fontSize: 12,
    lineHeight: 20,
    marginTop: 10,
    color: colors.text,
  },
  clearButton: {
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: 12,
      lineHeight: 14,
      color: '#FF0000',
      textAlign: 'right',
      color: colors.clear,
      padding: 12,
  },
  inputGroup: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    marginTop: -25,
  }
});