import React from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Clipboard,
} from 'react-native';
import { useTheme } from '../theme/hooks';

const { colors } = useTheme()

function Item({ id, bill, tip, total, selected, onSelect }) {
    return (      
        <TouchableOpacity 
            onPress={() => {
                Clipboard.setString(tip);
                alert('Copied tip to Clipboard!');
            }}
            //onPress={() => console.log(tip)}
            style={styles.item}
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
                renderItem={({ item, index }) => (
                    <Item
                        bill={item.bill}
                        tip={item.tip}
                        total={item.total}
                    />               
                )}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                    this.props.results.length > 0 &&
                        <View style={styles.tableHead}>
                            <Text style={styles.tableHead}>Bill</Text>
                            <Text style={styles.tableHead}>Tip</Text>
                            <Text style={[styles.tableHead, {textAlign: 'right'}]}>Total</Text>
                        </View>
                    }
            />
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 3,
        backgroundColor: colors.row,
    },
    tableHead: {
        fontFamily: 'JetBrainsMono-Bold',
        fontSize: 14,
        lineHeight: 16,
        marginHorizontal: 10,
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        color: colors.text,
        },
    results: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: 18,
        color: colors.text,
        },
    total: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: 18,
        flex: 2,
        textAlign: 'right',
        color: colors.text,
        },
    }
);
