import React from 'react';
import Rating from './Rating';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Rating',
  component: Rating,
}

const category= 'burger'
const activeRating = [{rating: 1}, {rating: 2}]
const cookies = "12345"

const Template = () => 
<MemoryRouter>
  <Rating category={category} activeRating={activeRating} cookies={cookies} />
</MemoryRouter>

export const rating = Template.bind({});