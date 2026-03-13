import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import useWhatsApp from '../hooks/useWhatsApp'
import './Menu.css'

const TABS = ['Tasting Menu', 'Starters', 'Mains', 'Breads & Rice', 'Desserts', 'Beverages']

const MENU_DATA = {
  'Tasting Menu': [
    { name: "Amuse-Bouche",               desc: "Chef's welcome — miniature pani puri with raw mango & tamarind water, served tableside.",            price: "Included" },
    { name: "Murgh Tikka Cappuccino",      desc: "Velvety smoked chicken broth, kasuri methi foam, saffron oil — served in a porcelain cup.",          price: "Included" },
    { name: "Courtallam Prawn Curry",      desc: "Tiger prawns slow-cooked in a Chettinad coconut gravy, tempered with curry leaves, finished with raw mango.",  price: "Included" },
    { name: "Kakori Seekh Kebab",          desc: "Melt-in-mouth minced lamb, raw papaya tenderise, attar of rose, smoked plum chutney.",               price: "Included" },
    { name: "Raan-e-Drizzle",             desc: "18-hour braised lamb shank, royal korma, caramelised onion, saffron jus, 24k gold leaf.",             price: "Included" },
    { name: "Dal Drizzle",                 desc: "Black lentils slow-cooked 18 hours, cultured butter, garlic tadka, crispy shallots.",                price: "Included" },
    { name: "Rasmalai Tres Leches",        desc: "Chenna dumplings soaked in cardamom-saffron cream, pistachio crumble, rose water mist.",             price: "Included" },
    { name: "7-Course Chef's Tasting",     desc: "Per person · Signature mocktail pairing +₹1,200 · Wine pairing +₹3,500",                            price: "₹9,500", highlight: true },
  ],

  'Starters': [
    { name: "Courtallam Prawn Curry",      desc: "Tiger prawns slow-cooked in a Chettinad coconut gravy, tempered with curry leaves, finished with raw mango.",  price: "₹1,600" },
    { name: "Murgh Malai Seekh",           desc: "Minced chicken with aged cheese & green cardamom, smoked over charcoal, saffron mayo.",              price: "₹1,400" },
    { name: "Tandoori Lobster",            desc: "Whole lobster tail, ajwain butter baste, pickled fennel, Goan chilli chutney.",                      price: "₹2,800" },
    { name: "Kakori Seekh Kebab",          desc: "Melt-in-mouth minced lamb, raw papaya tenderise, attar of rose, smoked plum chutney.",               price: "₹1,500" },
    { name: "Scallop Amritsari",           desc: "Pan-seared scallops in spiced gram flour crust, tamarind glaze, pickled onion rings.",               price: "₹2,200" },
    { name: "Aloo Anardana Tikki (V)",     desc: "Crispy potato patties, pomegranate reduction, whipped yoghurt, microgreens.",                        price: "₹950"  },
    { name: "Mushroom Galawat (V)",        desc: "Forest mushroom patties with truffle & mace, saffron brioche, mint foam.",                           price: "₹1,200" },
    { name: "Paneer Shashlik (V)",         desc: "Tandoor-charred cottage cheese, peppers & onion, chaat masala, green chutney.",                      price: "₹1,100" },
  ],

  'Mains': [
    { name: "Raan-e-Drizzle",             desc: "18-hour braised lamb shank, royal korma sauce, caramelised onion, saffron jus, 24k gold leaf.",      price: "₹4,500" },
    { name: "Butter Chicken Royale",       desc: "Free-range chicken, slow-cooked tomato & cashew sauce, hand-churned cultured butter, fenugreek.",    price: "₹2,200" },
    { name: "Chettinad Snapper",           desc: "Line-caught red snapper, black stone flower & kalpasi crust, tamarind rasam velouté.",               price: "₹3,200" },
    { name: "Dum Gosht Biryani",           desc: "Aged basmati, slow-cooked mutton, caramelised onion, saffron & rose water, sealed in dough.",       price: "₹2,800" },
    { name: "Sarson Mahi",                 desc: "River sole fillet in mustard & green chilli sauce, Bengali spice, tempered mustard oil.",            price: "₹2,600" },
    { name: "Paneer Shahi Kofta (V)",      desc: "Hand-rolled cottage cheese dumplings, tomato-cashew gravy, truffle oil finish, gold leaf.",          price: "₹1,800" },
    { name: "Subz Dum Handi (V)",          desc: "Seasonal vegetables in a sealed clay pot, whole spices, cashew cream, saffron.",                     price: "₹1,600" },
    { name: "Dal Drizzle (V)",             desc: "Black lentils simmered 18 hours, cultured butter, garlic tadka, crispy shallots.",                   price: "₹1,100" },
  ],

  'Breads & Rice': [
    { name: "Drizzle Naan (V)",            desc: "Stone-baked in clay oven, brushed with cultured butter and black seed.",                             price: "₹350"  },
    { name: "Truffle Kulcha (V)",          desc: "Leavened bread stuffed with truffle, aged cheese & caramelised onion.",                              price: "₹650"  },
    { name: "Saffron Laccha Paratha (V)",  desc: "Layered whole wheat, saffron-infused dough, slow-cooked on tawa.",                                   price: "₹420"  },
    { name: "Missi Roti (V)",              desc: "Chickpea flour bread with ajwain & fenugreek leaves, charred tandoor finish.",                       price: "₹320"  },
    { name: "Saffron Basmati (V)",         desc: "Aged Dehradun basmati, whole spices, saffron milk, crispy fried onion.",                             price: "₹550"  },
    { name: "Dum Gosht Biryani",           desc: "Slow-cooked mutton, aged basmati, sealed in saffron dough, served with raita.",                      price: "₹2,800" },
    { name: "Vegetable Biryani (V)",       desc: "Seasonal vegetables, caramelised onion, aged basmati sealed in saffron dough.",                      price: "₹1,800" },
  ],

  'Desserts': [
    { name: "Rasmalai Tres Leches",        desc: "Chenna dumplings soaked in cardamom-saffron cream, pistachio crumble, rose water mist.",             price: "₹950"  },
    { name: "Gulab Jamun Fondant",         desc: "Warm milk-solid fondant, rose syrup centre, vanilla kulfi quenelle, edible gold dust.",              price: "₹850"  },
    { name: "Mango Shrikhand Tart",        desc: "Alphonso mango gel, hung curd cream, cardamom sablé, saffron caviar pearls.",                        price: "₹900"  },
    { name: "Chocolate Barfi Dome",        desc: "Dark chocolate shell, khoya & pistachio barfi centre, warm rose caramel pour.",                      price: "₹1,100" },
    { name: "Phirni Brûlée",               desc: "Set ground rice pudding, caramelised jaggery crust, fragrant with kewra water.",                     price: "₹750"  },
    { name: "Thandai Panna Cotta",         desc: "Chilled almond & spice set cream, rose petal jam, scattered silver vark.",                           price: "₹850"  },
  ],

  'Beverages': [
    { name: "Drizzle Signature Mocktail",  desc: "Kokum & hibiscus shrub, ginger beer, fresh coconut water, curry leaf garnish.",                      price: "₹650"  },
    { name: "Saffron Lemonade",            desc: "Fresh lime, Kashmiri saffron, black salt, sparkling water.",                                         price: "₹450"  },
    { name: "Rose & Lychee Sharbat",       desc: "Cold-pressed lychee, Taif rose water, basil seeds, crushed ice.",                                    price: "₹500"  },
    { name: "Mango Lassi Royale",          desc: "Alphonso mango, thick yoghurt, cardamom, saffron cream.",                                            price: "₹550"  },
    { name: "Kashmiri Kahwa",              desc: "Green tea, saffron, cinnamon & cardamom, rose petals and almonds.",                                  price: "₹420"  },
    { name: "Filter Kaapi",                desc: "South Indian decoction, full-cream milk, served in traditional stainless steel davara set.",         price: "₹380"  },
    { name: "Masala Chaas",                desc: "Churned yoghurt, roasted cumin, fresh mint, black salt — a palate cleanser.",                        price: "₹350"  },
  ],
}

const CATEGORY_SUBTITLE = {
  'Tasting Menu':  "Chef's Tasting Menu — 7 Courses",
  'Starters':      "Small Plates & Kebabs",
  'Mains':         "Large Plates & Curries",
  'Breads & Rice': "From the Tandoor & Dum",
  'Desserts':      "Sweet Finishes",
  'Beverages':     "Artisanal Drinks & Infusions",
}

export default function Menu() {
  useScrollReveal()
  const [activeTab, setActiveTab] = useState('Tasting Menu')
  const { openWhatsApp } = useWhatsApp()

  const handleTab = (tab) => {
    setActiveTab(tab)
    setTimeout(() => {
      document.querySelectorAll('.menu-section .reveal').forEach(el => {
        el.classList.remove('visible')
        requestAnimationFrame(() => el.classList.add('visible'))
      })
    }, 50)
  }

  return (
    <main>
      <div className="page-hero">
        <span className="eyebrow reveal">Our Offerings</span>
        <h1 className="reveal d1">The Menu at <em>Drizzle</em></h1>
        <div className="gold-line reveal d2" />
        <p className="reveal d3" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>
          (V) Vegetarian &nbsp;·&nbsp; All prices exclude taxes &nbsp;·&nbsp; Seasonal availability may vary
        </p>
      </div>

      <section className="menu-page">
        <div className="menu-tabs reveal">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`menu-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="menu-section">
          <p className="menu-category reveal">{CATEGORY_SUBTITLE[activeTab]}</p>

          <div className="menu-list">
            {MENU_DATA[activeTab].map((item, i) => (
              <div
                key={`${activeTab}-${i}`}
                className={`menu-item reveal d${Math.min(i + 1, 6)} ${item.highlight ? 'highlighted' : ''}`}
              >
                <div className="menu-item-left">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-footer reveal">
          <p className="menu-note">
            Please inform your server of any allergies or dietary requirements.
            Our kitchen handles nuts, dairy, and gluten.
          </p>
          <button className="btn btn-gold" onClick={openWhatsApp}>Reserve a Table</button>
        </div>
      </section>
    </main>
  )
}