import React from 'react'
import ProductList from './ProductList'
import RatingList from '../RatingList/RatingList'

export default {
  title: 'Pages/Product List',
  component: ProductList,
  argTypes: {
    headline: { control: {
      type: 'text',
      options: 'Burger',
    }}
  },
}


const Template = (args) => 
  <ProductList {...args}/>

const Rating = (args) => 
  <RatingList {...args}/>

export const multipleProducts = Template.bind({})
multipleProducts.args = {
  headline: 'Burger',
  product: [
    {
      id: 1,
      title: 'amidori - veggie best burger',
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png',
      gluten: ['gluten'],
    },
    {
      id: 2,
      title: 'followfood - FREI!BURGER',
      ingredients:
        'Seitan* 54 % (Wasser, Weizeneiweiß), Weizeneiweißtexturat 26 % (Weizeneiweiß, Weizenmehl), ölsäurereiches (High-Oleic) Sonnenblumenöl, Gewürze, Sojasauce (Wasser, Sojabohnen, Meersalz), Hefeextrakt, Zwiebeln, Reismehl, Verdickungsmittel: Johannisbrotkernmehl',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Followfood-Freiburger.png',
    },
    {
      id: 3,
      title: 'Garden Gourmet - Sensational Burger',
      ingredients:
        'Trinkwasser, 18,5 % SOJAPROTEIN, pflanzliche Öle (Raps, Kokosnuss), natürliche Aromen, 1,7% WEIZENPROTEIN, Stabilisator (Methylcellulose), Branntweinessig, Frucht- und Pflanzenkonzentrate (Rote Beete, Paprika, Karotte, schwarze Johannisbeere), Speisesalz, GERSTENMALZEXTRAKT',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Gourmet-Garden-Vegane-Burger.png',
    },
    {
      id: 4,
      title: 'Rügenwalder - Mühlen Burger',
      ingredients:
        'Trinkwasser, 16% Sojaproteinkonzentrat, Rapsöl, Zwiebeln, Weizengluten, Kochsalz, Branntweinessig, Verdickungsmittel: Methylcellulose, Aroma, Weizenstärke, färbende Lebensmittel: Konzentrat aus Rote Beete, Karotte, Rettich',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Ruegenwalder-Muehlen-Burger.png',
    },
    {
      id: 5,
      title: 'Rügenwalder - Mühlen Crispyburger',
      ingredients:
        'Trinkwasser, Weizenmehl, 11% Sojaproteinkonzentrat, Weizengluten, Rapsöl, 4% Sojaproteinisolat, Kochsalz, Verdickungsmittel: Methylcellulose, Branntweinessig, Maismehl, natürliches Aroma, Weizenstärke, Zucker, Gewürze, Traubenzucker, Hefe',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Ruegenwalder-Muehlen-Crispyburger.png',
    },
    {
      id: 6,
      title: 'The Vegetarian Butcher - Sieht-Chick-Aus Burger',
      ingredients:
        '63% Sojabasis (Wasser, texturiertes SOJAEIWEISS, WEIZENSTÄRKE, WEIZENEIWEISS), dicke Bohnen, Sonnenblumenöl, Palmöl, Gewürzextrakte (Koriander, Nelke, Zwiebel, Oregano), Verdickungsmittel (Methylcellulose), natürliches Aroma, Bambusfaser, Stärke, Citrusfaser, Gewürze (Muskatblüte, Ingwer, Knoblauch, Pfeffer, Zwiebel), Speisesalz, karamellisierter Zucker, Stabilisator (verarbeitete Euchema-Algen), Eisendiphosphat, Vitamin B12',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/The-Vegetarian-Butcher-Vegane-Sieht-Chick-Aus-Burger.png',
    },
    {
      id: 7,
      title: 'Vivera - Veganer Burger',
      ingredients:
        '47% Kürbis*, 29% Süßkartoffel*, Sonnenblumenöl, SOJA-EIWEIß, Kartoffelstärke, Gewürze, Verdickungsmittel (Methylcellulose), Essig, WEIZENFASERN, Salz, rote Paprika, Wasser, Zwiebel, natürliche Aromen, Knoblauch',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Vivera-Veganer-Burger.png',
    },
    {
      id: 8,
      title: 'Wheaty - Vegan Superhero Burger',
      ingredients:
        'Seitan* (Wasser, WEIZENeiweiß*) (54%), WEIZENeiweißtexturat* (WEIZENeiweiß*, WEIZENmehl*) ölsäurereiches (High-Oleic) Sonnenblumenöl*, Zwiebeln*, SOJAsauce* (Wasser, SOJAbohnen*, Meersalz), Hefeextrakt*, Gewürze*, Reismehl*, Verdickungsmittel: Johannisbrotkernmehl',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Wheat-Vegan-Superhero-Burger.png',
    },
    {
      id: 9,
      title: 'Wheaty - Veganer Tex-Mex Burger',
      ingredients:
        'Seitan* (Wasser, WEIZENeiweiß*) (42%), WEIZENeiweißtexturat* (WEIZENeiweiß*, WEIZENmehl*) (13%), Paprika rot*, ölsäurereiches (High-Oleic) Sonnenblumenöl*, SOJAsauce* (Wasser, SOJAbohnen*, Meersalz), Zwiebeln*, Knoblauch*, Gewürze*, Steinsalz, Reismehl*, Verdickungsmittel: Johannisbrotkernmehl',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Wheat-Vegan-Tex-Mex-Burger.png',
    },
  ],
}

export const singleProducts = Template.bind({})
singleProducts.args = {
  headline: 'Burger',
  product: [
    {
      id: 1,
      title: 'amidori - veggie best burger',
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png',
      gluten: ['gluten'],
    }],
}

export const ratedProducts = Rating.bind({})
ratedProducts.args = {
  headline: 'Burger',
  product: [
    {
      id: 1,
      title: 'amidori - veggie best burger',
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png',
      gluten: ['gluten'],
      rating: [{session_id: "1234", rating:
      5}, {rating: 4}]
    },{
      id: 2,
      title: 'followfood - FREI!BURGER',
      ingredients:
        'Seitan* 54 % (Wasser, Weizeneiweiß), Weizeneiweißtexturat 26 % (Weizeneiweiß, Weizenmehl), ölsäurereiches (High-Oleic) Sonnenblumenöl, Gewürze, Sojasauce (Wasser, Sojabohnen, Meersalz), Hefeextrakt, Zwiebeln, Reismehl, Verdickungsmittel: Johannisbrotkernmehl',
      allergies: ['Gluten', 'Soy'],
      image:
        'https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Followfood-Freiburger.png',
      rating: [{session_id: "1234", rating:
      4}, {rating: 4}]
    }],
}