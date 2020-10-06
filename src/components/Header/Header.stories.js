import React from 'react';
import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    headline: { control: {
      type: 'select',
      options: ['Burger', 'Cold Cuts', 'Kebab', 'Minced', 'Nuggets', 'Sausages']
    }}
  },
};

const Template = (args) => <Header {...args} />;

export const Headline = Template.bind({});
Headline.args = {
  headline: 'Burger'
}