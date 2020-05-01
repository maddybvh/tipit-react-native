import React, { useContext } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View, Clipboard } from 'react-native';
import AppContext from './AppContext';

function Item({ bill, tip, total }) {
    const context = useContext(AppContext)
    const { colors } = context.useTheme()
    return (      
        <TouchableOpacity 
            onPress={() => {
                Clipboard.setString(tip);
                alert('Copied your $' + tip + ' tip to the clipboard. Happy tipping :)');
            }}
            style={[styles.item, {backgroundColor: colors.row}]}
            >
            <View {...{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={[styles.results, {color: colors.text}]}>${bill} + </Text>
                <Text style={[styles.results, {color: colors.text}]}>${tip}</Text>
                <Text style={[styles.total, {color: colors.text}]}>${total}</Text>
            </View>
        </TouchableOpacity>
  );
}


export const Results = ({results}) =>  {    
    const context = useContext(AppContext)
    const { colors } = context.useTheme()
    return (
        <FlatList 
            data={results}
            renderItem={({ item, index }) => (
                <Item
                    bill={item.bill}
                    tip={item.tip}
                    total={item.total}
                />               
            )}
            keyExtractor={item => item.id}
            ListHeaderComponent={
                results.length > 0 &&
                    <View style={styles.tableHead}>
                        <Text style={[styles.tableHead, {color: colors.text}]}>Bill</Text>
                        <Text style={[styles.tableHead, {color: colors.text}]}>Tip</Text>
                        <Text style={[styles.tableHead, {textAlign: 'right', color: colors.text}]}>Total</Text>
                    </View>
                }
        />
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 3,
    },
    tableHead: {
        fontFamily: 'JetBrainsMono-Bold',
        fontSize: 14,
        lineHeight: 16,
        marginHorizontal: 10,
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
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
