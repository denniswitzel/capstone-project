import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import Product from '../Products/Product'
import Filter from '../Filter/Filter'



ProductList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
}

export default function ProductList({ product, headline }) {
  const filters = ['Show all', 'gluten', 'soy']
  const [active, setActive] = useState(filters[0])
  const [filterToggle, setFilterToggle] = useState(false)
  
  const history = useHistory()

  return (
    <>
      <Header headline={headline} active={filterToggle.toString()} onToggle={() => setFilterToggle(!filterToggle)}/>
      {filterToggle &&
      <Filter filters={filters} active={active} setActive={setActive}/>}
      {product?.filter(product => active === 'Show all' || !product.allergies.includes(active)).map((productItem) => (
        <Product
          onClick={() => history.push(`/${productItem.category}/${productItem.id}`)}
          key={productItem.id}
          title={productItem.title}
          image={productItem.image}
        />
      ))}
    </>
  )
}
