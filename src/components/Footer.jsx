import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="nav-logo">Drizzle</span>
          <p>Elevating the art of dining through passion, precision, and unparalleled luxury.</p>
        </div>

        <div className="footer-col">
          <h4>Location</h4>
          <address>
            Courtallam<br />
            Tenkasi 627807<br />
            Tamil Nadu, India
          </address>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <p>
            Mon – Thu: 5:00 PM – 10:30 PM<br />
            Fri – Sat: 5:00 PM – 11:30 PM<br />
            Sunday: Closed
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
          <a href="mailto:reservations@drizzlerestaurant.com">reservations@drizzle.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Drizzle Restaurant. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}