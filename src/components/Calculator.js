import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CurrencyInput } from './CurrencyInput';
import { PercentInput } from './PercentInput';
import { Dashes } from './Dashes';
import { Results } from './Results';
import AppContext from './AppContext';

let resultID = 0;

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


export const Calculator = () => {
  const context = useContext(AppContext)
  const { colors } = context.useTheme()
  
  const [tipLow, setTipLow] = useState(context.defaultTipLow);
  const [tipHigh, setTipHigh] = useState(context.defaultTipHigh);
  const [bill, setBill] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  
  async function handleBill (text) {
    await setBill(text)
    setResults(findResults());
  }
  async function handleTipLow (text) {
    await setTipLow(text);
    setResults(findResults());
  }
  async function handleTipHigh (text) {
    await setTipHigh(text)
    setResults(findResults());
  }
  clearTable = () => {
    setResults([]);
    setMessage('');
  }
  clearAll = () => {
    setBill('');
    clearTable();
  }

  //Update the state based on the functions above
  findResults = () => {
    const billFloat = parseFloat(bill);
    const tipLowFloat = parseFloat(tipLow);
    const tipHighFloat = parseFloat(tipHigh);

    if (billFloat && tipLowFloat && tipHighFloat && tipLowFloat <= tipHighFloat){

      const tipArray = findPalTips(billFloat, tipLowFloat, tipHighFloat);
      const allTotalArray = arrayTipsAndTotals(billFloat, tipArray);
      const palTotalArray = findPalTotals(billFloat, tipArray);
      
      if (palTotalArray && palTotalArray.length) { //both tip & total are arrays
          setMessage('Woot! There are ' + palTotalArray.length + ' ways for the tip AND total to be palindromes!');
          setResults(palTotalArray);
          return palTotalArray
      } else if (tipArray && tipArray.length) {
          setMessage('You can tip in ' + tipArray.length + ' palindromes!');
          setResults(allTotalArray);
          return allTotalArray
      }
    }
    else return []
  }

  return (
    <View>                          
        <View style={styles.inputRow}>
          <View style={{flex: 1}}>
            <Text style={[styles.label, {color: colors.text}]}>Your Bill:</Text>
            <Text style={[styles.helper, {color: colors.text}]}>Pre-tip amount</Text>
          </View>
          <CurrencyInput style={{flex: 2}}
            label='Bill'
            value={bill}
            onChange={handleBill}
          />
        </View>
        <View style={styles.inputRow}>
            <View>
              <Text style={[styles.label, {color: colors.text}]}>Tip Range:</Text>
              <Text style={[styles.helper, {color: colors.text}]}>Low to high</Text>
            </View>
            <View style={styles.inputGroup}>
                <PercentInput
                    defaultValue={context.defaultTipLow}
                    onChange={handleTipLow}
                />
                <Text style={[styles.normalText, {margin:7, color: colors.text}]}>to</Text>
                <PercentInput
                    defaultValue={context.defaultTipHigh}
                    onChange={handleTipHigh}
                />                
            </View>
          </View>
          <View style={{minHeight: 50}}>
            {/* If there are results, print the message and clear button. */}
            {results.length > 0 &&
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text 
                      style={[styles.normalText, {flex: 3, color: colors.text}]}>
                      {message}
                    </Text>
                    <TouchableOpacity onPress={clearAll} style={{flex: 1, justifyContent: 'flex-start'}}>
                        <Text style={[styles.clearButton, {color: colors.clear}]}>X Clear</Text>
                    </TouchableOpacity>
                </View>
                }
        </View>
        <View >
          <Dashes />
          <Results results={results}/>
        </View>               
    </View>
    );
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
    marginTop: 10,
  },
  clearButton: {
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: 12,
      lineHeight: 14,
      color: '#FF0000',
      textAlign: 'right',
      padding: 12,
  },
  inputGroup: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    marginTop: -25,
  }
});
