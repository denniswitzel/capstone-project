import React from 'react'
import renderer from 'react-test-renderer'
import Nuggets from '../Nuggets/Nuggets'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Nuggets', () => {
    const title = 'Like meat - Like Nuggets'
    const image = 'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/nuggets/Like-meat-Nuggets.png'

    it('display title and image', () => {
        const { getByText } = render(<Nuggets title={title} image={image}/>)
        expect(getByText(title)).toBeInTheDocument()
        expect(document.querySelector("img").getAttribute("src")).toBe(image)
    })

    it('renders correctly', () => {
        const tree = renderer.create(<Nuggets />)
        expect(tree).toMatchSnapshot()
      })
  })