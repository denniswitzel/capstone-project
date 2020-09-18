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

export const shortHeadline = Template.bind({});
shortHeadline.args = {
  headline: 'Headline',
}