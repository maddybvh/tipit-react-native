import React, { useContext } from 'react'
import { themedColors } from '../theme/index'

const UserContext = React.createContext({

})

export const useTheme2 = () => {
    const theme = useContext(UserContext).theme; //setting this to 'light' or 'dark' updates the theme
    const colors = theme ? themedColors[theme] : themedColors.default
    return {
        colors,
        theme,
  }
}

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext