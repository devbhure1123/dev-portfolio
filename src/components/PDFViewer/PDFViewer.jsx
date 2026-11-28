import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import './PDFViewer.css'

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker

export default function PDFViewer({ file, title = 'Case Study' }) {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(700)
  const [numPages, setNumPages] = useState(0)
  const [error, setError] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.max(280, Math.floor(entry.contentRect.width)))
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pdf-viewer-container" ref={containerRef}>
      <Document
        file={file}
        onLoadSuccess={({ numPages: total }) => {
          setNumPages(total)
          setError(false)
        }}
        onLoadError={() => setError(true)}
        loading={<p className="pdf-viewer-status">Loading {title}...</p>}
        error={<p className="pdf-viewer-status">Unable to load this PDF.</p>}
      >
        {error ? null : Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`${file}-${index + 1}`}
            pageNumber={index + 1}
            width={Math.min(width, 1000)}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="pdf-viewer-page"
          />
        ))}
      </Document>
    </div>
  )
}
