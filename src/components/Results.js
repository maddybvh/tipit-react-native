import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Constants from 'expo-constants';

function Item({ id, bill, tip, total, selected, onSelect }) {
  return (
      
        <TouchableOpacity 
            //   onPress={}
            style={[
                styles.item
            ]}
            >
                <View {...{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Text style={styles.results}>${bill} + </Text>
                    <Text style={styles.results}>${tip}</Text>
                    <Text style={styles.total}>${total}</Text>
                </View>
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
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    tableHead: {
        fontFamily: 'JetBrainsMono-Bold',
        fontSize: 14,
        lineHeight: 16,
        },
    results: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: 18,
        },
    total: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: 18,
        flex: 2,
        textAlign: 'right',
        },
    }
);
