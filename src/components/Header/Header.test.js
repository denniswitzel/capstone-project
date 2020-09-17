import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Header', () => {
  const headline = 'BURGER'

  it('display the headline and an example event', () => {
    const { getByText } = render(<Header headline={headline} />)
    expect(getByText(headline)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Header />)
    expect(tree).toMatchSnapshot()
  })
})
