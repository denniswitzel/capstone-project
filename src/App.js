import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import useFetch from '../src/hooks/useFetch'
import Categories from './components/Categories/Categories'
import ProductDetail from './components/ProductDetail/ProductDetail'
import ProductList from './components/ProductList/ProductList'
import { ReactComponent as Logo } from './images/icons/planternate-logo.svg'
import { categories } from './services/categories'

export default function App() {
  const products = {
    burger: useFetch('burger'),
    kebab: useFetch('kebab'),
    minced: useFetch('minced'),
    nuggets: useFetch('nuggets'),
    sausages: useFetch('sausages'),
  }

  const [favorites, setFavorites] = useState(loadLocally('favorites') ?? [])

  const pageTransitions = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: 30,
    },
  }

  useEffect(() => {
    saveLocally('favorites', favorites)
  }, [favorites])

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          ‚
          <LogoStyled />
          {categories.map(({ name, icon }, index) => (
            <Categories key={index} categoryIcon={icon} categoryName={name} />
          ))}
        </Route>

        {categories.map(({ name, path }) => (
          <Route exact path={path} key={name}>
            <ProductList
              headline={name}
              product={products[name]}
              pageTransitions={pageTransitions}
            />
          </Route>
        ))}

        {categories.map(({ name, path }) => (
          <Route path={`${path}/:id`} key={name}>
            <ProductDetail
              pageTransitions={pageTransitions}
              product={products[name]}
              onFavoriteClick={toggleFavorite}
              favorites={favorites}
            />
          </Route>
        ))}

        <Route path="/favorites">
          {favorites.length ? (
            <ProductList
              pageTransitions={pageTransitions}
              headline={'Favorites'}
              product={favorites.sort((a, b) => a.title.localeCompare(b.title))}
            />
          ) : (
            <>
              <ProductList
                pageTransitions={pageTransitions}
                headline={'Favorites'}
              />
              <StyledHeadline>You have no favorites</StyledHeadline>
            </>
          )}
        </Route>
      </Switch>
    </AnimatePresence>
  )

  function toggleFavorite(favorite) {
    const index = favorites.findIndex(
      (favoriteItem) => favoriteItem.id === favorite.id
    )
    index > -1
      ? setFavorites([
          ...favorites.slice(0, index),
          ...favorites.slice(index + 1),
        ])
      : setFavorites([...favorites, { ...favorite }])
  }

  function saveLocally(key, arrayOfObjects) {
    localStorage.setItem(key, JSON.stringify(arrayOfObjects))
  }

  function loadLocally(key) {
    try {
      const jsonString = localStorage.getItem(key)
      return JSON.parse(jsonString)
    } catch (error) {
      console.log(error)
    }
  }
}

const LogoStyled = styled(Logo)`
  width: 60vw;
  grid-column: 1/3;
  margin: 40px 0;
`

const StyledHeadline = styled.h2`
  grid-column: 1/3;
  margin-top: 100px;
  font-weight: 300;
  color: #4bdb80;
`
