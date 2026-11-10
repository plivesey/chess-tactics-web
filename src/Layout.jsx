import { Link } from 'react-router-dom'
import Icon from './assets/Icon.png'
import { CONTACT_EMAIL } from './constants.js'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <img src={Icon} alt="" width="36" height="36" />
        <span>Chess Tactics &amp; Lessons</span>
      </Link>
    </header>
  )
}

export function SiteFooter({ showTerms = true }) {
  return (
    <footer className="site-footer">
      <p>An app by Lockwood Productions LLC</p>
      <nav aria-label="Footer">
        <a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a>
        {showTerms && <Link to="/terms">Terms of service</Link>}
        <Link to="/privacy">Privacy policy</Link>
      </nav>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
