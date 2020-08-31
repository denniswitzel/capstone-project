import React from 'react'
import renderer from 'react-test-renderer'
import Kebab from './Kebab'
import { render } from '@testing-library/react'

describe('Kebab', () => {
    const title = 'amidori - veggie kebab'
    const image = 'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/kebab/Amidori-Veggie-Kebab.png'

    it('display title and image', () => {
        const { getByText } = render(<Kebab title={title} image={image} key={title}/>)
        expect(getByText(title)).toBeInTheDocument()
        expect(document.querySelector("img").getAttribute("src")).toBe(image)
    })
    
    it('renders correctly', () => {
        const tree = renderer.create(<Kebab />)
        expect(tree).toMatchSnapshot()
      })
  })

