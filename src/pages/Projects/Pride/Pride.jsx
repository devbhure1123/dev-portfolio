import { useNavigate } from 'react-router-dom'
import { X, ArrowLeft, Download } from 'lucide-react'
import './Pride.css'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'

export default function Pride() {
  const navigate = useNavigate()

  return (
    <main className="orvion-page pride-page">
      <button className="orvion-close" onClick={() => navigate('/projects')} aria-label="Close project"><X /></button>
      <header className="orvion-page-header">
        <span>PROJECT / 04</span>
        <h1>PRIDE</h1>
        <p>A dark, neon-lit landing page for a music streaming platform that promises uninterrupted, ad-free listening.</p>
      </header>
      <section className="orvion-case-study">
        <div className="orvion-section-heading">
          <h2>CASE STUDY</h2>
          <a href="/pdfs/pride/case-study.pdf" download><Download size={16} /> Download PDF</a>
        </div>
        <PDFViewer file="/pdfs/pride/case-study.pdf" title="PRIDE UI/UX Case Study" />
      </section>
      <section className="orvion-ui-design">
        <div className="orvion-section-heading"><h2>UI DESIGN</h2></div>
        <img src="/images/projects/pride/ui-design.jpeg" alt="PRIDE music streaming website UI design" />
      </section>
      <button className="orvion-back-link" onClick={() => navigate('/projects')}><ArrowLeft size={16} /> Back to Projects</button>
    </main>
  )
}
