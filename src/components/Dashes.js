import React, { useContext } from "react";
import { Image } from "react-native";
import AppContext from "./AppContext";

export const Dashes = () => {
  const theme = useContext(AppContext).theme;
  return (
    <Image
      source={
        theme == "light"
          ? require("../../assets/dashes.png")
          : require("../../assets/dashes-white.png")
      }
      style={{ marginTop: 6, marginBottom: 6, width: "100%" }}
    />
  );
};
