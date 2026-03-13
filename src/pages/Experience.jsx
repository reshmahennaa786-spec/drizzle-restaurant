import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import useWhatsApp from '../hooks/useWhatsApp'
import './Experience.css'

const PILLARS = [
  {
    icon: '🍽',
    title: 'Culinary Mastery',
    desc: "Every dish is composed with surgical precision. Our chefs blend classical French training with the bold spice palette of coastal Tamil Nadu — creating something entirely new.",
  },
  {
    icon: '🕯',
    title: 'Atmosphere & Ambience',
    desc: "Our dining room is an architecture of mood — candlelit tables, black marble, 24k gold accents, and a curated soundscape that disappears into the background of conversation.",
  },
  {
    icon: '🥂',
    title: 'Exceptional Service',
    desc: "Your evening is choreographed. Every server anticipates without interrupting, creating the invisible infrastructure of a perfect night near the falls.",
  },
]

const STATS = [
  { num: '7+',  label: 'Years of Excellence' },
  { num: '50+', label: 'Signature Dishes' },
  { num: '98%', label: 'Guest Satisfaction' },
  { num: '4.8★', label: 'Average Rating' },
]

export default function Experience() {
  useScrollReveal()
  const { openWhatsApp } = useWhatsApp()

  return (
    <main>
      <div className="page-hero">
        <span className="eyebrow reveal">The Drizzle Experience</span>
        <h1 className="reveal d1">Where Every Drop<br /><em>Tells a Story</em></h1>
        <div className="gold-line reveal d2" />
        <p className="hero-desc reveal d3">
          At Drizzle, we blend classic techniques with modern innovation to create
          an evening of unparalleled beauty and flavour.
        </p>
      </div>

      {/* Pillars */}
      <section className="pillars">
        <h2 className="pillars-title reveal">What Makes Us Extraordinary</h2>
        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <div key={i} className={`pillar-card reveal d${i + 1}`}>
              <span className="pillar-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stats-row">
          {STATS.map((s, i) => (
            <div key={i} className={`stat-block reveal d${i + 1}`}>
              <div className="stat-num">{s.num}</div>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Split */}
      <section className="split" style={{ background: 'var(--black)' }}>
        <div className="split-text reveal-left">
          <span className="eyebrow">Our Heritage</span>
          <h2>Born in Moonlight,<br />Perfected in Fire</h2>
          <p>
            Drizzle was founded on a singular belief: that a meal is not sustenance,
            but theatre. That a table set for two is a stage.
          </p>
          <p>
            Nestled near Courtallam's legendary waterfalls, we draw our inspiration
            from the natural abundance of Tamil Nadu — spices, seafood, and an
            agricultural tradition as rich as the soil itself.
          </p>
          <button className="btn-text" onClick={openWhatsApp}>Reserve Your Evening</button>
        </div>
        <div className="split-img reveal-right">
          <img src="/images/gallery/exp-dish.png" alt="Drizzle dining experience" />
        </div>
      </section>
    </main>
  )
}