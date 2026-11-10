import { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import AppStoreBadge from './AppStoreBadge.jsx'
import usePageTitle from './usePageTitle.js'

export default function Tactic() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const appLink = `chesstcs://t/${id}`
  usePageTitle('Chess Tactics & Lessons')

  // Links from the app's share sheet add ?redirect=true to open the tactic in the app directly.
  // If the app isn't installed, the page stays on screen.
  useEffect(() => {
    if (searchParams.get('redirect') === 'true') {
      window.location.href = appLink
    }
  }, [searchParams, appLink])

  return (
    <section className="tactic">
      <h1>Open this tactic in the app</h1>
      <p>Download the iOS app to play the tactic, see an explanation, and read the comments.</p>
      <div className="actions">
        <a className="button" href={appLink}>Open in the app</a>
        <AppStoreBadge />
      </div>
      <p><Link to="/">Back to the home page</Link></p>
    </section>
  )
}
