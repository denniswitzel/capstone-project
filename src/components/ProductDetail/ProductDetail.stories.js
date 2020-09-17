import React from 'react'
import ProductDetail from './ProductDetail'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Detail-Page',
  component: ProductDetail,
}
const product = [
  {
      id:1,
      category: "burger",
      title: "amidori - veggie best burger",
      ingredients: "Wasser, Erbsenproteinisolat 17 %, Zwiebelwürfel, Rapsöl, Kokosfett, Branntweinessig, Verdickungsmittel Methylcellulose, Tomatenmark, Apfelessig, Malzextrakt (Wasser, glutenfreies GERSTENRÖSTMALZ, Hopfen, Hefe), Citrusfaser, Erbsenfaser, glutenfreies HAFERVOLLKORNMEHL, Kartoffelstärke, Gewürze, Speisesalz, färbendes Frucht- und Gemüsekonzentrat (Hibiskus, Karotte, rote Bete), Hefeextrakt, natürliches Aroma, Antioxidationsmittel: Extrakt aus Rosmarin, Rauch",
      allergies: [
          "Gluten"
      ],
      image: "https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png"
  }]

const favorites = [
  {
      id:1,
      category: "burger",
      title: "amidori - veggie best burger",
      ingredients: "Wasser, Erbsenproteinisolat 17 %, Zwiebelwürfel, Rapsöl, Kokosfett, Branntweinessig, Verdickungsmittel Methylcellulose, Tomatenmark, Apfelessig, Malzextrakt (Wasser, glutenfreies GERSTENRÖSTMALZ, Hopfen, Hefe), Citrusfaser, Erbsenfaser, glutenfreies HAFERVOLLKORNMEHL, Kartoffelstärke, Gewürze, Speisesalz, färbendes Frucht- und Gemüsekonzentrat (Hibiskus, Karotte, rote Bete), Hefeextrakt, natürliches Aroma, Antioxidationsmittel: Extrakt aus Rosmarin, Rauch",
      allergies: [
          "Gluten"
      ],
      image: "https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png"
  }]

const Template = () => (
  <MemoryRouter>
    <ProductDetail product={product} favorites={favorites} />
  </MemoryRouter>
)

export const productDetail = Template.bind({})
