import { ArrowUpRight, Layers, Monitor, Palette } from 'lucide-react'
import Reveal from '../../components/animations/Reveal'
import { projects } from '../../data/site'
import './Projects.css'

const projectStyles = [
  'project-visual-one',
  'project-visual-two',
  'project-visual-three',
]

const projectIcons = [Layers, Monitor, Palette]

export default function Projects() {
  return (
    <section className="page inner-page projects-page">
      <Reveal>
        <p className="eyebrow">SELECTED WORK / 2026</p>
        <h1>Ideas turned into <span>experiences.</span></h1>
        <p className="page-lead">
          A collection of experiments, concepts and digital products.
        </p>
      </Reveal>

      <div className="projects-list">
        {projects.map((project, index) => {
          const ProjectIcon = projectIcons[index % projectIcons.length]

          return (
            <Reveal key={project.number}>
              <article className="project-card">
                <div className={`project-art ${projectStyles[index % projectStyles.length]}`}>
                  <div className="project-art-top">
                    <span>PROJECT / {project.number}</span>
                    <span>2026</span>
                  </div>

                  <div className="project-preview">
                    <div className="preview-window">
                      <div className="preview-toolbar">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="preview-content">
                        <div className="preview-copy">
                          <span className="preview-label">CREATIVE CONCEPT</span>
                          <strong>{project.title}</strong>
                          <i />
                          <i />
                        </div>
                        <div className="preview-shape">
                          <ProjectIcon />
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow"><ArrowUpRight /></span>
                </div>

                <div className="project-meta">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                  <span>{project.year}</span>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
