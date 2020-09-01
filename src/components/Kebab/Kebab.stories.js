import React from 'react';
import Kebab from './Kebab';
import { MemoryRouter } from 'react-router-dom';


export default {
  title: 'Product List - Kebab',
  component: Kebab,
  argTypes: {
  backgroundColor: { control: 'color' },
  },
};
const Template = (args) => <Kebab {...args} />;

export const completeList = () => (
    <MemoryRouter>{Template({})}</MemoryRouter>
  );