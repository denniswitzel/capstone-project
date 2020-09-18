import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProductDetail from './ProductDetail'
import { MemoryRouter } from 'react-router-dom'

describe('ProductDetail', () => {
  const product = [{
    id: 1,
    category: "burger",
    title: "amidori - veggie best burger",
    ingredients: "Wasser, Erbsenproteinisolat 17 %, Zwiebelwürfel, Rapsöl, Kokosfett, Branntweinessig, Verdickungsmittel Methylcellulose, Tomatenmark, Apfelessig, Malzextrakt (Wasser, glutenfreies GERSTENRÖSTMALZ, Hopfen, Hefe), Citrusfaser, Erbsenfaser, glutenfreies HAFERVOLLKORNMEHL, Kartoffelstärke, Gewürze, Speisesalz, färbendes Frucht- und Gemüsekonzentrat (Hibiskus, Karotte, rote Bete), Hefeextrakt, natürliches Aroma, Antioxidationsmittel: Extrakt aus Rosmarin, Rauch",
    allergies: [
        "Gluten"
    ],
    image: "https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png"
  }]
  const favorite = [{
    id: 1,
    category: "burger",
    title: "amidori - veggie best burger",
    ingredients: "Wasser, Erbsenproteinisolat 17 %, Zwiebelwürfel, Rapsöl, Kokosfett, Branntweinessig, Verdickungsmittel Methylcellulose, Tomatenmark, Apfelessig, Malzextrakt (Wasser, glutenfreies GERSTENRÖSTMALZ, Hopfen, Hefe), Citrusfaser, Erbsenfaser, glutenfreies HAFERVOLLKORNMEHL, Kartoffelstärke, Gewürze, Speisesalz, färbendes Frucht- und Gemüsekonzentrat (Hibiskus, Karotte, rote Bete), Hefeextrakt, natürliches Aroma, Antioxidationsmittel: Extrakt aus Rosmarin, Rauch",
    allergies: [
        "Gluten"
    ],
    image: "https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png"
  }]

  it('displays product', () => {
    render(
      <MemoryRouter>
        <ProductDetail product={product} favorite={favorite} />
      </MemoryRouter>
    )

    expect(product).toBeDefined()
    expect(favorite).toBeDefined()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <ProductDetail />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
