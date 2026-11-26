import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/animations/CustomCursor'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Tech from './pages/Tech/Tech'
import Tools from './pages/Tools/Tools'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Contact from './pages/Contact/Contact'

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
          <Route path="/tech" element={<Tech />} />
          <Route path="/tools" element={<Tools />} />
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
