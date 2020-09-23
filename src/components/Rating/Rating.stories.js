import React from 'react';
import Rating from './Rating';


export default {
  title: 'Rating',
  component: Rating,
}

const Template = (args) => <Rating {...args} />;

export const rating = Template.bind({});
