
import { themedColors } from './index'

export const useTheme = () => {
    //@TODO make theme variable
    const theme = 'light'; //settings this to 'light' or 'dark' updates the theme
    const colors = theme ? themedColors[theme] : themedColors.default
    return {
        colors,
        theme,
  }
}