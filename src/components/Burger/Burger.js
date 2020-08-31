import React from 'react'
import burgers from '../../mocks/burger.json'
import Product from '../Products/Product'
import PropTypes from 'prop-types'
import Headline from '../Headline/Headline'


export default function Burger(){
    return(
        <>
        <Headline headline="Burgers" />
        {burgers.map((burger, index) => (
        <Product key={index} title={burger.title} image={burger.image} />
        ))}
        </>
    )
}

Burger.propTypes = { 
    burgers: PropTypes.array,
    title: PropTypes.string,
    image: PropTypes.string,
}
