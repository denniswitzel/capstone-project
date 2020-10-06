import React  from 'react';
import Filter from './Filter';
import { MemoryRouter } from 'react-router-dom';


export default {
  title: 'Components/Filter',
  component: Filter,
  active: 'Show all',
  argTypes: {
    active: { control: {
      type: 'select',
      options: ['Show all', 'gluten', 'soy'],
    }}
  },
};

const filters = ['Show all', 'gluten', 'soy']

const Template = (args) => (
<MemoryRouter>
  <Filter {...args} filters={filters}/>
</MemoryRouter>) 

export const showAll = Template.bind({})
showAll.args = {
  active: 'Show all'
}

export const hideGluten = Template.bind({});
hideGluten.args = {
  active: 'gluten'
}

export const hideSoy = Template.bind({});
hideSoy.args = {
  active: 'soy'
}