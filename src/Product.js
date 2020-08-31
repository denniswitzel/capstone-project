import React from 'react'

export default function Product({ title, image }) {
    return (
    <>
    <h2>{title}</h2>
    <img src={image} alt={title}/>
    </>
    )
}