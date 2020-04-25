import { themedColors } from './index'

export const useTheme = () => {
    //@TODO make theme variable
    const theme = 'dark'
    const colors = theme ? themedColors[theme] : themedColors.default
    return {
        colors,
        theme,
  }
}