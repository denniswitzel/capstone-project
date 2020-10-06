import React from 'react'
import Categories from './Categories'
import { MemoryRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/icons/planternate-logo.svg'
import styled from 'styled-components'

export default {
  title: 'Pages/Homepage',
  component: Categories,
  argTypes: {
    categoryIcon: { control: {
      type: 'select',
      options: ['https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/burger.svg', 
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/717acadfd943ecc6bfc7f09650784cf00ff22b44/src/images/icons/coldcuts.svg', 
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/kebab.svg', 
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/minced.svg',
       'https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/nuggets.svg',
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/67e1d46d4c80dc548f311f8b10cb5d5c61960c60/src/images/icons/sausage.svg']
    }},
    categoryName: { control: {
      type: 'select',
      options: ['BURGER', 'COLD-CUTS', 'KEBAB', 'MINCED', 'NUGGETS', 'SAUSAGES']
  }},
  } 
}

const categories = [
  {
    name: 'BURGER',
    icon:
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/burger.svg',
  },
  {
    name: 'COLD-CUTS',
    icon:
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/717acadfd943ecc6bfc7f09650784cf00ff22b44/src/images/icons/coldcuts.svg',
  },
  {
    name: 'KEBAB',
    icon:
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/kebab.svg',
  },
  {
    name: 'MINCED',
    icon:
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/minced.svg',
  },
  {
    name: 'NUGGETS',
    icon:
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/nuggets.svg',
  },
  {
    name: 'SAUSAGES',
    icon:
      'https://raw.githubusercontent.com/denniswitzel/capstone-project/67e1d46d4c80dc548f311f8b10cb5d5c61960c60/src/images/icons/sausage.svg',
  },
]


const LogoHomepage = () => (<LogoStyled />
)

const Template = () => (
  <MemoryRouter>
    {categories.map((category) => (
      <Categories
        categoryIcon={category.icon}
        categoryName={category.name}
      />
    ))}
  </MemoryRouter>
)

const SingleCategory = (args) => (
  <MemoryRouter>
      <Categories {...args}/>
  </MemoryRouter>
)

export const logo = LogoHomepage.bind({})
export const allCategories = Template.bind({})
export const singleCategory = SingleCategory.bind({})
singleCategory.args = {
  categoryName: 'BURGER',
  categoryIcon: 'https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/burger.svg'
}

const LogoStyled = styled(Logo)`
  width: 60vw;
  grid-column: 1/3;
  margin: 30px 0 30px 0;
`
