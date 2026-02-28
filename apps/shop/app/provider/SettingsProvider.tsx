import React, { useEffect, useState, type PropsWithChildren } from 'react'
import { getSections } from '~/data'

export type AppSettings = {
  sections: string[]
}

const DEFAULT_SETTINGS: AppSettings = {
  sections: []
}

export const SettingsContext = React.createContext<AppSettings>(DEFAULT_SETTINGS)

const SettingsProvider = (props: PropsWithChildren) => {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS)
  useEffect(() => {
    getSections('fr').then(sections => {
      setSettings(prevSettings => ({ ...prevSettings,
        sections
      }))
    })
  }, [])
  return (
    <SettingsContext.Provider
      value={settings}
      {...props}
    />
  )
}

export default SettingsProvider
