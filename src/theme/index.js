const palette = {
  black: "#000000",
  white: "#FFFFFF",
  darkBlue: "#221C35",
  red: "#FF0000",
  blue: "#0000EE",
  pink: "#F35A69",
  gray: "#d3d3d3",
  midGray: "#A9A9A9",
  darkGray: "#333333",
  nearBlack: "#252525",
};

export const colors = {
  text: palette.black,
  clear: palette.red,
  link: palette.blue,
  background: palette.white,
  row: palette.gray,
  inputBorder: palette.midGray,
};

export const themedColors = {
  default: {
    ...colors,
  },
  light: {
    ...colors,
  },
  dark: {
    ...colors,
    text: palette.white,
    background: palette.nearBlack,
    link: palette.pink,
    clear: palette.pink,
    row: palette.darkGray,
  },
};
