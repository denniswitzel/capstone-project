import React from 'react';
import Filter from './Filter';
import { MemoryRouter } from 'react-router-dom';


export default {
  title: 'Product Lists/Filter products',
  component: Filter,
};

const filters = ['Show all', 'gluten', 'soy']

const Template = (args) => (
<MemoryRouter>
  <Filter {...args} filters={filters}/>
</MemoryRouter>) 

export const filterProducts = Template.bind({})
