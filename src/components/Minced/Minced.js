import React from 'react'
import minced from '../../mocks/minced.json'
import Headline from '../Headline/Headline'
import Product from '../Products/Product'


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