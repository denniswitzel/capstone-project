import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Filter from '../Filter/Filter'
import Header from '../Header/Header'
import Product from '../Products/Product'

RatingList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
}

export default function RatingList({ product }) {
  const filters = ['Show all', 'gluten', 'soy']
  const [active, setActive] = useState(filters[0])
  const [filterToggle, setFilterToggle] = useState(false)


  const newProductArray = product.map(product => {  
    const productRating = product.rating.map(product => product.rating)
    const reducedRating = (productRating.reduce((accumulator, currentValue) => accumulator + currentValue) / productRating.length).toFixed(1)
    const newObject = {...product, rating: Number(reducedRating)}
    return newObject
  })
  
  const sortByRating = newProductArray
  .sort(function (a, b) { return a.rating - b.rating })
  .reverse()
  .slice(0, 25)

  const history = useHistory()
  
  return (
    <RatingListWrapper>
      <Header headline={"Highest rating"} active={filterToggle.toString()} onToggle={() => setFilterToggle(!filterToggle)}/>
      {filterToggle &&
      <Filter filters={filters} active={active} setActive={setActive}/>}
      {sortByRating?.filter(product => active === 'Show all' || !product.allergies.includes(active)).map((productItem) => (
       <Product
          onClick={() => history.push(`/${productItem.category}/${productItem.id}`)}
          key={productItem.id}
          title={productItem.title}
          image={productItem.image}
          rating={productItem.rating}
        />
      ))}
    </RatingListWrapper>
  )
}


const RatingListWrapper = styled.section`
    grid-column: 1/3;
    padding-bottom: 140px;

`

