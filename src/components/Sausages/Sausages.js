import React from 'react'
import sausages from '../../mocks/sausages.json'
import Headline from '../Headline/Headline'
import Product from '../Products/Product'
import PropTypes from 'prop-types'

Sausages.propTypes = { 
    sausages: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default function Sausages(){
    return(
        <>
        <Headline headline="Sausages" />
        {sausages.map((sausage, index) => (
        <Product key={index} title={sausage.title} image={sausage.image} />
        ))}
        </>
    )
}
