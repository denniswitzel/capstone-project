import React from 'react';
import Product from './Product';


export default {
  title: 'Product Categories',
  component: Product,
  argTypes: {
  backgroundColor: { control: 'color' },
  },
};
const Template = (args) => <Product {...args} />;

export const singleProduct = Template.bind({});
singleProduct.args = {
  title: 'amidori - veggie best burger',
  image: 'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png',
}