import React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Dashes } from "./Dashes";
import AppContext from "./AppContext";

export const Footer = () => {
  const context = useContext(AppContext);
  const { colors } = context.useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Dashes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 35,
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
  },
});
