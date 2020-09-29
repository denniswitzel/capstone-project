import React from 'react'
import ProductDetail from './ProductDetail'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Detail-Page',
  component: ProductDetail,
}
const product = [
{
  _id: {
      $oid: "5f69da225a5cfd8e0cd97447"
  },
  id: 1,
  category: "burger",
  title: "amidori - veggie best burger",
  ingredients: "Wasser, Erbsenproteinisolat 17 %, Zwiebelwürfel, Rapsöl, Kokosfett, Branntweinessig, Verdickungsmittel Methylcellulose, Tomatenmark, Apfelessig, Malzextrakt (Wasser, glutenfreies GERSTENRÖSTMALZ, Hopfen, Hefe), Citrusfaser, Erbsenfaser, glutenfreies HAFERVOLLKORNMEHL, Kartoffelstärke, Gewürze, Speisesalz, färbendes Frucht- und Gemüsekonzentrat (Hibiskus, Karotte, rote Bete), Hefeextrakt, natürliches Aroma, Antioxidationsmittel: Extrakt aus Rosmarin, Rauch",
  allergies: ["gluten"],
  image: "https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png",
  rating: [{
    session_id: "4994",
    rating: 3
}]
}]

const cookies = "12345"

const Template = () => (
  <MemoryRouter>
    <ProductDetail product={product} cookies={cookies}/>
  </MemoryRouter>
)

export const productDetail = Template.bind({})
