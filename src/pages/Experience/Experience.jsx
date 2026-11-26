import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase, MapPin, CalendarDays, UserRound, Palette, Image, Share2 } from 'lucide-react'
import mamoLogo from '../../assets/mamo-logo.jpg'
import './Experience.css'

const responsibilities = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designed website pages, dashboards, app screens, forms, cards and interactive prototypes.',
  },
  {
    icon: Image,
    title: 'Graphic Design',
    description: 'Created promotional creatives, recruitment posts, product ads, workshop promotions and illustrations.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Worked on Instagram, LinkedIn and Google Business Profile content, captions, scheduling and engagement monitoring.',
  },
]

export default function Experience() {
  const reduceMotion = useReducedMotion()

  const headingMotion = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: -35 }, whileInView: { opacity: 1, y: 0 } }

  const leftMotion = reduceMotion
    ? {}
    : { initial: { opacity: 0, x: -55, y: 25 }, whileInView: { opacity: 1, x: 0, y: 0 } }

  const rightMotion = reduceMotion
    ? {}
    : { initial: { opacity: 0, x: 55, y: 25 }, whileInView: { opacity: 1, x: 0, y: 0 } }

  return (
    <div className="page inner-page experience-page">
      <motion.header
        className="experience-heading"
        {...headingMotion}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">MY PROFESSIONAL JOURNEY</p>
        <h1>Experience that <span>shapes</span> my creativity.</h1>
        <p className="experience-subtitle">
          A look at what I've learned, created and contributed along the way.
        </p>
      </motion.header>

      <div className="experience-layout">
        <motion.aside
          className="experience-visual"
          {...leftMotion}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mamo-sticky">
            <div className="mamo-orbit" aria-label="MaMo TechnoLabs logo">
              <div className="mamo-orbit-dots" />
              <div className="mamo-logo-holder">
                <img src={mamoLogo} alt="MaMo TechnoLabs logo" />
              </div>
            </div>
            <p className="mamo-caption">MA MO TECHNO LABS</p>
          </div>
        </motion.aside>

        <motion.article
          className="experience-details"
          {...rightMotion}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="experience-card-header">
            <div>
              <span className="experience-type">INTERNSHIP</span>
              <h2>UI/UX Designer Intern</h2>
              <h3>MaMo TechnoLabs</h3>
            </div>
            <span className="experience-duration">3 Months</span>
          </div>

          <div className="experience-meta">
            <span><CalendarDays size={15} /> 14 Aug 2026 – 13 Nov 2026</span>
            <span><MapPin size={15} /> Vadodara</span>
            <span><UserRound size={15} /> Mentor: Muskan Shekh</span>
          </div>

          <p className="experience-description">
            Worked across UI/UX design, graphic design and social media
            management, creating digital interfaces and visual content for
            multiple client projects.
          </p>

          <div className="experience-responsibilities">
            <p className="responsibilities-label">ROLE & RESPONSIBILITIES</p>
            {responsibilities.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                className="responsibility-card"
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              >
                <span className="responsibility-icon"><Icon size={19} /></span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </div>
    </div>
  )
}
