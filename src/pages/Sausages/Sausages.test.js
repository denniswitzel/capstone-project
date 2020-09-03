import React from 'react'
import renderer from 'react-test-renderer'
import Sausages from '../Sausages/Sausages'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Sausages', () => {
    const title = 'Garden Gourmet - Sensational Bratwurst'
    const image = 'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/sausages/Garden-Gourmet-Sensational-Bratwurst.png'

    it('display title and image', () => {
        const { getByText } = render(<Sausages title={title} image={image}/>)
        expect(getByText(title)).toBeInTheDocument()
        expect(document.querySelector("img").getAttribute("src")).toBe(image)
    })

    it('renders correctly', () => {
        const tree = renderer.create(<Sausages />)
        expect(tree).toMatchSnapshot()
      })
  })