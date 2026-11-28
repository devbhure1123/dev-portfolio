import { useNavigate } from 'react-router-dom'
import { X, Download, ArrowUpRight } from 'lucide-react'
import './Orvion.css'

export default function Orvion() {
  const navigate = useNavigate()

  return (
    <section className="orvion-page">
      <button
        className="orvion-close"
        onClick={() => navigate('/projects')}
        aria-label="Close ORVION project"
      >
        <X />
      </button>

      <header className="orvion-header">
        <p className="eyebrow">PROJECT / 01 — UI/UX DESIGN</p>
        <h1>ORVION</h1>
        <p>
          A storefront landing page built around product discovery, featured
          campaigns and clear paths to purchase.
        </p>
      </header>

      <section className="orvion-case-study">
        <div className="orvion-section-heading">
          <div>
            <span>01 / CASE STUDY</span>
            <h2>Behind the experience.</h2>
          </div>
          <a href="/pdfs/orvion/case-study.pdf" download>
            <Download /> Download PDF
          </a>
        </div>

        <iframe
          className="orvion-pdf-viewer"
          src="/pdfs/orvion/case-study.pdf#toolbar=0&navpanes=0&scrollbar=0"
          title="ORVION UI/UX Case Study"
        />
      </section>

      <section className="orvion-design">
        <div className="orvion-section-heading">
          <div>
            <span>02 / UI DESIGN</span>
            <h2>The visual experience.</h2>
          </div>
        </div>

        <img
          className="orvion-design-image"
          src="/images/projects/orvion/ui-design.png"
          alt="ORVION website UI design"
        />
      </section>

      <a className="orvion-back-link" href="/projects">
        Back to projects <ArrowUpRight />
      </a>
    </section>
  )
}
