import Chess123Icon from './assets/Chess123Icon.png'
import AppStoreBadge from './AppStoreBadge.jsx'
import usePageTitle from './usePageTitle.js'
import { CHESS123_APP_STORE_URL } from './constants.js'

export default function Chess123Home() {
  usePageTitle('123 Chess - Learn Chess for Toddlers')

  return (
    <section className="tactic">
      <img className="app-icon" src={Chess123Icon} alt="" width="120" height="120" />
      <h1>123 Chess</h1>
      <p>A chess learning app for toddlers.</p>
      <div className="actions">
        <AppStoreBadge href={CHESS123_APP_STORE_URL} label="Download 123 Chess on the App Store" />
      </div>
    </section>
  )
}
