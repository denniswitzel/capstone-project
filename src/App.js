import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import useFetch from '../src/hooks/useFetch'
import Categories from './components/Categories/Categories'
import ProductDetail from './components/ProductDetail/ProductDetail'
import ProductList from './components/ProductList/ProductList'
import { ReactComponent as Logo } from './images/icons/planternate-logo.svg'
import { categories } from './services/categories'
import { loadLocally, saveLocally } from './services/localStorage'
import RatingList from './components/RatingList/RatingList'

export default function App() {
  const [cookies, setCookies] = useCookies(['user'])

  const burger = useFetch('burger')
  const coldCuts = useFetch('cold-cuts')
  const kebab = useFetch('kebab')
  const minced = useFetch('minced')
  const nuggets = useFetch('nuggets')
  const sausages = useFetch('sausages')

  const [products, setProducts] = useState(loadLocally('products') ?? [])

  useEffect(() => {
    setProducts(burger.concat(coldCuts, kebab, minced, nuggets, sausages))
  }, [burger, coldCuts, kebab, minced, nuggets, sausages])

  useEffect(() => {
    saveLocally('products', products)
  }, [products])

  useEffect(() => {
    cookies.user ??
      setCookies('user', Math.floor(Math.random() * Math.floor(5000)), {
        path: '/',
      })
    // eslint-disable-next-line
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <LogoStyled />
        {categories?.map(({ name, icon }, index) => (
          <Categories key={index} categoryIcon={icon} categoryName={name} />
        ))}
      </Route>
      {categories.map(({ name, path }) => (
        <Route exact path={path} key={name}>
          <ProductList
            headline={name.toLocaleUpperCase()}
            product={products.filter((p) => p.category === name)}
          />
        </Route>
      ))}
      {categories.map(({ name, path }) => (
        <Route path={`${path}/:id`} key={name}>
          <ProductDetail
            product={products.filter((p) => p.category === name)}
            onFavoriteClick={toggleFavorite}
            cookies={cookies.user}
          />
        </Route>
      ))}
      <Route path="/favorites">
        <ProductList
          headline={'Favorites'}
          product={products
            .filter((p) => p.isFavorite)
            .sort((a, b) => a.title.localeCompare(b.title))}
        />
      </Route>
      <Route path="/rating">
        <RatingList product={products} />
      </Route>
    </Switch>
  )

  function toggleFavorite(favorite) {
    const index = products.findIndex(
      (favoriteItem) => favoriteItem.id === favorite.id
    )
    setProducts([
      ...products.slice(0, index),
      { ...favorite, isFavorite: !favorite.isFavorite },
      ...products.slice(index + 1),
    ])
  }
}

const LogoStyled = styled(Logo)`
  width: 60vw;
  grid-column: 1/3;
  margin: 30px 0 30px 0;
`
