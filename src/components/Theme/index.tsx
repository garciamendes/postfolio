// React
import { ChangeEventHandler, useState } from 'react'

// Third party
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { MdLightMode, MdNightlight } from 'react-icons/md'

// project
import '../../styles/theme_mode.scss'

export function DarkMode() {
  // State
  const [isDark, setIsDark] = useState(false)

  // Others
  const storedTheme = localStorage.getItem('theme')

  const setDark = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  const setLight = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && prefersDark)

  if (defaultDark) {
    setDark()
  }

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setDark()
      setIsDark(true)
    } else {
      setLight()
      setIsDark(false)
    }
  }

  return (
    <div className='toggle-theme-wrapper'>
      <label className='toggle-theme' htmlFor='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <MdLightMode size={18} color='#a19fa3' />
        {isDark ? (
          <BsToggleOn size={30} color='#c4c4c4' />
        ) : (
          <BsToggleOff size={30} color='#c4c4c4' />
        )}
        <MdNightlight size={18} color='#a19fa3' />
      </label>
    </div>
  )
}
