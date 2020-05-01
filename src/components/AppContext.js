import React, { useContext } from 'react'
import { themedColors } from '../theme/index'

const AppContext = React.createContext()

export const useTheme = () => {
    const theme = useContext(AppContext).theme;
    const colors = theme ? themedColors[theme] : themedColors.default
    return {
        colors,
        theme,
  }
}

export default AppContext