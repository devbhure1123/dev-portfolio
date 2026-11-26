import { ArrowDown, ArrowUpRight, Palette, Layers, PenTool, Megaphone, Target, Code2 } from 'lucide-react'
import heroBackground from '../../assets/hero-bg.webp'
import Button from '../../components/common/Button'
import Reveal from '../../components/animations/Reveal'
import './Home.css'

const bannerItems = [
  { label: 'UI/UX Design', icon: Palette },
  { label: 'Figma', icon: Layers },
  { label: 'Graphic Design', icon: PenTool },
  { label: 'Social Media', icon: Megaphone },
  { label: 'Meta Ads', icon: Target },
  { label: 'Frontend Development', icon: Code2 },
]

function SkillBanner() {
  return (
    <section className="skill-banner" aria-label="Creative skills and interests">
      <div className="skill-banner-heading">WHAT I LOVE TO EXPLORE</div>
      <div className="hero-marquee">
        <div className="hero-marquee-track">
          {[...bannerItems, ...bannerItems].map((item, index) => {
            const Icon = item.icon
            return (
              <div className="marquee-item" key={`${item.label}-${index}`}>
                <span className="marquee-icon"><Icon size={20} /></span>
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="page home-page">
      <section
        className="hero section"
        style={{ "--hero-bg": `url(${heroBackground})` }}
      >
        <div className="hero-content">
          <Reveal>
            <p className="hero-label">
              <span className="hero-label-dot" />
              UI/UX DESIGNER <span className="hero-label-divider">✳</span> FRONTEND DEVELOPER
            </p>
            <h1>
              Turning Ideas Into
              <span> Digital Experiences.</span>
            </h1>
            <p className="hero-description">
              I turn random ideas into designs that make people stop, explore, and remember.
            </p>
            <a href="#intro" className="scroll-cue">
              <span className="scroll-cue-icon"><ArrowDown size={16} /></span>
              <span>SCROLL TO EXPLORE</span>
            </a>
          </Reveal>
        </div>

        <div className="hero-actions">
          <Button href="/projects" variant="hero-button hero-button-primary">Explore My Work</Button>
          <Button href="/contact" variant="hero-button hero-button-secondary">Let's Connect</Button>
        </div>
      </section>

      <SkillBanner />

      <section className="section intro-section" id="intro">
        <Reveal>
          <p className="eyebrow">01 / THE INTRODUCTION</p>
          <h2>Good design is not just what you see. It's what you <span>experience.</span></h2>
          <p className="page-lead">
            I enjoy exploring visual ideas, creating thoughtful interfaces and learning how design
            meets technology.
          </p>
        </Reveal>
      </section>

      <section className="section featured-section">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>Ideas brought to life.</h2>
            </div>
            <a className="text-link" href="/projects">
              Explore projects <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="page-lead">
            Explore my UI/UX concepts, visual designs and creative experiments.
          </p>
        </Reveal>
      </section>

      <section className="section home-cta">
        <Reveal>
          <p className="eyebrow">03 / WHAT'S NEXT?</p>
          <h2>Have an idea? Let's make it <span>real.</span></h2>
          <Button href="/contact">Let's talk</Button>
        </Reveal>
      </section>
    </div>
  )
}
