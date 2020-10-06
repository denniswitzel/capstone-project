import React  from 'react';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';


export default {
  title: 'Components/Navigation',
  component: Navigation,
};


const Template = (args) => (
<MemoryRouter>
  <Navigation {...args}/>
</MemoryRouter>) 

export const navigation = Template.bind({})

