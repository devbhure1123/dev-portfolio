import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Reveal from '../../components/animations/Reveal'
import { siteConfig } from '../../data/site'
import './Contact.css'

export default function Contact() {
  const whatsappURL = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <div className="page inner-page contact-page">
      <Reveal>
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h1>Let's create something <span>meaningful.</span></h1>
        <p className="page-lead">Have an idea, a question or an opportunity? I'd love to hear from you.</p>
        <a className="contact-card" href={whatsappURL} target="_blank" rel="noreferrer">
          <span className="contact-icon"><MessageCircle /></span>
          <span><small>LET'S CHAT ON WHATSAPP</small><strong>Start a conversation</strong></span>
          <ArrowUpRight />
        </a>
        <p className="contact-note">WhatsApp number will be configured once your number is added.</p>
      </Reveal>
    </div>
  )
}
