import React from 'react';
import Burger from './Burger'
import { MemoryRouter } from 'react-router-dom';


export default {
  title: 'Product Lists/Multiple Products',
  component: Burger,
  argTypes: {
  backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Burger {...args} />;

export const multipleProducts = () => (
    <MemoryRouter>{Template({})}</MemoryRouter>
  );