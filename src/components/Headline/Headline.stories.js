import React from 'react';
import Headline from './Headline'

export default {
  title: 'Product Lists/Headline',
  component: Headline,
  argTypes: {
  headline: { control: 'text'},
  },
};

const Template = (args) => <Headline {...args} />;


export const longHeadline = Template.bind({});
longHeadline.args = {
  headline: 'This is a very long headline to see if it fits',
}

export const shortHeadline = Template.bind({});
shortHeadline.args = {
  headline: 'Headline',
}