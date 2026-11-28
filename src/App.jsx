import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/animations/CustomCursor'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Orvion from './pages/Projects/Orvion/Orvion'
import Novique from './pages/Projects/Novique/Novique'
import Lumique from './pages/Projects/Lumique/Lumique'
import Wearwell from './pages/Projects/Wearwell/Wearwell'
import Pride from './pages/Projects/Pride/Pride'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Contact from './pages/Contact/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
  }, [pathname])

  return null
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem('dev-portfolio-theme')
  const theme = savedTheme === 'dark' ? 'dark' : 'light'

  document.documentElement.dataset.theme = theme
  return theme
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('dev-portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => current === 'light' ? 'dark' : 'light')
  }

  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/orvion" element={<Orvion />} />
        <Route path="/projects/novique" element={<Novique />} />
          <Route path="/projects/lumique" element={<Lumique />} />
          <Route path="/projects/pride" element={<Pride />} />
          <Route path="/projects/wearwell" element={<Wearwell />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
