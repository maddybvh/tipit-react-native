import React from 'react'

const UserContext = React.createContext({defaultTipLow: '18', defaultTipHigh: '25', theme: 'light'})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext