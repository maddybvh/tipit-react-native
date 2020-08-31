import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeToggle from "./ThemeToggle.js";
import AppContext from "./AppContext";
import { PercentInput } from "./PercentInput";

export const Settings = () => {
  const context = useContext(AppContext);
  const { colors } = context.useTheme();

  const defaultTipLow = context.defaultTipLow;
  const defaultTipHigh = context.defaultTipHigh;

  return (
    <View>
      <Text style={[styles.normalText, { color: colors.text }]}>Settings</Text>
      <View style={styles.inputRow}>
        <Text style={[styles.label, { color: colors.text }]}>
          Low tip default:
        </Text>
        <PercentInput
          defaultValue={defaultTipLow}
          onChange={context.updateTipLowContext}
          accessibility={true}
          accessibilityLabel="Default tip low"
          accessibilityHint="Update the default low tip percentage"
          accesibilityRole="adjustable"
        />
      </View>
      <View style={styles.inputRow}>
        <Text style={[styles.label, { color: colors.text }]}>
          High tip default:
        </Text>
        <PercentInput
          defaultValue={defaultTipHigh}
          onChange={context.updateTipHighContext}
          accessibility={true}
          accessibilityLabel="Default tip high"
          accessibilityHint="Update the default high tip percentage"
          accesibilityRole="adjustable"
        />
      </View>
      <View style={styles.inputRow}>
        <Text style={[styles.label, { color: colors.text }]}>Dark Mode:</Text>
        <ThemeToggle
          accessibility={true}
          accessibilityLabel="Dark mode"
          accessibilityHint="Toggle dark mode on or off"
          accesibilityRole="switch"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  label: {
    fontFamily: "JetBrainsMono-Regular",
    fontSize: 18,
    lineHeight: 24,
    alignSelf: "flex-start",
  },
  normalText: {
    fontFamily: "JetBrainsMono-Bold",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
});
