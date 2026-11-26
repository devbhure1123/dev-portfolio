import { useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import Reveal from '../../components/animations/Reveal'
import { siteConfig } from '../../data/site'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hello Dev!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0A%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="page inner-page contact-page">
      <Reveal>
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Let's start a <span>conversation.</span></h1>
        <p className="page-lead">Have an idea, a question or an opportunity? Let's connect and create something meaningful.</p>
      </Reveal>

      <div className="contact-layout">
        <Reveal>
          <div className="contact-info">
            <h2>Let's talk about it.</h2>
            <p>I'm always open to meaningful conversations, creative collaborations and new opportunities.</p>

            <a className="contact-detail" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Mail /></span>
              <span><small>EMAIL ME</small><strong>{siteConfig.email}</strong></span>
              <ArrowUpRight />
            </a>

            <a className="contact-detail" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">
              <span className="contact-icon whatsapp-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.15 1.6 5.96L.12 24l6.32-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.42ZM12.1 21.76a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.75.98 1-3.65-.24-.38a9.83 9.83 0 1 1 8.4 4.65Zm5.4-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
              </svg>
            </span>
              <span><small>WHATSAPP</small><strong>Start a conversation</strong></span>
              <ArrowUpRight />
            </a>

            <div className="contact-socials">
              <a className="social-icon github-icon" href="https://github.com/devbhure1123" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.23-5.07-5.48 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.13 1.77 1.13 2.98 0 4.26-2.6 5.2-5.08 5.47.4.35.75 1.02.75 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
              </a>
              <a className="social-icon linkedin-icon" href="https://www.linkedin.com/in/dev-bhure-623818255/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.97V9h2.96v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19 18.5h-2.96v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7H9.78V9h2.84v1.3h.04c.4-.75 1.36-1.53 2.8-1.53 3 0 3.54 1.97 3.54 4.53v5.2Z"/></svg>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a message</h2>
            <label>
              Your name
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" />
            </label>
            <label>
              Your email
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Enter your email" />
            </label>
            <label>
              Your message
              <textarea required rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your idea..." />
            </label>
            <button type="submit" className="contact-submit">Send via WhatsApp <ArrowUpRight size={18} /></button>
            <p className="contact-note">Your message will open in WhatsApp for you to send.</p>
          </form>
        </Reveal>
      </div>
    </div>
  )
}
