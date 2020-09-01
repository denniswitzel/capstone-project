import React from 'react'
import renderer from 'react-test-renderer'
import Product from './Product'
import { render } from '@testing-library/react'

describe('Product', () => {
    const title = 'Like meat - Like Nuggets'
    const image = 'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/nuggets/Like-meat-Nuggets.png'

    it('display title and image', () => {
        const { getByText } = render(<Product title={title} image={image} key={title}/>)
        expect(getByText(title)).toBeInTheDocument()
        expect(document.querySelector("img").getAttribute("src")).toBe(image)
    })

    it('renders correctly', () => {
        const tree = renderer.create(<Product />)
        expect(tree).toMatchSnapshot()
      })
  })

