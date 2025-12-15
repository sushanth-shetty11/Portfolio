import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [])

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark'
      setIsDarkMode(true)
    } else {
      localStorage.theme = 'light'
      setIsDarkMode(false)
    }
  }

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="overflow-x-hidden font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
      <Navbar 
        isDarkMode={isDarkMode}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        toggleTheme={toggleTheme}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <Header />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
