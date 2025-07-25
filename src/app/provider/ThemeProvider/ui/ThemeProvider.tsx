import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES || THEMES.LIGHT

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<THEMES>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider