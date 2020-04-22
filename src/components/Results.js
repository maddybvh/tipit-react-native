import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

function Item({ id, bill, tip, total, selected, onSelect }) {
  return (
    <TouchableOpacity
    //   onPress={}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>${bill}</Text>
      <Text style={styles.title}>${tip}</Text>
      <Text style={styles.title}>${total}</Text>
    </TouchableOpacity>
  );
}

export default class Results extends React.Component {
    
    render (){
        return (
            <FlatList
                data={this.props.results}
                renderItem={({ item }) => (
                <Item
                    bill={item.bill}
                    tip={item.tip}
                    total={item.total}
                />               
                )}
                keyExtractor={item => item.id}
            />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
