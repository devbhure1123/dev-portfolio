import { useNavigate } from 'react-router-dom'
import { X, ArrowLeft, Download } from 'lucide-react'
import './Novique.css'

export default function Novique() {
  const navigate = useNavigate()

  return (
    <main className="orvion-page novique-page">
      <button className="orvion-close" onClick={() => navigate('/projects')} aria-label="Close project">
        <X />
      </button>

      <header className="orvion-page-header">
        <span>PROJECT / 02</span>
        <h1>NOVIQUE</h1>
        <p>A premium storefront homepage built around large lifestyle photography, a restrained black and warm-neutral palette, and a clear path from discovery to purchase.</p>
      </header>

      <section className="orvion-case-study">
        <div className="orvion-section-heading">
          <h2>CASE STUDY</h2>
          <a href="/pdfs/novique/case-study.pdf" download>
            <Download size={16} /> Download PDF
          </a>
        </div>
        <iframe
          className="orvion-pdf-viewer"
          src="/pdfs/novique/case-study.pdf#toolbar=0&navpanes=0&scrollbar=0"
          title="NOVIQUE UI/UX Case Study"
        />
      </section>

      <section className="orvion-ui-design">
        <div className="orvion-section-heading">
          <h2>UI DESIGN</h2>
        </div>
        <img src="/images/projects/novique/ui-design.png" alt="NOVIQUE website UI design" />
      </section>

      <button className="orvion-back-link" onClick={() => navigate('/projects')}>
        <ArrowLeft size={16} /> Back to Projects
      </button>
    </main>
  )
}
