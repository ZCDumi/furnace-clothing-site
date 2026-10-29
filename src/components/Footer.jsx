export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <img src="/images/furnace-red.png" alt="Furnace" width="90" height="90" />
      <div className="footer-info">
        <p>Est. 16 September 2026</p>
        <p>By PB Mathebula</p>
        <p>
          Call <a href="tel:+27836576839">083 657 6839</a>
        </p>
        <a
          className="btn btn-whatsapp"
          href="https://wa.me/27836576839?text=Hi%20Furnace%2C%20I%27d%20like%20to%20know%20more%20about%20your%20clothing."
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
        <p className="footer-credit">
          Web developer: Dumisani Mathuthu,{' '}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Dumideekay1@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Dumideekay1@gmail.com
          </a>
        </p>
        <p className="footer-legal">© {new Date().getFullYear()} Furnace. Cougar is a Furnace clothing line.</p>
      </div>
    </footer>
  )
}
