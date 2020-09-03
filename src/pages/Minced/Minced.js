import React from 'react'
import minced from '../../mocks/minced.json'
import Product from '../../components/Products/Product'
import Headline from '../../components/Headline/Headline'
import PropTypes from 'prop-types'


Minced.propTypes = { 
    minced: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    image: PropTypes.string,
}

export default function Minced(){
    return(
        <>
        <Headline headline="Minced" />
        {minced.map((minced, index) => (
        <Product key={index} title={minced.title} image={minced.image} />
        ))}
        </>
    )
}
