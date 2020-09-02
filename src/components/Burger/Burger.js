import React from 'react'
import burgers from '../../mocks/burger.json'
import Product from '../Products/Product'
import PropTypes from 'prop-types'
import Headline from '../Headline/Headline'

Burger.propTypes = { 
    burgers: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    image: PropTypes.string,
}

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