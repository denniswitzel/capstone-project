import React from 'react'
import renderer from 'react-test-renderer'
import Minced from './Minced'
import { render } from '@testing-library/react'

describe('Minced', () => {
    const title = 'amidori - veggie minced'
    const image = 'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/minced/Amidori-Veggie-Minced.png'

    it('display title and image', () => {
        const { getByText } = render(<Minced title={title} image={image} key={title}/>)
        expect(getByText(title)).toBeInTheDocument()
        expect(document.querySelector("img").getAttribute("src")).toBe(image)
    })
    it('renders correctly', () => {
        const tree = renderer.create(<Minced />)
        expect(tree).toMatchSnapshot()
      })
  })

