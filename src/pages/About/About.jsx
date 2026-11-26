import Reveal from '../../components/animations/Reveal'
import { siteConfig } from '../../data/site'
import './About.css'

export default function About() {
  return (
    <div className="page inner-page about-page">
      <Reveal>
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h1>Designing with curiosity.<br />Building with <span>purpose.</span></h1>
      </Reveal>

      <div className="about-layout">
        <Reveal>
          <div className="about-intro">
            <p className="about-highlight">Hello, I'm {siteConfig.name}.</p>
            <p>
              I'm a UI/UX designer with a creative mindset and a growing passion
              for frontend development. I enjoy turning ideas into thoughtful,
              intuitive and visually engaging digital experiences.
            </p>
            <p>
              My journey started with a Diploma in Mechatronics, and I'm now
              pursuing a B.E. in Computer Science. This mix of technical learning
              and creativity shapes how I approach design and problem-solving.
            </p>
            <p>
              During my UI/UX design internship at MaMo TechnoLabs, I worked on
              interface design, graphic creatives and social media content.
              I'm currently exploring frontend development, Meta Ads and AI
              design tools to keep expanding my creative skill set.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-highlights">
            <div className="about-card">
              <span>01</span>
              <h3>Design Mindset</h3>
              <p>Creating clean, intuitive and meaningful user experiences.</p>
            </div>
            <div className="about-card">
              <span>02</span>
              <h3>Creative Thinking</h3>
              <p>Exploring visual storytelling, graphics and fresh ideas.</p>
            </div>
            <div className="about-card">
              <span>03</span>
              <h3>Always Learning</h3>
              <p>Growing my skills in frontend development and digital marketing.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
