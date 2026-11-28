import { useNavigate } from 'react-router-dom'
import { X, ArrowLeft, Download } from 'lucide-react'
import './Wearwell.css'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'

export default function Wearwell() {
  const navigate = useNavigate()
  return (
    <main className="orvion-page wearwell-page">
      <button className="orvion-close" onClick={() => navigate('/projects')} aria-label="Close project"><X /></button>
      <header className="orvion-page-header">
        <span>PROJECT / 05</span>
        <h1>WEARWELL</h1>
        <p>A fashion e-commerce landing page for a women’s apparel brand, built on a confident red and blush colour story.</p>
      </header>
      <section className="orvion-case-study">
        <div className="orvion-section-heading">
          <h2>CASE STUDY</h2>
          <a href="/pdfs/wearwell/case-study.pdf" download><Download size={16} /> Download PDF</a>
        </div>
        <PDFViewer file="/pdfs/wearwell/case-study.pdf" title="WEARWELL UI/UX Case Study" />
      </section>
      <section className="orvion-ui-design">
        <div className="orvion-section-heading"><h2>UI DESIGN</h2></div>
        <img src="/images/projects/wearwell/ui-design.png" alt="WEARWELL website UI design" />
      </section>
      <button className="orvion-back-link" onClick={() => navigate('/projects')}><ArrowLeft size={16} /> Back to Projects</button>
    </main>
  )
}
