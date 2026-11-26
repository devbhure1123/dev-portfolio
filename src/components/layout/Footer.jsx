import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/site'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link to="/" className="footer-brand">
            {siteConfig.name}<span>.</span>
          </Link>
          <p>Designing meaningful experiences, one idea at a time.</p>
          <Link to="/contact" className="footer-cta">
            Let's create something <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-navigation">
          <h3>Explore</h3>
          {footerLinks.map((item) => (
            <Link key={item.path} to={item.path}>{item.label}</Link>
          ))}
        </div>

        <div className="footer-social">
          <h3>Connect</h3>
          <a href="https://github.com/devbhure1123" target="_blank" rel="noreferrer">
            <span aria-hidden="true">GH</span> GitHub <ArrowUpRight size={14} />
          </a>
          <a href="https://www.linkedin.com/in/dev-bhure-623818255/" target="_blank" rel="noreferrer">
            <span aria-hidden="true">in</span> LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}
