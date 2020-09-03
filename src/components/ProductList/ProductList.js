import React from 'react'
import Product from '../Products/Product'
import PropTypes from 'prop-types'

ProductList.propTypes = { 
    title: PropTypes.string,
    image: PropTypes.string,
}

export default function ProductList({ key, title, image }){
    return(
        <>
        <Product key={key} title={title} image={image} />
        </>
    )
}