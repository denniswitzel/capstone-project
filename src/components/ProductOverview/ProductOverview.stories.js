import React from 'react';
import ProductOverview from './ProductOverview';
import { MemoryRouter } from 'react-router-dom';


export default {
  title: 'Product Categories',
  component: ProductOverview,
};

const categories = [{
  name: "BURGER",
  icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/burger.svg"
},
{
  name: "COLD-CUTS",
  icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/717acadfd943ecc6bfc7f09650784cf00ff22b44/src/images/icons/coldcuts.svg"
},
{
  name: "KEBAB",
  icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/kebab.svg"
},
{
  name: "MINCED",
  icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/minced.svg"
},
{
  name: "NUGGETS",
  icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/nuggets.svg"
},
{
  name: "SAUSAGES",
  icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/67e1d46d4c80dc548f311f8b10cb5d5c61960c60/src/images/icons/sausage.svg"
}
]

const Template = () => (<MemoryRouter>
  {categories.map((category) => 
  <ProductOverview productIcon={category.icon} productName={category.name} />
  )}
  </MemoryRouter>)


export const allCategories = Template.bind({})
