import React from 'react'
import ProductList from './ProductList'
import burgers from '../../mocks/burger.json'

export default {
  title: 'Product Lists/Multiple Products',
  component: ProductList,
}

const Template = () =>
  burgers.map((burger, index) => (
    <ProductList title={burger.title} image={burger.image} key={index} />
  ))

export const multipleProducts = Template.bind({})
