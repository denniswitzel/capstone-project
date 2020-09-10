import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('App', () => {
  it('has links to all pages', () => {
    const urls = [
      '/',
      '/burger',
      'burger/:id',
      '/kebab',
      '/kebab/:id',
      '/cold-cuts',
      '/sausages',
      '/sausages/:id',
      '/nuggets',
      '/nuggets/:id',
      '/minced',
      '/minced/:id',
    ]
    const { getAllByRole } = render(
      <Router>
        <App />
      </Router>
    )

    getAllByRole('link').forEach((link) => {
      expect(urls).toContain(link.getAttribute('href'))
    })
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <App />
      </Router>
    )
    expect(tree).toMatchSnapshot()
  })
})
