import React from 'react'
import Detailpage from './Detailpage'

export default {
  title: 'Detail-Page',
  component: Detailpage,
}

const title = 'Like meat - Like Nuggets'
const image =
  'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/nuggets/Like-meat-Nuggets.png'
const ingredients =
  'Wasser, Panade 23% (Cornflakes (Mais, Salz, Zucker), Maismehl, Maisstärke, Kartoffelstärke, Verdickungsmittel: Xanthan), SOJAPROTEINKONZENTRAT 13%, Sonnenblumenöl, HAFERSPELZFASER (glutenfrei), Salz, Verdickungsmittel: Methylcellulose, natürliches Aroma, Dextrose'
const allergies = ['Gluten', 'Soy']

const Template = (args) => (
  <Detailpage
    image={image}
    title={title}
    ingredients={ingredients}
    allergies={allergies}
  />
)

export const detailPage = Template.bind({})
