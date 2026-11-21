import Reveal from '../../components/animations/Reveal'
import { siteConfig } from '../../data/site'
import './About.css'

export default function About() {
  return (
    <div className="page inner-page about-page">
      <Reveal><p className="eyebrow">A LITTLE ABOUT ME</p><h1>Curiosity drives<br />my <span>creativity.</span></h1></Reveal>
      <Reveal><div className="about-content"><p className="about-highlight">Hello, I'm {siteConfig.name}.</p><p>I'm a designer and creative developer interested in crafting thoughtful, intuitive and visually engaging digital experiences.</p><p>This space is where design, technology and experimentation come together. More of my story will be added as this portfolio evolves.</p></div></Reveal>
    </div>
  )
}
