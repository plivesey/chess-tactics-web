import { Route, Routes, Link } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Terms from './Terms.jsx'
import Privacy from './Privacy.jsx'
import Tactic from './Tactic.jsx'
import Chess123Home from './Chess123Home.jsx'
import Chess123Privacy from './Chess123Privacy.jsx'
import usePageTitle from './usePageTitle.js'

function Legal({ title, children }) {
  usePageTitle(title)
  return <div className="legal">{children}</div>
}

function NotFound() {
  usePageTitle('Page not found')
  return (
    <div className="legal">
      <h1>Page not found</h1>
      <p>
        That page doesn’t exist. <Link to="/">Go to the home page</Link>.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {['/terms', '/terms.html'].map((path) => (
          <Route key={path} path={path} element={<Legal title="Terms of Service | Chess Tactics & Lessons"><Terms /></Legal>} />
        ))}
        {['/privacy', '/privacy.html'].map((path) => (
          <Route key={path} path={path} element={<Legal title="Privacy Policy | Chess Tactics & Lessons"><Privacy /></Legal>} />
        ))}
        {['/123chess', '/123chess.html'].map((path) => (
          <Route key={path} path={path} element={<Chess123Home />} />
        ))}
        {['/123chess/privacy', '/123chess/privacy.html'].map((path) => (
          <Route key={path} path={path} element={<Legal title="123 Chess Privacy Policy"><Chess123Privacy /></Legal>} />
        ))}
        <Route path="/t/:id" element={<Tactic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
