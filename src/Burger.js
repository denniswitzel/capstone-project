import React from 'react'
import burgers from './mocks/burger.json'
import Product from './Product'


export default function Burger(){
    return(
        <>
        {burgers.map((burger) => (
        <Product title={burger.title} image={burger.image} />
        ))}
        </>
    )
}