import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      <a href="/contact">Let's create something <ArrowUpRight size={16} /></a>
    </footer>
  )
}
