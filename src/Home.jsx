import { useState } from 'react'
import TacticVideo from './assets/TacticVideo.mp4'
import TacticImage from './assets/Tactic.png'
import Frame from './assets/Frame.png'
import AppStoreBadge from './AppStoreBadge.jsx'
import usePageTitle from './usePageTitle.js'

const FEATURES = [
  ['Over 30,000 free tactics', 'Puzzles from first checkmates to positions that stump grandmasters.'],
  ['Guided lessons', 'Learn strategy step by step, with lessons for beginner and intermediate players.'],
  ['Opening practice', 'Drill the openings you want to play.'],
  ['Make your own tactics', 'Create a position and share it with every player in the app.'],
]

export default function Home() {
  const [solved, setSolved] = useState(false)
  usePageTitle('Chess Tactics & Lessons')

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Find the winning move.</h1>
          <p className="lede">
            Over 30,000 free chess tactics, guided lessons and opening practice for iPhone and iPad.
            Made for beginners, strong enough for grandmasters.
          </p>
          <AppStoreBadge />
        </div>

        <div className="hero-stage">
          <div className="phone">
            <div className="screen">
              {solved ? (
                <video src={TacticVideo} poster={TacticImage} autoPlay muted loop playsInline aria-label="The solution played out in the app" />
              ) : (
                <img src={TacticImage} alt="A chess position in the app. White to move." />
              )}
            </div>
            <img className="frame" src={Frame} alt="" />
          </div>
          <div className="puzzle-bar">
            <p>
              <strong>{solved ? 'Solved.' : 'White to move.'}</strong>
              {!solved && 'Can you win material?'}
            </p>
            <button type="button" className="button" onClick={() => setSolved((value) => !value)} aria-pressed={solved}>
              {solved ? 'Back to the puzzle' : 'Show solution'}
            </button>
          </div>
        </div>
      </section>

      <section className="levels">
        <div className="levels-inner">
        <div>
          <h2>Start where you are.</h2>
          <p>
            <b>Too hard?</b> There are lessons for beginner and intermediate players.
          </p>
          <p>
            <b>Too easy?</b> The app has tactics that even grandmasters struggle to get.
          </p>
        </div>
        <ul className="features">
          {FEATURES.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
        </div>
      </section>

      <section className="closing">
        <h2>Start solving today.</h2>
        <AppStoreBadge />
      </section>
    </>
  )
}
