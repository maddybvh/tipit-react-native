import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
      <View style={styles.toggleContainer}>
        <Switch
            trackColor={{ false: "#767577", true: "#767577" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
      </View>

  );
}

const styles = StyleSheet.create({
    toggleContainer: {
        padding: 5,
        textAlign: 'right',
        marginRight: 10,
        alignSelf: 'flex-end',
        marginTop: -30 
    },
  });