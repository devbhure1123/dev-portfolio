import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/animations/CustomCursor'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Tech from './pages/Tech/Tech'
import Tools from './pages/Tools/Tools'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
