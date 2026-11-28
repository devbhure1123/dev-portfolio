import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers, Monitor, Palette, Sparkles, Code2, X, ChevronLeft, ChevronRight, Download } from 'lucide-react'
import Reveal from '../../components/animations/Reveal'
import { projects } from '../../data/site'
import './Projects.css'

const projectVisuals = [
  { icon: Layers, className: 'bento-left', direction: -70 },
  { icon: Monitor, className: 'bento-top-one', direction: -45 },
  { icon: Palette, className: 'bento-top-two', direction: 45 },
  { icon: Sparkles, className: 'bento-center-bottom', direction: 0 },
  { icon: Code2, className: 'bento-right', direction: 70 },
]

const graphicImages = [
  'seo-service-01.png',
  'seo-service-02.png',
  'business-development.png',
  'courses-01.png',
  'courses-02.png',
  'mindset.png',
  'seo-boost.png',
  'career.png',
  'digital-marketing.png',
  'intern-graphic-designer.png',
  'graphic-11.png',
  'graphic-12.png',
  'graphic-13.png',
  'graphic-14.png',
  'graphic-15.png',
  'graphic-16.png',
  'graphic-17.png',
]

const mockupImages = Array.from(
  { length: 15 },
  (_, index) => `mockup-${String(index + 1).padStart(2, '0')}.png`
)

export default function Projects() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedMockup, setSelectedMockup] = useState(null)

  const showPrevious = () => {
    setSelectedImage((current) => (current - 1 + graphicImages.length) % graphicImages.length)
  }

  const showNext = () => {
    setSelectedImage((current) => (current + 1) % graphicImages.length)
  }

  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedImage(null)
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <section className="page inner-page projects-page">
      <Reveal>
        <p className="eyebrow">SELECTED WORK / 2026</p>
        <h1>Ideas turned into <span>experiences.</span></h1>
        <p className="page-lead">
          A collection of experiments, concepts and digital products.
        </p>
      </Reveal>

      <div className="bento-grid">
        {projects.map((project, index) => {
          const visual = projectVisuals[index]
          const ProjectIcon = visual.icon

          return (
            <motion.article
              key={project.number}
              className={`bento-card ${visual.className} ${index === 0 ? 'orvion-bento-card' : index === 1 ? 'novique-bento-card' : index === 2 ? 'lumique-bento-card' : index === 3 ? 'pride-bento-card' : index === 4 ? 'wearwell-bento-card' : ''}`}
              onClick={index === 0 ? () => navigate('/projects/orvion') : index === 1 ? () => navigate('/projects/novique') : index === 2 ? () => navigate('/projects/lumique') : index === 3 ? () => navigate('/projects/pride') : index === 4 ? () => navigate('/projects/wearwell') : undefined}
              onKeyDown={[0, 1, 2, 3, 4].includes(index) ? (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  navigate(['/projects/orvion', '/projects/novique', '/projects/lumique', '/projects/pride', '/projects/wearwell'][index])
                }
              } : undefined}
              role={[0, 1, 2, 3, 4].includes(index) ? 'link' : undefined}
              tabIndex={[0, 1, 2, 3, 4].includes(index) ? 0 : undefined}
              initial={{
                opacity: 0,
                x: visual.direction,
                y: index === 3 ? 65 : index === 1 || index === 2 ? -55 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.1,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bento-card-top">
                <span>PROJECT / {project.number}</span>
                {index > 1 && <span>{project.year}</span>}
              </div>

              {index === 0 ? (
                <div className="orvion-card-media">
                  <img
                    src="/images/projects/orvion/cover.png"
                    alt="ORVION storefront landing page"
                  />
                  <div className="orvion-card-overlay">
                    <div>
                      <span className="bento-category">UI/UX DESIGN</span>
                      <h3>ORVION</h3>
                      <p>{project.description}</p>
                    </div>
                    <span className="bento-open"><ArrowUpRight /></span>
                  </div>
                </div>
              ) : index === 1 ? (
                <div className="novique-card-media">
                  <img
                    src="/images/projects/novique/cover.png"
                    alt="NOVIQUE premium storefront homepage"
                  />
                  <div className="novique-card-overlay">
                    <div>
                      <h3>NOVIQUE</h3>
                      <p>A premium storefront designed for effortless product discovery.</p>
                    </div>
                    <span className="bento-open"><ArrowUpRight /></span>
                  </div>
                </div>
              ) : index === 2 ? (
                <div className="lumique-card-media">
                  <img src="/images/projects/lumique/cover.png" alt="LUMIQUE SKINCARE storefront" />
                  <div className="lumique-card-overlay">
                    <div>
                      <h3>LUMIQUE SKINCARE</h3>
                      <p>{project.description}</p>
                    </div>
                    <span className="bento-open"><ArrowUpRight /></span>
                  </div>
                </div>
              ) : index === 3 ? (
                <div className="pride-card-media">
                  <img src="/images/projects/pride/cover.png" alt="PRIDE music streaming landing page" />
                  <div className="pride-card-overlay">
                    <div>
                      <h3>PRIDE</h3>
                      <p>{project.description}</p>
                    </div>
                    <span className="bento-open"><ArrowUpRight /></span>
                  </div>
                </div>
              ) : index === 4 ? (
                <div className="wearwell-card-media">
                  <img src="/images/projects/wearwell/cover.png" alt="WEARWELL fashion storefront" />
                  <div className="wearwell-card-overlay">
                    <div>
                      <h3>WEARWELL</h3>
                      <p>{project.description}</p>
                    </div>
                    <span className="bento-open"><ArrowUpRight /></span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bento-artwork">
                    <div className="bento-glow" />
                    <div className="bento-icon">
                      <ProjectIcon strokeWidth={1.3} />
                    </div>
                    <span className="bento-decoration">{project.number}</span>
                  </div>

                  <div className="bento-info">
                    <div>
                      <span className="bento-category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <span className="bento-open"><ArrowUpRight /></span>
                  </div>
                </>
              )}
            </motion.article>
          )
        })}
      </div>


      <section className="mockup-showcase-section">
        <Reveal>
          <p className="eyebrow">SELECTED PROJECTS / MOCKUPS</p>
          <h2>MOCKUP <span>GALLERY.</span></h2>
          <p className="page-lead">
            A closer look at my digital product presentations and visual mockups.
          </p>
        </Reveal>

        <div className="mockup-marquee">
          <div className="mockup-marquee-row">
            <div className="mockup-marquee-track">
              {[...mockupImages, ...mockupImages].map((image, index) => (
                <button
                  className="mockup-gallery-card"
                  key={`${image}-${index}`}
                  onClick={() => setSelectedMockup(image)}
                  aria-label="View and download mockup"
                >
                  <img src={`/images/mockup-gallery/${image}`} alt={`Project mockup ${(index % mockupImages.length) + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="graphic-showcase-section">
        <Reveal>
          <p className="eyebrow">CREATIVE WORK / GRAPHIC DESIGN</p>
          <h2>SOCIAL MEDIA <span>GRAPHIC DESIGN.</span></h2>
          <p className="page-lead">
            Explore my graphic design creations in an interactive gallery.
          </p>
        </Reveal>

        <div className="graphic-gallery-stage">
          <div className={`graphic-gallery ${selectedImage !== null ? "is-preview-open" : ""}`}>
            {graphicImages.map((image, index) => (
              <div
                className="graphic-gallery-card"
                key={image}
                style={{ '--gallery-index': index }}
                onClick={() => setSelectedImage(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedImage(index)
                  }
                }}
              >
                <div className="graphic-gallery-image">
                  <img
                    src={`/images/graphic-showcase/${image}`}
                    alt={`Graphic design ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {selectedMockup !== null && (
        <div className="mockup-lightbox" onClick={() => setSelectedMockup(null)}>
          <button className="mockup-lightbox-close" onClick={() => setSelectedMockup(null)} aria-label="Close preview">
            <X />
          </button>
          <img
            src={`/images/mockup-gallery/${selectedMockup}`}
            alt="Selected project mockup"
            onClick={(event) => event.stopPropagation()}
          />
          <a
            className="mockup-lightbox-download"
            href={`/images/mockup-gallery/${selectedMockup}`}
            download
            onClick={(event) => event.stopPropagation()}
          >
            <Download /> Download
          </a>
        </div>
      )}

      {selectedImage !== null && (
        <div className="graphic-lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close preview">
            <X />
          </button>

          <button className="lightbox-prev" onClick={(event) => { event.stopPropagation(); showPrevious() }} aria-label="Previous image">
            <ChevronLeft />
          </button>

          <img
            className="lightbox-image"
            src={`/images/graphic-showcase/${graphicImages[selectedImage]}`}
            alt={`Graphic design ${selectedImage + 1}`}
            onClick={(event) => event.stopPropagation()}
          />

          <button className="lightbox-next" onClick={(event) => { event.stopPropagation(); showNext() }} aria-label="Next image">
            <ChevronRight />
          </button>

          <a
            className="lightbox-download"
            href={`/images/graphic-showcase/${graphicImages[selectedImage]}`}
            download
            onClick={(event) => event.stopPropagation()}
          >
            <Download /> Download
          </a>
        </div>
      )}
    </section>
  )
}
