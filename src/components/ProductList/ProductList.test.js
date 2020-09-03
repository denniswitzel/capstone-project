import React from 'react'
import renderer from 'react-test-renderer'
import ProductList from './ProductList'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ProductList', () => {
  const title = 'amidori - veggie best burger'
  const image =
    'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png'

  it('display title and image', () => {
    const { getByText } = render(<ProductList title={title} image={image} />)
    expect(getByText(title)).toBeInTheDocument()
    expect(document.querySelector('img').getAttribute('src')).toBe(image)
  })

  it('renders correctly', () => {
    const tree = renderer.create(<ProductList />)
    expect(tree).toMatchSnapshot()
  })
})
