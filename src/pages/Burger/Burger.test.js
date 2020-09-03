import React from 'react'
import renderer from 'react-test-renderer'
import Burger from './Burger'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Burger', () => {
    const title = 'amidori - veggie best burger'
    const image = 'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png'

    it('display title and image', () => {
        const { getByText } = render(<Burger title={title} image={image} key={title}/>)
        expect(getByText(title)).toBeInTheDocument()
        expect(document.querySelector("img").getAttribute("src")).toBe(image)
    })
    
    it('renders correctly', () => {
        const tree = renderer.create(<Burger />)
        expect(tree).toMatchSnapshot()
      })
  })
