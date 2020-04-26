import React from 'react'

const UserContext = React.createContext({
    useTheme: () => {}, //possible solution: https://github.com/styled-components/styled-components/issues/2340
    updateDefaultTipLow: () => {}, //this also isn't wired up to anything
    updateDefaultTipHigh: () => {}, //this also isn't wired up to anything
})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext