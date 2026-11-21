import Reveal from '../../components/animations/Reveal'
import './Tech.css'

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'GSAP', 'Three.js', 'Git']

export default function Tech() {
  return (
    <div className="page inner-page">
      <Reveal><p className="eyebrow">THE BUILDING BLOCKS</p><h1>Technology meets <span>creativity.</span></h1><p className="page-lead">Technologies I use to bring digital ideas to life.</p></Reveal>
      <div className="tech-grid">
        {technologies.map((tech, index) => <Reveal key={tech} delay={index * 0.04}><div className="tech-card"><span>0{index + 1}</span><h3>{tech}</h3></div></Reveal>)}
      </div>
    </div>
  )
}
