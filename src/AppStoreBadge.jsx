import Badge from './assets/DownloadOnAppStore.svg'
import { APP_STORE_URL } from './constants.js'

export default function AppStoreBadge({ href = APP_STORE_URL, label = 'Download Chess Tactics & Lessons on the App Store' }) {
  return (
    <a className="badge" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <img src={Badge} alt="" width="240" height="80" />
    </a>
  )
}
