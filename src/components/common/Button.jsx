import { ArrowUpRight } from 'lucide-react'

export default function Button({ children, href = '/contact', variant = '' }) {
  return (
    <a className={`button ${variant}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={18} />
    </a>
  )
}
