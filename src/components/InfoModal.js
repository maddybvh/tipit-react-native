import React, { useContext } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Title } from "./Title";
import { Dashes } from "./Dashes";
import useModal from "../hooks/useModal.js";
import AppContext from "./AppContext";

export const InfoModal = () => {
  const context = useContext(AppContext);
  const theme = context.theme;
  const { colors } = context.useTheme();
  const { isShowing, toggle } = useModal();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isShowing}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
        accessibilityViewIsModal={true}
      >
        <View style={{ flex: 1, backgroundColor: colors.background }}>
          <SafeAreaView
            style={[styles.modal, { backgroundColor: colors.background }]}
          >
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <TouchableOpacity
                style={{ padding: 5, flex: 1 }}
                onPress={() => {
                  toggle();
                }}
                accessibility={true}
                accessibilityLabel="Close"
                accessibilityHint="Close info modal"
                accessibilityRole="button"
              >
                <Text style={[styles.clear, { color: colors.clear }]}>X</Text>
              </TouchableOpacity>
              <Title style={{ flex: 1 }} />
              <View style={{ flex: 1 }}></View>
            </View>
            <Dashes />
            <Text
              style={[
                styles.normalText,
                { fontFamily: "JetBrainsMono-Bold", color: colors.text },
              ]}
            >
              What is this app?
            </Text>
            <Text style={[styles.description, { color: colors.text }]}>
              A means to enhance palindromic whimsy.
            </Text>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: -60,
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL("https://savaslabs.com/labs")}
                accessibilityRole="link"
              >
                <Image
                  source={
                    theme === "light"
                      ? require("../../assets/labs-white.png")
                      : require("../../assets/labs-black.png")
                  }
                  alt="Labs logo - a place for experimentation at Savas Labs. Links to Labs page of Savas Labs website."
                  resizeMode="contain"
                  style={{
                    height: 300,
                    flex: 1,
                    width: null,
                  }}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
      <TouchableOpacity
        style={{ padding: 5 }}
        onPress={() => {
          toggle();
        }}
        accessibility={true}
        accessibilityLabel="Info"
        accessibilityHint="Opens the info modal"
        accessibilityRole="button"
      >
        <Image
          source={
            theme == "light"
              ? require("../../assets/info.png")
              : require("../../assets/info-white.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  modal: {
    flex: 1,
    marginHorizontal: 8,
  },
  normalText: {
    fontFamily: "JetBrainsMono-Regular",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
    textAlign: "center",
  },
  description: {
    fontFamily: "JetBrainsMono-Regular",
    fontSize: 20,
    lineHeight: 28,
    marginTop: 10,
    textAlign: "center",
    padding: 20,
  },
  clear: {
    fontFamily: "JetBrainsMono-Bold",
    padding: 10,
    fontSize: 18,
  },
});
