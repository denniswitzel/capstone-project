import React from 'react'
import GlobalStyles from '../src/services/GlobalStyles'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Homepage', 'Product Lists', 'Detail-Page', 'Navigation'],
    },
  },
}
