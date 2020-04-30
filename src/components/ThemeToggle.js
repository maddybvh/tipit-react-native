import React, { useState, useContext } from "react";
import { View, Switch } from "react-native";
import UserContext from './UserContext';

export default function ThemeToggle() {
  const context = useContext(UserContext)
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    context.toggleTheme();
  }

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