import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = document.querySelector('.custom-cursor')
    if (!cursor) return

    const move = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="custom-cursor" aria-hidden="true" />
}
