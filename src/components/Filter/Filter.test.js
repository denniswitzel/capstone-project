import React from 'react'
import renderer from 'react-test-renderer'
import Filter from './Filter'
import { render  } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

describe('Filter', () => {
    const filters = ['Show all', 'gluten', 'soy']
    const active = 'Show all'
  it('display filters and active state', () => {
    const { getByText } = render(
        <MemoryRouter>
        <Filter filters={filters} active={active} />
        </MemoryRouter>
)
    expect(['Show all', 'gluten', 'soy']).toEqual(expect.arrayContaining(filters))
    expect(getByText(active)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
        <MemoryRouter>
        <Filter/>
        </MemoryRouter>)
    expect(tree).toMatchSnapshot()
  })
})
