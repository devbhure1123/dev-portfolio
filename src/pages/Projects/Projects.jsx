import { ArrowUpRight } from 'lucide-react'
import Reveal from '../../components/animations/Reveal'
import { projects } from '../../data/site'
import './Projects.css'

export default function Projects() {
  return (
    <div className="page inner-page">
      <Reveal><p className="eyebrow">SELECTED WORK / 2026</p><h1>Ideas turned into <span>experiences.</span></h1><p className="page-lead">A collection of experiments, concepts and digital products.</p></Reveal>
      <div className="project-grid projects-list">
        {projects.map((project) => (
          <Reveal key={project.number}>
            <article className="project-card">
              <div className="project-art"><span>{project.number}</span><ArrowUpRight /></div>
              <div className="project-meta"><div><h3>{project.title}</h3><p>{project.category}</p></div><span>{project.year}</span></div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
