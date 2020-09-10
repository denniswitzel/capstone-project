import React from 'react'
import Detailpage from './Detailpage'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Detail-Page',
  component: Detailpage,
}
const category = 'burger'
const id = 1

const Template = () => (
  <MemoryRouter>
    <Detailpage category={category} id={id} />
  </MemoryRouter>
)

export const detailPage = Template.bind({})
