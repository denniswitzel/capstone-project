import React from 'react'
import renderer from 'react-test-renderer'
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Detailpage from './Detailpage'
import { MemoryRouter } from 'react-router-dom'

describe('DetailPage', () => {
  const category = 'burger'
  const id = 1

  it('display title and image', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Detailpage category={category} id={id} />
      </MemoryRouter>
    )

    expect(category).toBeDefined()
    expect(id).toBeDefined()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Detailpage />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
