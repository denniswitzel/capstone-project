import React from 'react';
import Burger from './Burger'

export default {
  title: 'Product Lists/Multiple Products',
  component: Burger,
  argTypes: {
  backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Burger {...args} />;

export const multipleProducts = Template.bind({})