import { useNavigate } from 'react-router-dom'
import { X, ArrowLeft, Download } from 'lucide-react'
import './Lumique.css'

export default function Lumique() {
  const navigate = useNavigate()
  return (
    <main className="orvion-page lumique-page">
      <button className="orvion-close" onClick={() => navigate('/projects')} aria-label="Close project"><X /></button>
      <header className="orvion-page-header">
        <span>PROJECT / 03</span>
        <h1>LUMIQUE SKINCARE</h1>
        <p>A desktop e-commerce homepage for a natural skincare brand, built around trust signals, simple category browsing and calm, product-led imagery.</p>
      </header>
      <section className="orvion-case-study">
        <div className="orvion-section-heading">
          <h2>CASE STUDY</h2>
          <a href="/pdfs/lumique/case-study.pdf" download><Download size={16} /> Download PDF</a>
        </div>
        <iframe className="orvion-pdf-viewer" src="/pdfs/lumique/case-study.pdf#toolbar=0&navpanes=0&scrollbar=0" title="LUMIQUE SKINCARE Case Study" />
      </section>
      <section className="orvion-ui-design">
        <div className="orvion-section-heading"><h2>UI DESIGN</h2></div>
        <img src="/images/projects/lumique/ui-design.png" alt="LUMIQUE SKINCARE website UI design" />
      </section>
      <button className="orvion-back-link" onClick={() => navigate('/projects')}><ArrowLeft size={16} /> Back to Projects</button>
    </main>
  )
}
