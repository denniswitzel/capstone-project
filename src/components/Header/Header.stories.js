import React from 'react';
import Header from './Header'

export default {
  title: 'Product Lists/Header',
  component: Header,
  argTypes: {
  headline: { control: 'text'},
  },
};

const Template = (args) => <Header {...args} />;

export const Headline = Template.bind({});
Headline.args = {
  headline: 'Headline',
}