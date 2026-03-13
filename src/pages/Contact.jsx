import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import useWhatsApp from '../hooks/useWhatsApp'
import './Contact.css'

export default function Contact() {
  useScrollReveal()
  const { openWhatsApp } = useWhatsApp()

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    date: '', guests: '', occasion: '', notes: '',
  })

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    const msg =
      `Hello Drizzle! I'd like to make a reservation.\n\n` +
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Date: ${form.date || 'TBD'}\n` +
      `Guests: ${form.guests || 'TBD'}\n` +
      `Occasion: ${form.occasion || 'Dinner'}` +
      (form.notes ? `\nSpecial Requests: ${form.notes}` : '')
    openWhatsApp(msg)
  }

  return (
    <main>
      <div className="contact-wrap">

        {/* Info */}
        <div className="contact-info reveal-left">
          <span className="eyebrow">Get in Touch</span>
          <h1>Let's Plan<br /><em>Your Evening</em></h1>
          <p className="contact-intro">
            Whether you'd like to make a reservation, enquire about a special occasion,
            or simply say hello — we're here to help.
          </p>

          <div className="contact-block">
            <h4>Location</h4>
            <address>Courtallam, Tenkasi 627807<br />Tamil Nadu, India</address>
          </div>

          <div className="contact-block">
            <h4>Hours</h4>
            <p>Monday – Thursday: 5:00 PM – 10:30 PM<br />
               Friday – Saturday: 5:00 PM – 11:30 PM<br />
               Sunday: Closed</p>
          </div>

          <div className="contact-block">
            <h4>Reservations</h4>
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
            <a href="mailto:reservations@drizzlerestaurant.com">reservations@drizzle.com</a>
          </div>

          <button className="wa-btn" onClick={() => openWhatsApp()}>
            <span>📱</span> Reserve via WhatsApp
          </button>
        </div>

        {/* Form */}
        <div className="contact-form reveal-right">
          <h2>Send an Enquiry</h2>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Arun" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Kumar" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input name="date" type="date" value={form.date} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Guests</label>
              <select name="guests" value={form.guests} onChange={handleChange}>
                <option value="">Select</option>
                <option>1 – 2</option>
                <option>3 – 4</option>
                <option>5 – 8</option>
                <option>9+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Occasion</label>
            <select name="occasion" value={form.occasion} onChange={handleChange}>
              <option value="">Select</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Proposal</option>
              <option>Business Dinner</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Special Requests</label>
            <textarea name="notes" value={form.notes} onChange={handleChange}
              placeholder="Dietary requirements, allergies, special arrangements..." />
          </div>

          <button className="btn btn-gold form-submit" onClick={handleSubmit}>
            Send via WhatsApp
          </button>
          <p className="form-note">
            Submitting opens WhatsApp with your enquiry pre-filled.
          </p>
        </div>

      </div>
    </main>
  )
}