import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Button from '../../components/common/Button'
import Reveal from '../../components/animations/Reveal'
import { projects } from '../../data/site'
import './Home.css'

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero section">
        <div className="hero-content">
          <Reveal>
            <div className="availability">
              <span className="availability-dot" />
              AVAILABLE FOR FREELANCE PROJECTS
            </div>

            <p className="eyebrow hero-eyebrow">
              UI/UX DESIGNER <span>✳</span> FULL STACK DEVELOPER
            </p>

            <h1>
              Designing digital
              <br />
              experiences that <span>feel different.</span>
            </h1>

            <p className="hero-description">
              I combine thoughtful design, creative technology and motion
              to build meaningful digital experiences.
            </p>

            <div className="hero-actions">
              <Button href="/projects">
                Explore My Work
              </Button>
            </div>
          </Reveal>
        </div>

        <a href="#intro" className="scroll-cue">
          <ArrowDown size={17} /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="section intro-section" id="intro">
        <Reveal>
          <p className="eyebrow">01 / THE INTRODUCTION</p>
          <h2>Good design is not just what you see. It's what you <span>experience.</span></h2>
        </Reveal>
      </section>

      <section className="section featured-section">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>Things I've created.</h2>
            </div>
            <a className="text-link" href="/projects">
              All projects <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.number}>
              <a href="/projects" className="project-card">
                <div className="project-art">
                  <span>{project.number}</span>
                  <ArrowUpRight />
                </div>
                <div className="project-meta">
                  <div><h3>{project.title}</h3><p>{project.category}</p></div>
                  <span>{project.year}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
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
