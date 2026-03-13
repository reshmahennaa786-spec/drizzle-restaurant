import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import useWhatsApp from '../hooks/useWhatsApp'
import './Home.css'

// Image imports — drop your .png files in public/images/
const IMG = {
  heroBg:      '/images/hero/hero-bg.png',
  expDish:     '/images/gallery/exp-dish.png',
  prawnBisque: '/images/dishes/prawn-bisque.png',
  wagyu:       '/images/dishes/lamb.png',
  dessert:     '/images/dishes/dessert.png',
  storyDining: '/images/gallery/story-dining.png',
}

const PLATES = [
  {
    img:    IMG.prawnBisque,
    course: 'First Course',
    name:   'Courtallam Prawn Curry',
    desc:   'Tiger prawns simmered in a bold Chettinad coconut gravy, tempered with curry leaves, mustard and dried red chilli.',
  },
  {
    img:    IMG.wagyu,
    course: 'Main Course',
    name:   'Tandoori Lamb Chops',
    desc:   'Charcoal-grilled lamb chops in Chettinad spice marinade, saffron corn purée, tamarind jus, edible flowers.',
  },
  {
    img:    IMG.dessert,
    course: 'Dessert',
    name:   'Dark Chocolate & Hazelnut Sphere',
    desc:   'Valrhona chocolate, toasted Piedmont hazelnuts, and a warm salted caramel pour.',
  },
]

const MENU_ITEMS = [
  { name: 'Courtallam Prawn Curry',    desc: 'Tiger prawns in Chettinad coconut gravy, curry leaves, raw mango.',    price: '₹1,600' },
  { name: 'Kakori Seekh Kebab',        desc: 'Melt-in-mouth minced lamb, attar of rose, smoked plum chutney.',       price: '₹1,500' },
  { name: 'Tandoori Lamb Chops',       desc: 'Charcoal-grilled chops, Chettinad marinade, saffron corn purée.',      price: '₹4,500' },
  { name: 'Rasmalai Tres Leches',      desc: 'Chenna dumplings, cardamom-saffron cream, pistachio crumble.',         price: '₹950'  },
]

const MARQUEE = ['Fine Dining', 'Curated Menus', 'Exceptional Wines', 'Moonlit Evenings', "Chef's Table", 'Coastal Flavours']

export default function Home() {
  useScrollReveal()
  const { openWhatsApp } = useWhatsApp()
  const heroBgRef = useRef(null)

  // Hero parallax
  useEffect(() => {
    const onScroll = () => {
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Card tilt
  const handleTilt = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-6px)`
  }

  const resetTilt = (e) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div
          className="hero-bg"
          ref={heroBgRef}
          style={{
            backgroundImage: `url(${IMG.heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="hero-bg-fallback" />
        <div className="hero-glow" />
        <div className="hero-vignette" />

        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">A Culinary Symphony</span>
          <h1 className="hero-title">
            Drizzle — Dine in<br />
            <em>the Moonlight</em>
          </h1>
          <p className="hero-sub">
            Discover an evening shaped around precision, atmosphere,
            and exceptional service near Courtallam Falls.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-outline-gold" onClick={openWhatsApp}>Reserve a Table</button>
            <Link to="/menu" className="btn btn-outline">Explore Menu</Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="philosophy">
        <span className="eyebrow reveal" style={{ textAlign: 'center' }}>Our Philosophy</span>
        <div className="gold-line reveal d1" />
        <blockquote className="philosophy-quote reveal d2">
          "We believe that true luxury lies in the unseen details — the perfect
          temperature of a plate, the ambient glow of the dining room, and
          ingredients sourced at their absolute peak."
        </blockquote>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <div className="marquee-item" key={i}>
              {item} <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPERIENCE SPLIT ── */}
      <section className="split" style={{ background: 'var(--dark)' }}>
        <div className="split-text reveal-left">
          <span className="eyebrow">The Experience</span>
          <h2>Where Every Drop<br />Tells a Story</h2>
          <p>
            Step into a world of refined gastronomy. At Drizzle, we blend
            classic techniques with modern innovation to create dishes as
            visually stunning as they are delicious.
          </p>
          <p>
            Our black and gold dining room sets the stage for an unforgettable
            evening of luxury and exceptional service.
          </p>
          <Link to="/experience" className="btn-text">Discover Our Story</Link>
        </div>
        <div className="split-img reveal-right">
          <img src={IMG.expDish} alt="Signature dish at Drizzle" />
        </div>
      </section>

      {/* ── SIGNATURE PLATES ── */}
      <section className="signature">
        <div className="section-header">
          <div>
            <span className="eyebrow reveal">Signature Plates</span>
            <h2 className="reveal d1">A Taste of Drizzle</h2>
          </div>
          <Link to="/menu" className="btn btn-outline reveal d2">View Full Menu</Link>
        </div>

        <div className="plates-grid">
          {PLATES.map((plate, i) => (
            <article
              key={i}
              className={`plate-card reveal d${i + 1}`}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="plate-overlay" />
              <img src={plate.img} alt={plate.name} className="plate-img" />
              <div className="plate-info">
                <p className="plate-course">{plate.course}</p>
                <h3 className="plate-name">{plate.name}</h3>
                <p className="plate-desc">{plate.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── MENU GLIMPSE ── */}
      <section className="menu-glimpse">
        <div className="menu-glimpse-inner">
          <span className="eyebrow reveal" style={{ textAlign: 'center' }}>Signature Selections</span>
          <h2 className="reveal d1">A Glimpse of the Menu</h2>

          <div className="menu-list">
            {MENU_ITEMS.map((item, i) => (
              <div className={`menu-item reveal d${i + 1}`} key={i}>
                <div className="menu-item-left">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="menu-glimpse-cta reveal">
            <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ── STORY SPLIT ── */}
      <section className="split story-split">
        <div className="split-img reveal-left">
          <img src={IMG.storyDining} alt="A Unique Dining Experience at Drizzle" />
        </div>
        <div className="split-text reveal-right">
          <span className="eyebrow">Our Story</span>
          <h2>A Unique Dining<br />Experience</h2>
          <p>Where ambience, flavour, and creativity come together to create unforgettable dining moments.</p>
          <p>Our restaurant blends modern design with warm lighting and handcrafted dishes.</p>
          <p>Every detail, from the ambience to the grill, is designed to give you an experience that goes beyond fine dining.</p>

          <div className="story-badges">
            <div className="badge">🔥 50+ Signature Dishes</div>
            <div className="badge">⭐ 4.8 Customer Rating</div>
          </div>

          <div className="story-ctas">
            <Link to="/menu" className="btn btn-gold">Explore Menu</Link>
            <button className="btn btn-outline" onClick={openWhatsApp}>Reserve a Table</button>
          </div>
        </div>
      </section>
    </main>
  )
}