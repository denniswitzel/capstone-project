import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import useFetch from '../src/hooks/useFetch'
import Categories from './components/Categories/Categories'
import Detailpage from './components/Detailpage/Detailpage'
import ProductList from './components/ProductList/ProductList'
import { ReactComponent as Logo } from './images/icons/logo.svg'

export default function App() {
  const burgers = useFetch('burger')
  const kebabs = useFetch('kebab')
  const minced = useFetch('minced')
  const nuggets = useFetch('nuggets')
  const sausages = useFetch('sausages')
  const categories = useFetch('categories')

  const [favorites, setFavorites] = useState(loadLocally('favorites') ?? [])
  
  useEffect(() => {
    saveLocally('favorites', favorites)
  }, [favorites])


  return (
    <Switch>
      <Route exact path="/">
        <LogoStyled />
        {categories.map((category) => (
          <Categories
            key={category.name}
            productIcon={category.icon}
            productName={category.name}
          />
        ))}
      </Route>
      <Route exact path="/burger">
        <ProductList
          headline={'Burger'}
          product={burgers}
        />
      </Route>
      <Route path={'/burger/:id'}>
        <Detailpage category={'burger'} onFavoriteClick={toggleFavorite} favorites={favorites}/>
      </Route>
      <Route exact path="/cold-cuts">
        <ProductList
          headline={'Cold-Cuts'}
        />
        <StyledHeadline>Coming soon</StyledHeadline>
      </Route>
      <Route exact path="/kebab">
        <ProductList headline={'Kebab'} product={kebabs} />
      </Route>
      <Route path={'/kebab/:id'}>
        <Detailpage category={'kebab'} onFavoriteClick={toggleFavorite} favorites={favorites}/>
      </Route>
      <Route exact path="/minced">
        <ProductList headline={'Minced'} product={minced} />
      </Route>
      <Route path={'/minced/:id'}>
        <Detailpage category={'minced'} onFavoriteClick={toggleFavorite} favorites={favorites}/>
      </Route>
      <Route exact path="/nuggets">
        <ProductList
          headline={'Nuggets'}
          product={nuggets}
        />
      </Route>
      <Route path={'/nuggets/:id'}>
        <Detailpage category={'nuggets'} onFavoriteClick={toggleFavorite} favorites={favorites}/>
      </Route>
      <Route exact path="/sausages">
        <ProductList
          headline={'Sausages'}
          product={sausages}
        />
      </Route>
      <Route path={'/sausages/:id'}>
        <Detailpage category={'sausages'} onFavoriteClick={toggleFavorite} favorites={favorites}/>
      </Route>
      <Route path="/favorites">
        {favorites.length ? <ProductList
          headline={'Favorites'}
          product={favorites.sort((a, b) => a.title.localeCompare(b.title))}
        /> : 
        <>
        <ProductList headline={'Favorites'}/>
        <StyledHeadline>You have no favorites</StyledHeadline>
        </>
        }
      </Route>
    </Switch>
  )
  
  function toggleFavorite(favorite) {
    const index = favorites.findIndex(favoriteItem => favoriteItem.id === favorite.id)
    index > -1 ? 
    setFavorites([
      ...favorites.slice(0, index),
      ...favorites.slice(index + 1),
    ]) : 
    setFavorites([...favorites, { ...favorite }])
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
  grid-column: 1/3;
  margin: 40px 0;
`

const StyledHeadline = styled.h2`
  grid-column: 1/3;
  margin-top: 100px;
  font-weight: 300;
  color: #4BDB80;
`
