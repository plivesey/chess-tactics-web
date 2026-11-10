import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App.jsx'

afterEach(cleanup)

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )

describe('routes', () => {
  it('renders the home page', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: /find the winning move/i })).toBeTruthy()
  })

  it.each(['/terms', '/terms.html'])('renders terms at %s', (path) => {
    renderAt(path)
    expect(screen.getByRole('heading', { level: 1, name: /terms and conditions/i })).toBeTruthy()
  })

  it.each(['/privacy', '/privacy.html'])('renders privacy at %s', (path) => {
    renderAt(path)
    expect(screen.getByRole('heading', { level: 1, name: /privacy policy/i })).toBeTruthy()
  })

  it('renders a tactic link page', () => {
    renderAt('/t/abc123')
    expect(screen.getByRole('link', { name: /open in the app/i }).getAttribute('href')).toBe('chesstcs://t/abc123')
  })

  it('renders the 123 Chess pages', () => {
    renderAt('/123chess')
    expect(screen.getByRole('heading', { name: '123 Chess' })).toBeTruthy()
  })
})
