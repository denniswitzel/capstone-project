import React from 'react'
import burgers from '../../mocks/burger.json'
import Product from '../../components/Products/Product'
import Headline from '../../components/Headline/Headline'
import PropTypes from 'prop-types'

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