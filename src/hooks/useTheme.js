// src/hooks/useTheme.js
import { useEffect, useState } from 'react'

const THEMES = ['light','dark','colorful','neon']
const KEY = 'portfolio_theme_v1'

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const t = localStorage.getItem(KEY)
      return t && THEMES.includes(t) ? t : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    // Apply to html element
    const el = document.documentElement
    el.setAttribute('data-theme', theme)
    try { localStorage.setItem(KEY, theme) } catch {}
  }, [theme])

  return { theme, setTheme, THEMES }
}
