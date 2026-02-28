import React, { type ComponentPropsWithoutRef, type FragmentProps, type PropsWithChildren } from 'react'

export const SettingsContext = React.createContext({})

const SettingsProvider = (props: PropsWithChildren) => {
  return <SettingsContext.Provider value={{}} {...props} />
}

export default SettingsProvider
