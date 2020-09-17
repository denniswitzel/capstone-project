import React from 'react'
import renderer from 'react-test-renderer'
import ProductList from './ProductList'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

describe('ProductList', () => {
  const headline = 'BURGER'
  const product = [
    {
      id: 1,
      title: 'amidori - veggie best burger',
      ingredients:
        'Wasser, Erbsenproteinisolat 17 %, Zwiebelwürfel, Rapsöl, Kokosfett, Branntweinessig, Verdickungsmittel Methylcellulose, Tomatenmark, Apfelessig, Malzextrakt (Wasser, glutenfreies GERSTENRÖSTMALZ, Hopfen, Hefe), Citrusfaser, Erbsenfaser, glutenfreies HAFERVOLLKORNMEHL, Kartoffelstärke, Gewürze, Speisesalz, färbendes Frucht- und Gemüsekonzentrat (Hibiskus, Karotte, rote Bete), Hefeextrakt, natürliches Aroma, Antioxidationsmittel: Extrakt aus Rosmarin, Rauch',
      allergies: ['Gluten'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png',
    },
  ]

  it('display product, category and headline', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProductList
          product={product}
          headline={headline}
        />
      </MemoryRouter>
    )
    expect([
      {
        id: 1,
        title: 'amidori - veggie best burger',
        ingredients:
          'Wasser, Erbsenproteinisolat 17 %, Zwiebelwürfel, Rapsöl, Kokosfett, Branntweinessig, Verdickungsmittel Methylcellulose, Tomatenmark, Apfelessig, Malzextrakt (Wasser, glutenfreies GERSTENRÖSTMALZ, Hopfen, Hefe), Citrusfaser, Erbsenfaser, glutenfreies HAFERVOLLKORNMEHL, Kartoffelstärke, Gewürze, Speisesalz, färbendes Frucht- und Gemüsekonzentrat (Hibiskus, Karotte, rote Bete), Hefeextrakt, natürliches Aroma, Antioxidationsmittel: Extrakt aus Rosmarin, Rauch',
        allergies: ['Gluten'],
        image:
          'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png',
      },
    ]).toEqual(expect.arrayContaining(product))
    expect(getByText(headline)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
