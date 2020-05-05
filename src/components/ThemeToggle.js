import React, { useState, useContext } from "react";
import { View, Switch } from "react-native";
import AppContext from './AppContext';

export default function ThemeToggle() {
  const context = useContext(AppContext)
  const theme = context.theme;

  const [isEnabled, setIsEnabled] = useState(theme == 'light' ? false : true);
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
