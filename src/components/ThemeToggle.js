import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
      <View >
        <Switch style={{marginRight: 5}}
            trackColor={{ false: "#767577", true: "#767577" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
      </View>

  );
}

